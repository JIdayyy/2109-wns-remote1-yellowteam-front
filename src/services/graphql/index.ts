/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject,
  split,
} from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { onError } from '@apollo/client/link/error'

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

const serverUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000'
const wsUrl = process.env.REACT_APP_WS_URL || 'ws://localhost:5000/websocket'

const wsLink = new GraphQLWsLink(
  createClient({
    url: wsUrl,
  })
)

const httpLink = createHttpLink({
  uri: serverUrl,
  credentials: 'include',
  headers: {
    'platform-auth-user-agent': 'web-platform',
  },
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const splitLink = split(({ query }) => {
  const definition = getMainDefinition(query)
  return (
    definition.kind === 'OperationDefinition' &&
    definition.operation === 'subscription'
  )
}, wsLink)

export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  uri: serverUrl,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          bugs: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming]
            },
          },
        },
      },
    },
  }),
  link: from([splitLink, errorLink, httpLink]),
})

function initializeApollo(): ApolloClient<NormalizedCacheObject> {
  if (typeof window === 'undefined') {
    return client
  }

  if (!apolloClient) {
    apolloClient = client
  }

  return client
}

const customClient = initializeApollo()

export default customClient

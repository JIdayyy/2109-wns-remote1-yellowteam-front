/* eslint-disable import/no-extraneous-dependencies */
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  split,
} from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'

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

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  uri: serverUrl,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          bugs: {
            // Don't cache separate results based on
            // any of this field's arguments.
            keyArgs: false,

            // Concatenate the incoming list items with
            // the existing list items.
            merge(existing = [], incoming) {
              return [...existing, ...incoming]
            },
          },
        },
      },
    },
  }),
  link: splitLink,
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

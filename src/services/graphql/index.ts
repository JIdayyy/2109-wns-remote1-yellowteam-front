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

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://localhost:5000/graphql',
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
  cache: new InMemoryCache(),
  link: splitLink,
})

export default function initializeApollo(): ApolloClient<NormalizedCacheObject> {
  if (typeof window === 'undefined') {
    return client
  }

  if (!apolloClient) {
    apolloClient = client
  }

  return client
}

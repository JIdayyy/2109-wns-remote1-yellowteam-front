import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

const link = createHttpLink({
  uri: 'http://localhost:5000/graphql',
  credentials: 'include',
  headers: {
    'platform-auth-user-agent': 'web-platform',
  },
})

export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
  link,
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

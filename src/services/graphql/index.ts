import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

const serverUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000'

const link = createHttpLink({
  uri: serverUrl,
  credentials: 'include',
  headers: {
    'platform-auth-user-agent': 'web-platform',
  },
})

export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  uri: serverUrl,
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

import { createNetworkInterface } from 'apollo-client'
import fetch from 'isomorphic-fetch'

export default (ctx) => {
  return createNetworkInterface({ uri: 'http://localhost:1337/graphql' })
}
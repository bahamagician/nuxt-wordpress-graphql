import { ApolloLink, concat, split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
export default ctx => {
  let link = new HttpLink({
    uri: "http://localhost:7777/graphql"
  });

  // Create a WebSocket link:

  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext({
      headers: {
        authorization: `Bearer {{token}}`
      }
    });
    return forward(operation);
  });

  return {
    link: concat(authMiddleware, link),
    cache: new InMemoryCache()
  };
};

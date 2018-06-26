import { ApolloLink, concat, split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import https from "https";
export default ctx => {
  let link = new HttpLink({
    uri: "https://headless-wp.dev/graphql",
    fetchOptions: {
      agent: new https.Agent({ rejectUnauthorized: false })
    }
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

import React from "react";
import ReactDOM from "react-dom";
import jwtDecode from "jwt-decode";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import GlobalStyle from "./Styles/globalStyles";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import {createUploadLink} from "apollo-upload-client";
import {setContext} from "@apollo/client/link/context";
import AUTH_TOKEN from "./utils/constants.js";

// 2
export const user = makeVar(null);

if (localStorage.getItem(AUTH_TOKEN)) {
  const decodedToken = jwtDecode(localStorage.getItem(AUTH_TOKEN));
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem(AUTH_TOKEN);
  } else {
    user(JSON.parse(localStorage.getItem("user")));
  }
}
const httpLink = createUploadLink({
  uri: "https://rocky-stream-31217.herokuapp.com/graphql",
});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// 3
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      isLogged: {
        fields: {
          user: {
            read() {
              return user();
            },
          },
        },
      },
    },
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

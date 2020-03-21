import React from "react";
import { render } from "react-dom";
import Root from "Root";
import Auth from "./components/Auth";
import * as serviceWorker from "serviceWorker";

import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://127.0.0.1:8000/graphql/"
  })
});

render(
  <ApolloProvider client={client}>
    <Auth />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

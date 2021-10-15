import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Pages from "./Pages";
ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Pages />
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);

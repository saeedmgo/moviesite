import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import "antd/dist/antd.dark.css";
import Pages from "./Pages";
import "swiper/swiper-bundle.min.css";
ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Pages />
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);

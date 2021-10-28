import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import "antd/dist/antd.dark.css";
import Pages from "./Pages";
import "swiper/swiper-bundle.min.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Layout>
        <Pages />
      </Layout>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

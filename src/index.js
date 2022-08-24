import {  BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/Store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>,
  document.getElementById("root")
);

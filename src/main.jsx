import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import store from "./store/store"
// Function to check if the current URL contains a specific substring
const isAdminPage = () => window.location.pathname.includes("admin");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <ThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.Fragment>
);

if (isAdminPage()) {
  import("./admin-theme.css").then((module) => {
    // Apply the styles to the document
    const styleNode = document.createElement("style");
    styleNode.innerHTML = module.default;
    document.head.appendChild(styleNode);
  });
}
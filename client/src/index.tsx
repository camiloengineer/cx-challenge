import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { toolkitStore } from './application/reducers';
import '../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss';
import "./application/css/bundle.css";
import './application/css/vendors/glide.scss';
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={toolkitStore}>
      <App />
    </Provider>
  </StrictMode>
);

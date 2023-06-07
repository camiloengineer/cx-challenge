import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { toolkitStore } from './adapters/store';
import '../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss';
import "./presentation/css/bundle.css";
import './presentation/css/vendors/glide.scss';
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={toolkitStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

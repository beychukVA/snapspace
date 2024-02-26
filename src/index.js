import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Amplify, Auth, AuthModeStrategyType } from "aws-amplify";
import awsconfig from "./aws-exports";
import { BrowserRouter } from "react-router-dom";
import MailChimp from "@mailchimp/mailchimp_marketing";
MailChimp.setConfig({
  apiKey: "28cf28a3cc046ac074f259fca20753f5-us21",
  server: "us21",
});
Amplify.configure(awsconfig);
// Amplify.configure({
//   ...awsconfig,
//   DataStore: {
//     authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
//   },
//   graphql_headers: async () => {
//     try {
//       const user = await Auth.currentUserPoolUser();
//       console.log("POOL USER: ", user);
//       const token = (await Auth.currentSession()).getIdToken().getJwtToken();
//       return { Authorization: token };
//     } catch (e) {
//       console.error("Authorization Error (configure): ", e);
//       return {};
//     }
//   },
// });
// Amplify.configure({
//   ...awsconfig,
// graphql_headers: async () => {
//   try {
//     const token = (await Auth.currentSession()).getIdToken().getJwtToken();
//     return { Authorization: token };
//   } catch (e) {
//     console.error("Authorization Error (configure): ", e);
//     return {};
//   }
// },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

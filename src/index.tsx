import ReactDOM from "react-dom/client";
import reportWebVitals from "reportWebVitals";
import { Provider as ReduxProvider } from "react-redux";
import App from "App";
import { ShopcekApolloProvider } from "graphql/apollo/provider";
import { store } from "store";

import { Web3ModalProvider } from "wallet";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Web3ModalProvider>
    <ShopcekApolloProvider>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </ShopcekApolloProvider>
  </Web3ModalProvider>,
);

reportWebVitals();

import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App";
import { ShopcekApolloProvider } from "./graphql/apollo/provider";
import { store } from "store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <ReduxProvider store={store}>
    <ShopcekApolloProvider>
      <App />
    </ShopcekApolloProvider>
  </ReduxProvider>,
);

reportWebVitals();

import ReactDOM from "react-dom/client";
import App from "./routes/app.tsx";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter >
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
);

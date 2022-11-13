import ReactDOM from "react-dom";
import { App } from "./App";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";

ReactDOM.render (
  <AdminFlagProvider>
    <App></App>
  </AdminFlagProvider>,
document.getElementById("root")
);
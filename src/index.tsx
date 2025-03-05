import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UIProvider } from "./context/ui.context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <UIProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>  {/* Wrap App inside BrowserRouter */}
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </UIProvider>
  </React.StrictMode>
);

reportWebVitals();

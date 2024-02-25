import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { setupWorker } from "msw/browser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { happyPathHandlers } from "./api/mockHandlers.ts";

if (import.meta.env.DEV) {
  const worker = setupWorker(...happyPathHandlers);
  worker.start();
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

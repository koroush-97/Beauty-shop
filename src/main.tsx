import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globalStyle/globalStyle.css";
import { DarkModeProvider } from "./context/theme/DarkModeProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router.tsx";
import { Toaster } from "react-hot-toast";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <Toaster position="top-center" />
        <RouterProvider router={router} />
      </DarkModeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
);

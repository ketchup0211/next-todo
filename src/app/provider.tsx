"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function QueryProvider({ children }: React.PropsWithChildren) {
  const queryClinet = new QueryClient();

  return (
    <QueryClientProvider client={queryClinet}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;

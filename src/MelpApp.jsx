import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { MainLayout } from "./layouts/MainLayout"


const queryClient = new QueryClient()


export const MelpApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout />
    </QueryClientProvider>
  )
}


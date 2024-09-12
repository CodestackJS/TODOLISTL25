import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient(
// the bottom code is trying to change the default setting to user defined value
//   {
//   defaultOptions: {
//     queries: {
//       retry: 6,
//       gcTime: 300_000, // 300,000 milliseconds = 5mins
//       staleTime: 10 * 1000, //10 secs
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: false,
//       refetchOnMount: false,
//     }
//   }

// }
);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>

    <App />
    <ReactQueryDevtools/>
    </QueryClientProvider>

  </StrictMode>,
)

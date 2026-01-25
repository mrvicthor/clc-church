import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import queryClient from './lib/queryClient.ts'
import { QueryClientProvider } from "@tanstack/react-query";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>
)

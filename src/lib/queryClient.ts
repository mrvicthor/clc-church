import { QueryClient } from '@tanstack/react-query'
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 60 * 24, // 24 hours
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
});

export default queryClient
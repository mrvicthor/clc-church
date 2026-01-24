import { fetchVideos } from "@/utils/fetchVideos";
import { useQuery } from "@tanstack/react-query";

export function useFetchVideos() {
    return useQuery({
        queryKey: ['youtube-videos'],
        queryFn: fetchVideos
    })
}
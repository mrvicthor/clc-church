export async function fetchVideos() {
    const response = await fetch('/data/videos.json', { cache: 'force-cache' })
    if (!response.ok) {
        throw new Error("Failed to fetch videos JSON");
    }
    return response.json()
}
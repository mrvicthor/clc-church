
import "dotenv/config";
import fs from 'fs'

const API_KEY = process.env.GOOGLE_YOUTUBE_API_KEY!
const Channel_ID = process.env.CHANNELID!
const MAX_RESULTS = Number(process.env.MAX_RESULTS || 50);
console.log({ API_KEY, Channel_ID })
async function fetchYoutube(url: string) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`YouTube API error ${response.status}: ${await response.text()}`);
        }
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

async function getUploadsPlaylistId(channelId: string) {
    const url =
        "https://www.googleapis.com/youtube/v3/channels" +
        `?part=contentDetails&id=${channelId}&key=${API_KEY}`;
    const data = await fetchYoutube(url);
    const uploads = data?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    if (!uploads) throw new Error("Could not find uploads playlist for that channel.");
    return uploads;
}

async function getPlaylistVideoIds(playlistId: string, max = 50) {
    let pageToken = "";
    const ids = [];

    while (ids.length < max) {
        const batch = Math.min(50, max - ids.length);
        const url =
            "https://www.googleapis.com/youtube/v3/playlistItems" +
            `?part=contentDetails,snippet&playlistId=${playlistId}` +
            `&maxResults=${batch}&pageToken=${pageToken}&key=${API_KEY}`;

        const data = await fetchYoutube(url);

        for (const item of data.items || []) {
            ids.push(item.contentDetails.videoId);
        }

        if (!data.nextPageToken) break;
        pageToken = data.nextPageToken;
    }

    return ids;
}

async function getVideoDetails(videoIds: string[]) {
    // videos.list supports up to 50 ids per request
    const chunks = [];
    for (let i = 0; i < videoIds.length; i += 50) chunks.push(videoIds.slice(i, i + 50));

    const all = [];
    for (const chunk of chunks) {
        const url =
            "https://www.googleapis.com/youtube/v3/videos" +
            `?part=snippet,contentDetails,statistics&id=${chunk.join(",")}&key=${API_KEY}`;
        const data = await fetchYoutube(url);

        for (const v of data.items || []) {
            all.push({
                id: v.id,
                title: v.snippet.title,
                description: v.snippet.description,
                publishedAt: v.snippet.publishedAt,
                url: `https://www.youtube.com/watch?v=${v.id}`,
                thumbnail:
                    v.snippet.thumbnails?.maxres?.url ||
                    v.snippet.thumbnails?.high?.url ||
                    v.snippet.thumbnails?.medium?.url ||
                    v.snippet.thumbnails?.default?.url,
                duration: v.contentDetails.duration, // ISO 8601, e.g. PT12M30S
                views: Number(v.statistics?.viewCount || 0),
            });
        }
    }
    return all;
}

async function main() {
    const uploadsPlaylistId = await getUploadsPlaylistId(Channel_ID);
    const ids = await getPlaylistVideoIds(uploadsPlaylistId, MAX_RESULTS);
    const videos = await getVideoDetails(ids);

    // Sort newest first (optional)
    videos.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    fs.mkdirSync("public/data", { recursive: true });
    fs.writeFileSync("public/data/videos.json", JSON.stringify({ channelId: Channel_ID, videos }, null, 2));
    console.log(`Saved ${videos.length} videos → public/data/videos.json`);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});

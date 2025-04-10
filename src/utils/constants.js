const GOOGLE_API_KEY = "AIzaSyBwpcoi04zxqRKX5ejCalvzT2oRv-Hnt4s";

export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;
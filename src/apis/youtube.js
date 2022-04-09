import axios from "axios";

const KEY = "AIzaSyARFYwfxNIzrifQ8uehpceRGCw6dBubwdc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

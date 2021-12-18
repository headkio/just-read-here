import axios from "axios";

class YoutubeApi {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async getMostPopular() {
    try {
      const response = await this.httpClient.get("videos", {
        params: {
          part: "snippet",
          chart: "mostPopular",
        },
      });

      return response.data.items;
    } catch (error) {
      console.error(error);
    }
  }

  async search(query) {
    try {
      const response = await this.httpClient.get("search", {
        params: {
          part: "snippet",
          type: "video",
          q: query,
          maxResults: 25,
        },
      });

      return response.data.items;
    } catch (error) {
      console.error(error);
    }
  }
}

export default YoutubeApi;

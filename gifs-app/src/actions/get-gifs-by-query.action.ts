import type { GiphyResponse } from "../interfaces/gyphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  //   fetch(`https://api.giphy.com/v1/gifs/search?api_key=KviJGbL0KS0xsGJfAMUWUP35mPREXM6l&q=${query}&limit=10&lang=es`);
  const response = await giphyApi.get<GiphyResponse>("/search", {
    params: {
      q: query,
      limit: 10,
    },
  });

  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height),
  }));
};

import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const data = await getGifsByQuery(term);
    setGifs(data);
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousSearches.includes(query)) return;

    setPreviousSearches([query, ...previousSearches.splice(0, 8)]);

    const data = await getGifsByQuery(query);

    setGifs(data);
  };

  return {
    // properties
    gifs,
    previousSearches,
    // methods
    handleTermClicked,
    handleSearch,
  };
};

export default useGifs;

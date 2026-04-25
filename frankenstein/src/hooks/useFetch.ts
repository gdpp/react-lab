import { useEffect, useState } from "react";

export const useFetch = (
  url: string = "https://jsonplaceholder.typicode.com/posts",
  limit: number,
) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `${url}?_page=${currentPage}&_limit=${limit}`,
          { signal: controller.signal },
        );

        const result = await response.json();
        setData(result);
      } catch (err) {
        // Ignore ABORT
        if (err.name === "AbortError") return;

        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, currentPage, limit]);

  return {
    data,
    loading,
    error,
    currentPage,
    nextPage,
    prevPage,
  };
};

import { useState, useEffect, type KeyboardEvent } from "react";

interface SearchBarProps {
  placeholder?: string;
  onClickSearch: (query: string) => void;
}

const SearchBar = ({
  placeholder = "Search",
  onClickSearch,
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onClickSearch(query);
    setQuery("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClickSearch(query);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onClickSearch]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;

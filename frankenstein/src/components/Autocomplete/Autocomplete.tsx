import { useMemo, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

const Autocomplete = ({ items }) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300); // 300ms es el standard

  //useMemo para no recalcular el filtro en cada render,
  // solo cuando debounceQuery o items cambia
  const filtered = useMemo(() => {
    if (!debouncedQuery.trim()) return [];

    return items.filter((item) =>
      item.toLowerCase().includes(debouncedQuery.toLowerCase()),
    );
  }, [items, debouncedQuery]);

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar..."
      />
      {filtered.length > 0 && (
        <ul>
          {filtered.map((item, index) => (
            <li key={index} onClick={() => setQuery(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;

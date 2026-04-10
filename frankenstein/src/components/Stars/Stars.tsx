import { useState, useEffect } from "react";

const Stars = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 1. Si no hay búsqueda, limpiamos resultados y no hacemos nada
    if (!query) {
      setResults([]);
      return;
    }

    // 2. Creamos el AbortController para esta petición específica
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://swapi.dev/api/people/?search=${query}`,
          { signal }, // 3. Vinculamos la petición al controlador
        );
        const data = await response.json();

        // 4. PREVENT STALE UPDATES:
        // Si la petición no fue abortada, actualizamos el estado
        setResults(data.results);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.name === "AbortError") {
          console.log(
            "Petición cancelada: llegó una nueva o el componente se desmontó",
          );
        } else {
          console.error("Error de red:", error);
        }
      } finally {
        // Solo quitamos el loading si la petición terminó con éxito
        if (!signal.aborted) setLoading(false);
      }
    };

    fetchData();

    // 5. EFFECT CLEANUP:
    // Esta función se ejecuta CADA VEZ que el query cambie
    // o cuando el componente desaparezca.
    return () => {
      controller.abort();
    };
  }, [query]); // Se dispara cada vez que el usuario escribe

  return (
    <div style={{ padding: "20px" }}>
      <h2>Buscador de la Fuerza</h2>
      <input
        type="text"
        placeholder="Ej: Luke, Vader..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Cargando...</p>}

      <ul>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {results.map((person: any) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Stars;

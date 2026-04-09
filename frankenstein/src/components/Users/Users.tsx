import { useEffect, useState } from "react";

function Users() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Error en la petición");
        }

        const data = await response.json();
        setUsers(data);
      } catch (e) {
        setError(`Error al cargar datos ${e}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // <- Only at mount component

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>List of users</h3>
      <div
        style={{
          display: "flex",
          gap: "1",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            style={{ backgroundColor: "silver", margin: "1rem" }}
          >
            <p>Name: {user.name}</p>
            <p>@username: {user.username}</p>
            <p>email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;

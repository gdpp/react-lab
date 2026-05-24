import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.routes";

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default App;

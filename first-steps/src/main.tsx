import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FirstStepsApp from "./FirstStepsApp";
// import MyAwesomeComponent from "./MyAwesomeComponent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FirstStepsApp />
    {/* <MyAwesomeComponent /> */}
  </StrictMode>
);

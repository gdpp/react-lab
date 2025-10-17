import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ScrambleWords } from "./05-useReducer/ScrambleWords";
// import HooksApp from "./HooksApp";
// import { TrafficLights } from "./01-useState/TrafficLights";
// import { TrafficLightsWithEffect } from "./02-useEffect/TrafficLightsWhitEffect";
// import { TrafficLightsWithHook } from "./02-useEffect/TrafficLightsWhitHook";
// import { PokemonPage } from "./03-examples/PokemonPage";
// import FocusScreen from "./04-useRef/FocusScreen";
// import { TasksApp } from "./05-useReducer/TaskApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp />*/}
    {/* <TrafficLights /> */}
    {/* <TrafficLightsWithEffect /> */}
    {/* <TrafficLightsWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    <ScrambleWords />
  </StrictMode>
);

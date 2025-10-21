import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import "./index.css";
// import HooksApp from "./HooksApp";
// import { TrafficLights } from "./01-useState/TrafficLights";
// import { TrafficLightsWithEffect } from "./02-useEffect/TrafficLightsWhitEffect";
// import { TrafficLightsWithHook } from "./02-useEffect/TrafficLightsWhitHook";
// import { PokemonPage } from "./03-examples/PokemonPage";
// import FocusScreen from "./04-useRef/FocusScreen";
// import { TasksApp } from "./05-useReducer/TaskApp";
// import { ScrambleWords } from "./05-useReducer/ScrambleWords";
// import MemoHook from "./06-memos/MemoHook";
// import { InstagromApp } from "./07-useOptimistic/InstagromApp";
// import ClientInformation from "./08-use-suspense/ClientInformation";
// import { getUserAction } from "./08-use-suspense/api/get-user.action";
import ProfessionalApp from "./09-useContext/ProfessionalApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp />*/}
    {/* <TrafficLights /> */}
    {/* <TrafficLightsWithEffect /> */}
    {/* <TrafficLightsWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <InstagromApp /> */}
    {/* <Suspense
      fallback={
        <div className="bg-gradient flex flex-col">
          <h1 className="text-5xl">Cargando...</h1>
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(1000)} />
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>
);

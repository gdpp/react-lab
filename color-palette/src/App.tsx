import { useState } from "react";

import {ColorList} from "./components/ColorList";
import { ColorInput } from "./components/ColorInput";

const colors = [
  { 
    value: "#03045E", 
    locked: false
  },
  { 
    value: "#023E8A", 
    locked: false
  },
  { 
    value: "#0077B6", 
    locked: false
  },
  { 
    value: "#0096C7", 
    locked: false
  },
  { 
    value: "#00B4D8", 
    locked: false
  }
];

const App = () => {
  const title: string = "Color Palette Generator";
  const [palette, setPalette] = useState(colors);
  
  const addColor = (color: string) => {
    setPalette([...palette, {value: color, locked: false}])
  }

  return (
    <section className="flex flex-col lg:flex-row min-h-screen w-full">
      <h1 className="text-2xl lg:text-5xl text-slate-800 font-bold">
        {title}
        <ColorInput addColor={addColor} />
        <ColorList palette={palette} />
      </h1>
    </section>
  );
};

export default App;

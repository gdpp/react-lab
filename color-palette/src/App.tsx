import { useState } from "react";

import {ColorList} from "./components/ColorList";
import { ColorInput } from "./components/ColorInput";

interface Color {
  value: string;
  locked: boolean;
}

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
  const title: string = "Cooolorama";
  const [palette, setPalette] = useState<Color[]>(colors);
  
  const addColor = (color: string) => {
    setPalette([...palette, {value: color, locked: false}])
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.code === 'Space') { 
  //     event.preventDefault();
  //     setPalette((prevColors) =>
  //       prevColors.map((color) =>
  //         console.log(color)
  //     //     color.locked ? color : { ...color, value: generateRandomColor() }
  //       )
  //     );
    }
  };

  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    addColor(randomColor);
  }

  return (
    <section tabIndex={0} onKeyDown={handleKeyDown} className="flex flex-col min-h-screen w-full">
      <h1 className="text-xl lg:text-4xl text-slate-800 font-extrabold p-4 lg:py-3 lg:px-6 border-b-1 border-b-gray-300">
        {title}
      </h1>
        <ColorInput addColor={addColor} />
        <ColorList palette={palette} />
    </section>
  );
};

export default App;

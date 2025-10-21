import { useCallback, useState } from "react";
import MyTitle from "./ui/MyTitle";
import MySubtitle from "./ui/MySubtitle";

const MemoHook = () => {
  const [title, setTitle] = useState("Hola");
  const [subtitle, setSubtitle] = useState("Mundo");

  const handleMyApiCall = useCallback(() => {
    console.log("Call my api", subtitle);
  }, [subtitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>
      <MyTitle title={title} />
      <MySubtitle subtitle={subtitle} callMyApi={handleMyApiCall} />
      <h6>Mi subtitulo</h6>
      <button
        onClick={() => setTitle("Hello")}
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Cambiar titulo
      </button>
      <button
        onClick={() => setSubtitle("World")}
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Cambiar subtitulo
      </button>
    </div>
  );
};

export default MemoHook;

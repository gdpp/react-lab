import { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputRef.current?.select();
  };

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="tex-2xl font-thin text-white">Focus Screen</h1>

      <input
        ref={inputRef}
        className="bg-white text-black px-4 py-2 rounded-md"
        type="text"
      />
      <button
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Set Focus
      </button>
    </div>
  );
};

export default FocusScreen;

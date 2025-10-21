import { memo } from "react";

interface MySubtitleProps {
  subtitle: string;
  callMyApi: () => void;
}

const MySubtitle = memo(({ subtitle, callMyApi }: MySubtitleProps) => {
  console.log("MySubtitle re-render");
  return (
    <>
      <h6>{subtitle}</h6>

      <button
        onClick={callMyApi}
        className="bg-indigo-500 text-white px-2 py-1 rounded-md"
      >
        Llamar a funcion
      </button>
    </>
  );
});

export default MySubtitle;

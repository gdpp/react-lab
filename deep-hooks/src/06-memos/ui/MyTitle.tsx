import React from "react";

interface MyTitleProps {
  title: string;
}

const MyTitle = React.memo(({ title }: MyTitleProps) => {
  console.log("MyTitle re-render");

  return <h1 className="text-3xl">{title}</h1>;
});

export default MyTitle;

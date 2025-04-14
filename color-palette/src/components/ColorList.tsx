import { ColorItem } from "./ColorItem";

type Color = {
    value: string;
    locked: boolean;
}

type Props = {
    palette: Color[]
}

export const ColorList = ({palette}: Props) => {
  return (
    <div className="w-full flex flex-col md:flex-row">
        {
          palette.map((color, idx) => (
            <ColorItem key={idx} color={color} />
          ))
        }
    </div>
  )
}

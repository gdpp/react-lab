type Color = {
    value: string;
    locked: boolean;
}

type Props = {
    palette: Color[]
}

export const ColorList = ({palette}: Props) => {
  return (
    <div>
        {
          palette.map((color, idx) => (
            <div className="h-24 lg:h-full w-full lg:w-auto" style={{ backgroundColor: color.value }} key={idx}>
                {color.value}
            </div>
          ))
        }
    </div>
  )
}

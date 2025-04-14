type Color = {
  value: string;
  locked: boolean;
}

type Props = {
  color: Color
}

export const ColorItem = ({color}: Props) => {
  return (
    <div className="flex items-center justify-between md:justify-center md:flex-col w-full min-h-[100px] md:min-h-[85dvh]" style={{ backgroundColor: color.value }}>
        <p className="text-4xl font-bold">{color.value}</p>
    </div>
  )
}

type Props = {
  title: string;
}

export const Article = ({title}: Props) => {
  return (
    <article className="flex flex-col gap-2">
        <h5 className="text-2xl text-gray-700">{title}</h5>
        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsa, odit explicabo, assumenda doloremque culpa ea tenetur vel soluta error eum aperiam magnam sequi voluptas fugiat doloribus saepe suscipit quaerat!</p>
    </article>
  )
}
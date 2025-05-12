type Props = {
    children: React.ReactNode
}

export const BaseLayout = ({children}: Props) => {
  return (
    <main className="bg-white m-4 md:mx-[20%]">
        {children}
    </main>
  )
}

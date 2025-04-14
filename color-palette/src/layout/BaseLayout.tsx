type Props = {
    children: React.ReactNode
}

export const BaseLayout = ({children}: Props) => {
  return (
    <main className="bg-white">
        {children}
    </main>
  )
}

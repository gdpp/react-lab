type Props = {
    children: React.ReactNode
}

export const BaseLayout = ({children}: Props) => {
  return (
    <main className="bg-slate-200 p-4 lg:py-6 lg:px-12">
        {children}
    </main>
  )
}

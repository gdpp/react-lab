type Props = {
    children: React.ReactNode
}

export const BaseLayout = ({children}: Props) => {
  return (
    <main className="bg-slate-200 py-4 px-8 min-h-screen w-full">
        {children}
    </main>
  )
}

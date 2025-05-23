type Props = {
    children: React.ReactNode;
}

export const Container = ({children}: Props) => {
  return (
    <main className="mx-8 my-4">
        {children}
    </main>
  )
}

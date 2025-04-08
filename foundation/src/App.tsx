import { Greeting, Separator } from "./components/MultiComponent"
import {Article} from "./components/Article"
import { Container } from "./components/Container"
import { Conditional } from "./components/Conditional"
import { CoinsCounter } from "./components/Coins";

export const App = () => {
  return (
    <Container>
        <h1 className="text-3xl py-2">Hello World</h1>
        <Separator />
        <Greeting />
        <Greeting />
        {/* <Greeting /> */}
        <Separator />
        <h2 className="text-2xl py-2">Components</h2>
        <Article title="Article Title" />
        <Conditional title="Conditional Rendering" isActive/>
        <CoinsCounter />
    </Container>
  )
}

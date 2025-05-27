import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import WelcomeMessage from './components/WelcomeMessage'
import Greeting from './components/Greeting'
import ProductInfo from './components/ProductInfo'
import UserList from './components/UserList'
import Person from './components/Person'
import Product from './components/Product'
import Card from './components/Card'
import Weather from './components/Weather'
import UserStatus from './components/UserStatus'
import DayTime from './components/DayTime'
import Counter from './components/Counter'
import Friends from './components/Friends'
import CopyInput from './components/CopyInput'

import './index.css'

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <WelcomeMessage />
      <Greeting />
      <ProductInfo />
      <UserList />
      <Person name="Gustavo" age={33} />
      <Product name="Laptop" price={399.99} />
      <Card>
        <h2>Card 1</h2>
        <p>Content for card 1</p>
      </Card>
      <Card>
        <h2>Card 2</h2>
        <p>Content for card 2</p>
      </Card>
      <Card>
        <h2>Card 3</h2>
        <p>Content for card 3</p>
      </Card>
      <Weather temperature={26}/>
      <Weather temperature={18}/>
      <Weather temperature={11}/>
      <UserStatus isAdmin={true} loggedIn={true} />
      <UserStatus isAdmin={false} loggedIn={true} />
      <DayTime timeOfDay="morning" />
      <DayTime timeOfDay="afternoon" />
      <Counter />
      <Friends />
      <CopyInput />
      <Footer />
    </div>
  )
}

export default App;
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import WelcomeMessage from './components/WelcomeMessage'
import Greeting from './components/Greeting'
import ProductInfo from './components/ProductInfo'
import UserList from './components/UserList'


function App(){
  return (
    <div>
      <Header />
      <MainContent />
      <WelcomeMessage />
      <Greeting />
      <ProductInfo />
      <UserList />
      <Footer />
    </div>
  )
}

export default App;
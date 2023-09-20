import { Container as HeaderCont } from './components/header/Container'
import Navbar from './components/navbarComps/Navbar'
import OfferContainer from './components/offerItem/OfferContainer'
import OrderProgress from './components/progress/OrderProgress'

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col font-manrope ">
      <Navbar />
      <HeaderCont />
      <OrderProgress />
      <OfferContainer />
    </div>
  )
}

export default App

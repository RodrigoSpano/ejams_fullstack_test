import {Container as HeaderCont} from "./components/header/Container"
import Navbar from "./components/navbarComps/Navbar"
import OrderProgress from "./components/progress/OrderProgress"

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col font-manrope">
      <Navbar />
      <HeaderCont />
      <OrderProgress />
    </div>
  )
}

export default App

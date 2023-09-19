import {Container as HeaderCont} from "./components/header/Container"
import Navbar from "./components/navbarComps/Navbar"

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <HeaderCont />
    </div>
  )
}

export default App

import Header from "./Components/Header"
import img from '../src/assets/images/bg-tablet-pattern.svg'
import Landing from "./pages/Landing"
import Different from "./Components/Different"
import Simplify from "./Components/Simplify"
import Footer from "./Components/Footer"
import Slides from "./Components/Slides"
import './App.css'
function App() {
  return (
<div className="min-h-screen bg-[#fafafa]  font-veitnam relative overflow-hidden">
<Header/>
<Landing/>
<img  src={img} className='absolute top-[-198px] right-[-98px] z-[0]'/>
<Different/>
<Slides/>
<Simplify/>
<Footer/>
 {/* <SwiperComponent/> */}

</div>
  )
}

export default App
import {Routes,Route} from 'react-router'
import {Homepages} from './pages/Homepages'
import './App.css'
import { Checkout } from './pages/checkout/Checkout'
import { Orders } from './pages/Orders'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Homepages />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='orders' element={<Orders />} />
    </Routes>
    </>
  )
}

export default App

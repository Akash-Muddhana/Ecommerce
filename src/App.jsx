import {Routes,Route} from 'react-router'
import {Homepages} from './pages/Homepages'
import './App.css'
import { Checkout } from './pages/checkout/Checkout'
import { Orders } from './pages/Orders'
import {Tracking} from './pages/tracking/Tracking'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Homepages />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='orders' element={<Orders />} />
      <Route path='tracking' element={<Tracking />} />
    </Routes>
    </>
  )
}

export default App

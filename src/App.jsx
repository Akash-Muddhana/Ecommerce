import {Routes,Route} from 'react-router'
import {Homepages} from './pages/Homepages'
import './App.css'
import { Checkout } from './pages/Checkout'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Homepages />} />
      <Route path='checkout' element={<Checkout />} />
    </Routes>
    </>
  )
}

export default App

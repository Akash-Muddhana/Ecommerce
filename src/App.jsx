import {Routes,Route} from 'react-router'
import {Homepages} from './pages/Homepages'
import './App.css'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Homepages />} />
      <Route path='007' element={<div><p>this is a new page</p></div>} />
    </Routes>
    </>
  )
}

export default App

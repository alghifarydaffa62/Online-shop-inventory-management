import './style/style.css'
import HomePage from './Component/Homepage'
import Lazadapage from './Component/Lazadapage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Tokopediapage from './Component/Tokopediapage'
import Shopeepage from './Component/Shopeepage'



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Lazada' element={<Lazadapage/>}/>
          <Route path='/Tokopedia' element={<Tokopediapage/>}/>
          <Route path='/Shopee' element={<Shopeepage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import General from './pages/General.jsx'
import Product from './pages/Product.jsx'
import Layout from './components/Layout'
import Card from "./pages/Card.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<General/>}/>
          <Route path='products' element={<Product/>}/>
          <Route path='cards' element={<Card/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

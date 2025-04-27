import { Route, Routes } from 'react-router-dom'
import './index.css'
import ProductPage from './Pages/ProductPage/ProductPage'
import ProductsPage from './Pages/ProductsPage/ProductsPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  )
}

export default App

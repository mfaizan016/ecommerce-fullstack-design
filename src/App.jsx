import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import ProductListing from './Pages/ProductListing/ProductListing';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Cart from './Pages/Cart/Cart';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
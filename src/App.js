import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './views/Home/Home';
import About from './views/About/About';
import CategoryItemContainer from './views/CategoryItemContainer/CategoryItemContainer';
import FAQs from './views/FAQs/FAQs';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './views/Cart/Cart';
import FinishPurchase from './views/FinishPurchase/FinishPurchase';
import { ProductsProvider } from './CartContext/CartContext';
import Footer from '../src/components/Footer/Footer';
import Page404 from './views/404/404'

function App() {
  return (
    <Router>
      <ProductsProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:categoryId" element={<CategoryItemContainer/>} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/detail/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/form" element={<FinishPurchase />}/>
          <Route path="*" element={<Page404 />}/>
        </Routes>
        <Footer />
      </ProductsProvider>
    </Router>
  );
}

export default App;

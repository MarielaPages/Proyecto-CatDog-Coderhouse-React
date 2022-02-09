import './App.css'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './views/Home/Home'
import About from './views/About/About'
import ForCats from './views/ForCats/ForCats'
import ForDogs from './views/ForDogs/ForDogs'
import FAQs from './views/FAQs/FAQs'
import ContactUs from './views/ContactUs/ContactUs'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category1/:categoryId" element={<ForCats/>} />
        <Route path="/category2/:categoryId" element={<ForDogs/>} />
        <Route path="/faqs" element={<FAQs/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/detail/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </Router>
  );
}

export default App;

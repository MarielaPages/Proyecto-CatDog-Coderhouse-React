import logo from './NavBar-logo/logo.png';
import CartWidget from "../cart/CartWidget"
import { Link } from 'react-router-dom'


const NavBar = () => {
    return(
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo CatDog" className="logo" />
          </Link>
          <div className="navButton">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/about" className="nav-link subrayado" id="navList1">About</Link>
              </li>
              <li className="nav-item">
                <Link to="category/jewelery" className="nav-link subrayado" id="navList2">For Cats</Link>
              </li>
              <li className="nav-item">
                <Link to="category/electronics" className="nav-link subrayado" id="navList3">For Dogs</Link>
              </li>
              <li className="nav-item">
                <Link to="./faqs" className="nav-link subrayado" id="navList4">FAQs</Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link subrayado" id="navList5">Contact Us</Link>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    );
};

export default NavBar;
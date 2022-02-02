import logo from './NavBar-logo/logo.png';
import CartWidget from "../cart/CartWidget"


const NavBar = () => {
    return(
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo CatDog" className="logo" />
          </a>
          <div className="navButton">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link subrayado" id="navList1" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link subrayado" id="navList2" href="#">For Cats</a>
              </li>
              <li className="nav-item">
                <a className="nav-link subrayado" id="navList3" href="#">For Dogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link subrayado" id="navList4" href="#">FAQs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link subrayado" id="navList5" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    );
};

export default NavBar;
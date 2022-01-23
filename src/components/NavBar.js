import logo from '../media/fotos/logo.png';


const NavBar = () => {
    return(
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo CatDog" className="logo" />
          </a>
          <div class="navButton">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">For Cats</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">For Dogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">FAQs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
              <li>
                <a href="" class="moreInfoLi">More information</a>
              </li>
            </ul>
          </div>
          <div>
            <a href="" class="moreInfo">More information</a>
          </div>
        </div>
      </nav>
    );
};

export default NavBar;
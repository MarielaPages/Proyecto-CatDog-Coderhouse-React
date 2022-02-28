import './Footer.css'
import logo from '../NavBar/NavBar-logo/logo.png'

const Footer = () => {
    return(
        <>
            <footer>
                <img src={logo} alt="CatDog logo" width={120} />
                <div className="footerBody">
                    <p className="pt-3">Social Media</p>
                    <ul>
                        <li>
                        <a href="https://facebook.com">
                        <i className="fab fa-facebook"></i>
                        </a>
                        </li>
                        <li>
                        <a href="https://twitter.com">
                            <i className="fab fa-twitter" />
                        </a>
                        </li>
                        <li>
                        <a href="https://instagram.com">
                            <i className="fab fa-instagram" />
                        </a>
                        </li>
                    </ul>
                    <p className="pt-3">© All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;
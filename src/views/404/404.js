import './404.css'
import { Link } from 'react-router-dom'

const Page404 = () => {
    return(
        <div>
            <header className="textCenter" id="header404">
                <h1>Oops! 404</h1>
                <p>Your page wasn't found!</p>
            </header>
            <div className="d-flex justify-content-center">
                <div id="container">
                    <div className="dog-head">
                        <img src="http://www.clker.com/cliparts/j/3/Z/Y/D/5/dog-head-md.png" alt="Dog head"/>
                    </div>
                    <div className="dog-body">
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn-sm btn-secondary" id="button404">
                    <Link to="/">Go back to home</Link>
                </button>
            </div>
        </div>
    )
}

export default Page404;
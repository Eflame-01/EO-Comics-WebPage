import "./css/styles.css"
import "./css/Footer.css"
import logo from "./images/logo.png"

function Footer(){
    return (
        <footer className="">
            <div className="text-center my-2">
                <img src={logo} className="footer-logo py-1" alt="EO Comics Logo" />
            </div>
            <div className="container-fluid text-center py-1 my-2">
                <a className="px-1" href="#">YouTube</a>
                <a className="px-1" href="#">Instagram</a>
                <a className="px-1" href="#">Itch.io</a>
                <a className="px-1" href="#">Patreon</a>
            </div>
            <div className="text-center mt-2">
                <p>EO Comics. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
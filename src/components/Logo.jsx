import logo from "./images/logo.png"
import { Link } from "react-router-dom";

function Logo(){
    return (
        <div className="text-center py-5">
            <Link to="/">
                <img src={logo} alt="EO Comics Logo" />
            </Link>
        </div>
    );
}

export default Logo;
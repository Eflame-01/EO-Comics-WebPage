import { Link } from 'react-router-dom';
import "./css/styles.css";

function SignUpBar(){
    return(
            <div className="p-2">
                <div id="sign-up">
                    <div className="right-side">
                        <Link className="btn btn-red mx-2" to="/sign-up">Sign Up</Link>
                        <Link className="btn btn-red mx-2" to="/login">Login</Link>
                    </div>
                </div>

                <div id="signed-in">
                </div>
            </div>
    );
}

export default SignUpBar;
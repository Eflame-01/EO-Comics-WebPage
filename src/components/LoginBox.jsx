import "./css/styles.css"
import "./css/LoginBox.css"
import InputField from "./InputField";
import { Link } from "react-router-dom";

function LoginBox(){
    return(
        <div className="container container-fluid text-center py-4">
            <div className=" comic-book-border bg-blue p-3">
                <InputField class="form-outline" type="text" placeholder="Username or E-mail" />
                <InputField class="form-outline" type="password" placeholder="Password" />
                <Link to="/">Forgot password?</Link>
            </div>
            <br />
            <div>
                <button className="btn btn-red mb-2">Login</button>
                <p>Not a member? Sign up <Link to="/sign-up">here</Link>.</p>
            </div>
        </div>
    )
}

export default LoginBox;
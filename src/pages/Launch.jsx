import Logo from "../components/Logo";
import SignUpBar from "../components/SignUpBar";
import Title from "../components/Title";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Launch(){
    return (
        <div>
            <SignUpBar />
            <Logo />
            <div className="container comic-book-border bg-blue py-5">
                <Title title="Launching Soon!"/>
                <h3 className="px-5 py-3 text-center">
                    EO Comics is launching pretty soon! Create an account for free to be notified of when the site goes live!
                </h3>
            </div>
            <br />
            <div className="container text-center py-3 my-3">
                <Link className="btn btn-red" to="/sign-up">Notify Me</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Launch;
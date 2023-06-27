import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Title from "../components/Title";
import SignUpBox from "../components/SignUpBox";

function SignUp(){
    return (
        <div>
            <Logo />
            <Title title="Sign Up"/>
            <SignUpBox />
            <Footer />
        </div>
    )
}

export default SignUp;
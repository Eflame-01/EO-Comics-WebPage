import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Launch from "../pages/Launch";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

function App(){
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Launch />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/sign-up">
                    <SignUp />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
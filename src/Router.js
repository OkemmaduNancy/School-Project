import { Component, Suspense, useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory, Redirect } from "react-router-dom";
import App from "./App";
import Login from "./Login/Login"
import Topbar from "./Topbar/Topbar"
import Card from "./Card/Card"
import Signup from "./Login/AdminSignup";

class Routes extends Component {
    render() {
        return (
            <Router>
                <Suspense >
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/card" component={Card} />
                        <Route exact path="/topbar" component={Topbar} />
                        <Private exact path="/app" comp={App} />

                        <Route path="*" component={() => <h1> Not found </h1>} />
                    </Switch>
                </Suspense>
            </Router>
        );
    }
}

export default Routes

const useComponentWillMount = (func) => {
    const willMount = useRef(true)

    if (willMount.current) func()

    willMount.current = false
}

function Private({ comp, ...rest }) {
    const [isAuth, setAuth] = useState(false)
    const history = useHistory()

    useComponentWillMount(() => {
        const user = window.localStorage.getItem('_user')

        if (user) {
            setAuth(true)

        } else {
            alert('you are not authorised to view this page!!!')
            history.goBack()
        }

    })

    return isAuth ? <Route {...rest} component={comp} /> : <Redirect to="/" />
}



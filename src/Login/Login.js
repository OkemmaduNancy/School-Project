import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../utils/config";
import classes from "./Login.module.css"

const Login = () => {
    const [user, setUser] = useState({})
    const history = useHistory()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userData = await auth.signInWithEmailAndPassword(user.email, user.password);
            window.localStorage.setItem('_user', userData.user.uid)
            console.log(userData.user.uid);
            history.push('/app')
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div >
            <h2 className={classes.Login}>Log In</h2>
            <fieldset className={classes.Form}>
                <label className={classes.label1}>
                    Email:
                    <input name="email" onChange={handleChange} type="email" />
                </label>

                <label className={classes.label2}>
                    Enter Pin:
                    <input name="password" type="password" onChange={handleChange} />
                </label>
            </fieldset>
            <button onClick={handleSubmit} className={classes.login} >Login</button>
        </div>
    )
}

export default Login;


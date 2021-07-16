import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../utils/config";
import classes from "./Login.module.css"

const Signup = () => {
    const [user, setUser] = useState({})
    const history = useHistory()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        // console.log(...user);
        e.preventDefault()
        try {
            const userData = await auth.createUserWithEmailAndPassword(user.email, user.password);
            alert("Sign up successful")
            history.push('/')
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div >
            <h2 className={classes.Login}>Sign up</h2>
            <div className={classes.Form}>
                <div>
                    <label>Email: </label>
                    <input name="email" onChange={handleChange} type="email" />
                </div>
                <div>
                    <label>Enter Pin: </label>
                    <input name="password" type="password" onChange={handleChange} />
                </div>
                <button onClick={handleSubmit} className={classes.login} >Signup</button>
            </div>
        </div>
    )
}

export default Signup;


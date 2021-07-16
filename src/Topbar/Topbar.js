import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './Topbar.module.css';

const Topbar = () => {
    // const [login, setLogin] = useState(false)
    const history = useHistory()

    const logout = () => {
        window.localStorage.removeItem("_user");
        history.push('/')
    }

    return (
        <header>
            <navbar className={classes.Topbar}>
                <div className={classes.home}>Home</div>
                <button onClick={logout} className={classes.logout_button}>Logout</button>
            </navbar>
        </header>
    )
}

export default Topbar;
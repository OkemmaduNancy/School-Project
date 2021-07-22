import React, { useState } from 'react';
import { message } from 'antd';
import { BASE_URL } from '../utils/config'
import television from '../images/television.jpg'
import fan from '../images/fan.jpg'
import freezer from '../images/freezer.jpg'
import bulb from '../images/bulb.jpg'
import classes from './Card.module.css';
const Card = () => {
    const [error, setError] = useState("")

    const handleClick = async (type) => {

        try {
            const response = await fetch(`${BASE_URL}/project/${type}`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
            })
            const data = await response.json()

            message.success({
                content: "Device is on ",
                style: {
                    marginTop: '10vh',
                },
            });

        } catch (error) {
            setError({ error: error.message })
        }
    };
    return (
        <div className={classes.Card}>
            <div className={classes.Fan}>
                <img src={fan} className={classes.img_fan} alt="" />
                <div className={classes.buttons}>
                    <button onClick={() => handleClick("fan")} className={classes.on} type="button"> <span>ON</span> </button>
                    <button className={classes.off} type="button"> <span>OFF</span> </button>
                </div>
            </div>
            <div className={classes.Television}>
                <img src={television} className={classes.img_television} alt="" />
                <div className={classes.buttons}>
                    <button onClick={() => handleClick("television")} className={classes.on} type="button"> <span>ON</span> </button>
                    <button className={classes.off} type="button"> <span>OFF</span> </button>
                </div>
            </div>
            <div className={classes.Freezer}>
                <img src={freezer} className={classes.img_freeze} alt="" />
                <div className={classes.buttons}>
                    <button onClick={() => handleClick("freezer")} className={classes.on} type="button"> <span>ON</span> </button>
                    <button className={classes.off} type="button"> <span>OFF</span></button>
                </div>
            </div>
            <div className={classes.Bulb}>
                <img src={bulb} className={classes.img_bulb} alt="" />
                <div className={classes.buttons}>
                    <button onClick={() => handleClick("bulb")} className={classes.on} type="button"> <span>ON</span> </button>
                    <button className={classes.off} type="button"> <span>OFF</span> </button>
                </div>
            </div>
        </div >
    )
}

export default Card;

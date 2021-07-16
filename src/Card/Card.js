import React from 'react';
import television from '../images/television.jpg'
import fan from '../images/fan.jpg'
import freezer from '../images/freezer.jpg'
import bulb from '../images/bulb.jpg'
import classes from './Card.module.css';
const Card = () => {
    return (
        <div className={classes.Card}>
            <div className={classes.Fan}>
                <img src={fan} className={classes.img_fan} />
                <div className={classes.buttons}>
                    <button className={classes.on} type="button"> <span>ON</span> </button>
                    <button className={classes.off} type="button"> <span>OFF</span> </button>
                </div>
            </div>
            <div className={classes.Television}>
                <img src={television} className={classes.img_television} />
                <div className={classes.buttons}>
                    <button className={classes.on} type="button"> <span>ON</span> </button>
                    <button className={classes.off} type="button"> <span>OFF</span> </button>
                </div>
            </div>
            <div className={classes.Freezer}>
                <img src={freezer} className={classes.img_freeze} />
                <div className={classes.buttons}>
                    <button className={classes.on} type="button"> <span>ON</span> </button>
                    <button className={classes.off} type="button"> <span>OFF</span></button>
                </div>
            </div>
            <div className={classes.Bulb}>
                <img src={bulb} className={classes.img_bulb} />
                <div className={classes.buttons}>
                    <button className={classes.on} type="button"> <span>ON</span> </button>
                    <button className={classes.off} type="button"> <span>OFF</span> </button>
                </div>
            </div>
        </div >
    )
}

export default Card;

import React from 'react';
import  classes from './Hw.module.css';

type HomeWorkType = {
    message: string
    name: string
    time: string
};

function HomeWork(props: HomeWorkType) {
    return (
        <div className={classes.content}>
            <div className={classes.name}>
                {props.name}
            </div>
            <div className={classes.message}>
                {props.message}
            </div>
            <div className={classes.time}>
                {props.time}
            </div>
        </div>
    )
}
export default HomeWork;


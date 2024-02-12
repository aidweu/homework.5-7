import React from 'react';
import {useSelector} from "react-redux";
import classes from "../sass/app.module.sass";

function Card(props) {
    const {products} = useSelector(state => state.cartReducer)

    return (
        <div className={classes.card}>
            {products?.map((item, index) => (
                <div className={classes.minicard} key={index}>
                    <img src={item.images[0]} alt="image" />
                    <p>{item.brand}</p>
                    <p>{item.price}$</p>
                </div>
            ))}
        </div>
    );
}

export default Card;
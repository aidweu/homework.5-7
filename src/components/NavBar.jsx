import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import classes from "../sass/app.module.sass";

function NavBar() {
    const {amountOfProducts} = useSelector(state => state.cartReducer)
    return (
        <ul className={classes.ul}>
            <li>
                <NavLink to="/">General</NavLink>
            </li>
            <li>
                <NavLink to="products">Market</NavLink>
            </li>
            <li>
                <NavLink to="cards">Basket</NavLink>
            </li>
            <li>
                <span className={classes.counter}>Counter: => {amountOfProducts}</span>
            </li>
        </ul>
    );
}

export default NavBar;
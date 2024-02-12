import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import classes from "../sass/app.module.sass";

function Layout() {
    return (
        <div className={classes.loy}>
            <NavBar/>
            <Outlet/>
        </div>
    );
}

export default Layout;
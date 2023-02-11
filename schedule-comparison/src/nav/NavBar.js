import NavBarElement from "./NavBarElement"
import { useNavigate } from 'react-router-dom'

function NavBar({ loginStatus, onSignout }) {
    let loginButton;
    let scheduleButton;
    let compareButton;
    const defaultNavBarElementStyle="hover:bg-neutral-200 dark:hover:bg-neutral-900";
    const navigate = useNavigate();

    if (loginStatus) {
        loginButton = <NavBarElement onClick={() => { 
            fetch('http://http://73.109.61.72/:8000/logout', {credentials: "include"}).then(res => res.text()).then(() => { navigate('/') }).catch(console.log);
            onSignout(false)
        }} className={defaultNavBarElementStyle} link="sign out"></NavBarElement>
        scheduleButton = <NavBarElement to="add-schedule" className={defaultNavBarElementStyle} link="add schedule"></NavBarElement>
        compareButton = <NavBarElement to="compare-schedules" className={defaultNavBarElementStyle} link="compare schedules"></NavBarElement>
    } else {
        loginButton = <NavBarElement to="login-signup" className={defaultNavBarElementStyle} link="login or signup"></NavBarElement>
    }

    return(
        <nav className="flex justify-end bg-neutral-300 dark:bg-neutral-800">
            <a className="cursor-default mr-auto dark:text-neutral-200 p-3.5 text-lg">schedule comparison</a>
            <NavBarElement to="/" className={defaultNavBarElementStyle} link="home"></NavBarElement>
            {loginButton}
            {scheduleButton}
            {compareButton}
        </nav>
    );
}

export default NavBar;
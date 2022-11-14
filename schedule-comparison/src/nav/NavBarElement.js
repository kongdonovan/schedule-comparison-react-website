import { Link } from "react-router-dom";

function NavBarElement(props) {
    let classes = `dark:text-neutral-200 p-3.5 text-lg ${props.className}`
    return(
        <Link onClick={props.onClick} className={classes}  to={props.to}>{props.link}</Link>
    );
}

export default NavBarElement;
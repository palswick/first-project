import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import FriendsSection from "./FriendsSection/FriendsSection";

const Navbar = (props) => {

    const islinkActiveOrNotInNavbar = ({isActive}) => isActive ? s.active : s.item;


    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile" className={islinkActiveOrNotInNavbar}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs/" className={islinkActiveOrNotInNavbar}>Dialogs</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={islinkActiveOrNotInNavbar}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={islinkActiveOrNotInNavbar}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={islinkActiveOrNotInNavbar}>Settings</NavLink>
            </div>


            <FriendsSection friends={props.friends}/>
        </nav>
    );
};

export default Navbar;

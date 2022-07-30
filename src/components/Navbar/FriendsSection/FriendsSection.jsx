import s from "./FriendsSection.module.css"
import {NavLink} from "react-router-dom";

const FriendsSection = (props) => {


    return (
        <div className={s.wrapper}>
            <p>
                <NavLink to="/friends" className={s.header}>Friends</NavLink>
            </p>

            <div className={s.section}>
                <NavLink to="/friends/1" className={s.item}>
                    <img src={props.friends[0].img} className={s.img}></img>
                    <p className={s.name}>{props.friends[0].name}</p>
                </NavLink>
                <NavLink to="/friends/2" className={s.item}>
                    <img src={props.friends[1].img} className={s.img}></img>
                    <p className={s.name}>{props.friends[1].name}</p>
                </NavLink>
                <NavLink to="/friends/1" className={s.item}>
                    <img src={props.friends[2].img} className={s.img}></img>
                    <p className={s.name}>{props.friends[2].name}</p>
                </NavLink>
            </div>
        </div>)
}

export default FriendsSection;
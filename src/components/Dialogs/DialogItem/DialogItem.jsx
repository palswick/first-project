import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    const islinkActiveOrNotInDialogs = ({isActive}) => isActive ? s.active : s.item;

    return (
        <div className={s.items}>
            <img className={s.img} src={props.avatar}/>
            <NavLink to={path} className={islinkActiveOrNotInDialogs}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
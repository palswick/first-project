import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.img}
                     src="https://www.goodfreephotos.com/albums/canada/alberta/banff-national-park/very-majestic-and-beautiful-landscape-with-mountains-in-banff-national-park-alberta-canada.jpg">
                </img>
            </div>
            <div className={s.DescriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
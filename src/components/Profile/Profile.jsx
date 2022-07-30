import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";



const Profile = (props) => {

    return (
        <div className={s.wrapper}>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch} posts={props.profilePage.posts} newPostText={props.profilePage.newPostText}/>
        </div>
    );
};

export default Profile;

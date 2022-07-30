import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://funik.ru/wp-content/uploads/2018/11/40cc81ee1f37452ae5fb.jpg"></img>
      <div>{props.message}</div>
      <span>likes: {props.likesCount}</span>
    </div>
  )
};

export default Post;

import "./PostCard.scss";
import PhotoOfThDay from "../../assets/images/photo2.avif";
import ProfilePic from "../../assets/images/avatar.png";
import Like from "../../assets/svg/like.svg";

const PostCard = (props) => {
  const { post, handleLikes } = props;

  return (
    <section className="postcard">
      <img
        className="postcard__img"
        src={post?.posturl}
        alt="challenge sample photo"
      />

      <div className="postcard__details">
        <div className="postcard__pp-div">
          <img
            className="postcard__pp"
            src={ProfilePic}
            alt="Profile picture"
          />
        </div>
        <article className="postcard__body">
          <h2 className="postcard__username">{post?.firstname} {post?.lastname}</h2>
          <p className="postcard__likes">{post?.likes} Votes</p>
        </article>
      </div>
      <img onClick={() => {handleLikes(post?.id)}} className="postcard__icon" src={Like} alt="icon to like"/>
    </section>
  );
};

export default PostCard;

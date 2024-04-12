import "./PostCard.scss";
import PhotoOfThDay from "../../assets/images/photo2.avif";
import ProfilePic from "../../assets/images/avatar.png";
import Like from "../../assets/svg/like.svg";

const PostCard = (props) => {
  const { post } = props;

  return (
    <section className="postcard">
      <img
        className="postcard__img"
        src={PhotoOfThDay}
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
          <h2 className="postcard__username">Micheal Cob</h2>
          <p className="postcard__likes">40 Votes</p>
        </article>
      </div>
      <img className="postcard__icon" src={Like} alt="icon to like"/>
    </section>
  );
};

export default PostCard;

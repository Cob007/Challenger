import PostCard from "../PostCard/PostCard";
import "./PostList.scss";
const PostList = (props) => {
  const { data , handleLikes } = props;

  return (
    <section className="postlist">
      {data.map((_post, index) => (
        <PostCard key={index} post={_post} handleLikes={handleLikes}/>
      ))}
    </section>
  );
};
export default PostList;

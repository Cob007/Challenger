import PostCard from "../PostCard/PostCard";
import "./PostList.scss";
const PostList = (props) => {
  const { data } = props;

  return (
    <section className="postlist">
      {data.map((_post, index) => (
        <PostCard key={index} post={_post} />
      ))}
    </section>
  );
};
export default PostList;

import LazyLoading from "../LazyLoading/LazyLoading";
import PostCard from "../PostCard/PostCard";
import "./PostList.scss";
const PostList = (props) => {
  const { data, handleLikes } = props;

  return (
    <section className="postlist">
      {data.map((_post, index) => (
        <LazyLoading
          fallBackComponent={<div>loading...</div>}
          mainComponent={
            <PostCard 
              key={index} 
              post={_post} 
              handleLikes={handleLikes} />
          }
        />
      ))}
    </section>
  );
};
export default PostList;

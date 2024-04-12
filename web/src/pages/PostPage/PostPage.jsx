import { useParams } from "react-router-dom";
import PostList from "../../component/PostList/PostList";
import SearchBar from "../../component/SearchBar/SearchBar";
import "./PostPage.scss";
import FloatingActionButton from "../../component/FloatingActionButton/FloatingActionButton";

const PostPage = () => {
    const { challengeId } = useParams();
    const data = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
      ];

  return (
    <main className="postpage">
      <section className="postpage__view">
        <SearchBar placeholderText={`Find Post`}/>
        <PostList data={data}/>
      </section>

      <section className="postpage__fab">
        <FloatingActionButton routes={`/app/${challengeId}/p/add`} />
      </section>
    </main>
  );
};

export default PostPage;

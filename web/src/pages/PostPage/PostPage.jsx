import { useParams } from "react-router-dom";
import PostList from "../../component/PostList/PostList";
import SearchBar from "../../component/SearchBar/SearchBar";
import "./PostPage.scss";
import FloatingActionButton from "../../component/FloatingActionButton/FloatingActionButton";
import { useEffect, useState } from "react";
import { BASE_URL, STAGING_PATH } from "../../constant/Constant";
import axios from "axios";
import Empty from "../../component/Empty/Empty";

const PostPage = () => {
  const { challengeId } = useParams();
  const [data, setData] = useState([]);
  const [token, setToken] = useState("");

  const getPostByChallengeId = async (_token) => {
    try {
      const url = `${BASE_URL}${STAGING_PATH}/post/${challengeId}`;
      const apiRes = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${_token}`,
        },
      });
      setData(apiRes.data.data);
    } catch (error) {}
  };

  const submitLikes = async (postId) => {
    try {
      const url = `${BASE_URL}${STAGING_PATH}/post/vote/${postId}`;
      const apiRes = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getPostByChallengeId(token);
    } catch (error) {}
  };

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setToken(authToken);
      getPostByChallengeId(authToken);
    }
  }, []);

  //if (data.length === 0) return <Empty text={`Post`} />;

  return (
    <main className="postpage">
      <section className="postpage__view">
      <SearchBar placeholderText={`Find Post`} />
        {data.length === 0 ? (
          <Empty text={`post`}/>
        ) : (
            <PostList handleLikes={submitLikes} data={data} />     
        )}
      </section>
      <section className="postpage__fab">
        <FloatingActionButton routes={`/app/${challengeId}/p/add`} />
      </section>
    </main>
  );
};

export default PostPage;

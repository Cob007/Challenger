import { useNavigate } from "react-router-dom";
import ChallengeList from "../../component/ChallengeList/ChallengeList";
import FloatingActionButton from "../../component/FloatingActionButton/FloatingActionButton";
import Searchbar from "../../component/SearchBar/SearchBar";
import "./HomePage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, STAGING_PATH } from "../../constant/Constant";
import Empty from "../../component/Empty/Empty";
const HomePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const _handleChallengeClicked = (challengeId) => {
    navigate(`/app/${challengeId}`);
  };

  const getActiveChallenge = async (token) => {
    try {
      const url = `${BASE_URL}${STAGING_PATH}/challenge`;
      const apiRes = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(apiRes.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) getActiveChallenge(authToken);
  }, []);

  return (
    <main className="homepage">
      <section className="homepage__view">
        <Searchbar placeholderText={`Find Challenges by title`} />
        {data.length === 0 ? (
          <Empty text={`challenge`} />
        ) : (
          <ChallengeList
            data={data}
            handleChallengeClicked={_handleChallengeClicked}
          />
        )}
      </section>

      <section className="homepage__fab">
        <FloatingActionButton routes={`/app/c/add`} />
      </section>
    </main>
  );
};

export default HomePage;

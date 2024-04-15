import { useNavigate } from "react-router-dom";
import ChallengeList from "../../component/ChallengeList/ChallengeList";
import FloatingActionButton from "../../component/FloatingActionButton/FloatingActionButton";
import Searchbar from "../../component/SearchBar/SearchBar";
import "./HomePage.scss";
import axios from "axios";
import { useState } from "react";
const HomePage = () => {
    const navigate = useNavigate();
  const [data, setData] = useState([])
  const _handleChallengeClicked = (challengeId) => {
    navigate(`/app/${challengeId}`)
  }

  const getActiveChallenge = async (token) => {
    const url = `${BASE_URL}${STAGING_PATH}/challenge`;
    const apiRes = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(apiRes.data.data)
    setData(apiRes.data.data)
  }

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    if (authToken) getActiveChallenge(authToken)
  }, [])

  return (
    <main className="homepage">
      <section className="homepage__view">
        <Searchbar placeholderText={`Find Challenges by title`}/>
        <ChallengeList data={data} handleChallengeClicked={_handleChallengeClicked} />
      </section>

      <section className="homepage__fab">
        <FloatingActionButton  routes={`/app/c/add`}/>
      </section>
    </main>
  );
};

export default HomePage;

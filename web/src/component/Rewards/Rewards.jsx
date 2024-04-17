import RewardCard from "../RewardCard/RewardCard";
import RewardLogo from "../../assets/svg/reward.svg";
import "./Rewards.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, STAGING_PATH } from "../../constant/Constant";
const Rewards = () => {
  const [data, setData] = useState([]);

  const getRewardFromRemote = async () => {
    try {
      const token = localStorage.getItem("authToken");

      const resApi = await axios.get(`${BASE_URL}${STAGING_PATH}/reward`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(resApi.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRewardFromRemote();
  }, []);

  return (
    <main className="reward">
      <section className="reward__header">
        <h1 className="reward__title">Rewards</h1>
      </section>
      <div className="reward__divider" />
      <div className="reward__body">
        <section className="reward__list">
          {data.map((element, index) => (
            <RewardCard key={index} data={element} />
          ))}
        </section>
        <section className="reward__preview">
          <img className="reward__logo"  src={RewardLogo} alt="Reward Logo" />
        </section>
      </div>
    </main>
  );
};

export default Rewards;

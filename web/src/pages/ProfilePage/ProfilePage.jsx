import { useEffect, useState } from "react";
import "./ProfilePage.scss";
import { BASE_URL, STAGING_PATH } from "../../constant/Constant";
import axios from "axios";
import ProfilePic from "../../assets/images/avatar.png";

const Profile = () => {
  const [data, setData] = useState({});

  const getUserProfile = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const url = `${BASE_URL}${STAGING_PATH}/user`;
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

  const getArchieveChallenge = () => {};

  useEffect(() => {
    getUserProfile();
    getArchieveChallenge();
  }, []);

  return (
    <main className="profile">
      <section className="profile__header">
        <h1 className="profile__title">Profile</h1>
      </section>
      <div className="profile__divider" />
      <section className="profile__body">
        <div className="profile__pp-div">
          <img className="profile__pp" src={ProfilePic} alt="Profile picture" />
        </div>
        <p>Fullname</p>
        <h3>
          {data?.firstname} {data?.lastname}
        </h3>
        <p>Email</p>
        <h3>{data?.email}</h3>
      </section>
    </main>
  );
};

export default Profile;

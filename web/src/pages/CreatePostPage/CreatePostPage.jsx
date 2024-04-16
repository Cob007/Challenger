import { useNavigate, useParams } from "react-router-dom";
import Button from "../../component/Button/Button";
import "./CreatePostPage.scss";
import { useEffect, useState } from "react";
import { BASE_URL, STAGING_PATH } from "../../constant/Constant";
import axios from "axios";
const CreatePost = () => {
  const navigate = useNavigate();
  const { challengeId } = useParams();
  const [challengeData, setChallengeData] = useState({});

  const loadChallengeById = async (id) => {
    try {
      const url = `${BASE_URL}${STAGING_PATH}/challenge/${id}`;
      const token = localStorage.getItem("authToken");

      const apiRes = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setChallengeData(apiRes.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadChallengeById(challengeId);
  }, []);

  const [preview, setPreview] = useState("");
  const [mediaFile, setMediaFile] = useState("");

  const handleTitleChange = (event) => {};
  const handleMediaChange = (event) => {
    setMediaFile(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  const uploadContent = async () => {
    try {
      const url = `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUD_NAME
      }/image/upload`;
      try {
        const formData = new FormData();
        formData.append("file", mediaFile);
        formData.append("upload_preset", import.meta.env.VITE_PRESET);
        const res = await axios.post(url, formData);
        return res.data.secure_url;
      } catch (err) {
        console.log(err);
      }
    } catch (error) {}
  };

  const submitPostForChallenge = async () => {
    try {
      const contentUrl = await uploadContent();
      const token = localStorage.getItem("authToken");
      const url = `${BASE_URL}${STAGING_PATH}/post/${challengeId}`;

      const body = {
        title: `Challenge for ${challengeData?.title}`,
        posturl: contentUrl,
      };

      const apiRes = await axios.post(url, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (apiRes.data.status === 200 || piRes.data.status === 201) {
        navigate(`/app/${challengeId}`);
      } else {
        alert("Please server error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="cpost">
      <section className="cpost__header">
        <h1 className="cpost__title">
          Create Post for {challengeData?.title} - Challenge
        </h1>
        <p className="cpost__info">
          Here is the provided infomation that will be enough to participate in
          challenge
        </p>
      </section>
      <div className="cpost__divider" />
      <section className="cpost__body">
        <div className="cpost__form">
          <div className="cpost__field">
            <h2 className="cpost__title">{challengeData?.title}</h2>
          </div>
          <div className="cpost__field">
            <p>{challengeData?.description}</p>
          </div>
          <div className="cpost__divider" />

          <div className="cpost__field">
            <h2 className="cpost__label">Participate</h2>
            <input
              className="cpost__file"
              name="media"
              type="file"
              accept="image/*"
              onChange={handleMediaChange}
            />
          </div>
        </div>
        {preview && (
          <div className="cpost__preview">
            <h3 className="cpost__preview-title">Preview</h3>
            <img
              className="cpost__preview-img"
              src={preview}
              alt="Image to be uploaded"
            />
          </div>
        )}
      </section>
      <section className="cpost__btn">
        <div className="cpost__btndiv">
          <Button btnClick={submitPostForChallenge} name={`Post`} />
        </div>
      </section>
    </main>
  );
};

export default CreatePost;

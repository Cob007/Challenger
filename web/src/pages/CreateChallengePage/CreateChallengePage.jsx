import { useState } from "react";
import "./CreateChallengePage.scss";
import Button from "../../component/Button/Button";

import axios from "axios";
import { BASE_URL, STAGING_PATH } from "../../constant/Constant";
import { useNavigate } from "react-router-dom";

const CreateChallenge = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    description: "",
    contenturl: "",
    mediatype: "",
    duration: 0,
  });

  const [preview, setPreview] = useState("");
  const [mediaFile, setMediaFile] = useState("");

  const handleTitleChange = (event) => {
    setData({
      ...data,
      title: event.target.value,
    });
  };
  const handleDescriptionChange = (event) => {
    setData({
      ...data,
      description: event.target.value,
    });
  };
  const handleMediaTypeChange = (event) => {
    setData({
      ...data,
      mediatype: event.target.value,
    });
  };
  const handleDurationChange = (event) => {
    const duration = event.target.value;
    setData({
      ...data,
      duration: event.target.value,
    });
  };

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

  const submitCreatChallenge = async () => {
    try {
      const token = localStorage.getItem("authToken");

      const { title, description, duration, mediatype } = data;

      if (
        !!title &&
        !!description &&
        !!duration &&
        !!mediatype &&
        !!mediaFile
      ) {
        const contentUrl = await uploadContent();
        const url = `${BASE_URL}${STAGING_PATH}/challenge`;

        const body = {
          title: data.title,
          description: data.description,
          contenturl: contentUrl,
          mediatype: data.mediatype,
          duration: data.duration,
        };
        const apiRes = await axios.post(url, body, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (apiRes.data.status === 200 || piRes.data.status === 201) {
          navigate("/app");
        } else {
          alert("Please server error");
        }
      } else {
        alert("Please provide input");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="create">
      <section className="create__header">
        <h1 className="create__title">Create Challenge</h1>
        <p className="create__info">
          Please provide infomation that will be enough for audience to
          participate in challenge
        </p>
      </section>
      <div className="create__divider" />
      <section className="create__body">
        <div className="create__form">
          <div className="create__field">
            <label className="create__label">Title</label>
            <input
              className="create__input"
              name="title"
              type="text"
              onChange={handleTitleChange}
            />
          </div>
          <div className="create__field">
            <label className="create__label">Details</label>
            <textarea
              className="create__textarea"
              name="details"
              type="textarea"
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="create__field create__dp">
            <label className="create__label">Media Type</label>
            <select
              className="create__dropdown"
              onChange={handleMediaTypeChange}
              name="type"
            >
              <option value="default">Select</option>
              <option value="image">Image</option>
              <option value="video">Video</option>
              <option value="text">Text</option>
            </select>
          </div>
          <div className="create__field create__dp">
            <label className="create__label">Duration</label>
            <select
              className="create__dropdown"
              onChange={handleDurationChange}
              name="type"
            >
              <option value="default">Select</option>
              <option value="3">3mins</option>
              <option value="720">12 hrs</option>
              <option value="1440">24 hrs</option>
              <option value="10080">7 days</option>
            </select>
          </div>
          <div className="create__field">
            <label className="create__label">Media</label>
            <input
              className="create__file"
              name="media"
              type="file"
              onChange={handleMediaChange}
            />
          </div>
        </div>
        {preview && (
          <div className="create__preview">
            <h3 className="create__preview-title">Preview</h3>
            <img
              className="create__preview-img"
              src={preview}
              alt="Image to be uploaded"
            />
          </div>
        )}
      </section>
      <section className="create__btn">
        <div className="create__btndiv">
          <Button btnClick={submitCreatChallenge} name={`Create`} />
        </div>
      </section>
    </main>
  );
};
export default CreateChallenge;

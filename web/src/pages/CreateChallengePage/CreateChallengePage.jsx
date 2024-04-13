import { useState } from "react";
import "./CreateChallengePage.scss";
import Button from "../../component/Button/Button";

import axios from "axios";

const CreateChallenge = () => {

    const [data, setData] = useState({
        "title": '', 
        
    })

  const [preview, setPreview] = useState("");
  const [mediaFile, setMediaFile] = useState("");

  const handleTitleChange = (event) => {};
  const handleMediaChange = (event) => {
    setMediaFile(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  const uploadContent = async () => {
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
  };
  const submitCreatChallenge = async () => {
    const contentUrl = await uploadContent();
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
              onChange={handleTitleChange}
            />
          </div>
          <div className="create__field create__dp">
            <label className="create__label">Media Type</label>
            <select
              className="create__dropdown"
              onChange={handleTitleChange}
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
              onChange={handleTitleChange}
              name="type"
            >
              <option value="default">Select</option>
              <option value="image">3mins</option>
              <option value="video">12 hrs</option>
              <option value="text">24 hrs</option>
              <option value="text">7 days</option>
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

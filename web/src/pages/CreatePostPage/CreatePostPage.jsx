import { useParams } from "react-router-dom";
import Button from "../../component/Button/Button";
import "./CreatePostPage.scss";
import { useEffect, useState } from "react";
const CreatePost = () => {


  const { challengeId } = useParams();

  const [challengeData, setChallengeData] = useState({})

  const loadChallengeById = async () => {
    
  }

  useEffect (() => {
    loadChallengeById(challengeId)
  }, [])

  const [preview, setPreview] = useState('');
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


  const submitPostForChallenge = async () => {
    const contentUrl = await uploadContent();
  };


  return (
    <main className="cpost">
      <section className="cpost__header">
        <h1 className="cpost__title">
          Create Post for Challenge id {challengeId}
        </h1>
        <p className="cpost__info">
          Please provide infomation that will be enough for audience to
          participate in challenge
        </p>
      </section>
      <div className="cpost__divider" />
      <section className="cpost__body">
        <div className="cpost__form">
          <div className="cpost__field">
            <h2 className="cpost__title">Cutest Dog in NYC</h2>
          </div>
          <div className="cpost__field">
            <p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble</p>
          </div>
          <div className="cpost__divider" />

          <div className="cpost__field">
            <h2 className="cpost__label">Participate</h2>
            <input
              className="cpost__file"
              name="media"
              type="file"
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

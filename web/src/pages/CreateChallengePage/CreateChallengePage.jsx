import "./CreateChallengePage.scss";

const CreateChallenge = () => {
  const handleTitleChange = (event) => {};
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
        </div>
        <div className="create__preview"></div>
      </section>
    </main>
  );
};
export default CreateChallenge;

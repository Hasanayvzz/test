import React, { useContext, useState } from "react";
import SettingsContext from "../contexts/SettingsContext";

export const CommentForm = ({ onAddComment, setText, text }) => {
  const [author, setAuthor] = useState("");
  const { settingsData } = useContext(SettingsContext);
  const user = settingsData?.fullName;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user || !text) return;
    onAddComment({ user, text });
    setAuthor("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex  flex-column gap-4 ">
      <textarea
        placeholder="Your Comment"
        className="my-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="btn-pill-v2"
        style={{ width: "fit-content" }}
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm;

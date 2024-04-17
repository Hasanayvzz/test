import React, { useContext, useState } from "react";
import SettingsContext from "../contexts/SettingsContext";

const CommentList = ({ comments }) => {
  const { settingsData } = useContext(SettingsContext);
  return (
    <div className="mb-4">
      {comments.text !== "" &&
        comments.map((comment, index) => (
          <div className="d-flex flex-column gap-1 ">
            <div className="d-flex gap-4 align-items-center mb-4">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "56px",
                  height: 56,
                  borderRadius: 99,
                  border: "1px solid #2a2a2b",
                  backgroundImage: `url(${
                    settingsData?.profileImage ? settingsData?.profileImage : ""
                  })`,
                  color: "#2a2a2b",
                  fontWeight: 600,
                }}>
                <p className="">
                  {" "}
                  {settingsData?.fullName?.slice(0, 2).toUpperCase()}
                </p>
              </div>

              <div className="d-flex align-items-start justify-content-start">
                <p>{comment.text}</p>
              </div>
            </div>
            <p className="text-end"> {settingsData?.fullName}</p>
            <div className="d-flex align-items-center gap-2 w-100">
              <p>Publish date:</p>
              <p className="text-end">
                {new Date(Date.now()).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentList;

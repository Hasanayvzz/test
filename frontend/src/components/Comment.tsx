import React, { useContext, useState } from "react";
import SettingsContext from "../contexts/SettingsContext";
import { ApiRequest } from "../pages/api";
import CommentForm from "./CommentForm";
import AuthContext from "../contexts/AuthContext";

const CommentList = ({
  comments,
  blogId,
  trigger,
  setTrigger,
  onAddComment,
  text,
  setText,
  updatedBlog,
  setUpdatedBlog,
}) => {
  const [updatedText, setUpdatedText] = useState();

  const { user } = useContext(AuthContext);
  return (
    <div className="mb-4">
      {comments?.text !== "" &&
        comments?.map((comment, index) => (
          <div
            className="d-flex flex-column gap-1 p-4 mb-2"
            style={{ background: "#f5f5f5", borderRadius: 12 }}
          >
            <div className="d-flex gap-4 align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center gap-2">
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "56px",
                    height: 56,
                    borderRadius: 99,
                    border: "1px solid #2a2a2b",
                    color: "#2a2a2b",
                    fontWeight: 600,
                  }}
                >
                  <p className="">
                    {" "}
                    {comment?.name?.slice(0, 2).toUpperCase()}
                  </p>
                </div>
                <p className="text-end"> {comment?.name}</p>
              </div>
              {comment?.userId === user && (
                <div className="d-flex align-items-center gap-2">
                  <img
                    onClick={() => {
                      if (updatedBlog) {
                        setUpdatedBlog(null);
                      } else {
                        setUpdatedBlog(comment);
                      }
                    }}
                    style={{ width: 30, height: 30 }}
                    src="/edic-ic.svg"
                    className="pointer"
                    alt=""
                  />
                  <img
                    onClick={() =>
                      ApiRequest.deleteComment({
                        commentId: comment._id,
                        blogId: blogId,
                      }).then((res) => {
                        setTrigger(!trigger);
                      })
                    }
                    style={{ width: 30, height: 30 }}
                    src="/delete-ic.png"
                    className="pointer"
                    alt=""
                  />
                </div>
              )}
            </div>
            {updatedBlog?._id === comment?._id ? (
              <>
                <p>Yorumunu güncelle</p>
                <CommentForm
                  onAddComment={() => {
                    ApiRequest.updateComment({
                      commentId: comment._id,
                      blogId: blogId,
                      text: text,
                    }).then((res) => {
                      setTrigger(!trigger);
                      setUpdatedBlog(null);
                    });
                  }}
                  text={text}
                  setText={setText}
                />
              </>
            ) : (
              <>
                <p>{comment?.text}</p>
                <div className="d-flex align-items-center gap-2 w-100">
                  <p>Yorum Tarihi:</p>
                  <p className="text-end">
                    {new Date(comment.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default CommentList;

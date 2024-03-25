import React, { useContext } from "react";
import { useTheme } from "../contexts/Theme/ThemeContext";
import { useRouter } from "next/router";
import AuthContext from "../contexts/AuthContext";

const BlogCard = ({ blogData }) => {
  const theme = useTheme();
  console.log("theme", theme);
  const router = useRouter();
  const { setItemData } = useContext(AuthContext);
  return (
    <>
      {blogData.map((blog) => (
        <div className={`project-card-container  ${theme.theme}`}>
          <div
            className=""
            style={{
              backgroundImage: `url(${blog.blogImage})`,
              width: "100%",
              height: 225,
              backgroundSize: "100% ",
              backgroundRepeat: "no-repeat",
              borderRadius: 8,
            }}></div>

          <div className="d-flex gap-3 align-items-center">
            <div
              style={{
                backgroundImage: `url(${blog.leading})`,
                backgroundSize: "100% 100%",
                width: "56px",
                height: 56,
                borderRadius: 99,
              }}></div>
            <p className={` project-text ${theme.theme}`}>{blog.blogName}</p>
          </div>

          <div className={`project-detail p-2 ${theme.theme}`}>
            <div
              className={`d-flex justify-content-between align-items-center gap-1 ${theme.theme}`}>
              <p className={`${theme.theme} project-detail-text-head`}>Star</p>
              <div className="d-flex gap-1 align-items-center">
                <img src={`${blog.leadImg}`} alt="" />
                <p className={`${theme.theme} project-detail-text`}>
                  {blog.star}
                </p>
              </div>
            </div>
            <div
              className={`d-flex justify-content-between align-items-center gap-1 ${theme.theme}`}>
              <p className={`${theme.theme} project-detail-text-head`}>
                Country
              </p>

              <p className={`${theme.theme} project-detail-text`}>
                {blog.country}
              </p>
            </div>
            <div
              className={`d-flex justify-content-between align-items-center gap-1 ${theme.theme}`}>
              <p className={`${theme.theme} project-detail-text-head`}>
                Approximately Price
              </p>

              <p className={`${theme.theme} project-detail-text`}>
                {blog.approximatelyPrice}
              </p>
            </div>
            <div
              className={`d-flex justify-content-between align-items-center gap-1 ${theme.theme}`}>
              <p className={`${theme.theme} project-detail-text-head`}>
                Author
              </p>

              <p className={`${theme.theme} project-detail-text`}>
                {blog.author}
              </p>
            </div>
            <div
              className={`d-flex justify-content-between align-items-center gap-1 ${theme.theme}`}>
              <p className={`${theme.theme} project-detail-text-head`}>Date</p>

              <p className={`${theme.theme} project-detail-text`}>
                {blog.date}
              </p>
            </div>
          </div>

          <p
            className="btn-pill-v2"
            onClick={() => {
              setItemData(blog);
              router.push("/item-detail");
            }}>
            Detay
          </p>
        </div>
      ))}
    </>
  );
};

export default BlogCard;

import React, { useContext, useEffect } from "react";
import { useTheme } from "../contexts/Theme/ThemeContext";
import { useRouter } from "next/router";
import AuthContext from "../contexts/AuthContext";
import { LoaderContext } from "../contexts/loaderContext";
import Loader from "./Loader";
import SettingsContext from "../contexts/SettingsContext";
import { useTranslation } from "react-i18next";

const BlogCard = ({ blogData }) => {
  const theme = useTheme();
  console.log("theme", theme);
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const { setItemData } = useContext(AuthContext);
  const { isLoading, handleLoading } = useContext(LoaderContext);
  const { settingsData } = useContext(SettingsContext);

  console.log("blogs", blogData);
  useEffect(() => {
    if (!blogData) {
      handleLoading(true);
    }
  }, []);

  return (
    <>
      {!isLoading ? (
        blogData.map((blog) => (
          <div className={`project-card-container  ${theme.theme}`}>
            <div
              className=""
              style={{
                backgroundImage: `url(${blog?.placeImage})`,
                width: "100%",
                height: 225,
                backgroundSize: "100% ",
                backgroundRepeat: "no-repeat",
                borderRadius: 8,
              }}></div>

            <div className="d-flex gap-3 align-items-center">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "56px",
                  height: 56,
                  borderRadius: 99,
                  background: "#f9f9f9",
                  border: "1px solid #2a2a2b",
                  backgroundImage: `url(${
                    settingsData?.profileImage ? settingsData?.profileImage : ""
                  })`,
                  color: "#2a2a2b",
                  fontWeight: 600,
                }}>
                {blog?.authorName?.slice(0, 2).toUpperCase()}
              </div>
              <p className={` project-text ${theme.theme}`}>{blog?.blogName}</p>
            </div>

            <div className={`project-detail p-2 ${theme.theme}`}>
              <div
                className={`d-flex justify-content-between align-items-center gap-1 ${theme.theme}`}>
                <p className={`${theme.theme} project-detail-text-head`}>
                  {t("blogCard.star")}
                </p>
                <div className="d-flex gap-1 align-items-center">
                  {/* <img src={`${blog.leadImg}`} alt="" /> */}
                  <p className={`${theme.theme} project-detail-text`}>
                    {isNaN(
                      blog?.stars.reduce((total, star) => total + star, 0) /
                        blog?.stars.length
                    )
                      ? "-"
                      : (
                          blog?.stars.reduce((total, star) => total + star, 0) /
                          blog?.stars.length
                        ).toFixed(2)}
                  </p>
                </div>
              </div>
              <div
                className={`d-flex justify-content-between align-items-center gap-1 ${theme.theme}`}>
                <p className={`${theme.theme} project-detail-text-head`}>
                  {t("blogCard.country")}
                </p>

                <p className={`${theme.theme} project-detail-text`}>
                  {blog?.country}
                </p>
              </div>
              <div
                className={`d-flex justify-content-between align-items-center gap-1 ${theme.theme}`}>
                <p className={`${theme.theme} project-detail-text-head`}>
                  {t("blogCard.price")}
                </p>

                <p className={`${theme.theme} project-detail-text`}>
                  {blog?.approximatelyPrice} {blog?.currency}
                </p>
              </div>
              <div
                className={`d-flex justify-content-between align-items-center gap-1 ${theme.theme}`}>
                <p className={`${theme.theme} project-detail-text-head`}>
                  {t("blogCard.author")}
                </p>

                <p className={`${theme.theme} project-detail-text`}>
                  {blog?.authorName}
                </p>
              </div>
              <div
                className={`d-flex justify-content-between align-items-center gap-1 ${theme.theme}`}>
                <p className={`${theme.theme} project-detail-text-head`}>
                  {t("blogCard.date")}
                </p>

                <p className={`${theme.theme} project-detail-text`}>
                  {new Date(blog?.date).toLocaleDateString()}
                </p>
              </div>
            </div>

            <p
              className="btn-pill-v2"
              onClick={() => {
                setItemData(blog);
                router.push(`/blogs/${blog._id}`);
              }}>
              {t("blogCard.detail")}
            </p>
          </div>
        ))
      ) : (
        <Loader></Loader>
      )}
    </>
  );
};

export default BlogCard;

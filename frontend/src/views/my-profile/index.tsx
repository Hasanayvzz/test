import React, { useContext } from "react";
import Header from "../../components/header";
import ProfileBanner from "../../components/ProfileBanner";
import { useRouter } from "next/router";
import SettingsContext from "../../contexts/SettingsContext";

const MyProfile = () => {
  const router = useRouter();
  const { settingsData } = useContext(SettingsContext);

  console.log("settingsdata", settingsData);
  return (
    <>
      <Header />
      <ProfileBanner />
      <div className="container themed-bg">
        <div className="d-flex justify-content-between align-items-center gap-4 mt-5 mb-5">
          <div className="d-flex flex-column gap-3 align-items-center">
            <img src="/icons/blog.png" alt="" />
            <p className="text-24-700">{settingsData?.totalBlogs}</p>
          </div>
          <div className="d-flex flex-column gap-3 align-items-center">
            <div>
              <img src="/icons/comment.png" alt="" />
            </div>
            <p className="text-24-700">{settingsData?.totalComments}</p>
          </div>

          <div className="d-flex flex-column gap-3 align-items-center">
            <div>
              <img src="/icons/star-ic.png" alt="" />
            </div>
            <p className="text-24-700">{settingsData?.averageStars}</p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn-pill-v2 w-50"
            onClick={() => router.push("/create-new-blog")}>
            Create Blog
          </button>
        </div>
      </div>
    </>
  );
};

export default MyProfile;

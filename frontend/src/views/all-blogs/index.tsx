import React, { useContext, useEffect, useState } from "react";
import { ApiRequest } from "../../pages/api";
import Header from "../../components/header";
import BlogCard from "../../components/Blogcard";
import { LoaderContext } from "../../contexts/loaderContext";
import AuthContext from "../../contexts/AuthContext";

const AllBlogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const { handleLoading } = useContext(LoaderContext);
  const [trigger, setTrigger] = useState<boolean>(false);
  const [myFavorites, setMyFavorites] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    handleLoading(true);
    ApiRequest.getAllBlogs()
      .then((res) => {
        setAllBlogs(res.blogs);
        handleLoading(false);
      })
      .catch((err) => console.log(err))
      .finally(() => handleLoading(false));
  }, []);
  useEffect(() => {
    ApiRequest.getMyFavorites({
      userId: user,
    })
      .then((res) => {
        setMyFavorites(res.favoriteBlogs);
      })
      .catch((e) => console.log(e));
  }, [trigger]);

  return (
    <>
      <Header />
      <div className="container mt-5 mb-5 pb-5">
        <p className=" mb-5 text-32-600">All Blogs</p>
        <div className="projects-container" data-aos="fade-down">
          <BlogCard
            blogData={allBlogs}
            trigger={trigger}
            setTrigger={setTrigger}
            favorites={myFavorites}
          ></BlogCard>
        </div>
      </div>
    </>
  );
};

export default AllBlogs;

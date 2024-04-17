import React, { useContext, useEffect, useState } from "react";
import { ApiRequest } from "../../pages/api";
import Header from "../../components/header";
import BlogCard from "../../components/Blogcard";
import { LoaderContext } from "../../contexts/loaderContext";

const AllBlogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const { handleLoading } = useContext(LoaderContext);
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

  return (
    <>
      <Header />
      <div className="container mt-5">
        <p className=" mb-5 text-32-600">All Blogs</p>
        <div className="projects-container" data-aos="fade-down">
          <BlogCard blogData={allBlogs}></BlogCard>
        </div>
      </div>
    </>
  );
};

export default AllBlogs;

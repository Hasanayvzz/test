import React from "react";
import Header from "../../components/header";
import CreateBlogBanner from "../../components/CreateBlogBanner";

import CreateBlogComponent from "../../components/BlogCreateComponent";
import { useTranslation } from "react-i18next";

const CreateNewBlog = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <CreateBlogBanner />
      <div className="container pb-5">
        <p className="text-32-600 mt-2">{t("createBlog.createBlog")}</p>
        <CreateBlogComponent />
      </div>
    </>
  );
};

export default CreateNewBlog;

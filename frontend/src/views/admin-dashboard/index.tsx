import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header";

import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { ApiRequest } from "../../pages/api";
import { useTheme } from "../../contexts/Theme/ThemeContext";

import UsersTable from "../../components/Table";
import { LoaderContext } from "../../contexts/loaderContext";

const Admindashboard = () => {
  const [users, setUsers] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const { t } = useTranslation();
  const [trigger, setTrigger] = useState(false);
  const [blogTrigger, setBlogTrigger] = useState(false);
  const theme = useTheme();

  const columns = [
    {
      id: "id",
      label: t("table.userId"),
      minWidth: 150,
      align: "left",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "name",
      label: t("table.userName"),
      minWidth: 150,
      align: "left",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "email",
      label: "E-Mail",
      minWidth: 150,
      align: "left",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "userRole",
      label: t("table.role"),
      minWidth: 150,
      align: "left",
      format: (value: number) => value.toLocaleString("en-US"),
    },

    {
      id: "registrationDate",
      label: t("table.registrationDate"),
      align: "left",
      format: (value: number) => value.toLocaleString("en-US"),
    },

    {
      id: "delete",
      align: "left",

      format: (value: number) => value.toFixed(2),
    },
  ];

  const blogColumns = [
    {
      id: "id",
      label: t("table.userId"),
      minWidth: 150,
      align: "left",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "blogName",
      label: t("table.blogName"),
      minWidth: 150,
      align: "left",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "date",
      label: t("table.publishedDate"),
      minWidth: 150,
      align: "left",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "authorName",
      label: t("table.authorName"),
      minWidth: 150,
      align: "left",
      format: (value: number) => value.toLocaleString("en-US"),
    },

    {
      id: "country",
      label: t("table.country"),
      align: "left",
      format: (value: number) => value.toLocaleString("en-US"),
    },

    {
      id: "blogDetail",
      align: "left",
      format: (value: number) => value.toFixed(2),
    },

    {
      id: "deleteBlog",
      align: "left",
      format: (value: number) => value.toFixed(2),
    },
    {
      id: "status",
      align: "left",
      label: t("table.status"),
      format: (value: number) => value.toFixed(2),
    },
  ];
  const { handleLoading } = useContext(LoaderContext);
  useEffect(() => {
    handleLoading(true);
    ApiRequest.getAllUsers()
      .then((res) => {
        let tableRow = [];
        res.users.map((elm) => {
          const user = {
            id: elm._id,
            registrationDate: new Date(elm.date).toLocaleDateString(),
            email: elm.email,
            name: elm.fullName,
            userRole: elm.userRole,
            delete: t("table.deleteUser"),
          };
          tableRow.push(user);
          handleLoading(false);
        });

        setUsers(tableRow);
      })
      .catch((e) => {
        console.log(e);
        handleLoading(false);
      });
  }, [trigger]);

  useEffect(() => {
    ApiRequest.getAllBlogWithoutImages().then((res) => {
      console.log("blog res", res);
      let tableRow = [];
      res.blogs.map((elm) => {
        const blog = {
          id: elm._id,
          blogName: elm.blogName,
          date: new Date(elm.date).toLocaleDateString(),
          authorName: elm.authorName,
          country: elm.country,
          status: elm.status,
          blogDetail: "Detay",
          deleteBlog: "Sil",
        };
        tableRow.push(blog);
      });
      setBlogs(tableRow);
    });
  }, [blogTrigger]);

  return (
    <>
      <Header />

      <div className="container">
        <p className={`${theme.theme} text-32-700 mt-4 mb-3`}>
          {t("navbar.dashboard")}
        </p>
        <p className={`${theme.theme} text-24-700-yellow mt-4 mb-3`}>
          {t("userList")}
        </p>

        <UsersTable
          trigger={trigger}
          setTrigger={setTrigger}
          pagination={true}
          rows={users}
          headFontSize={12}
          columns={columns}
          //   setDetailItem={setDetailItem}
          //   setActivePage={setActivePage}
        />
        <p className={`${theme.theme} text-24-700-yellow mt-4 mb-3`}>
          {t("blogList")}
        </p>

        <UsersTable
          pagination={true}
          rows={blogs}
          blogTrigger={blogTrigger}
          setBlogTrigger={setBlogTrigger}
          headFontSize={12}
          columns={blogColumns}
          //   setDetailItem={setDetailItem}
          //   setActivePage={setActivePage}
        />
        <div className="pb-5"></div>
      </div>
    </>
  );
};

export default Admindashboard;

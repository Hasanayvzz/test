import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

import { useLoadScript } from "@react-google-maps/api";

import "@reach/combobox/styles.css";
import {
  Box,
  FormControl,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Map from "./Map/Map";
import countryJSON from "../../public/gistfile1.json";
import { useFormik } from "formik";
import SettingsContext from "../contexts/SettingsContext";
import FileUploadComponent from "./FileUploadComponent";
import MultipleFileUploadComponent from "./MultipleFileUploadComponent";
import { ApiRequest } from "../pages/api";
import { toast } from "react-toastify";
import { LoaderContext } from "../contexts/loaderContext";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";

function CreateBlogComponent() {
  const { settingsData } = useContext(SettingsContext);
  const { handleLoading } = useContext(LoaderContext);
  const [stockData, setStockData] = useState(["EUR", "USD", "TRY"]);
  const { t } = useTranslation();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      country: "",
      flagImage: "",
      address: "",
      latitude: "",
      blogName: "",
      blogText: "",
      currency: "",
      longitude: "",
      placeImage: "",
      placeImageDetails: "",
      approximatelyPrice: "",
    },

    onSubmit: async (values) => {
      window.scrollTo(0, 0);

      handleLoading(true);

      const createBlogReqBody = {
        userId: settingsData._id,
        country: formik.values.country,
        address: formik.values.address,
        lat: Number(formik.values.latitude),
        lng: Number(formik.values.longitude),
        blogName: formik.values.blogName,
        currency: formik.values.currency,
        blogText: formik.values.blogText,
        authorName: settingsData.fullName,
        placeImage: formik.values.placeImage,
        placeImageDetails: formik.values.placeImageDetails,
        approximatelyPrice: formik.values.approximatelyPrice,
      };

      await ApiRequest.createBlog(createBlogReqBody)
        .then(() => {
          handleLoading(false);
          toast.success("Successfully created", {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
            autoClose: 3000,
          });
          router.push("/all-blogs");
        })
        .catch((e) =>
          toast.success(e?.response?.message, {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
            autoClose: 3000,
          })
        );
    },
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC2vqKZENQKg4GeP6H1UdmcR6hsirXY0Ho",
    libraries: ["places"],
  });

  const theme = useTheme();
  console.log("formik nedir", formik.values);
  return (
    <>
      <div className=" mt-3">
        <p className="text-24-700-yellow">{t("createBlog.shareText")}</p>
      </div>
      <div className="">
        <div className="d-flex flex-column gap-4">
          <div className="row mt-4 align-items-center justify-content-between">
            <div className="col-md-6">
              <p className="text-16-600 mb-2">{t("blogDetail.country")}</p>
              <Select
                variant="standard"
                id="country"
                name="country"
                value={formik.values.country && formik.values.country}
                onChange={formik.handleChange}
                className="my-input">
                {countryJSON.map((item: any, index: number) => (
                  <MenuItem
                    onClick={() => {
                      formik.setFieldValue(
                        "flagImage",
                        `data:image/png;base64,${item.flag}`
                      );
                    }}
                    key={index}
                    value={item.name}>
                    <div className="d-flex gap-3">
                      <img src={`data:image/png;base64,${item.flag}`} alt="" />
                      <span>{item.name}</span>
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="col-md-6">
              <p className="text-16-600 mb-2">{t("blogDetail.price")}</p>
              <OutlinedInput
                type="text"
                name="approximatelyPrice"
                onChange={formik.handleChange}
                value={formik.values.approximatelyPrice}
                endAdornment={
                  <InputAdornment
                    position="end"
                    className={`${theme} input-adornment-text`}>
                    |
                    <Box
                      sx={{
                        ".MuiInputBase-root": {
                          svg: {
                            right: "-12px",
                          },
                          fieldset: {
                            border: "none",
                          },
                        },
                      }}>
                      <FormControl>
                        <Select
                          name="currency"
                          inputProps={{
                            MenuProps: { disableScrollLock: true },
                          }}
                          className="mui-select-color"
                          value={formik.values.currency}
                          onChange={formik.handleChange}
                          displayEmpty
                          variant="outlined"
                          renderValue={(params) => <span>{params}</span>}>
                          {stockData.map((elm: string, index: number) => (
                            <MenuItem key={index} value={elm}>
                              {elm}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </InputAdornment>
                }
                sx={{
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#F9B34F",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#F9B34F",
                  },
                  width: "100%",
                }}
                className=" ht-50 "
                placeholder={t("blogDetail.enterFee")}
                aria-describedby="basic-addon2"
              />
            </div>
          </div>
          <div className="row mt-4 align-items-center justify-content-between">
            <div className="col-md-6">
              <p className="text-16-600 mb-2">{t("blogDetail.mainImage")}</p>
              <FileUploadComponent
                formik={formik}
                whichField={"placeImage"}
                componentKey={"placeImage"}
              />
            </div>
            <div className="col-md-6">
              <p className="text-16-600 mb-2">{t("blogDetail.detailImages")}</p>
              <MultipleFileUploadComponent
                formik={formik}
                whichField={"placeImageDetails"}
                componentKey={"placeImageDetails"}
              />
            </div>
          </div>
          <div className="mt-2"></div>
          <p className="text-16-600 ">Başlık</p>
          <OutlinedInput
            type="text"
            name="blogName"
            onChange={formik.handleChange}
            value={formik.values.blogName}
            sx={{
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#F9B34F",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#F9B34F",
              },
              width: "100%",
            }}
            className=" ht-50 "
            placeholder={t("blogDetail.enterFee")}
            aria-describedby="basic-addon2"
          />
          <p className="text-16-600 ">Blog Yazısı</p>
          <ReactQuill
            id="brandIntro"
            placeholder="Dilediğiniz gibi seyehatlerinizi anlatın."
            className={`${theme} ql-container ql-toolbar ql-picker `}
            theme="snow"
            modules={modules}
            value={formik.values.blogText || ""}
            onChange={(content, delta, source, editor) => {
              formik.setFieldValue("blogText", content);
            }}
          />
        </div>

        {!isLoaded ? "Loading..." : <Map formik={formik} />}

        <button className="btn-pill-v2 " onClick={() => formik.handleSubmit()}>
          {t("button.submit")}
        </button>
      </div>
    </>
  );
}

export default CreateBlogComponent;

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ size: [] }],
    [{ font: [] }],
    [{ align: ["right", "center", "justify"] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ color: [] }, { background: [] }], // Renk seçimi ve arkaplan renk seçimi için bu satırı ekledik
  ],
};

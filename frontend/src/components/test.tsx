import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

import { useLoadScript } from "@react-google-maps/api";

import "@reach/combobox/styles.css";
import { MenuItem, Select } from "@mui/material";

import Map from "../components/Map/Map";
import countryJSON from "../../public/gistfile1.json";

import { useFormik } from "formik";
import SettingsContext from "../contexts/SettingsContext";

function CompanyInfo() {
  const { settingsData } = useContext(SettingsContext);

  console.log("settingsData", settingsData);
  const formik = useFormik({
    initialValues: {
      country: "",
      flagImage: "",
      address: "",
      latitude: "",
      longitude: "",
      placeImage: "",
      placeDetailImages: "",
      approximatelyPrice: "",
    },

    onSubmit: async (values) => {
      const createCompanyReqBody = {
        country: formik.values.country,
        flagImage: formik.values.flagImage,
        address: formik.values.address,
        lat: Number(formik.values.latitude),
        lng: Number(formik.values.longitude),
        authorName: settingsData.fullName,
        placeImage: formik.values.placeImage,
        placeImageDetails: formik.values.placeDetailImages,
        approximatelyPrice: formik.values.approximatelyPrice,
      };
      //   companyData
      //     ? await ApiRequest.companyUpdate(account, createCompanyReqBody)
      //         .then(() => {})
      //         .catch((e) => console.error("Update Company Error :", e))
      //     : await ApiRequest.companyCreate(createCompanyReqBody)
      //         .then((res) => {})
      //         .catch((e) => console.error("Create Company Error :", e));
    },
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC2vqKZENQKg4GeP6H1UdmcR6hsirXY0Ho",
    libraries: ["places"],
  });

  // useEffect(() => {
  //   setUserAccount(userAccount);
  //   if (!companyData) {
  //     ApiRequest.getCompany(account).then((res) =>
  //       setFetchedCompanyData(res.data)
  //     );
  //   }
  // }, [account, companyData, userAccount]);

  useEffect(() => {
    // Eğer formik değeri gelirse, Select bileşenine set et

    // formik.setFieldValue("country", formik.values.country);
    console.log("formik nedir", formik.values);
  }, [formik.values]);

  return (
    <>
      <div className="warning-container mt-5">
        <p className="warning-text">
          Filling in company information is mandatory for offset creation.
          Please fill in the required fields.
        </p>
      </div>
      <div className="mt-4 my-container">
        <div className="create-company-container">
          <div className="create-company-inputs">
            <p className="input-text">Country</p>
            <Select
              variant="standard"
              id="country"
              name="country"
              value={formik.values.country && formik.values.country}
              onChange={formik.handleChange}
              className="select-container-country">
              {countryJSON.map((item: any, index: number) => (
                <MenuItem
                  onClick={() => {
                    formik.setFieldValue(
                      "flagImage",
                      `data:image/png;base64,${item.flag}`
                    );
                  }}
                  style={{ maxHeight: "200px" }}
                  key={index}
                  value={item.name}>
                  <div className="menu-item-container-2">
                    <img src={`data:image/png;base64,${item.flag}`} alt="" />
                    <span className="menuImage">{item.name}</span>
                  </div>
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>

        {!isLoaded ? "Loading..." : <Map formik={formik} />}
      </div>
    </>
  );
}

export default CompanyInfo;

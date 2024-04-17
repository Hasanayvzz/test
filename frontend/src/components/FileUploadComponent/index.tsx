import React, { useState } from "react";

import { Col } from "react-bootstrap";
import { useTheme } from "../../contexts/Theme/ThemeContext";
import get from "lodash/get";

const FileUploadComponent = ({ formik, whichField, componentKey }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [isFileUploadEnabled, setIsFileUploadEnabled] = useState(true);
  const theme = useTheme();
  const convertFileToBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const uploadFile = async (file) => {
    console.log("file", file);
    try {
      const fileBase64 = await convertFileToBase64(file);
      formik.setFieldValue(whichField, fileBase64);
    } catch (error) {
      console.error("Dosya yükleme hatası:", error);
    }
  };

  const handleDeleteFile = () => {
    setIsFileUploadEnabled(false);
    const updatedFile = "";
    formik.setFieldValue(whichField, updatedFile);
    setTrigger(!trigger);
    setTimeout(() => {
      setIsFileUploadEnabled(true);
    }, 1000);
  };

  const handleUploadFile = async (file) => {
    if (file) {
      await uploadFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
    e.target.classList.add("drag-over");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    e.target.classList.remove("drag-over");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const acceptedFile = e.dataTransfer.files[0];
    if (acceptedFile) {
      handleUploadFile(acceptedFile);
      setIsDragOver(false);
      e.target.classList.remove("drag-over");
    }
  };

  const fieldValue = get(formik.values, whichField);

  return (
    <Col
      className={
        isDragOver
          ? `drag-over borderInput ${theme.theme}`
          : `borderInput ${theme.theme}`
      }
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={(e) => handleDrop(e)}>
      <div className="drop-container">
        <label
          className={"fileUploadLabel drop-label"}
          htmlFor={`${isFileUploadEnabled ? componentKey : ""}`}>
          {fieldValue ? (
            <div className="d-flex gap-2 justify-content-center align-items-start">
              <img
                style={{ maxHeight: 150, maxWidth: 150, borderRadius: 12 }}
                src={fieldValue}
                alt=""
              />
              <div>
                <img
                  onClick={handleDeleteFile}
                  src="/images/icons/bus-delete.png"
                  alt=""
                  style={{ maxHeight: 30, maxWidth: 30 }}
                />
              </div>
            </div>
          ) : (
            <>
              <div className="d-flex flex-column gap-2 p-5 align-items-center">
                <p className={`${theme.theme} text-14-600`}>
                  Drop an image here
                </p>
                <p className="text-14-400-gray">or</p>
                <div className={`${theme.theme} file-btn`}>
                  <img src="/images/icons/clip-ic.svg" alt="" />
                  <p>Choose file</p>
                </div>
                <p className="text-14-400-gray-2">
                  It must be a JPG, PNG, GIF, TIFF, or BMP, no larger than 2 MB
                </p>
                <p className="text-14-400-gray-2">
                  Dimensions must be 1200x800 px
                </p>
              </div>
            </>
          )}
        </label>

        <input
          id={`${isFileUploadEnabled ? componentKey : ""}`}
          type="file"
          name={``}
          style={{ display: "none" }}
          accept="image/"
          onChange={(e) => {
            uploadFile(e.target.files && e.target.files[0]);
          }}
        />
      </div>
    </Col>
  );
};

export default FileUploadComponent;

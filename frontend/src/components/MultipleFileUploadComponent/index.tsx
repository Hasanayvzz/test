import React, { useState } from "react";
import { ApiRequest } from "../../pages/api";
import { Col } from "react-bootstrap";
import { useTheme } from "../../contexts/Theme/ThemeContext";

const MultipleFileUploadComponent = ({ formik, whichField, componentKey }) => {
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
  const uploadFiles = async (files) => {
    try {
      let uploadedFiles = []; // Başarılı yüklenen dosyaların listesi
      for (const file of files) {
        const fileBase64 = await convertFileToBase64(file);
        uploadedFiles.push(fileBase64);
      }

      formik.setFieldValue("placeImageDetails", [
        ...formik.values.placeImageDetails,
        ...uploadedFiles,
      ]);
      setTrigger(!trigger);
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

  const handleUploadFile = async (files) => {
    if (files && files.length > 0) {
      await uploadFiles(files);
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
    const acceptedFiles = e.dataTransfer.files;
    if (acceptedFiles && acceptedFiles.length > 0) {
      handleUploadFile(acceptedFiles);
      setIsDragOver(false);
      e.target.classList.remove("drag-over");
    }
  };

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
          style={{
            maxHeight: "500px",
            overflowY: "scroll",
            overflowX: "hidden",
          }}
          className={
            "fileUploadLabel drop-label d-flex flex-column gap-2 justify-content-center align-items-center w-100"
          }
          htmlFor={`${isFileUploadEnabled ? componentKey : ""}`}>
          {formik.values.placeImageDetails.length ? (
            <>
              {formik.values.placeImageDetails.map((elm) => (
                <div key={elm}>
                  <img
                    className="mx-1"
                    style={{ maxHeight: 120, maxWidth: 120, borderRadius: 12 }}
                    src={elm}
                    alt=""
                  />
                </div>
              ))}
              <div>
                <img
                  onClick={handleDeleteFile}
                  src="/images/icons/bus-delete.png"
                  alt=""
                  style={{ maxHeight: 30, maxWidth: 30 }}
                />
              </div>
            </>
          ) : (
            <>
              <div className="d-flex flex-column gap-2  align-items-center">
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
          accept="image/*"
          multiple
          onChange={(e) => {
            handleUploadFile(e.target.files);
          }}
        />
      </div>
    </Col>
  );
};

export default MultipleFileUploadComponent;

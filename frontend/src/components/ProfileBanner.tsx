import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import FileUploadComponent from "./FileUploadComponent";
import { useFormik } from "formik";
import { LoaderContext } from "../contexts/loaderContext";
import { ApiRequest } from "../pages/api";
import { toast } from "react-toastify";
import AuthContext from "../contexts/AuthContext";
import SettingsContext from "../contexts/SettingsContext";
import { useTranslation } from "react-i18next";

const ProfileBanner = ({ data }: any) => {
  const [imageModal, setImageModal] = useState(false);
  const { user } = useContext(AuthContext);
  const { settingsData } = useContext(SettingsContext);
  const { handleLoading } = useContext(LoaderContext);
  const { t } = useTranslation();
  const handleOpenAddImageModal = () => {
    setImageModal(true);
  };

  const formik = useFormik({
    initialValues: {
      profileImage: "",
    },

    onSubmit: async (values) => {
      handleLoading(true);

      const addImageBody = {
        userId: user,
        profileImage: formik.values.profileImage,
      };

      await ApiRequest.addImage(addImageBody)
        .then(() => {
          handleLoading(false);
          toast.success("Profile Image Added", {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
            autoClose: 3000,
          });
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

  const handleCloseAddImageModal = () => {
    setImageModal(false);
  };
  return (
    <div className=" ">
      <div
        className="d-flex flex-column gap-4 justify-content-center align-items-center  "
        style={{
          height: "40vh",
          width: "100%",
          backgroundSize: "100% 100%",

          backgroundRepeat: "no-repeat",
          backgroundImage: `url(/profile-banner.png)`,
        }}>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundSize: "100% 100%",
            objectFit: "cover",
            borderRadius: 12,
            backgroundImage: `url(${settingsData?.profileImage})`,
            position: "relative",
          }}>
          <img
            onClick={handleOpenAddImageModal}
            style={{ position: "absolute", top: "80px", left: "70px" }}
            src="/edic-ic.svg"
            alt=""
            className="pointer"
          />
        </div>

        <p className="text-32-600-white">{settingsData?.fullName}</p>
      </div>

      {/* <div className="properties-bg">
        <img src={data.displayImage} />
      </div> */}
      <Modal
        centered
        show={imageModal}
        onHide={handleCloseAddImageModal}
        style={{ zIndex: "9999" }}>
        <Modal.Header closeButton style={{ border: "0px" }}></Modal.Header>

        <Modal.Body>
          <p className="text-24-700">{t("profile.profileImage")}</p>
          <FileUploadComponent
            formik={formik}
            componentKey={"profileImage"}
            whichField={"profileImage"}
          />

          <button
            className="btn-pill-v2 mt-5"
            onClick={() => formik.handleSubmit()}>
            {t("button.submit")}
          </button>
        </Modal.Body>

        <Modal.Footer style={{ border: "0px", padding: 10 }}></Modal.Footer>
      </Modal>
    </div>
  );
};
export default ProfileBanner;

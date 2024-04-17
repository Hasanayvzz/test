import React, { useContext, useEffect, useState } from "react";

import {
  AccordionDetails,
  AccordionSummary,
  Typography,
  Accordion,
  Rating,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Card, Modal } from "react-bootstrap";
import { useRouter } from "next/router";
import Header from "../../components/header";
import Loader from "../../components/Loader";
import HTHOffsetDetail from "../../components/HTHOffsetDetail";
import DetailMap from "../../components/Map/DetailMap";
import ImageSlider from "../../components/Slider";
import Footer from "../../components/Footer";
import { useLoadScript } from "@react-google-maps/api";
import { useTheme } from "../../contexts/Theme/ThemeContext";
import { ApiRequest } from "../../pages/api";
import { LoaderContext } from "../../contexts/loaderContext";
import { useTranslation } from "react-i18next";

import CommentList from "../../components/Comment";
import CommentForm from "../../components/CommentForm";
function PropertyDetail() {
  const StyledRating = withStyles({
    iconFilled: {
      color: "#FFD700", // Dolu yıldız rengi
    },
    iconEmpty: {
      color: "#C0C0C0", // Boş yıldız rengi
    },
  })(Rating);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { t } = useTranslation();
  const [blogDetail, setBlogDetail] = useState<any>();
  const { handleLoading } = useContext(LoaderContext);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "", // Replace with your API key
    libraries: ["places"],
  });
  useEffect(() => {
    handleLoading(true);
    ApiRequest.getBlogById(window.location.pathname.slice(7))
      .then((res) => {
        setBlogDetail(res.blog);
        handleLoading(false);
      })
      .catch((e) => {
        handleLoading(false);
      });
  }, []);

  const sliderData = blogDetail?.placeImageDetails.map((image: any) => {
    return {
      image: image,
    };
  });

  const theme = useTheme();
  const [value, setValue] = useState<any>();
  const [previewModal, setPreviewModal] = useState(false);

  const handleOpenPreviewModal = () => {
    setPreviewModal(true);
  };
  const handleClosePreviewModal = () => {
    setPreviewModal(false);
  };
  const [comments, setComments] = useState([]);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };
  return (
    <>
      {<Header />}
      {loading ? (
        <Loader />
      ) : (
        <>
          <HTHOffsetDetail />
          <div className=" ">
            <div className="container">
              <div style={{ justifyContent: "center" }} className="row">
                <div className=" mb-5" style={{ paddingTop: 50 }}>
                  <div className="preview-grid">
                    {blogDetail?.placeImageDetails &&
                      blogDetail?.placeImageDetails.map(
                        (image: any, index: number) => (
                          <div
                            style={{ cursor: "pointer" }}
                            onClick={handleOpenPreviewModal}
                            key={index}
                            className="icon-cnt">
                            <div
                              className="preview-container"
                              style={{
                                borderRadius: 5,
                                backgroundImage: `url(${image})`,
                              }}></div>
                          </div>
                        )
                      )}
                  </div>
                  <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "75px" }}>
                    <p className="property-detail-name-text">
                      {/* {propertyDetail.name} */}
                    </p>
                    {/* <p className="property-detail-name-text">sa</p> */}
                  </div>
                  <div className="d-flex justify-content-between ">
                    <p className="text-24-700">
                      {t("blogDetail.publishedOn")}{" "}
                      {new Date(blogDetail?.date).toLocaleDateString()}
                    </p>

                    <StyledRating name="customized-color" value={0} />
                  </div>
                  <p className="text-16-400-blue " style={{ flex: 1 }}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blogDetail?.blogText,
                      }}></div>
                  </p>

                  <Accordion
                    defaultExpanded
                    style={{
                      backgroundColor: theme.theme === "light" ? "" : "#333",
                      marginTop: "50px",
                      borderRadius: 12,
                    }}>
                    <AccordionSummary
                      style={{
                        backgroundColor: theme.theme === "light" ? "" : "#333",
                        borderRadius: 12,
                      }}
                      className="p-0"
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                      expandIcon={<ExpandMoreIcon />}>
                      <Typography className={"desc-head px-4 py-0"}>
                        <p style={{ fontSize: 24 }} className="gradient-text">
                          {t("blogDetail.location")}
                        </p>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      className="offset-description-text"
                      style={{
                        backgroundColor: theme.theme === "light" ? "" : "#333",
                        borderRadius: 12,
                      }}>
                      <div className={`  ${theme.theme}`}>
                        <DetailMap
                          isLoaded={isLoaded}
                          loadError={loadError}
                          lat={blogDetail?.lat}
                          lng={blogDetail?.lng}
                        />
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <p style={{ fontSize: 24 }} className="gradient-text">
                    {t("blogDetail.comments")}
                  </p>
                  <div className="mt-5"></div>
                </div>
              </div>
              <Modal
                size="xl"
                centered
                show={previewModal}
                onHide={handleClosePreviewModal}
                style={{ zIndex: "9999" }}>
                <Modal.Header
                  closeButton
                  style={{ border: "0px" }}></Modal.Header>

                <Modal.Body>
                  <ImageSlider
                    slides={sliderData}
                    SliderData={sliderData}></ImageSlider>
                </Modal.Body>

                <Modal.Footer
                  style={{ border: "0px", padding: 10 }}></Modal.Footer>
              </Modal>
              <div>
                <div className="col-md-6">
                  <p className="text-24-700 mb-5">Comments</p>
                  <CommentList comments={comments} />
                  <CommentForm onAddComment={handleAddComment} />
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
}

export default PropertyDetail;

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
import { recommendJSON } from "../../recommendJSON";
import AuthContext from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import SettingsContext from "../../contexts/SettingsContext";
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
  const { t } = useTranslation();
  const [text, setText] = useState();
  const [blogDetail, setBlogDetail] = useState<any>();
  const { handleLoading } = useContext(LoaderContext);
  const [recommendData, setRecommendData] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [averageRating, setAverageRating] = useState(0);
  const [updatedBlog, setUpdatedBlog] = useState<any>();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "",
    libraries: ["places"],
  });
  useEffect(() => {
    handleLoading(true);
    ApiRequest.getBlogById(window.location.pathname.slice(7))
      .then((res) => {
        const stars = res?.blog?.stars;
        if (stars.length > 0) {
          const total = stars.reduce((sum, star) => sum + star.amount, 0);
          const average = total / stars.length;
          setAverageRating(average);
        }
        setBlogDetail(res.blog);
        handleLoading(false);
      })
      .catch((e) => {
        handleLoading(false);
      });
  }, [trigger]);

  useEffect(() => {
    if (blogDetail) {
      ApiRequest.recommend({
        input_city: blogDetail.city,
      })
        .then((res) => {
          setRecommendData(res.result);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [blogDetail]);

  const sliderData = blogDetail?.placeImageDetails.map((image: any) => {
    return {
      image: image,
    };
  });
  const { settingsData } = useContext(SettingsContext);
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
    ApiRequest.addComment({
      userId: user,
      blogId: blogDetail._id,
      text: text,
      name: settingsData?.fullName,
    }).then((res) => {
      setTrigger(!trigger);
    });
  };

  const { user } = useContext(AuthContext);
  const handleRatingChange = async (event, newValue) => {
    if (user) {
      ApiRequest.addStar({
        blogId: blogDetail._id,
        userId: user,
        amount: newValue,
      })
        .then((res) => {
          toast.success("Blog puanlaması başarıyla güncellendi", {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
            autoClose: 3000,
          });
          setTrigger(!trigger);
        })
        .catch((e) => console.log("err", e));
    } else {
      toast.error("Lütfen giriş yapınız.", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        autoClose: 3000,
      });
    }
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
                            className="icon-cnt"
                          >
                            <div
                              className="preview-container"
                              style={{
                                borderRadius: 5,
                                backgroundImage: `url(${image})`,
                              }}
                            ></div>
                          </div>
                        )
                      )}
                  </div>
                  <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "75px" }}
                  >
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

                    <StyledRating
                      name="customized-color"
                      value={averageRating}
                      onChange={handleRatingChange}
                    />
                  </div>
                  <p className="text-16-400-blue " style={{ flex: 1 }}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blogDetail?.blogText,
                      }}
                    ></div>
                  </p>

                  <p className="text-24-700-yellow mt-5">
                    Bir Sonraki Durağınız olabilir
                  </p>
                  <p className="mt-3">
                    İncelendiğiniz konuma yakın olan gezilecek yerlere göre
                    oluşturulan tavsiyelerdir
                  </p>
                  <div className="wrapper">
                    {recommendData.map((elm) => {
                      const matchedCity = recommendJSON.find(
                        (item) => item.city === elm
                      );

                      if (matchedCity) {
                        return (
                          <div className="recommender-card" key={elm.city}>
                            <img src={matchedCity.image} alt="Dağlar" />
                            <div className="info">
                              <h1>{matchedCity.city}</h1>
                              <p>{matchedCity.title}</p>
                              {/* <button>Daha Fazla Oku</button> */}
                            </div>
                          </div>
                        );
                      } else {
                        return null; // Render nothing if no match found
                      }
                    })}
                  </div>

                  <Accordion
                    defaultExpanded
                    style={{
                      backgroundColor: theme.theme === "light" ? "" : "#333",
                      marginTop: "50px",
                      borderRadius: 12,
                    }}
                  >
                    <AccordionSummary
                      style={{
                        backgroundColor: theme.theme === "light" ? "" : "#333",
                        borderRadius: 12,
                      }}
                      className="p-0"
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
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
                      }}
                    >
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
                </div>
              </div>
              <div>
                <div className="col-md-6">
                  <p className="text-24-700 mb-5">{t("blogDetail.comments")}</p>
                  <CommentList
                    comments={blogDetail?.comments}
                    blogId={blogDetail?._id}
                    trigger={trigger}
                    setTrigger={setTrigger}
                    onAddComment={handleAddComment}
                    text={text}
                    setText={setText}
                    updatedBlog={updatedBlog}
                    setUpdatedBlog={setUpdatedBlog}
                  />
                  {!updatedBlog && (
                    <CommentForm
                      onAddComment={handleAddComment}
                      text={text}
                      setText={setText}
                    />
                  )}
                </div>
              </div>
              <Modal
                size="xl"
                centered
                show={previewModal}
                onHide={handleClosePreviewModal}
                style={{ zIndex: "9999" }}
              >
                <Modal.Header
                  closeButton
                  style={{ border: "0px" }}
                ></Modal.Header>

                <Modal.Body>
                  <ImageSlider
                    slides={sliderData}
                    SliderData={sliderData}
                  ></ImageSlider>
                </Modal.Body>

                <Modal.Footer
                  style={{ border: "0px", padding: 10 }}
                ></Modal.Footer>
              </Modal>
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
}

export default PropertyDetail;

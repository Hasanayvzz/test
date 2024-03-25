import React, { useContext, useEffect, useState } from "react";

import {
  AccordionDetails,
  AccordionSummary,
  Typography,
  Accordion,
} from "@mui/material";
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
import CompanyInfo from "../../components/test";
import AuthContext from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/Theme/ThemeContext";
import Map from "../../components/Map/Map";

function PropertyDetail() {
  const [propertyDetail, setPropertyDetail] = useState<any>([]);
  const id = localStorage.getItem("propertyId");
  const { itemData } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(false);

  const [createBlogModal, setCreateBlogModal] = useState<boolean>(false);

  const router = useRouter();
  const handleCreateBlogOpen = () => {
    setCreateBlogModal(true);
  };
  const handleCreateBlogClose = () => {
    setCreateBlogModal(false);
  };

  console.log("propertydetail", propertyDetail);
  const sliderData = propertyDetail?.images?.map((image: any) => {
    return {
      image: image.file,
    };
  });

  console.log("slider DAta", sliderData);
  console.log(propertyDetail);

  console.log("item ne", itemData);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC2vqKZENQKg4GeP6H1UdmcR6hsirXY0Ho",
    libraries: ["places"],
  });
  const theme = useTheme();
  return (
    <>
      {<Header />}
      {loading ? (
        <Loader />
      ) : (
        <>
          <HTHOffsetDetail data={itemData} />
          <div className=" ">
            <div className="container">
              <div style={{ justifyContent: "center" }} className="row">
                <div className=" mb-5" style={{ paddingTop: 50 }}>
                  <div className="preview-grid">
                    {propertyDetail.images &&
                      propertyDetail.images.map((image: any, index: number) => (
                        <div
                          style={{ cursor: "pointer" }}
                          //   onClick={handleInvestModalOpen}
                          key={index}
                          className="icon-cnt">
                          <div
                            className="preview-container"
                            style={{
                              borderRadius: 5,
                              backgroundImage: `url(${image.file})`,
                            }}></div>
                        </div>
                      ))}
                  </div>
                  <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "75px" }}>
                    <p className="property-detail-name-text">
                      {propertyDetail.name}
                    </p>
                    {/* <p className="property-detail-name-text">sa</p> */}
                  </div>
                  <div className="d-flex justify-content-between mt-4">
                    <p className="text-sm">Published on {"15/11/2024"}</p>
                    {/* <p className="text-sm">sa</p> */}
                  </div>
                  <Accordion
                    defaultExpanded
                    style={{ background: "#fff", marginTop: "50px" }}>
                    <AccordionSummary
                      className="p-0"
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                      expandIcon={<ExpandMoreIcon />}>
                      <Typography className={"desc-head"}>
                        <p style={{ fontSize: 24 }} className="gradient-text">
                          Detaylar
                        </p>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="offset-description-text">
                      <div className={`project-card-container  ${theme.theme}`}>
                        <div
                          className=""
                          style={{
                            backgroundImage: `url(${itemData?.blogImage})`,
                            width: "100%",
                            height: 225,
                            backgroundSize: "100% 100%",
                            backgroundRepeat: "no-repeat",
                            borderRadius: 8,
                          }}></div>

                        <div className="d-flex gap-3 align-items-center">
                          <div
                            style={{
                              backgroundImage: `url(${itemData?.leading})`,
                              backgroundSize: "100% 100%",
                              width: "56px",
                              height: 56,
                              borderRadius: 99,
                            }}></div>
                          <p className={` project-text ${theme.theme}`}>
                            {itemData?.blogName}
                          </p>
                        </div>

                        <div className={`project-detail p-2 ${theme.theme}`}>
                          <div
                            className={`d-flex justify-content-between align-items-center gap-1 ${theme.theme}`}>
                            <p
                              className={`${theme.theme} project-detail-text-head`}>
                              Star
                            </p>
                            <div className="d-flex gap-1 align-items-center">
                              <img src={`${itemData?.leadImg}`} alt="" />
                              <p
                                className={`${theme.theme} project-detail-text`}>
                                {itemData?.star}
                              </p>
                            </div>
                          </div>
                          <div
                            className={`d-flex justify-content-between align-items-center gap-1 ${theme.theme}`}>
                            <p
                              className={`${theme.theme} project-detail-text-head`}>
                              Country
                            </p>

                            <p className={`${theme.theme} project-detail-text`}>
                              {itemData?.country}
                            </p>
                          </div>
                          <div
                            className={`d-flex justify-content-between align-items-center gap-1 ${theme.theme}`}>
                            <p
                              className={`${theme.theme} project-detail-text-head`}>
                              Approximately Price
                            </p>

                            <p className={`${theme.theme} project-detail-text`}>
                              {itemData?.approximatelyPrice}
                            </p>
                          </div>
                          <div
                            className={`d-flex justify-content-between align-items-center gap-1 ${theme.theme}`}>
                            <p
                              className={`${theme.theme} project-detail-text-head`}>
                              Author
                            </p>

                            <p className={`${theme.theme} project-detail-text`}>
                              {itemData?.author}
                            </p>
                          </div>
                          <div
                            className={`d-flex justify-content-between align-items-center gap-1 ${theme.theme}`}>
                            <p
                              className={`${theme.theme} project-detail-text-head`}>
                              Date
                            </p>

                            <p className={`${theme.theme} project-detail-text`}>
                              {itemData?.date}
                            </p>
                          </div>
                        </div>

                        {/* <p
                          className="btn-pill-v2"
                          onClick={() => {
                            setItemData(blog);
                            router.push("/item-detail");
                          }}>
                          Detay
                        </p> */}
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion defaultExpanded style={{ background: "#fff" }}>
                    <AccordionSummary
                      className="p-0"
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                      expandIcon={<ExpandMoreIcon />}>
                      <Typography className={"desc-head"}>
                        <p style={{ fontSize: 24 }} className="gradient-text">
                          Konumu
                        </p>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="offset-description-text">
                      <CompanyInfo />
                    </AccordionDetails>
                  </Accordion>
                </div>

                {/* <div className="col-md-4 ">
                  <Card
                    style={{ backgroundColor: "#FFF0EB" }}
                    className=" w-100 sticky-comp  ml-2 p-4 mt-5">
                    <Card.Body className="invest-card-content">
                      <p className="btn-pill-v1" onClick={handleCreateBlogOpen}>
                        Create New Travel
                      </p>
                      <div
                        style={{
                          borderBottom: "2px solid #bdbdbd",
                          width: "100%",
                        }}></div>
                      <p style={{ fontWeight: "bold" }} className="lists-text">
                        Contact the Fund Manager
                      </p>

                      <img src="/images/icons/circle-avatar.svg" alt="" />
                      <p className="lists-text">Denise Hutchinson, PA</p>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="my-input form-control"
                      />
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="my-input form-control"
                      />
                      <input
                        type="text"
                        placeholder="Your email address"
                        className="my-input form-control"
                      />
                      <input
                        type="text"
                        placeholder="Your message"
                        className="my-input form-control"
                      />

                      <button className="btn-rounded-v11 mt-4">
                        <span className="gradient-text">Send Inquiry</span>
                      </button>
                    </Card.Body>
                  </Card>
                </div> */}
              </div>
              {/* <Modal
                size="xl"
                centered
                show={createBlogModal}
                onHide={handleCreateBlogClose}
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
              </Modal> */}
              <Modal
                size="xl"
                centered
                show={createBlogModal}
                onHide={handleCreateBlogClose}
                style={{ zIndex: 1199 }}>
                <Modal.Header closeButton style={{ border: "0px" }}>
                  Create New Travel
                </Modal.Header>

                <Modal.Body>
                  <p>create blog here</p>

                  <CompanyInfo></CompanyInfo>
                </Modal.Body>

                <Modal.Footer
                  style={{ border: "0px", padding: 10 }}></Modal.Footer>
              </Modal>
            </div>
          </div>
          {/* <CompanyInfo /> */}

          <Footer />
        </>
      )}
      {/* <ProjectDescription data={projectDetail} />
      <div className="container mt-5">
        <ProjectTabs data={projectDetail} />
      </div> */}
    </>
  );
}

export default PropertyDetail;

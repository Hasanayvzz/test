import React, { useContext, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import AboutIcon from "../../../../public/img/about/question.svg";
import flyIc from "../../../../public/fly-ic.svg";
import Footer from "../../../components/Footer";
import ScrollToTop from "react-scroll-to-top";
import flyIcon from "../../../../public/favi.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useTheme } from "../../../contexts/Theme/ThemeContext";
import { useTranslation } from "react-i18next";
import Header from "../../../components/header";
import WhiteLogo from "../../../../public/img/logo/white-logo.svg";
import DarkLogo from "../../../../public/img/logo/dark-logo.svg";
import BlogCard from "../../../components/Blogcard";
import { ApiRequest } from "../../../pages/api";
import Loader from "../../../components/Loader";
import SettingsContext from "../../../contexts/SettingsContext";
import AuthContext from "../../../contexts/AuthContext";
import { Modal } from "react-bootstrap";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import ChatAIComponent from "../../../components/AIChat";

function HomePage() {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();
  const [blogs, setBlogs] = useState([]);
  const [aiModal, setAiModal] = useState(false);
  const [trigger, setTrigger] = useState<boolean>(false);
  const [myFavorites, setMyFavorites] = useState([]);
  const { user } = useContext(AuthContext);
  const { settingsData } = useContext(SettingsContext);
  const [place, setPlace] = useState<any>();
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, [blogs]);

  useEffect(() => {
    ApiRequest.getAllWithoutPlaceImages().then((res) => {
      setBlogs(res.blogs);
    });
  }, []);
  const handleCloseAiModal = () => {
    setAiModal(false);
  };

  useEffect(() => {
    user &&
      ApiRequest.getMyFavorites({
        userId: user,
      })
        .then((res) => {
          setMyFavorites(res.favoriteBlogs);
        })
        .catch((e) => console.log("error", e));
  }, [trigger]);

  return (
    <>
      <ScrollToTop color="#fff" smooth style={{ backgroundColor: "#F9B34E" }} />
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className={`text-center hero ${theme}`}>
        <Header page="landing" />

        <div dangerouslySetInnerHTML={{ __html: place && place }}></div>
        <div className="container-xxl mt-5 pt-5 sticky-comp">
          <div className="banner-content" data-aos="zoom-in">
            <h1>{t("hero.title")} </h1>
            <div className="d-flex gap-2 align-items-center">
              <button className="btn-get-register scrollto button button--aylen button--border-thick button--inverted button--text-upper button--size-s">
                <a href="/all-blogs" className="white-color">
                  {t("hero.startButton")}
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Hero --> */}
      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className={`about ${theme}`}>
          <div className="container-xxl">
            <div className="gap-5  about-box" style={{ padding: "120px 0" }}>
              <div className="section-title" data-aos="zoom-in-down">
                <div className="d-flex  gap-2 mb-3">
                  <Image src={AboutIcon} className="img-fluid" alt="" />

                  <h5 className="section-colored-title">{t("about.about")}</h5>
                </div>
                <h2>
                  <div className="img-container-logo">
                    {t("about.aboutTitle")}{" "}
                    {theme === "dark" ? (
                      <a href="/" className="logo">
                        <img
                          src={WhiteLogo.src}
                          alt="white-logo"
                          className="img-fluid"
                        />
                      </a>
                    ) : (
                      <a href="/" className="logo">
                        <img
                          src={DarkLogo.src}
                          alt="light-logo"
                          className="img-fluid"
                        />
                      </a>
                    )}
                  </div>
                </h2>
                <p>{t("about.aboutDetail")}</p>
              </div>
              <div className="grid-container">
                <div className="about-section-content-wrapper grid-item">
                  <div
                    className="about-section-left  pt-4 pt-lg-0 order-2 order-lg-1 content justify-content-around"
                    data-aos="fade-right"
                  >
                    <Image src={flyIc} alt="" />
                    <div className="about-content-box">
                      <div className="about-content-sub-box">
                        <h4>{t("about.applyTitle")}</h4>
                        <p className="about-content-sub-box-text">
                          {t("about.applyDetail")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="about-section-content-wrapper grid-item">
                  <div
                    className="about-section-left  pt-4 pt-lg-0 order-2 order-lg-1 content justify-content-center"
                    data-aos="fade-right"
                  >
                    <Image src={flyIc} alt="" />
                    <div className="about-content-box">
                      <div className="about-content-sub-box">
                        <h4>{t("about.purpose")}</h4>
                        <p className="about-content-sub-box-text">
                          {t("about.purposeDetail")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-section-content-wrapper grid-item">
                  <div
                    className="about-section-left  pt-4 pt-lg-0 order-2 order-lg-1 content justify-content-around"
                    data-aos="fade-right"
                  >
                    <Image src={flyIc} alt="" />
                    <div className="about-content-box">
                      <div className="about-content-sub-box">
                        <h4> {t("about.siteMessage")}</h4>
                        <p className="about-content-sub-box-text">
                          {t("about.messageDetail")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- =======  Section ======= --> */}
        <section id="" className={`portfolio ${theme}`}>
          <div className="container-xxl">
            <div className="section-title" data-aos="zoom-in-down">
              <div className="d-flex  gap-2 mb-3">
                <Image src={flyIcon} className="img-fluid" alt="" />
                <h5 className="section-colored-title">
                  {" "}
                  {t("project.projects")}
                </h5>
              </div>
              <h2>
                {" "}
                {theme === "dark" ? (
                  <a href="/" className="logo">
                    <img
                      src={WhiteLogo.src}
                      alt="white-logo"
                      className="img-fluid"
                    />
                  </a>
                ) : (
                  <img
                    src={DarkLogo.src}
                    alt="light-logo"
                    className="img-fluid"
                  />
                )}{" "}
                {t("project.projectTitle")}
              </h2>
            </div>

            <div
              className="projects-container"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              {blogs ? (
                <BlogCard
                  blogData={blogs}
                  favorites={myFavorites}
                  trigger={trigger}
                  setTrigger={setTrigger}
                ></BlogCard>
              ) : (
                <Loader></Loader>
              )}
            </div>
          </div>
        </section>
        <section id="cta" className="ai-cta mb-5">
          <div className="container-xxl" data-aos="zoom-in">
            <div className="text-center">
              <h3>{t("cta.meetOurAi")}</h3>

              <div
                className="btn-get-register mt-5"
                id="button-7"
                onClick={() => setAiModal(true)}
              >
                <div className=""></div>
                <span className="">{t("cta.chatWithAi")}</span>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Portfolio Section --> */}

        {/* <!-- ======= Cta Section ======= --> */}
        <section id="cta" className="cta">
          <div className="container-xxl" data-aos="zoom-in">
            <div className="text-center">
              <h3>{t("cta.cta")}</h3>

              <Link
                className="btn-get-register mt-5"
                href={settingsData ? "/create-new-blog" : "/auth/register"}
                id="button-7"
              >
                <div className="cloud">
                  <Image
                    width={30}
                    height={20}
                    src={flyIcon}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <span className="ms-3">
                  {settingsData ? t("cta.publishBlog") : t("cta.ctaButton")}
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* <!-- End Cta Section --> */}
      </main>
      <Footer />

      <Modal
        fullscreen
        size="xl"
        show={aiModal}
        onHide={handleCloseAiModal}
        style={{ zIndex: "9999" }}
      >
        <Modal.Header closeButton style={{ border: "0px" }}></Modal.Header>

        <Modal.Body className="d-flex align-items-center justify-content-center">
          <ChatAIComponent />
        </Modal.Body>

        <Modal.Footer style={{ border: "0px", padding: 10 }}></Modal.Footer>
      </Modal>
    </>
  );
}

export default HomePage;

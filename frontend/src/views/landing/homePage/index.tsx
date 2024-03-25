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

function HomePage() {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();
  const projectData = [
    {
      blogName: "Muğla/fethiye",
      leading: "/mock/hmn-1.jpg",
      blogImage: "/mock/2.jpeg",
      star: "4",
      country: "Austria",
      approximatelyPrice: "$500-$1000",
      author: "John Snow",
      date: "10/02/2024",
    },
    {
      blogName: "Villa Golden",
      leading: "/mock/hmn-2.png",
      blogImage: "/mock/10.jpeg",
      star: "4",
      country: "England",
      approximatelyPrice: "$500-$1000",
      author: "Lagertha Lothbrok",
      date: "25/01/2024",
    },
    {
      blogName: "Villa Akra",
      leading: "/mock/hmn-3.png",
      blogImage: "/mock/15.jpeg",
      star: "5",
      country: "Austria",
      approximatelyPrice: "$500-$1000",
      author: "Amir Khan",
      date: "12/03/2024",
    },
    {
      blogName: "Villa Akra",
      leading: "/mock/hmn-3.png",
      blogImage: "/1920.jpg",
      star: "5",
      country: "Austria",
      approximatelyPrice: "$500-$1000",
      author: "Amir Khan",
      date: "12/03/2024",
    },
  ];
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <ScrollToTop color="#fff" smooth style={{ backgroundColor: "#F9B34E" }} />
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className={`text-center hero ${theme}`}>
        <Header page="landing" />
        <div className="container-xxl mt-5 pt-5 sticky-comp">
          <div className="banner-content" data-aos="zoom-in">
            <h1>{t("hero.title")} </h1>
            <div className="d-flex gap-2 align-items-center">
              <button className="btn-get-register scrollto button button--aylen button--border-thick button--inverted button--text-upper button--size-s">
                <a href="/launchpad" className="white-color">
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
                    data-aos="fade-right">
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
                    data-aos="fade-right">
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
                    data-aos="fade-right">
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

        {/* <!-- ======= Projects Section ======= --> */}
        <section id="projects" className={`portfolio ${theme}`}>
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
              data-aos-duration="1500">
              <BlogCard blogData={projectData}></BlogCard>
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
                href="/auth/register"
                id="button-7">
                <div id="dub-arrow">
                  <img
                    src="/images/icons/plane.svg"
                    className=" img-fluid"
                    alt=""
                  />
                </div>
                <div className="cloud">
                  <Image
                    width={30}
                    height={20}
                    src={flyIcon}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <span className="ms-3">{t("cta.ctaButton")}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* <!-- End Cta Section --> */}
      </main>
      <Footer />
    </>
  );
}

export default HomePage;

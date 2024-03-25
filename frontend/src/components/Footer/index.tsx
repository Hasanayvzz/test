import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
import DarkLogo from "../../../public/img/token/dark-logo.svg";
import WhiteLogo from "../../../public/img/token/white-logo.svg";
import Image from "next/image";
import Location from "../../../public/img/footer/location.svg";
import Mail from "../../../public/img/footer/email.svg";
import Phone from "../../../public/img/footer/phone.svg";
import { useTheme } from "../../contexts/Theme/ThemeContext";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
function Footer() {
  const router = useRouter();
  const handleErrorMessage = () => {
    toast.error("Please connect Metamask!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const { theme } = useTheme();
  const { t } = useTranslation(["translation"]);

  return (
    //  <!-- ======= Footer ======= -->
    <footer id="footer">
      <div className="footer-top">
        <div className="container-xxl">
          <div className="p-3">
            {theme === "dark" ? (
              <img src={WhiteLogo.src} alt="footer" className="" width={250} />
            ) : (
              <img src={DarkLogo.src} alt="footer" width={250} />
            )}
          </div>
          <div className=" justify-content-between  w-100 align-items-center  d-flex flex-wrap p-3 gap-2">
            <div className="col-lg-4 col-md-4">
              <div className="footer-info  ">
                <p className="">
                  {t("footer.footerDetail")} <br />
                </p>
                <div className="social-links mt-4">
                  <a href="" className="twitter">
                    <img src="/img/footer/gg.svg" />
                  </a>
                  <a href="" className="facebook">
                    {/* <i className="bx bxl-facebook"></i> */}
                    <img src="/img/footer/ff.svg" />
                  </a>
                  <a href="" className="instagram">
                    {/* <i className="bx bxl-instagram"></i> */}
                    <img src="/img/footer/ii.svg" />
                  </a>
                  <a href="" className="linkedin">
                    {/* <i className="bx bxl-linkedin"></i> */}
                    <img src="/img/footer/ll.svg" />
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-contact">
              <h4>{t("footer.contact")}</h4>
              <div>
                <Image src={Location} alt="location" />{" "}
                <span>Konya teknik üniversitesi</span>
              </div>
              <div>
                <Image src={Mail} alt="mail" />
                <span>info@seyehatDüsleri.com</span>
              </div>
              <div>
                <Image src={Phone} alt="phone" />{" "}
                <span>+90 (500) 000-0000</span>
              </div>
            </div>
            <div className="footer-contact">
              <h4 style={{ marginLeft: 0, paddingLeft: 0 }}>
                {t("footer.links")}
              </h4>
              <div>
                <span
                  className="pointer"
                  onClick={() => router.push("/cookie-policy")}>
                  {t("footer.cookies")}
                </span>
              </div>
              <div>
                <span className="pointer" onClick={() => router.push("/kvkk")}>
                  {t("footer.kvkk")}
                </span>
              </div>
              <div>
                <span
                  className="pointer"
                  onClick={() => router.push("/privacy-policy")}>
                  {t("footer.privacyPolicy")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl">
        <div className="copyright">
          <span>{t("footer.copyright")}</span>
        </div>
      </div>
    </footer>
    //   {/* <!-- End Footer --> */}
  );
}

export default Footer;

import React, { useEffect, useLayoutEffect, useState } from "react";
import { useContext } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import WhiteLogo from "../../../public/img/token/white-logo.svg";
import DarkLogo from "../../../public/img/token/dark-logo.svg";
import { ApiRequest } from "../../pages/api";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/Theme/ThemeContext";
import LangTr from "../../../public/img/lang/tr.svg";
import LangEn from "../../../public/img/lang/en.svg";
import Cookies from "js-cookie";
import LANG, { getLangWithKey, ILang } from "../../lang";
import Image from "next/image";
import AuthContext from "../../contexts/AuthContext";
import Link from "next/link";
import SettingsContext from "../../contexts/SettingsContext";

interface IHeader {
  page?: string;
}
const Header: React.FC<IHeader> = ({ page }) => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();
  const [activeMenuItem, setActiveMenuItem] = useState<string | any>(null);
  const { settingsData } = useContext(SettingsContext);
  const { handleLogout } = useContext(AuthContext);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
    if (isNavOpen) {
      document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.add("no-scroll");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const handleNavClick = (path: string, menuItem: string) => {
    setActiveMenuItem(menuItem);
    setIsNavOpen(false);
    document.body.classList.remove("no-scroll");

    router.push(path);
  };

  useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", i18n.language);
  });

  const changeLanguageFunc = (lng: ILang["key"]["lng"]) => {
    const supportedLanguages = ["en-US", "tr-TR"];
    const selectedLanguage = supportedLanguages.includes(lng) ? lng : "en-US";
    i18n.changeLanguage(selectedLanguage);
  };

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === "tr-TR" ? "en-US" : "tr-TR";
    changeLanguageFunc(newLanguage);
  };

  const [accesssToken, setAccesssToken] = useState();

  const handleLoginResponse = (res: any) => {
    if (setUser) setUser(res?.data);
    setAccesssToken(res?.data?.accessToken);
    Cookies.set("refreshToken", res?.data?.refreshToken);
    Cookies.set("accessToken", res?.data?.accessToken);
  };
  return (
    <>
      <header
        id="header"
        className={page && page === "landing" ? "landingheader" : "sub-header"}>
        <div className="container-xxl d-flex align-items-center justify-content-between">
          <div className=" d-flex align-items-center gap-5">
            {page === "landing" ? (
              <div className="img-container-logo">
                {theme === "dark" ? (
                  <div
                    className="logo"
                    onClick={() => handleNavClick("/", "home")}>
                    {isScrolled ? (
                      // Eğer scrolled ise, yeni logo
                      <img
                        src={WhiteLogo.src}
                        alt="new-logo"
                        className="img-fluid"
                      />
                    ) : (
                      // Eğer scrolled değilse, eski logo
                      <img
                        src={WhiteLogo.src}
                        alt="white-logo"
                        className="img-fluid"
                      />
                    )}
                  </div>
                ) : (
                  <a href="/" className="logo">
                    {isScrolled ? (
                      // Eğer scrolled ise, yeni logo
                      <img
                        src={DarkLogo.src}
                        alt="light-logo"
                        className="img-fluid"
                      />
                    ) : (
                      // Eğer scrolled değilse, eski logo
                      <img
                        src={WhiteLogo.src}
                        alt="logo"
                        className="img-fluid"
                      />
                    )}
                  </a>
                )}
              </div>
            ) : (
              <div className="img-container-logo">
                {theme === "dark" ? (
                  <div
                    className="logo"
                    onClick={() => handleNavClick("/", "home")}>
                    <img
                      src={WhiteLogo.src}
                      alt="dark-logo"
                      className="img-fluid"
                    />
                  </div>
                ) : (
                  <div
                    className="logo"
                    onClick={() => handleNavClick("/", "home")}>
                    <img
                      src={DarkLogo.src}
                      alt="new-logo"
                      className="img-fluid"
                    />
                  </div>
                )}
              </div>
            )}
            <nav
              id="navbar"
              className={isNavOpen ? "navbar navbar-mobile" : "navbar"}>
              <ul>
                <li
                  key={activeMenuItem}
                  className={`dashboard-items ${
                    activeMenuItem === "home" ? "active" : ""
                  }`}>
                  <span
                    className="dashboard-items"
                    onClick={() => handleNavClick("/", "home")}>
                    {t("navbar.home")}
                  </span>
                </li>
                <li
                  className={`dashboard-items ${
                    activeMenuItem === "all-blogs" ? "active" : ""
                  }`}>
                  <span
                    className={`dashboard-items ${
                      activeMenuItem === "all-blogs" ? "active" : ""
                    }`}
                    onClick={() => handleNavClick("/all-blogs", "all-blogs")}>
                    {t("navbar.allBlogs")}
                  </span>
                </li>

                {isNavOpen && (
                  <>
                    <li className="nav-mobile-theme">
                      <label className="theme-switch-one style__three style__one">
                        <input
                          type="checkbox"
                          id="slider"
                          className="check-status"
                          checked={theme === "dark" ? true : false}
                        />
                        <span
                          className="slider round"
                          style={{ background: "red !important" }}
                          onClick={() =>
                            setTheme(theme === "light" ? "dark" : "light")
                          }></span>
                      </label>
                    </li>
                    <li className="nav-mobile-lang">
                      <div
                        className="language-selector"
                        onClick={handleLanguageChange}>
                        <Image
                          src={i18n.language === "tr-TR" ? LangTr : LangEn}
                          alt={
                            i18n.language === "tr-TR"
                              ? "Turkish Flag"
                              : "English Flag"
                          }
                          style={{ marginRight: "5px", cursor: "pointer" }}
                        />
                      </div>
                    </li>
                    <li className="nav-mobile-meta d-flex aling-items-center justify-content-center">
                      {" "}
                    </li>
                  </>
                )}
              </ul>
              <i
                className={isNavOpen && "bi mobile-nav-toggle bi-x"}
                onClick={handleNavOpen}
              />
            </nav>
          </div>
          <i
            className={"bi bi-list mobile-nav-toggle"}
            onClick={handleNavOpen}
          />
          {!isNavOpen && (
            <nav className={"hide-in-mobile-view"}>
              <div className="d-flex align-items-center gap-3">
                <nav className={"hide-in-mobile-view"}>
                  <div className="hover-btn dropdown">
                    <nav className={"hide-in-mobile-view"}>
                      {settingsData ? (
                        <div className="dropdown mx-2 pointer">
                          <div className={"d-flex align-items-center gap-3"}>
                            <img src="/images/icons/user-avatar.svg" alt="" />
                            <p className={`${theme} account-text`}>
                              {t("navbar.hello")}, {settingsData?.fullName}
                            </p>
                          </div>

                          <div className={`dropdown-content ${theme}`}>
                            <div className="d-flex flex-column gap-2 p-3">
                              <div
                                className={`dropdown-item d-flex gap-1 align-items-center ${theme}`}>
                                <img src="/images/icons/db-ic.svg" alt="" />
                                <span
                                  className={`${theme}`}
                                  onClick={() => router.push("/my-profile")}>
                                  {t("navbar.myProfile")}
                                </span>
                              </div>
                              <div
                                className={`${theme} dropdown-item d-flex gap-1 align-items-center`}>
                                <img src="/images/icons/lg-ic.svg" alt="" />
                                <span
                                  className={`  log-out-text`}
                                  onClick={handleLogout}>
                                  {t("navbar.logOut")}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="d-flex align-items-center gap-3">
                          <Link
                            className={`login-text ${isScrolled}`}
                            href="/auth/login">
                            {t("navbar.login")}
                          </Link>
                          <p
                            className="btn-pill-v2"
                            onClick={() => router.push("/auth/register")}>
                            {t("navbar.register")}
                          </p>
                          {/*Buraya buton */}
                        </div>
                      )}
                    </nav>
                  </div>
                </nav>
                <div className="nav-actions d-flex align-items-center p-0">
                  <label className="theme-switch-one style__three style__one">
                    <input
                      type="checkbox"
                      id="slider"
                      className="check-status"
                      checked={theme === "dark" ? true : false}
                    />
                    <span
                      className="slider round"
                      style={{ background: "red !important" }}
                      onClick={() =>
                        setTheme(theme === "light" ? "dark" : "light")
                      }></span>
                  </label>
                </div>
                <div
                  className="language-selector"
                  onClick={handleLanguageChange}>
                  <Image
                    src={i18n.language === "tr-TR" ? LangTr : LangEn}
                    alt={
                      i18n.language === "tr-TR"
                        ? "Turkish Flag"
                        : "English Flag"
                    }
                    style={{ marginRight: "5px", cursor: "pointer" }}
                  />
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

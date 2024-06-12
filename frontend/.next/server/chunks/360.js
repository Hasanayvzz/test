"use strict";
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 4227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/en.7e56a193.svg","height":32,"width":32});

/***/ }),

/***/ 1760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/tr.442da94e.svg","height":32,"width":32});

/***/ }),

/***/ 9243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/dark-logo.acbfef71.svg","height":78,"width":351});

/***/ }),

/***/ 168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/white-logo.43de8cd4.svg","height":78,"width":351});

/***/ }),

/***/ 2360:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_token_white_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(168);
/* harmony import */ var _public_img_token_dark_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9243);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_Theme_ThemeContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7030);
/* harmony import */ var _public_img_lang_tr_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1760);
/* harmony import */ var _public_img_lang_en_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4227);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9915);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6348);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4191);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_9__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_11__, _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_13__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_9__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_11__, _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const Header = ({ page  })=>{
    const { t , i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const { theme , setTheme  } = (0,_contexts_Theme_ThemeContext__WEBPACK_IMPORTED_MODULE_6__/* .useTheme */ .F)();
    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isNavOpen, setIsNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { user , setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [activeMenuItem, setActiveMenuItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { settingsData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z);
    const { handleLogout  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z);
    const handleNavOpen = ()=>{
        setIsNavOpen(!isNavOpen);
        if (isNavOpen) {
            document.body.classList.remove("no-scroll");
        } else {
            document.body.classList.add("no-scroll");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleScroll = ()=>{
            if (window.scrollY !== 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, [
        isScrolled
    ]);
    const handleNavClick = (path, menuItem)=>{
        setActiveMenuItem(menuItem);
        setIsNavOpen(false);
        document.body.classList.remove("no-scroll");
        router.push(path);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        document.documentElement.setAttribute("lang", i18n.language);
    });
    const changeLanguageFunc = (lng)=>{
        const supportedLanguages = [
            "en-US",
            "tr-TR"
        ];
        const selectedLanguage = supportedLanguages.includes(lng) ? lng : "en-US";
        i18n.changeLanguage(selectedLanguage);
    };
    const handleLanguageChange = ()=>{
        const newLanguage = i18n.language === "tr-TR" ? "en-US" : "tr-TR";
        changeLanguageFunc(newLanguage);
    };
    const [accesssToken, setAccesssToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const handleLoginResponse = (res)=>{
        if (setUser) setUser(res?.data);
        setAccesssToken(res?.data?.accessToken);
        js_cookie__WEBPACK_IMPORTED_MODULE_9__["default"].set("refreshToken", res?.data?.refreshToken);
        js_cookie__WEBPACK_IMPORTED_MODULE_9__["default"].set("accessToken", res?.data?.accessToken);
    };
    console.log("settingsData", settingsData);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
            id: "header",
            className: page && page === "landing" ? "landingheader" : "sub-header",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container-xxl d-flex align-items-center justify-content-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " d-flex align-items-center gap-5",
                        children: [
                            page === "landing" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "img-container-logo",
                                children: theme === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "logo",
                                    onClick: ()=>handleNavClick("/", "home"),
                                    children: isScrolled ? // Eğer scrolled ise, yeni logo
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: _public_img_token_white_logo_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                                        alt: "new-logo",
                                        className: "img-fluid"
                                    }) : // Eğer scrolled değilse, eski logo
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: _public_img_token_white_logo_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                                        alt: "white-logo",
                                        className: "img-fluid"
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "/",
                                    className: "logo",
                                    children: isScrolled ? // Eğer scrolled ise, yeni logo
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: _public_img_token_dark_logo_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"].src */ .Z.src,
                                        alt: "light-logo",
                                        className: "img-fluid"
                                    }) : // Eğer scrolled değilse, eski logo
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: _public_img_token_white_logo_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                                        alt: "logo",
                                        className: "img-fluid"
                                    })
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "img-container-logo",
                                children: theme === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "logo",
                                    onClick: ()=>handleNavClick("/", "home"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: _public_img_token_white_logo_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                                        alt: "dark-logo",
                                        className: "img-fluid"
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "logo",
                                    onClick: ()=>handleNavClick("/", "home"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: _public_img_token_dark_logo_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"].src */ .Z.src,
                                        alt: "new-logo",
                                        className: "img-fluid"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                id: "navbar",
                                className: isNavOpen ? "navbar navbar-mobile" : "navbar",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: `dashboard-items ${activeMenuItem === "home" ? "active" : ""}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "dashboard-items",
                                                    onClick: ()=>handleNavClick("/", "home"),
                                                    children: t("navbar.home")
                                                })
                                            }, activeMenuItem),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: `dashboard-items ${activeMenuItem === "all-blogs" ? "active" : ""}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: `dashboard-items ${activeMenuItem === "all-blogs" ? "active" : ""}`,
                                                    onClick: ()=>handleNavClick("/all-blogs", "all-blogs"),
                                                    children: t("navbar.allBlogs")
                                                })
                                            }),
                                            isNavOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "nav-mobile-theme",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            className: "theme-switch-one style__three style__one",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "checkbox",
                                                                    id: "slider",
                                                                    className: "check-status",
                                                                    checked: theme === "dark" ? true : false
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "slider round",
                                                                    style: {
                                                                        background: "red !important"
                                                                    },
                                                                    onClick: ()=>setTheme(theme === "light" ? "dark" : "light")
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "nav-mobile-lang",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "language-selector",
                                                            onClick: handleLanguageChange,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                src: i18n.language === "tr-TR" ? _public_img_lang_tr_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z : _public_img_lang_en_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                                                alt: i18n.language === "tr-TR" ? "Turkish Flag" : "English Flag",
                                                                style: {
                                                                    marginRight: "5px",
                                                                    cursor: "pointer"
                                                                }
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "nav-mobile-meta d-flex aling-items-center justify-content-center",
                                                        children: " "
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: isNavOpen && "bi mobile-nav-toggle bi-x",
                                        onClick: handleNavOpen
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "bi bi-list mobile-nav-toggle",
                        onClick: handleNavOpen
                    }),
                    !isNavOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                        className: "hide-in-mobile-view",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-flex align-items-center gap-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                    className: "hide-in-mobile-view",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "hover-btn dropdown",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                            className: "hide-in-mobile-view",
                                            children: settingsData ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "dropdown mx-2 pointer",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "d-flex align-items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/images/icons/user-avatar.svg",
                                                                alt: ""
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                className: `${theme} account-text`,
                                                                children: [
                                                                    t("navbar.hello"),
                                                                    ", ",
                                                                    settingsData?.fullName
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `dropdown-content ${theme}`,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "d-flex flex-column gap-2 p-3",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `dropdown-item d-flex gap-1 align-items-center ${theme}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "/images/icons/db-ic.svg",
                                                                            alt: ""
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: `${theme}`,
                                                                            onClick: ()=>{
                                                                                settingsData.userRole === "admin" ? router.push("/admin-dashboard") : router.push("/my-profile");
                                                                            },
                                                                            children: settingsData.userRole === "admin" ? t("navbar.dashboard") : t("navbar.myProfile")
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `${theme} dropdown-item d-flex gap-1 align-items-center`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "/images/icons/lg-ic.svg",
                                                                            alt: ""
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: `  log-out-text`,
                                                                            onClick: handleLogout,
                                                                            children: t("navbar.logOut")
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "d-flex align-items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                        className: `login-text ${isScrolled}`,
                                                        href: "/auth/login",
                                                        children: t("navbar.login")
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "btn-pill-v2",
                                                        onClick: ()=>router.push("/auth/register"),
                                                        children: t("navbar.register")
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "nav-actions d-flex align-items-center p-0",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        className: "theme-switch-one style__three style__one",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "checkbox",
                                                id: "slider",
                                                className: "check-status",
                                                checked: theme === "dark" ? true : false
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "slider round",
                                                style: {
                                                    background: "red !important"
                                                },
                                                onClick: ()=>setTheme(theme === "light" ? "dark" : "light")
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "language-selector",
                                    onClick: handleLanguageChange,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        src: i18n.language === "tr-TR" ? _public_img_lang_tr_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z : _public_img_lang_en_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                        alt: i18n.language === "tr-TR" ? "Turkish Flag" : "English Flag",
                                        style: {
                                            marginRight: "5px",
                                            cursor: "pointer"
                                        }
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 7685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/favi.52e0224f.svg","height":42,"width":47});

/***/ }),

/***/ 2940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/fly-ic.9c6cbd1e.svg","height":42,"width":47});

/***/ }),

/***/ 2978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/question.438cf52a.svg","height":16,"width":15});

/***/ }),

/***/ 5701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/dark-logo.acbfef71.svg","height":78,"width":351});

/***/ }),

/***/ 6156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/white-logo.43de8cd4.svg","height":78,"width":351});

/***/ }),

/***/ 308:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, react_markdown__WEBPACK_IMPORTED_MODULE_3__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, react_markdown__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function ChatAIComponent() {
    const [question, setQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [generatingAnswer, setGeneratingAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    async function generateAnswer(e) {
        setGeneratingAnswer(true);
        e.preventDefault();
        setAnswer("Cevabınız y\xfckleniyor... 10 saniye kadar s\xfcrebilir");
        try {
            const response = await (0,axios__WEBPACK_IMPORTED_MODULE_2__["default"])({
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${"AIzaSyCMB5BJymSC5RicnW6K507P9GseSVB2uUc"}`,
                method: "post",
                data: {
                    contents: [
                        {
                            parts: [
                                {
                                    text: question
                                }
                            ]
                        }
                    ]
                }
            });
            setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
        } catch (error) {
            console.log(error);
            setAnswer("Sorry - Something went wrong. Please try again!");
        }
        setGeneratingAnswer(false);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-100 h-100 d-flex flex-column justify-content-between align-items-center",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                className: "text-36-700-yellow text-center",
                                children: [
                                    "Seyahat D\xfcşleri AI",
                                    " "
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mt-4 text-28-700-black ",
                            children: "Gezilecek yerler hakkında veya canın ne sormak isterse işte burdayım kutucuğa sorunu yaz ve butona tıkla!"
                        }),
                        answer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                background: "#2f3a4b",
                                maxHeight: "500px",
                                overflowY: "scroll",
                                color: "#fff",
                                borderRadius: 12,
                                opacity: "0.8"
                            },
                            className: " p-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                children: answer
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: generateAnswer,
                    className: "w-50 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            required: true,
                            className: "form-control my-2",
                            value: question,
                            onChange: (e)=>setQuestion(e.target.value),
                            placeholder: "Birşeyler yaz.."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            className: "btn-pill-v2",
                            disabled: generatingAnswer,
                            children: "G\xf6nder"
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatAIComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 829:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1759);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_about_question_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2978);
/* harmony import */ var _public_fly_ic_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2940);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6225);
/* harmony import */ var react_scroll_to_top__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5337);
/* harmony import */ var react_scroll_to_top__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_scroll_to_top__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_favi_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7685);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var swiper_css_autoplay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5882);
/* harmony import */ var swiper_css_autoplay__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(swiper_css_autoplay__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _contexts_Theme_ThemeContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7030);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2360);
/* harmony import */ var _public_img_logo_white_logo_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6156);
/* harmony import */ var _public_img_logo_dark_logo_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5701);
/* harmony import */ var _components_Blogcard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2799);
/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7274);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7861);
/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(4191);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(6348);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _chatscope_chat_ui_kit_styles_dist_default_styles_min_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(7512);
/* harmony import */ var _chatscope_chat_ui_kit_styles_dist_default_styles_min_css__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_chatscope_chat_ui_kit_styles_dist_default_styles_min_css__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _components_AIChat__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(308);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Footer__WEBPACK_IMPORTED_MODULE_8__, _components_header__WEBPACK_IMPORTED_MODULE_17__, _components_Blogcard__WEBPACK_IMPORTED_MODULE_20__, _pages_api__WEBPACK_IMPORTED_MODULE_21__, _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_23__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_24__, _components_AIChat__WEBPACK_IMPORTED_MODULE_27__]);
([_components_Footer__WEBPACK_IMPORTED_MODULE_8__, _components_header__WEBPACK_IMPORTED_MODULE_17__, _components_Blogcard__WEBPACK_IMPORTED_MODULE_20__, _pages_api__WEBPACK_IMPORTED_MODULE_21__, _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_23__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_24__, _components_AIChat__WEBPACK_IMPORTED_MODULE_27__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




























function HomePage() {
    const { theme  } = (0,_contexts_Theme_ThemeContext__WEBPACK_IMPORTED_MODULE_15__/* .useTheme */ .F)();
    const { t , i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_16__.useTranslation)();
    const [blogs, setBlogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [aiModal, setAiModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [trigger, setTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [myFavorites, setMyFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z);
    const { settingsData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z);
    const [place, setPlace] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        aos__WEBPACK_IMPORTED_MODULE_2___default().init({
            duration: 1000,
            once: true
        });
    }, [
        blogs
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _pages_api__WEBPACK_IMPORTED_MODULE_21__.ApiRequest.getAllWithoutPlaceImages().then((res)=>{
            setBlogs(res.blogs);
        });
    }, []);
    const handleCloseAiModal = ()=>{
        setAiModal(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        user && _pages_api__WEBPACK_IMPORTED_MODULE_21__.ApiRequest.getMyFavorites({
            userId: user
        }).then((res)=>{
            setMyFavorites(res.favoriteBlogs);
        }).catch((e)=>console.log("error", e));
    }, [
        trigger
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_scroll_to_top__WEBPACK_IMPORTED_MODULE_9___default()), {
                color: "#fff",
                smooth: true,
                style: {
                    backgroundColor: "#F9B34E"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                id: "hero",
                className: `text-center hero ${theme}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        page: "landing"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        dangerouslySetInnerHTML: {
                            __html: place && place
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container-xxl mt-5 pt-5 sticky-comp",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "banner-content",
                            "data-aos": "zoom-in",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    children: [
                                        t("hero.title"),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "d-flex gap-2 align-items-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "btn-get-register scrollto button button--aylen button--border-thick button--inverted button--text-upper button--size-s",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "/all-blogs",
                                            className: "white-color",
                                            children: t("hero.startButton")
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                id: "main",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        id: "about",
                        className: `about ${theme}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container-xxl",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "gap-5 about-box",
                                style: {
                                    padding: "120px 0"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "section-title",
                                        "data-aos": "zoom-in-down",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "d-flex gap-2 mb-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        src: _public_img_about_question_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                                        className: "img-fluid",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        className: "section-colored-title",
                                                        children: t("about.about")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "img-container-logo",
                                                    children: [
                                                        t("about.aboutTitle"),
                                                        " ",
                                                        theme === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "/",
                                                            className: "logo",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: _public_img_logo_white_logo_svg__WEBPACK_IMPORTED_MODULE_18__/* ["default"].src */ .Z.src,
                                                                alt: "white-logo",
                                                                className: "img-fluid"
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "/",
                                                            className: "logo",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: _public_img_logo_dark_logo_svg__WEBPACK_IMPORTED_MODULE_19__/* ["default"].src */ .Z.src,
                                                                alt: "light-logo",
                                                                className: "img-fluid"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: t("about.aboutDetail")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "grid-container",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "about-section-content-wrapper grid-item",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "about-section-left pt-4 pt-lg-0 order-2 order-lg-1 content justify-content-around",
                                                    "data-aos": "fade-right",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            src: _public_fly_ic_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "about-content-box",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "about-content-sub-box",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                        children: t("about.applyTitle")
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "about-content-sub-box-text",
                                                                        children: t("about.applyDetail")
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "about-section-content-wrapper grid-item",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "about-section-left pt-4 pt-lg-0 order-2 order-lg-1 content justify-content-center",
                                                    "data-aos": "fade-right",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            src: _public_fly_ic_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "about-content-box",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "about-content-sub-box",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                        children: t("about.purpose")
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "about-content-sub-box-text",
                                                                        children: t("about.purposeDetail")
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "about-section-content-wrapper grid-item",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "about-section-left pt-4 pt-lg-0 order-2 order-lg-1 content justify-content-around",
                                                    "data-aos": "fade-right",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            src: _public_fly_ic_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "about-content-box",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "about-content-sub-box",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                                        children: [
                                                                            " ",
                                                                            t("about.siteMessage")
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "about-content-sub-box-text",
                                                                        children: t("about.messageDetail")
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        id: "",
                        className: `portfolio ${theme}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container-xxl",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "section-title",
                                    "data-aos": "zoom-in-down",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-flex gap-2 mb-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    src: _public_favi_svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                                                    className: "img-fluid",
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                    className: "section-colored-title",
                                                    children: [
                                                        " ",
                                                        t("project.projects")
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                            children: [
                                                " ",
                                                theme === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "/",
                                                    className: "logo",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: _public_img_logo_white_logo_svg__WEBPACK_IMPORTED_MODULE_18__/* ["default"].src */ .Z.src,
                                                        alt: "white-logo",
                                                        className: "img-fluid"
                                                    })
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: _public_img_logo_dark_logo_svg__WEBPACK_IMPORTED_MODULE_19__/* ["default"].src */ .Z.src,
                                                    alt: "light-logo",
                                                    className: "img-fluid"
                                                }),
                                                " ",
                                                t("project.projectTitle")
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "projects-container",
                                    "data-aos": "fade-down",
                                    "data-aos-duration": "1500",
                                    children: blogs ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Blogcard__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                        blogData: blogs,
                                        favorites: myFavorites,
                                        trigger: trigger,
                                        setTrigger: setTrigger
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        id: "cta",
                        className: "ai-cta mb-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container-xxl",
                            "data-aos": "zoom-in",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: t("cta.meetOurAi")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "btn-get-register mt-5",
                                        id: "button-7",
                                        onClick: ()=>setAiModal(true),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "",
                                                children: t("cta.chatWithAi")
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        id: "cta",
                        className: "cta",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container-xxl",
                            "data-aos": "zoom-in",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: t("cta.cta")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        className: "btn-get-register mt-5",
                                        href: settingsData ? "/create-new-blog" : "/auth/register",
                                        id: "button-7",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "cloud",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    width: 30,
                                                    height: 20,
                                                    src: _public_favi_svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                                                    className: "img-fluid",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "ms-3",
                                                children: settingsData ? t("cta.publishBlog") : t("cta.ctaButton")
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_25__.Modal, {
                fullscreen: true,
                size: "xl",
                show: aiModal,
                onHide: handleCloseAiModal,
                style: {
                    zIndex: "9999"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_25__.Modal.Header, {
                        closeButton: true,
                        style: {
                            border: "0px"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_25__.Modal.Body, {
                        className: "d-flex align-items-center justify-content-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AIChat__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_25__.Modal.Footer, {
                        style: {
                            border: "0px",
                            padding: 10
                        }
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7512:
/***/ (() => {



/***/ }),

/***/ 1759:
/***/ (() => {



/***/ }),

/***/ 5882:
/***/ (() => {



/***/ }),

/***/ 9176:
/***/ (() => {



/***/ }),

/***/ 2996:
/***/ (() => {



/***/ }),

/***/ 8722:
/***/ (() => {



/***/ })

};
;
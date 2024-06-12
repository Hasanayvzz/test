"use strict";
exports.id = 799;
exports.ids = [799];
exports.modules = {

/***/ 2799:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_Theme_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7030);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6348);
/* harmony import */ var _contexts_loaderContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2507);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7861);
/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4191);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _SVGFavorite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5155);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3590);
/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7274);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__, _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_7__, react_toastify__WEBPACK_IMPORTED_MODULE_10__, _pages_api__WEBPACK_IMPORTED_MODULE_11__]);
([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__, _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_7__, react_toastify__WEBPACK_IMPORTED_MODULE_10__, _pages_api__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const BlogCard = ({ blogData , favorites , trigger , setTrigger  })=>{
    const theme = (0,_contexts_Theme_ThemeContext__WEBPACK_IMPORTED_MODULE_2__/* .useTheme */ .F)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { t , i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    const { setItemData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const { isLoading , handleLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_loaderContext__WEBPACK_IMPORTED_MODULE_5__/* .LoaderContext */ .O);
    const { settingsData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
    const StyledRating = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_12__.withStyles)({
        iconFilled: {
            color: "#FFD700"
        },
        iconEmpty: {
            color: "#C0C0C0"
        }
    })(_mui_material__WEBPACK_IMPORTED_MODULE_13__.Rating);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!blogData) {
            handleLoading(true);
        }
    }, []);
    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const handleAddFavorite = (id, userId)=>{
        _pages_api__WEBPACK_IMPORTED_MODULE_11__.ApiRequest.addFavorite({
            blogId: id,
            userId: userId
        }).then((res)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success(res.message, {
                position: "top-right",
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "light",
                autoClose: 3000
            });
            setTrigger(!trigger);
        }).catch((e)=>console.log(e));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !isLoading ? blogData.filter((blog)=>blog.status === "Approved") // status değeri true olan blogları filtreliyoruz
        .map((blog)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `project-card-container  ${theme.theme}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex justify-content-end align-items-end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: ()=>user ? handleAddFavorite(blog._id, user) : react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error("L\xfctfen giriş yapın", {
                                    position: "top-right",
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    draggable: false,
                                    progress: undefined,
                                    theme: "light",
                                    autoClose: 3000
                                }),
                            className: "p-10 heart",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SVGFavorite__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                fill: favorites && favorites.includes(blog._id) ? "#d9436d" : ""
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "",
                        style: {
                            backgroundImage: `url(${blog?.placeImage})`,
                            width: "100%",
                            height: 225,
                            backgroundSize: "100% ",
                            backgroundRepeat: "no-repeat",
                            borderRadius: 8
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex gap-3 align-items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "d-flex align-items-center justify-content-center",
                                style: {
                                    width: "56px",
                                    height: 56,
                                    borderRadius: 99,
                                    background: "#f9f9f9",
                                    border: "1px solid #2a2a2b",
                                    backgroundImage: `url(${settingsData?.profileImage ? settingsData?.profileImage : ""})`,
                                    color: "#2a2a2b",
                                    fontWeight: 600
                                },
                                children: blog?.authorName?.slice(0, 2).toUpperCase()
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: ` project-text ${theme.theme}`,
                                children: blog?.blogName
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `project-detail p-2 ${theme.theme}`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `d-flex justify-content-between align-items-center gap-1 ${theme.theme}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: `${theme.theme} project-detail-text-head`,
                                        children: t("blogCard.star")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "d-flex gap-1 align-items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: `${theme.theme} project-detail-text`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledRating, {
                                                name: "customized-color",
                                                value: isNaN(blog?.stars.reduce((total, star)=>total + star.amount, 0) / blog?.stars.length) ? 0 : parseFloat((blog?.stars.reduce((total, star)=>total + star.amount, 0) / blog?.stars.length).toFixed(2))
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `d-flex justify-content-between align-items-center gap-1 ${theme.theme}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: `${theme.theme} project-detail-text-head`,
                                        children: t("blogCard.country")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: `${theme.theme} project-detail-text`,
                                        children: blog?.country
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `d-flex justify-content-between align-items-center gap-1 ${theme.theme}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: `${theme.theme} project-detail-text-head`,
                                        children: t("blogCard.price")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: `${theme.theme} project-detail-text`,
                                        children: [
                                            blog?.approximatelyPrice,
                                            " ",
                                            blog?.currency
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `d-flex justify-content-between align-items-center gap-1 ${theme.theme}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: `${theme.theme} project-detail-text-head`,
                                        children: t("blogCard.author")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: `${theme.theme} project-detail-text`,
                                        children: blog?.authorName
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `d-flex justify-content-between align-items-center gap-1 ${theme.theme}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: `${theme.theme} project-detail-text-head`,
                                        children: t("blogCard.date")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: `${theme.theme} project-detail-text`,
                                        children: new Date(blog?.date).toLocaleDateString()
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "btn-pill-v2",
                        onClick: ()=>{
                            setItemData(blog);
                            router.push(`/blogs/${blog._id}`);
                        },
                        children: t("blogCard.detail")
                    })
                ]
            })) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SVGFavoriteBlogs = ({ fill  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "28",
        height: "28",
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M8.7487 4.66406C5.20495 4.66406 2.33203 7.53698 2.33203 11.0807C2.33203 17.4974 9.91537 23.3307 13.9987 24.6876C18.082 23.3307 25.6654 17.4974 25.6654 11.0807C25.6654 7.53698 22.7924 4.66406 19.2487 4.66406C17.0787 4.66406 15.1595 5.74148 13.9987 7.39056C13.407 6.54777 12.621 5.85995 11.7071 5.38535C10.7932 4.91075 9.77846 4.66334 8.7487 4.66406Z",
            fill: fill ? fill : "#D9D9D9",
            fillOpacity: "0.75",
            stroke: "gray",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SVGFavoriteBlogs);


/***/ })

};
;
"use strict";
exports.id = 573;
exports.ids = [573];
exports.modules = {

/***/ 691:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7274);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3162);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6348);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api__WEBPACK_IMPORTED_MODULE_2__, _CommentForm__WEBPACK_IMPORTED_MODULE_3__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__]);
([_pages_api__WEBPACK_IMPORTED_MODULE_2__, _CommentForm__WEBPACK_IMPORTED_MODULE_3__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const CommentList = ({ comments , blogId , trigger , setTrigger , onAddComment , text , setText , updatedBlog , setUpdatedBlog  })=>{
    const [updatedText, setUpdatedText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mb-4",
        children: comments?.text !== "" && comments?.map((comment, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex flex-column gap-1 p-4 mb-2",
                style: {
                    background: "#f5f5f5",
                    borderRadius: 12
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex gap-4 align-items-center justify-content-between mb-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex align-items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "d-flex align-items-center justify-content-center",
                                        style: {
                                            width: "56px",
                                            height: 56,
                                            borderRadius: 99,
                                            border: "1px solid #2a2a2b",
                                            color: "#2a2a2b",
                                            fontWeight: 600
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "",
                                            children: [
                                                " ",
                                                comment?.name?.slice(0, 2).toUpperCase()
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-end",
                                        children: [
                                            " ",
                                            comment?.name
                                        ]
                                    })
                                ]
                            }),
                            comment?.userId === user && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex align-items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        onClick: ()=>{
                                            if (updatedBlog) {
                                                setUpdatedBlog(null);
                                            } else {
                                                setUpdatedBlog(comment);
                                            }
                                        },
                                        style: {
                                            width: 30,
                                            height: 30
                                        },
                                        src: "/edic-ic.svg",
                                        className: "pointer",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        onClick: ()=>_pages_api__WEBPACK_IMPORTED_MODULE_2__.ApiRequest.deleteComment({
                                                commentId: comment._id,
                                                blogId: blogId
                                            }).then((res)=>{
                                                setTrigger(!trigger);
                                            }),
                                        style: {
                                            width: 30,
                                            height: 30
                                        },
                                        src: "/delete-ic.png",
                                        className: "pointer",
                                        alt: ""
                                    })
                                ]
                            })
                        ]
                    }),
                    updatedBlog?._id === comment?._id ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Yorumunu g\xfcncelle"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                onAddComment: ()=>{
                                    _pages_api__WEBPACK_IMPORTED_MODULE_2__.ApiRequest.updateComment({
                                        commentId: comment._id,
                                        blogId: blogId,
                                        text: text
                                    }).then((res)=>{
                                        setTrigger(!trigger);
                                        setUpdatedBlog(null);
                                    });
                                },
                                text: text,
                                setText: setText
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: comment?.text
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex align-items-center gap-2 w-100",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Yorum Tarihi:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-end",
                                        children: new Date(comment.timestamp).toLocaleDateString()
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3162:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export CommentForm */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4191);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_2__]);
_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const CommentForm = ({ onAddComment , setText , text  })=>{
    const [author, setAuthor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { settingsData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    const user = settingsData?.fullName;
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!user || !text) return;
        onAddComment({
            user,
            text
        });
        setAuthor("");
        setText("");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit,
        className: "d-flex flex-column gap-4 ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                placeholder: "Your Comment",
                className: "my-input",
                value: text,
                onChange: (e)=>setText(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "submit",
                className: "btn-pill-v2",
                style: {
                    width: "fit-content"
                },
                children: "Submit"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const HTHOffsetDetail = ({ data  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "",
            style: {
                height: "40vh",
                width: "100%",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${"/detail-banner.webp"})`
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTHOffsetDetail);


/***/ }),

/***/ 4997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reach_combobox_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8473);
/* harmony import */ var _reach_combobox_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reach_combobox_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable react-hooks/exhaustive-deps */ 



const options = {
    disableDefaultUI: false,
    zoomControl: true
};
const DetailMap = ({ lat , lng , isLoaded , loadError  })=>{
    const [map, setMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    console.log("lat var mı", lat);
    console.log("lng var mı ", lng);
    const center = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (lat && lng) {
            return {
                lat: lat,
                lng: lng
            };
        } else {
            return {
                lat: 39.899652,
                lng: 32.77486
            };
        }
    }, [
        lat,
        lng
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [
        lat,
        lng
    ]);
    const onMapLoad = (map)=>{
        setMap(map);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (map && lat && lng) {
            map.panTo({
                lat,
                lng
            });
            map.setZoom(14);
        }
    }, [
        lat,
        lng,
        map
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isLoaded === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: 12
            },
            className: "pb-5",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {
                zoom: 14,
                center: center,
                mapContainerClassName: "map-container",
                onLoad: onMapLoad,
                options: options,
                children: [
                    lat && lng && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {
                        position: {
                            lat: lat,
                            lng: lng
                        }
                    }),
                    lat && lng && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {
                        position: {
                            lat: lat,
                            lng: lng
                        }
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailMap);


/***/ }),

/***/ 8403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable jsx-a11y/alt-text */ 

const ImageSlider = ({ slides , SliderData  })=>{
    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const length = slides.length;
    const nextSlide = ()=>{
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = ()=>{
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "slider",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "",
                alt: ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/icons/left-ic.svg",
                style: {
                    height: 32
                },
                className: "left-arrow pointer",
                onClick: prevSlide
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/icons/l-right-ic.svg",
                style: {
                    height: 32
                },
                className: "right-arrow pointer",
                onClick: nextSlide
            }),
            SliderData.map((slide, index)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {},
                    className: index === current ? "slide active" : "slide",
                    children: index === current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: slide.image,
                        height: 500,
                        style: {
                            borderRadius: 12
                        },
                        alt: "travel image"
                    })
                }, index);
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageSlider);


/***/ }),

/***/ 1573:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8148);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2360);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7861);
/* harmony import */ var _components_HTHOffsetDetail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8791);
/* harmony import */ var _components_Map_DetailMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4997);
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8403);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6225);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _contexts_Theme_ThemeContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7030);
/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7274);
/* harmony import */ var _contexts_loaderContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2507);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Comment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(691);
/* harmony import */ var _components_CommentForm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3162);
/* harmony import */ var _recommendJSON__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1382);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6348);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(3590);
/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(4191);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_header__WEBPACK_IMPORTED_MODULE_6__, _components_Footer__WEBPACK_IMPORTED_MODULE_11__, _pages_api__WEBPACK_IMPORTED_MODULE_14__, _components_Comment__WEBPACK_IMPORTED_MODULE_17__, _components_CommentForm__WEBPACK_IMPORTED_MODULE_18__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_20__, react_toastify__WEBPACK_IMPORTED_MODULE_21__, _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_22__]);
([_components_header__WEBPACK_IMPORTED_MODULE_6__, _components_Footer__WEBPACK_IMPORTED_MODULE_11__, _pages_api__WEBPACK_IMPORTED_MODULE_14__, _components_Comment__WEBPACK_IMPORTED_MODULE_17__, _components_CommentForm__WEBPACK_IMPORTED_MODULE_18__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_20__, react_toastify__WEBPACK_IMPORTED_MODULE_21__, _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_22__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);























function PropertyDetail() {
    const StyledRating = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_3__.withStyles)({
        iconFilled: {
            color: "#FFD700"
        },
        iconEmpty: {
            color: "#C0C0C0"
        }
    })(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Rating);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_16__.useTranslation)();
    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [blogDetail, setBlogDetail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { handleLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_loaderContext__WEBPACK_IMPORTED_MODULE_15__/* .LoaderContext */ .O);
    const [recommendData, setRecommendData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [trigger, setTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [averageRating, setAverageRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [updatedBlog, setUpdatedBlog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { isLoaded , loadError  } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_12__.useLoadScript)({
        googleMapsApiKey: "",
        libraries: [
            "places"
        ]
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        handleLoading(true);
        _pages_api__WEBPACK_IMPORTED_MODULE_14__.ApiRequest.getBlogById(window.location.pathname.slice(7)).then((res)=>{
            const stars = res?.blog?.stars;
            if (stars.length > 0) {
                const total = stars.reduce((sum, star)=>sum + star.amount, 0);
                const average = total / stars.length;
                setAverageRating(average);
            }
            setBlogDetail(res.blog);
            handleLoading(false);
        }).catch((e)=>{
            handleLoading(false);
        });
    }, [
        trigger
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (blogDetail) {
            _pages_api__WEBPACK_IMPORTED_MODULE_14__.ApiRequest.recommend({
                input_city: blogDetail.city
            }).then((res)=>{
                setRecommendData(res.result);
            }).catch((e)=>{
                console.log(e);
            });
        }
    }, [
        blogDetail
    ]);
    const sliderData = blogDetail?.placeImageDetails.map((image)=>{
        return {
            image: image
        };
    });
    const { settingsData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z);
    const theme = (0,_contexts_Theme_ThemeContext__WEBPACK_IMPORTED_MODULE_13__/* .useTheme */ .F)();
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [previewModal, setPreviewModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleOpenPreviewModal = ()=>{
        setPreviewModal(true);
    };
    const handleClosePreviewModal = ()=>{
        setPreviewModal(false);
    };
    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const handleAddComment = (newComment)=>{
        _pages_api__WEBPACK_IMPORTED_MODULE_14__.ApiRequest.addComment({
            userId: user,
            blogId: blogDetail._id,
            text: text,
            name: settingsData?.fullName
        }).then((res)=>{
            setTrigger(!trigger);
        });
    };
    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z);
    const handleRatingChange = async (event, newValue)=>{
        if (user) {
            _pages_api__WEBPACK_IMPORTED_MODULE_14__.ApiRequest.addStar({
                blogId: blogDetail._id,
                userId: user,
                amount: newValue
            }).then((res)=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_21__.toast.success("Blog puanlaması başarıyla g\xfcncellendi", {
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
            }).catch((e)=>console.log("err", e));
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_21__.toast.error("L\xfctfen giriş yapınız.", {
                position: "top-right",
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "light",
                autoClose: 3000
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HTHOffsetDetail__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " ",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        justifyContent: "center"
                                    },
                                    className: "row",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " mb-5",
                                        style: {
                                            paddingTop: 50
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "preview-grid",
                                                children: blogDetail?.placeImageDetails && blogDetail?.placeImageDetails.map((image, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            cursor: "pointer"
                                                        },
                                                        onClick: handleOpenPreviewModal,
                                                        className: "icon-cnt",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "preview-container",
                                                            style: {
                                                                borderRadius: 5,
                                                                backgroundImage: `url(${image})`
                                                            }
                                                        })
                                                    }, index))
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "d-flex justify-content-between",
                                                style: {
                                                    marginTop: "75px"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "property-detail-name-text"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "d-flex justify-content-between ",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "text-24-700",
                                                        children: [
                                                            t("blogDetail.publishedOn"),
                                                            " ",
                                                            new Date(blogDetail?.date).toLocaleDateString()
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledRating, {
                                                        name: "customized-color",
                                                        value: averageRating,
                                                        onChange: handleRatingChange
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-16-400-blue ",
                                                style: {
                                                    flex: 1
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: blogDetail?.blogText
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-24-700-yellow mt-5",
                                                children: "Bir Sonraki Durağınız olabilir"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "mt-3",
                                                children: "İncelendiğiniz konuma yakın olan gezilecek yerlere g\xf6re oluşturulan tavsiyelerdir"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "wrapper",
                                                children: recommendData.map((elm)=>{
                                                    const matchedCity = _recommendJSON__WEBPACK_IMPORTED_MODULE_19__/* .recommendJSON.find */ .t.find((item)=>item.city === elm);
                                                    if (matchedCity) {
                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "recommender-card",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: matchedCity.image,
                                                                    alt: "Dağlar"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "info",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                            children: matchedCity.city
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: matchedCity.title
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }, elm.city);
                                                    } else {
                                                        return null; // Render nothing if no match found
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Accordion, {
                                                defaultExpanded: true,
                                                style: {
                                                    backgroundColor: theme.theme === "light" ? "" : "#333",
                                                    marginTop: "50px",
                                                    borderRadius: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.AccordionSummary, {
                                                        style: {
                                                            backgroundColor: theme.theme === "light" ? "" : "#333",
                                                            borderRadius: 12
                                                        },
                                                        className: "p-0",
                                                        "aria-controls": "panel2a-content",
                                                        id: "panel2a-header",
                                                        expandIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                            className: "desc-head px-4 py-0",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                style: {
                                                                    fontSize: 24
                                                                },
                                                                className: "gradient-text",
                                                                children: t("blogDetail.location")
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.AccordionDetails, {
                                                        className: "offset-description-text",
                                                        style: {
                                                            backgroundColor: theme.theme === "light" ? "" : "#333",
                                                            borderRadius: 12
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `  ${theme.theme}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Map_DetailMap__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                isLoaded: isLoaded,
                                                                loadError: loadError,
                                                                lat: blogDetail?.lat,
                                                                lng: blogDetail?.lng
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-md-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-24-700 mb-5",
                                                children: t("blogDetail.comments")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Comment__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                comments: blogDetail?.comments,
                                                blogId: blogDetail?._id,
                                                trigger: trigger,
                                                setTrigger: setTrigger,
                                                onAddComment: handleAddComment,
                                                text: text,
                                                setText: setText,
                                                updatedBlog: updatedBlog,
                                                setUpdatedBlog: setUpdatedBlog
                                            }),
                                            !updatedBlog && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CommentForm__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                onAddComment: handleAddComment,
                                                text: text,
                                                setText: setText
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal, {
                                    size: "xl",
                                    centered: true,
                                    show: previewModal,
                                    onHide: handleClosePreviewModal,
                                    style: {
                                        zIndex: "9999"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Header, {
                                            closeButton: true,
                                            style: {
                                                border: "0px"
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Body, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Slider__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                slides: sliderData,
                                                SliderData: sliderData
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Footer, {
                                            style: {
                                                border: "0px",
                                                padding: 10
                                            }
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PropertyDetail);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
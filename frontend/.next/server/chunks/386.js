"use strict";
exports.id = 386;
exports.ids = [386];
exports.modules = {

/***/ 8499:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FileUploadComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6826);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_loaderContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2507);
/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7274);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6348);
/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4191);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_7__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_8__, _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_9__]);
([_pages_api__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_7__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_8__, _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const ProfileBanner = ({ data  })=>{
    const [imageModal, setImageModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);
    const { settingsData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z);
    const { handleLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_loaderContext__WEBPACK_IMPORTED_MODULE_5__/* .LoaderContext */ .O);
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)();
    const handleOpenAddImageModal = ()=>{
        setImageModal(true);
    };
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_4__.useFormik)({
        initialValues: {
            profileImage: ""
        },
        onSubmit: async (values)=>{
            handleLoading(true);
            const addImageBody = {
                userId: user,
                profileImage: formik.values.profileImage
            };
            await _pages_api__WEBPACK_IMPORTED_MODULE_6__.ApiRequest.addImage(addImageBody).then(()=>{
                handleLoading(false);
                react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success("Profile Image Added", {
                    position: "top-right",
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                    autoClose: 3000
                });
            }).catch((e)=>react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(e?.response?.message, {
                    position: "top-right",
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                    autoClose: 3000
                }));
        }
    });
    const handleCloseAddImageModal = ()=>{
        setImageModal(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex flex-column gap-4 justify-content-center align-items-center ",
                style: {
                    height: "40vh",
                    width: "100%",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url(/profile-banner.png)`
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            width: "100px",
                            height: "100px",
                            backgroundSize: "100% 100%",
                            objectFit: "cover",
                            borderRadius: 12,
                            backgroundImage: `url(${settingsData?.profileImage})`,
                            position: "relative"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            onClick: handleOpenAddImageModal,
                            style: {
                                position: "absolute",
                                top: "80px",
                                left: "70px"
                            },
                            src: "/edic-ic.svg",
                            alt: "",
                            className: "pointer"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-32-600-white",
                        children: settingsData?.fullName
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                centered: true,
                show: imageModal,
                onHide: handleCloseAddImageModal,
                style: {
                    zIndex: "9999"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Header, {
                        closeButton: true,
                        style: {
                            border: "0px"
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-24-700",
                                children: t("profile.profileImage")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FileUploadComponent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                formik: formik,
                                componentKey: "profileImage",
                                whichField: "profileImage"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "btn-pill-v2 mt-5",
                                onClick: ()=>formik.handleSubmit(),
                                children: t("button.submit")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Footer, {
                        style: {
                            border: "0px",
                            padding: 10
                        }
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileBanner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4386:
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
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2360);
/* harmony import */ var _components_ProfileBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8499);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4191);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_header__WEBPACK_IMPORTED_MODULE_2__, _components_ProfileBanner__WEBPACK_IMPORTED_MODULE_3__, _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_5__]);
([_components_header__WEBPACK_IMPORTED_MODULE_2__, _components_ProfileBanner__WEBPACK_IMPORTED_MODULE_3__, _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const MyProfile = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { settingsData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    console.log("settingsdata", settingsData);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProfileBanner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container themed-bg",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex justify-content-between align-items-center gap-4 mt-5 mb-5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex flex-column gap-3 align-items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/icons/blog.png",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-24-700",
                                        children: settingsData?.totalBlogs
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex flex-column gap-3 align-items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/icons/comment.png",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-24-700",
                                        children: settingsData?.totalComments
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex flex-column gap-3 align-items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/icons/star-ic.png",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-24-700",
                                        children: settingsData?.averageStars
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex justify-content-center align-items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "btn-pill-v2 w-50",
                            onClick: ()=>router.push("/create-new-blog"),
                            children: "Create Blog"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyProfile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
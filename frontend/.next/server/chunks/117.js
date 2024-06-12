"use strict";
exports.id = 117;
exports.ids = [117];
exports.modules = {

/***/ 4117:
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
/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7274);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2360);
/* harmony import */ var _components_Blogcard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2799);
/* harmony import */ var _contexts_loaderContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2507);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6348);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api__WEBPACK_IMPORTED_MODULE_2__, _components_header__WEBPACK_IMPORTED_MODULE_3__, _components_Blogcard__WEBPACK_IMPORTED_MODULE_4__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_6__]);
([_pages_api__WEBPACK_IMPORTED_MODULE_2__, _components_header__WEBPACK_IMPORTED_MODULE_3__, _components_Blogcard__WEBPACK_IMPORTED_MODULE_4__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const AllBlogs = ()=>{
    const [allBlogs, setAllBlogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { handleLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_loaderContext__WEBPACK_IMPORTED_MODULE_5__/* .LoaderContext */ .O);
    const [trigger, setTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [myFavorites, setMyFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        handleLoading(true);
        _pages_api__WEBPACK_IMPORTED_MODULE_2__.ApiRequest.getAllBlogs().then((res)=>{
            setAllBlogs(res.blogs);
            handleLoading(false);
        }).catch((err)=>console.log(err)).finally(()=>handleLoading(false));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _pages_api__WEBPACK_IMPORTED_MODULE_2__.ApiRequest.getMyFavorites({
            userId: user
        }).then((res)=>{
            setMyFavorites(res.favoriteBlogs);
        }).catch((e)=>console.log(e));
    }, [
        trigger
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mt-5 mb-5 pb-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: " mb-5 text-32-600",
                        children: "All Blogs"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "projects-container",
                        "data-aos": "fade-down",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Blogcard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            blogData: allBlogs,
                            trigger: trigger,
                            setTrigger: setTrigger,
                            favorites: myFavorites
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllBlogs);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
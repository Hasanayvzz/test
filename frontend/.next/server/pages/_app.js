(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,237];
exports.modules = {

/***/ 9031:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8440);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const createEmotionCache = ()=>{
    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: "css",
        prepend: true
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEmotionCache);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ handleScroll)
/* harmony export */ });
const handleScroll = (e)=>{
    // console.log("window scrolled",window.scrollY);
    if (window.scrollY !== 0) {
        document.getElementById("header")?.classList.add("fixed-top");
    } else {
        document.getElementById("header")?.classList.remove("fixed-top");
    }
};


/***/ }),

/***/ 6760:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2021);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4329);
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6252);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__, i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__, i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3__]);
([i18next__WEBPACK_IMPORTED_MODULE_0__, i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__, i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
// eslint-disable-next-line import/no-named-as-default-member
i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__["default"])// detect user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
.use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3__["default"])// pass the i18n instance to react-i18next.
.use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next)// init i18next
// for all options read: https://www.i18next.com/overview/configuration-options
.init({
    fallbackLng: "en-US",
    debug: false,
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: false
    }
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (i18n)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3139);
/* harmony import */ var _app_utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9031);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contexts_loaderContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2507);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6760);
/* harmony import */ var _contexts_Theme_ThemeContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7030);
/* harmony import */ var _assets_scss_styles_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(465);
/* harmony import */ var _assets_scss_styles_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_styles_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6348);
/* harmony import */ var _hooks_animation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6712);
/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4191);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_3__, _app_utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_6__, _i18n__WEBPACK_IMPORTED_MODULE_9__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_12__, _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_13__]);
([_emotion_react__WEBPACK_IMPORTED_MODULE_3__, _app_utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_6__, _i18n__WEBPACK_IMPORTED_MODULE_9__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_12__, _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const projectId = "17efc7ddc30b8c6d6ee7da30cfe7e820";
const clientSideEmotionCache = (0,_app_utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
const MyApp = (props)=>{
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    const [DarkTheme, setDarkTheme] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        window.addEventListener("scroll", _hooks_animation__WEBPACK_IMPORTED_MODULE_14__/* .handleScroll */ .r);
        let Theme = localStorage.getItem("theme");
        if (Theme === "light") {
            setDarkTheme(false);
        } else {
            setDarkTheme(true);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
                        rel: "stylesheet",
                        integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Seyehat D\xfcşleri"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: "",
                        name: "description"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: "",
                        name: "keywords"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "favicon.ico",
                        rel: "icon"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_Theme_ThemeContext__WEBPACK_IMPORTED_MODULE_10__/* .ThemeContextProvider */ .z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.CacheProvider, {
                    value: emotionCache,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_12__/* .AuthContextProvider */ .H, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_loaderContext__WEBPACK_IMPORTED_MODULE_8__/* .LoaderProvider */ .X, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_13__/* .SettingsContextProvider */ .n, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...pageProps
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 465:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9709:
/***/ ((module) => {

"use strict";
module.exports = require("react-i18next");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8440:
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/cache");;

/***/ }),

/***/ 3139:
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/react");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 2021:
/***/ ((module) => {

"use strict";
module.exports = import("i18next");;

/***/ }),

/***/ 6252:
/***/ ((module) => {

"use strict";
module.exports = import("i18next-browser-languagedetector");;

/***/ }),

/***/ 4329:
/***/ ((module) => {

"use strict";
module.exports = import("i18next-http-backend");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [274,937,30], () => (__webpack_exec__(6505)));
module.exports = __webpack_exports__;

})();
"use strict";
exports.id = 937;
exports.ids = [937];
exports.modules = {

/***/ 7861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Loader = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "custom-loader-container",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "spinner-bg"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ }),

/***/ 6348:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthContextProvider),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9915);
/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7274);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
/* harmony import */ var _SettingsContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4191);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_4__, _pages_api__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_6__, _SettingsContext__WEBPACK_IMPORTED_MODULE_7__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_4__, _pages_api__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_6__, _SettingsContext__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const AuthContextProvider = ({ children  })=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)( false ? 0 : null);
    const [trigger, setTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [itemData, setItemData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const displaySuccessToast = (message)=>{
        react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(message, {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
            autoClose: 3000
        });
    };
    const displayErrorToast = (err, message)=>{
        react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(err?.response?.data?.message || message, {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
            autoClose: 3000
        });
    };
    const { settingsData , setSettingsData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_SettingsContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const handleLogin = async (email, password)=>{
        try {
            const res = await _pages_api__WEBPACK_IMPORTED_MODULE_5__.ApiRequest.login({
                email: email,
                password: password
            });
            if (res && res.status === "OK") {
                setUser(res.user._id);
                js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].set("accessToken", res.token);
                router.push("/");
                displaySuccessToast("Hoşgeldiniz");
            }
        } catch (err) {
            console.log(err);
            displayErrorToast(err, "");
        }
    };
    const handleLogout = async ()=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].remove("accessToken");
        js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].remove("refreshToken");
        localStorage.removeItem("travel_user");
        if (setSettingsData) setSettingsData(null);
        if (setUser) setUser(null);
        await router.push("/");
        window.location.reload();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (user) {
            localStorage.setItem("travel_user", user);
        } else if (!user) {
        //  router.push("/auth/login");
        }
    }, [
        user
    ]);
    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            user,
            userData,
            setUserData,
            trigger,
            setTrigger,
            setUser,
            handleLogout,
            displaySuccessToast,
            displayErrorToast,
            handleLogin,
            itemData,
            setItemData
        }), [
        user,
        userData,
        handleLogout,
        itemData,
        setItemData,
        handleLogin,
        displaySuccessToast,
        trigger,
        setTrigger
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: value,
        children: children
    });
};
AuthContextProvider.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4191:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "n": () => (/* binding */ SettingsContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9915);
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6348);
/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7274);
/* harmony import */ var _loaderContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2507);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_4__, _AuthContext__WEBPACK_IMPORTED_MODULE_5__, _pages_api__WEBPACK_IMPORTED_MODULE_6__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_4__, _AuthContext__WEBPACK_IMPORTED_MODULE_5__, _pages_api__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const SettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const SettingsContextProvider = ({ children  })=>{
    const [settingsData, setSettingsData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // }
    const { user , handleLogout  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_AuthContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    const accessToken = js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("accessToken");
    const [trigger, setTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { handleLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_loaderContext__WEBPACK_IMPORTED_MODULE_7__/* .LoaderContext */ .O);
    const handleGetSettingsData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (user && accessToken) {
            handleLoading(true);
            await _pages_api__WEBPACK_IMPORTED_MODULE_6__.ApiRequest.getUserById(user).then((res)=>{
                setSettingsData(res.user);
                console.log("res", res);
                handleLoading(false);
            }).catch((e)=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error("Token Expired please login.", {
                    position: "top-right",
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                    autoClose: 3000
                });
                handleLoading(false);
                js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].remove("accessToken");
            });
        }
    }, [
        user
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        handleGetSettingsData();
        return ()=>{};
    }, [
        handleGetSettingsData,
        trigger
    ]);
    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            settingsData,
            setSettingsData,
            setTrigger,
            trigger
        }), [
        settingsData,
        trigger
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingsContext.Provider, {
        value: value,
        children: children
    });
};
SettingsContextProvider.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsContext);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ LoaderContext),
/* harmony export */   "X": () => (/* binding */ LoaderProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7861);



const initialValue = {
    isLoading: false,
    handleLoading: ()=>{},
    isOpen: true,
    handleOpen: ()=>{}
};
const LoaderContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialValue);
const LoaderProvider = ({ children  })=>{
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleLoading = (prop)=>{
        setIsLoading(prop);
    };
    const handleOpen = (prop)=>{
        setIsOpen(prop);
    };
    const values = {
        isLoading,
        handleLoading,
        isOpen,
        handleOpen
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LoaderContext.Provider, {
        value: values,
        children: [
            children,
            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
};



/***/ })

};
;
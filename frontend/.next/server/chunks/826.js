"use strict";
exports.id = 826;
exports.ids = [826];
exports.modules = {

/***/ 6826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_Theme_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7030);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);





const FileUploadComponent = ({ formik , whichField , componentKey  })=>{
    const [isDragOver, setIsDragOver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [trigger, setTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isFileUploadEnabled, setIsFileUploadEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const theme = (0,_contexts_Theme_ThemeContext__WEBPACK_IMPORTED_MODULE_3__/* .useTheme */ .F)();
    const convertFileToBase64 = async (file)=>{
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onload = ()=>resolve(reader.result);
            reader.onerror = (error)=>reject(error);
            reader.readAsDataURL(file);
        });
    };
    const uploadFile = async (file)=>{
        console.log("file", file);
        try {
            const fileBase64 = await convertFileToBase64(file);
            formik.setFieldValue(whichField, fileBase64);
        } catch (error) {
            console.error("Dosya y\xfckleme hatası:", error);
        }
    };
    const handleDeleteFile = ()=>{
        setIsFileUploadEnabled(false);
        const updatedFile = "";
        formik.setFieldValue(whichField, updatedFile);
        setTrigger(!trigger);
        setTimeout(()=>{
            setIsFileUploadEnabled(true);
        }, 1000);
    };
    const handleUploadFile = async (file)=>{
        if (file) {
            await uploadFile(file);
        }
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        setIsDragOver(true);
        e.target.classList.add("drag-over");
    };
    const handleDragLeave = (e)=>{
        e.preventDefault();
        setIsDragOver(false);
        e.target.classList.remove("drag-over");
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        const acceptedFile = e.dataTransfer.files[0];
        if (acceptedFile) {
            handleUploadFile(acceptedFile);
            setIsDragOver(false);
            e.target.classList.remove("drag-over");
        }
    };
    const fieldValue = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(formik.values, whichField);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
        className: isDragOver ? `drag-over borderInput ${theme.theme}` : `borderInput ${theme.theme}`,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: (e)=>handleDrop(e),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "drop-container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "fileUploadLabel drop-label",
                    htmlFor: `${isFileUploadEnabled ? componentKey : ""}`,
                    children: fieldValue ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex gap-2 justify-content-center align-items-start",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                style: {
                                    maxHeight: 150,
                                    maxWidth: 150,
                                    borderRadius: 12
                                },
                                src: fieldValue,
                                alt: ""
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    onClick: handleDeleteFile,
                                    src: "/images/icons/bus-delete.png",
                                    alt: "",
                                    style: {
                                        maxHeight: 30,
                                        maxWidth: 30
                                    }
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-flex flex-column gap-2 p-5 align-items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: `${theme.theme} text-14-600`,
                                    children: "Drop an image here"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-14-400-gray",
                                    children: "or"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${theme.theme} file-btn`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/icons/clip-ic.svg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Choose file"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-14-400-gray-2",
                                    children: "It must be a JPG, PNG, GIF, TIFF, or BMP, no larger than 2 MB"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-14-400-gray-2",
                                    children: "Dimensions must be 1200x800 px"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    id: `${isFileUploadEnabled ? componentKey : ""}`,
                    type: "file",
                    name: ``,
                    style: {
                        display: "none"
                    },
                    accept: "image/",
                    onChange: (e)=>{
                        uploadFile(e.target.files && e.target.files[0]);
                    }
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileUploadComponent);


/***/ })

};
;
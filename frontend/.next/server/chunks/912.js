"use strict";
exports.id = 912;
exports.ids = [912];
exports.modules = {

/***/ 8507:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1168);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9181);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8823);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(443);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5953);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7308);
/* harmony import */ var _mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _contexts_Theme_ThemeContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7030);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _contexts_loaderContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2507);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7274);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api__WEBPACK_IMPORTED_MODULE_14__, react_toastify__WEBPACK_IMPORTED_MODULE_15__]);
([_pages_api__WEBPACK_IMPORTED_MODULE_14__, react_toastify__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const UsersTable = ({ rows , columns , filters , setActivePage , setDetailItem , pagination , trigger , setTrigger , blogTrigger , setBlogTrigger , headFontSize , isBorderRadius  })=>{
    const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
    const [rowsPerPage, setRowsPerPage] = react__WEBPACK_IMPORTED_MODULE_1__.useState(5);
    const [claimModal, setClaimModal] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [unlockedBalance, setUnlockedBalance] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
    const [perDay, setPerDay] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
    const [lockedBalance, setLockedBalance] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
    const [initialBalance, setInitialBalance] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
    const { handleLoading  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_contexts_loaderContext__WEBPACK_IMPORTED_MODULE_12__/* .LoaderContext */ .O);
    const handleChangePage = (event, newPage)=>{
        setPage(newPage);
    };
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)();
    const handleClose = ()=>{
        setClaimModal(false);
    };
    const handleChangeRowsPerPage = (event)=>{
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const theme = (0,_contexts_Theme_ThemeContext__WEBPACK_IMPORTED_MODULE_10__/* .useTheme */ .F)();
    console.log("table filtre", filters);
    let filteredData = rows;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            width: "100%",
            overflow: "hidden",
            boxShadow: "none",
            borderRadius: 4,
            padding: "0.5rem",
            background: theme.theme === "light" ? "#FBFBFB" : "#333333"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6___default()), {
                className: "pointer",
                sx: {
                    borderRadius: isBorderRadius ? isBorderRadius : 0
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Table__WEBPACK_IMPORTED_MODULE_3___default()), {
                    stickyHeader: true,
                    "aria-label": "sticky table",
                    className: "px-3 py-2 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7___default()), {
                            style: {
                                backgroundColor: theme.theme === "light" ? "#F0F0F0" : "#1F1F1F"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9___default()), {
                                style: {
                                    borderRadius: 99
                                },
                                children: columns?.map((column, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        align: column.align,
                                        style: {
                                            minWidth: column.minWidth,
                                            color: theme.theme === "light" ? "#7B809A" : "#f9f9f9",
                                            background: "transparent",
                                            fontSize: headFontSize ? headFontSize : 18,
                                            fontWeight: 500,
                                            borderBottom: !(index === columns.length && theme.theme === "light") ? "1px solid #D8D8D8" : "1px solid #D7D7D7"
                                        },
                                        children: column.label
                                    }, column.id))
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_4___default()), {
                            style: {
                                backgroundColor: theme.theme === "light" ? "#fbfbfb" : "#333333"
                            },
                            children: filteredData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index)=>{
                                console.log("rowlar ne", row);
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    hover: true,
                                    role: "checkbox",
                                    tabIndex: -1,
                                    children: columns?.map((column)=>{
                                        const value = row[column.id];
                                        if (column.id === "detailBtn") {
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                onClick: ()=>{
                                                    setDetailItem(row);
                                                    setActivePage("detail");
                                                },
                                                style: {
                                                    color: "#E91F63",
                                                    fontSize: 18,
                                                    lineHeight: "21.78px",
                                                    fontWeight: 500
                                                },
                                                align: column.align,
                                                children: column.format && typeof value === "number" ? column.format(value) : value
                                            }, column.id);
                                        } else if (column.id === "delete") {
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                onClick: ()=>{
                                                    _pages_api__WEBPACK_IMPORTED_MODULE_14__.ApiRequest.deleteUser({
                                                        userId: row.id
                                                    }).then((res)=>{
                                                        setTrigger(!trigger);
                                                        react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.success("Kullanıcı başarıyla silindi.", {
                                                            position: "top-right",
                                                            hideProgressBar: false,
                                                            closeOnClick: false,
                                                            pauseOnHover: true,
                                                            draggable: false,
                                                            progress: undefined,
                                                            theme: "light",
                                                            autoClose: 3000
                                                        });
                                                    });
                                                    console.log("row ne", row);
                                                // setDetailItem(row);
                                                //  setActivePage("detail");
                                                },
                                                style: {
                                                    color: "#f7626f",
                                                    fontSize: 18,
                                                    lineHeight: "21.78px",
                                                    fontWeight: 500
                                                },
                                                align: column.align,
                                                children: column.format && typeof value === "number" ? column.format(value) : value
                                            }, column.id);
                                        } else if (column.id === "deleteBlog") {
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                onClick: ()=>{
                                                    _pages_api__WEBPACK_IMPORTED_MODULE_14__.ApiRequest.deleteBlog({
                                                        blogId: row.id
                                                    }).then((res)=>{
                                                        setBlogTrigger(!blogTrigger);
                                                        react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.success("Blog başarıyla silindi.", {
                                                            position: "top-right",
                                                            hideProgressBar: false,
                                                            closeOnClick: false,
                                                            pauseOnHover: true,
                                                            draggable: false,
                                                            progress: undefined,
                                                            theme: "light",
                                                            autoClose: 3000
                                                        });
                                                    });
                                                // setDetailItem(row);
                                                //  setActivePage("detail");
                                                },
                                                style: {
                                                    color: "#f7626f",
                                                    fontSize: 18,
                                                    lineHeight: "21.78px",
                                                    fontWeight: 500
                                                },
                                                align: column.align,
                                                children: column.format && typeof value === "number" ? column.format(value) : value
                                            }, column.id);
                                        } else if (column.id === "status") {
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                onClick: ()=>{
                                                    console.log("row ne", row);
                                                // setDetailItem(row);
                                                //  setActivePage("detail");
                                                },
                                                style: {
                                                    color: "#00D66B",
                                                    fontSize: 18,
                                                    lineHeight: "21.78px",
                                                    fontWeight: 500
                                                },
                                                align: column.align,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: value === "Rejected" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: {
                                                            color: "#f7626f"
                                                        },
                                                        children: "Reddedildi"
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "d-flex align-items-center gap-2",
                                                        children: value === "waitingApproval" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    onClick: ()=>{
                                                                        _pages_api__WEBPACK_IMPORTED_MODULE_14__.ApiRequest.updateBlog({
                                                                            blogId: row.id,
                                                                            status: "Approved"
                                                                        }).then((res)=>{
                                                                            setBlogTrigger(!blogTrigger);
                                                                            react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.success("Blog Başarıyla Onaylandı!", {
                                                                                position: "top-right",
                                                                                hideProgressBar: false,
                                                                                closeOnClick: false,
                                                                                pauseOnHover: true,
                                                                                draggable: false,
                                                                                progress: undefined,
                                                                                theme: "light",
                                                                                autoClose: 3000
                                                                            });
                                                                        });
                                                                    },
                                                                    className: "btn-rounded-green",
                                                                    children: "Onayla"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    onClick: ()=>{
                                                                        _pages_api__WEBPACK_IMPORTED_MODULE_14__.ApiRequest.updateBlog({
                                                                            blogId: row.id,
                                                                            status: "Rejected"
                                                                        }).then((res)=>{
                                                                            setBlogTrigger(!blogTrigger);
                                                                            react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.success("Blog Başarıyla Reddedildi!", {
                                                                                position: "top-right",
                                                                                hideProgressBar: false,
                                                                                closeOnClick: false,
                                                                                pauseOnHover: true,
                                                                                draggable: false,
                                                                                progress: undefined,
                                                                                theme: "light",
                                                                                autoClose: 3000
                                                                            });
                                                                        });
                                                                    },
                                                                    className: "btn-rounded-red",
                                                                    children: "Reddet"
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Onaylandı"
                                                        })
                                                    })
                                                })
                                            }, column.id);
                                        } else if (column.id === "blogDetail") {
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                onClick: ()=>{
                                                    router.push(`blogs/${row.id}`);
                                                },
                                                style: {
                                                    color: "#f9b34d",
                                                    fontSize: 18,
                                                    lineHeight: "21.78px",
                                                    fontWeight: 500
                                                },
                                                align: column.align,
                                                children: column.format && typeof value === "number" ? column.format(value) : value
                                            }, column.id);
                                        } else {
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                style: {
                                                    color: theme.theme === "light" ? "#344767" : "#f6f6f6",
                                                    fontSize: 16,
                                                    lineHeight: "21.78px",
                                                    fontWeight: 400,
                                                    borderBottom: theme.theme === "light" ? "1px solid #D8D8D8" : "1px solid #D7D7D7"
                                                },
                                                align: column.align,
                                                children: column.format && typeof value === "number" ? column.format(value) : value
                                            }, column.id);
                                        }
                                    })
                                }, row.code);
                            })
                        })
                    ]
                })
            }),
            pagination && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_8___default()), {
                style: {
                    color: theme.theme === "light" ? "#344767" : "#f9f9f9"
                },
                rowsPerPageOptions: [
                    10,
                    25,
                    100
                ],
                count: rows.length,
                rowsPerPage: rowsPerPage,
                labelRowsPerPage: t("dashboard.rowsPer"),
                page: page,
                component: "div",
                onPageChange: handleChangePage,
                onRowsPerPageChange: handleChangeRowsPerPage
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8912:
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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7274);
/* harmony import */ var _contexts_Theme_ThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7030);
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8507);
/* harmony import */ var _contexts_loaderContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2507);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_header__WEBPACK_IMPORTED_MODULE_2__, _pages_api__WEBPACK_IMPORTED_MODULE_4__, _components_Table__WEBPACK_IMPORTED_MODULE_6__]);
([_components_header__WEBPACK_IMPORTED_MODULE_2__, _pages_api__WEBPACK_IMPORTED_MODULE_4__, _components_Table__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Admindashboard = ()=>{
    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [blogs, setBlogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const [trigger, setTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [blogTrigger, setBlogTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const theme = (0,_contexts_Theme_ThemeContext__WEBPACK_IMPORTED_MODULE_5__/* .useTheme */ .F)();
    const columns = [
        {
            id: "id",
            label: t("table.userId"),
            minWidth: 150,
            align: "left",
            format: (value)=>value.toLocaleString("en-US")
        },
        {
            id: "name",
            label: t("table.userName"),
            minWidth: 150,
            align: "left",
            format: (value)=>value.toLocaleString("en-US")
        },
        {
            id: "email",
            label: "E-Mail",
            minWidth: 150,
            align: "left",
            format: (value)=>value.toLocaleString("en-US")
        },
        {
            id: "userRole",
            label: t("table.role"),
            minWidth: 150,
            align: "left",
            format: (value)=>value.toLocaleString("en-US")
        },
        {
            id: "registrationDate",
            label: t("table.registrationDate"),
            align: "left",
            format: (value)=>value.toLocaleString("en-US")
        },
        {
            id: "delete",
            align: "left",
            format: (value)=>value.toFixed(2)
        }
    ];
    const blogColumns = [
        {
            id: "id",
            label: t("table.userId"),
            minWidth: 150,
            align: "left",
            format: (value)=>value.toLocaleString("en-US")
        },
        {
            id: "blogName",
            label: t("table.blogName"),
            minWidth: 150,
            align: "left",
            format: (value)=>value.toLocaleString("en-US")
        },
        {
            id: "date",
            label: t("table.publishedDate"),
            minWidth: 150,
            align: "left",
            format: (value)=>value.toLocaleString("en-US")
        },
        {
            id: "authorName",
            label: t("table.authorName"),
            minWidth: 150,
            align: "left",
            format: (value)=>value.toLocaleString("en-US")
        },
        {
            id: "country",
            label: t("table.country"),
            align: "left",
            format: (value)=>value.toLocaleString("en-US")
        },
        {
            id: "blogDetail",
            align: "left",
            format: (value)=>value.toFixed(2)
        },
        {
            id: "deleteBlog",
            align: "left",
            format: (value)=>value.toFixed(2)
        },
        {
            id: "status",
            align: "left",
            label: t("table.status"),
            format: (value)=>value.toFixed(2)
        }
    ];
    const { handleLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_loaderContext__WEBPACK_IMPORTED_MODULE_7__/* .LoaderContext */ .O);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        handleLoading(true);
        _pages_api__WEBPACK_IMPORTED_MODULE_4__.ApiRequest.getAllUsers().then((res)=>{
            let tableRow = [];
            res.users.map((elm)=>{
                const user = {
                    id: elm._id,
                    registrationDate: new Date(elm.date).toLocaleDateString(),
                    email: elm.email,
                    name: elm.fullName,
                    userRole: elm.userRole,
                    delete: t("table.deleteUser")
                };
                tableRow.push(user);
                handleLoading(false);
            });
            setUsers(tableRow);
        }).catch((e)=>{
            console.log(e);
            handleLoading(false);
        });
    }, [
        trigger
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _pages_api__WEBPACK_IMPORTED_MODULE_4__.ApiRequest.getAllBlogWithoutImages().then((res)=>{
            console.log("blog res", res);
            let tableRow = [];
            res.blogs.map((elm)=>{
                const blog = {
                    id: elm._id,
                    blogName: elm.blogName,
                    date: new Date(elm.date).toLocaleDateString(),
                    authorName: elm.authorName,
                    country: elm.country,
                    status: elm.status,
                    blogDetail: "Detay",
                    deleteBlog: "Sil"
                };
                tableRow.push(blog);
            });
            setBlogs(tableRow);
        });
    }, [
        blogTrigger
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: `${theme.theme} text-32-700 mt-4 mb-3`,
                        children: t("navbar.dashboard")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: `${theme.theme} text-24-700-yellow mt-4 mb-3`,
                        children: t("userList")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Table__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        trigger: trigger,
                        setTrigger: setTrigger,
                        pagination: true,
                        rows: users,
                        headFontSize: 12,
                        columns: columns
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: `${theme.theme} text-24-700-yellow mt-4 mb-3`,
                        children: t("blogList")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Table__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        pagination: true,
                        rows: blogs,
                        blogTrigger: blogTrigger,
                        setBlogTrigger: setBlogTrigger,
                        headFontSize: 12,
                        columns: blogColumns
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pb-5"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admindashboard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
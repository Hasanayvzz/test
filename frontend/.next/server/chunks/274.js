"use strict";
exports.id = 274;
exports.ids = [274];
exports.modules = {

/***/ 7274:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiRequest": () => (/* binding */ ApiRequest),
/* harmony export */   "instance": () => (/* binding */ instance),
/* harmony export */   "instanceFile": () => (/* binding */ instanceFile),
/* harmony export */   "recommendInstance": () => (/* binding */ recommendInstance)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://localhost:3005",
    timeout: 1200000,
    maxBodyLength: Infinity,
    headers: {
        "Content-Type": "application/json"
    }
});
const recommendInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://127.0.0.1:5000",
    timeout: 1200000,
    maxBodyLength: Infinity,
    headers: {
        "Content-Type": "application/json"
    }
});
const instanceFile = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL_FILE,
    timeout: 1200000,
    headers: {
        "Content-Type": "application/json"
    }
});
const responseBody = (response)=>response.data;
const request = {
    get: (url)=>instance.get(url).then(responseBody),
    post: (url, body)=>instance.post(url, body).then(responseBody),
    recommendPost: (url, body)=>recommendInstance.post(url, body).then(responseBody),
    postFormData: async (url, body)=>{
        return instanceFile.post(url, body, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(responseBody);
    }
};
const ApiRequest = {
    // Auth apis
    login: (payload)=>request.post("auth/login", payload),
    register: (payload)=>request.post("auth/register", payload),
    getUserById: (id)=>request.get(`auth/${id}`),
    getAllUsers: ()=>request.get(`auth/getAll`),
    deleteUser: (payload)=>request.post(`auth/delete`, payload),
    addImage: (payload)=>request.post(`auth/addImage`, payload),
    // Blog apis
    getAllBlogs: ()=>request.get(`blog/getAll`),
    createBlog: (payload)=>request.post("blog/create", payload),
    deleteBlog: (payload)=>request.post(`blog/delete`, payload),
    getAllBlogWithoutImages: ()=>request.get(`blog/getAllWithoutImage`),
    getBlogById: (id)=>request.get(`blog/${id}`),
    updateBlog: (payload)=>request.post("blog/update", payload),
    addStar: (payload)=>request.post("blog/addStar", payload),
    getAllWithoutPlaceImages: ()=>request.get(`blog/getAllWithoutPlaceImages`),
    addComment: (payload)=>request.post("blog/addComment", payload),
    deleteComment: (payload)=>request.post("blog/deleteComment", payload),
    updateComment: (payload)=>request.post("blog/updateComment", payload),
    // Favorite
    addFavorite: (payload)=>request.post(`favorite/create`, payload),
    getMyFavorites: (payload)=>request.post(`favorite/getMyFavorites`, payload),
    // AI
    recommend: (payload)=>request.recommendPost(`/predict`, payload)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
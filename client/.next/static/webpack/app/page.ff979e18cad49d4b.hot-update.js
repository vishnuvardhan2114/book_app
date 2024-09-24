"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BookForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BookForm */ \"(app-pages-browser)/./components/BookForm.js\");\n/* harmony import */ var _components_BookList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BookList */ \"(app-pages-browser)/./components/BookList.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [books, setBooks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [randomBooks, setRandomBooks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [randomPage, setRandomPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [totalBooks, setTotalBooks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [totalRandomBooks, setTotalRandomBooks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [limit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const fetchRecommendations = async (preferences)=>{\n        const response = await fetch(\"https://book-app-api-iuv4.onrender.com/api/recommendations\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(preferences)\n        });\n        if (response.ok) {\n            const data = await response.json();\n            setBooks(data.recommendations);\n            setTotalBooks(data.totalBooks);\n        } else {\n            console.log(\"No recommendations found\");\n        }\n    };\n    const handleBookUpdate = (book)=>{\n        router.push(\"/updateBook/\".concat(book._id));\n    };\n    const handleBookDelete = async (bookId)=>{\n        const response = await fetch(\"https://book-app-api-iuv4.onrender.com/api/books/\".concat(bookId), {\n            method: \"DELETE\"\n        });\n        if (response.ok) {\n            setBooks(books.filter((book)=>book._id !== bookId));\n            console.log(\"Book deleted successfully!\");\n        } else {\n            console.log(\"Failed to delete book\");\n        }\n    };\n    const fetchRandomBooks = async ()=>{\n        const response = await fetch(\"https://book-app-api-iuv4.onrender.com/api/books/random?page=\".concat(randomPage, \"&limit=\").concat(limit));\n        if (response.ok) {\n            const data = await response.json();\n            setRandomBooks(data.randomBooks);\n            setTotalRandomBooks(data.totalBooks);\n        } else {\n            console.log(\"Failed to fetch random books\");\n        }\n    };\n    const handleNextPage = ()=>{\n        if (page < Math.ceil(totalBooks / limit)) {\n            setPage((prevPage)=>prevPage + 1);\n        }\n    };\n    const handlePreviousPage = ()=>{\n        if (page > 1) {\n            setPage((prevPage)=>prevPage - 1);\n        }\n    };\n    const handleRandomNextPage = ()=>{\n        if (randomPage < Math.ceil(totalRandomBooks / limit)) {\n            setRandomPage((prevPage)=>prevPage + 1);\n        }\n    };\n    const handleRandomPreviousPage = ()=>{\n        if (randomPage > 1) {\n            setRandomPage((prevPage)=>prevPage - 1);\n        }\n    };\n    const handleAddBookPage = ()=>{\n        router.push(\"/addBook\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchRecommendations({\n            genre: \"\"\n        });\n    }, [\n        page\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchRandomBooks();\n    }, [\n        randomPage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto p-4 min-h-screen bg-[url('https://assets.architecturaldigest.in/photos/624c2654cf7483eb90e638d6/4:3/w_1440,h_1080,c_limit/Books-1.jpg')] w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold text-center text-white\",\n                children: \"Personalized Book Recommendation App\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VISHNU\\\\Desktop\\\\app\\\\client\\\\app\\\\page.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-7\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onFetchRecommendations: fetchRecommendations\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\VISHNU\\\\Desktop\\\\app\\\\client\\\\app\\\\page.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VISHNU\\\\Desktop\\\\app\\\\client\\\\app\\\\page.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn bg-red-100 text-black font-bold p-3 rounded-lg\",\n                onClick: handleAddBookPage,\n                children: \"Add your book\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VISHNU\\\\Desktop\\\\app\\\\client\\\\app\\\\page.tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this),\n            books.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-semibold text-center mt-6 text-white\",\n                        children: \"Book Recommendations\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VISHNU\\\\Desktop\\\\app\\\\client\\\\app\\\\page.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        books: books,\n                        onBookUpdate: handleBookUpdate,\n                        onBookDelete: handleBookDelete\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VISHNU\\\\Desktop\\\\app\\\\client\\\\app\\\\page.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            randomBooks.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-4xl font-bold text-center mt-6 mb-6 text-white\",\n                        children: \"Random Books\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VISHNU\\\\Desktop\\\\app\\\\client\\\\app\\\\page.tsx\",\n                        lineNumber: 159,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        books: randomBooks,\n                        onBookUpdate: handleBookUpdate,\n                        onBookDelete: handleBookDelete\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VISHNU\\\\Desktop\\\\app\\\\client\\\\app\\\\page.tsx\",\n                        lineNumber: 162,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleRandomPreviousPage,\n                                disabled: randomPage === 1,\n                                className: \"px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-2 disabled:opacity-50\",\n                                children: \"Previous\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VISHNU\\\\Desktop\\\\app\\\\client\\\\app\\\\page.tsx\",\n                                lineNumber: 164,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleRandomNextPage,\n                                disabled: randomPage >= Math.ceil(totalRandomBooks / limit),\n                                className: \"px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50\",\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VISHNU\\\\Desktop\\\\app\\\\client\\\\app\\\\page.tsx\",\n                                lineNumber: 171,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\VISHNU\\\\Desktop\\\\app\\\\client\\\\app\\\\page.tsx\",\n                        lineNumber: 163,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            randomBooks.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-white\",\n                children: \"No random books available\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VISHNU\\\\Desktop\\\\app\\\\client\\\\app\\\\page.tsx\",\n                lineNumber: 183,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VISHNU\\\\Desktop\\\\app\\\\client\\\\app\\\\page.tsx\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"dKAqe4f5qObONqZWvt6oqXQafVo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJvb2tGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0Jvb2tGb3JtXCI7XG5pbXBvcnQgQm9va0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvQm9va0xpc3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxudHlwZSBQcmVmZXJlbmNlcyA9IHtcbiAgZ2VucmU/OiBzdHJpbmc7XG4gIGF1dGhvcj86IHN0cmluZztcbn07XG5cbnR5cGUgQm9vayA9IHtcbiAgX2lkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGF1dGhvcjogc3RyaW5nO1xuICBnZW5yZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2Jvb2tzLCBzZXRCb29rc10gPSB1c2VTdGF0ZTxCb29rW10+KFtdKTtcbiAgY29uc3QgW3JhbmRvbUJvb2tzLCBzZXRSYW5kb21Cb29rc10gPSB1c2VTdGF0ZTxCb29rW10+KFtdKTtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtyYW5kb21QYWdlLCBzZXRSYW5kb21QYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbdG90YWxCb29rcywgc2V0VG90YWxCb29rc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RvdGFsUmFuZG9tQm9va3MsIHNldFRvdGFsUmFuZG9tQm9va3NdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtsaW1pdF0gPSB1c2VTdGF0ZSg1KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgZmV0Y2hSZWNvbW1lbmRhdGlvbnMgPSBhc3luYyAocHJlZmVyZW5jZXM6IFByZWZlcmVuY2VzKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYm9vay1hcHAtYXBpLWl1djQub25yZW5kZXIuY29tL2FwaS9yZWNvbW1lbmRhdGlvbnNcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHByZWZlcmVuY2VzKSxcbiAgICB9KTtcbiAgXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0Qm9va3MoZGF0YS5yZWNvbW1lbmRhdGlvbnMpO1xuICAgICAgc2V0VG90YWxCb29rcyhkYXRhLnRvdGFsQm9va3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vIHJlY29tbWVuZGF0aW9ucyBmb3VuZFwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQm9va1VwZGF0ZSA9IChib29rOiBCb29rKSA9PiB7XG4gICAgcm91dGVyLnB1c2goYC91cGRhdGVCb29rLyR7Ym9vay5faWR9YCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQm9va0RlbGV0ZSA9IGFzeW5jIChib29rSWQgOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2Jvb2stYXBwLWFwaS1pdXY0Lm9ucmVuZGVyLmNvbS9hcGkvYm9va3MvJHtib29rSWR9YCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICB9KTtcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgc2V0Qm9va3MoYm9va3MuZmlsdGVyKChib29rKSA9PiBib29rLl9pZCAhPT0gYm9va0lkKSk7XG4gICAgICBjb25zb2xlLmxvZygnQm9vayBkZWxldGVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gZGVsZXRlIGJvb2tcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZldGNoUmFuZG9tQm9va3MgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2Jvb2stYXBwLWFwaS1pdXY0Lm9ucmVuZGVyLmNvbS9hcGkvYm9va3MvcmFuZG9tP3BhZ2U9JHtyYW5kb21QYWdlfSZsaW1pdD0ke2xpbWl0fWBcbiAgICApO1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldFJhbmRvbUJvb2tzKGRhdGEucmFuZG9tQm9va3MpO1xuICAgICAgc2V0VG90YWxSYW5kb21Cb29rcyhkYXRhLnRvdGFsQm9va3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBmZXRjaCByYW5kb20gYm9va3NcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5leHRQYWdlID0gKCkgPT4ge1xuICAgIGlmIChwYWdlIDwgTWF0aC5jZWlsKHRvdGFsQm9va3MgLyBsaW1pdCkpIHtcbiAgICAgIHNldFBhZ2UoKHByZXZQYWdlKSA9PiBwcmV2UGFnZSArIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcmV2aW91c1BhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKHBhZ2UgPiAxKSB7XG4gICAgICBzZXRQYWdlKChwcmV2UGFnZSkgPT4gcHJldlBhZ2UgLSAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmFuZG9tTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKHJhbmRvbVBhZ2UgPCBNYXRoLmNlaWwodG90YWxSYW5kb21Cb29rcyAvIGxpbWl0KSkge1xuICAgICAgc2V0UmFuZG9tUGFnZSgocHJldlBhZ2UpID0+IHByZXZQYWdlICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJhbmRvbVByZXZpb3VzUGFnZSA9ICgpID0+IHtcbiAgICBpZiAocmFuZG9tUGFnZSA+IDEpIHtcbiAgICAgIHNldFJhbmRvbVBhZ2UoKHByZXZQYWdlKSA9PiBwcmV2UGFnZSAtIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGRCb29rUGFnZSA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaChcIi9hZGRCb29rXCIpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hSZWNvbW1lbmRhdGlvbnMoeyBnZW5yZTogXCJcIiB9KTtcbiAgfSwgW3BhZ2VdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoUmFuZG9tQm9va3MoKTtcbiAgfSwgW3JhbmRvbVBhZ2VdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBwLTQgbWluLWgtc2NyZWVuIGJnLVt1cmwoJ2h0dHBzOi8vYXNzZXRzLmFyY2hpdGVjdHVyYWxkaWdlc3QuaW4vcGhvdG9zLzYyNGMyNjU0Y2Y3NDgzZWI5MGU2MzhkNi80OjMvd18xNDQwLGhfMTA4MCxjX2xpbWl0L0Jvb2tzLTEuanBnJyldIHctZnVsbFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIFBlcnNvbmFsaXplZCBCb29rIFJlY29tbWVuZGF0aW9uIEFwcFxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtN1wiPlxuICAgICAgICA8Qm9va0Zvcm0gb25GZXRjaFJlY29tbWVuZGF0aW9ucz17ZmV0Y2hSZWNvbW1lbmRhdGlvbnN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJnLXJlZC0xMDAgdGV4dC1ibGFjayBmb250LWJvbGQgcC0zIHJvdW5kZWQtbGdcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRCb29rUGFnZX1cbiAgICAgID5cbiAgICAgICAgQWRkIHlvdXIgYm9va1xuICAgICAgPC9idXR0b24+XG4gICAgICB7Ym9va3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgbXQtNiB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICBCb29rIFJlY29tbWVuZGF0aW9uc1xuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPEJvb2tMaXN0XG4gICAgICAgICAgICBib29rcz17Ym9va3N9XG4gICAgICAgICAgICBvbkJvb2tVcGRhdGU9e2hhbmRsZUJvb2tVcGRhdGV9XG4gICAgICAgICAgICBvbkJvb2tEZWxldGU9e2hhbmRsZUJvb2tEZWxldGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzUGFnZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IDF9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmF5LTMwMCB0ZXh0LWdyYXktNzAwIHJvdW5kZWQtbGcgbXItMiBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUHJldmlvdXNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPj0gTWF0aC5jZWlsKHRvdGFsQm9va3MgLyBsaW1pdCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmF5LTMwMCB0ZXh0LWdyYXktNzAwIHJvdW5kZWQtbGcgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5leHRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICB7cmFuZG9tQm9va3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtdC02IG1iLTYgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgUmFuZG9tIEJvb2tzXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Qm9va0xpc3QgYm9va3M9e3JhbmRvbUJvb2tzfSBvbkJvb2tVcGRhdGU9e2hhbmRsZUJvb2tVcGRhdGV9IG9uQm9va0RlbGV0ZT17aGFuZGxlQm9va0RlbGV0ZX0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmFuZG9tUHJldmlvdXNQYWdlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17cmFuZG9tUGFnZSA9PT0gMX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWdyYXktMzAwIHRleHQtZ3JheS03MDAgcm91bmRlZC1sZyBtci0yIGRpc2FibGVkOm9wYWNpdHktNTBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQcmV2aW91c1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJhbmRvbU5leHRQYWdlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17cmFuZG9tUGFnZSA+PSBNYXRoLmNlaWwodG90YWxSYW5kb21Cb29rcyAvIGxpbWl0KX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWdyYXktMzAwIHRleHQtZ3JheS03MDAgcm91bmRlZC1sZyBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cblxuICAgICAge3JhbmRvbUJvb2tzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5ObyByYW5kb20gYm9va3MgYXZhaWxhYmxlPC9wPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJvb2tGb3JtIiwiQm9va0xpc3QiLCJ1c2VSb3V0ZXIiLCJIb21lIiwiYm9va3MiLCJzZXRCb29rcyIsInJhbmRvbUJvb2tzIiwic2V0UmFuZG9tQm9va3MiLCJwYWdlIiwic2V0UGFnZSIsInJhbmRvbVBhZ2UiLCJzZXRSYW5kb21QYWdlIiwidG90YWxCb29rcyIsInNldFRvdGFsQm9va3MiLCJ0b3RhbFJhbmRvbUJvb2tzIiwic2V0VG90YWxSYW5kb21Cb29rcyIsImxpbWl0Iiwicm91dGVyIiwiZmV0Y2hSZWNvbW1lbmRhdGlvbnMiLCJwcmVmZXJlbmNlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImRhdGEiLCJqc29uIiwicmVjb21tZW5kYXRpb25zIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUJvb2tVcGRhdGUiLCJib29rIiwicHVzaCIsIl9pZCIsImhhbmRsZUJvb2tEZWxldGUiLCJib29rSWQiLCJmaWx0ZXIiLCJmZXRjaFJhbmRvbUJvb2tzIiwiaGFuZGxlTmV4dFBhZ2UiLCJNYXRoIiwiY2VpbCIsInByZXZQYWdlIiwiaGFuZGxlUHJldmlvdXNQYWdlIiwiaGFuZGxlUmFuZG9tTmV4dFBhZ2UiLCJoYW5kbGVSYW5kb21QcmV2aW91c1BhZ2UiLCJoYW5kbGVBZGRCb29rUGFnZSIsImdlbnJlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJvbkZldGNoUmVjb21tZW5kYXRpb25zIiwiYnV0dG9uIiwib25DbGljayIsImxlbmd0aCIsImgyIiwib25Cb29rVXBkYXRlIiwib25Cb29rRGVsZXRlIiwiZGlzYWJsZWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});
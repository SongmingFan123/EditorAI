"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/context/AuthContext.tsx":
/*!*************************************!*\
  !*** ./app/context/AuthContext.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/firebase */ \"(app-pages-browser)/./app/firebase/firebase.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var node_modules_next_headers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node_modules/next/headers */ \"(app-pages-browser)/./node_modules/next/dist/api/headers.js\");\n/* __next_internal_client_entry_do_not_use__ useAuth,AuthProvider auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst useAuth = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};\n_s(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s1();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // useEffect(() => {\n    //   const unsubscribe = onAuthStateChanged(auth, (user) => {\n    //     setUser(user);\n    //   });\n    //   return () => unsubscribe();\n    // }, []);\n    // Function to update the user's display name\n    async function updateUserDisplayName(user, displayName) {\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.updateProfile)(user, {\n                displayName: displayName\n            });\n            console.log(\"Display name updated successfully\");\n        } catch (error) {\n            console.error(\"Error updating display name:\", error);\n        }\n    }\n    // Function to update the user's password\n    async function updateUserPassword(user, newPassword) {\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.updatePassword)(user, newPassword);\n            console.log(\"Password updated successfully\");\n        } catch (error) {\n            console.error(\"Error updating password:\", error);\n        }\n    }\n    const updateUser = (newDisplayName, newPassword)=>{\n        const user = _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.currentUser;\n        if (user) {\n            updateUserDisplayName(user, newDisplayName);\n            updateUserPassword(user, newPassword);\n        }\n    };\n    const signUp = async (email, password, displayName)=>{\n        // try {\n        //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);\n        //     const user = userCredential.user;\n        //     await updateProfile(user, {\n        //       displayName: displayName\n        //     });\n        //     console.log(\"Sign up successful:\", user);\n        //     return true;\n        // } catch (error) {\n        //     // Handle sign up error\n        //     console.error(\"Sign up error:\", error);\n        //     return false;\n        // }\n        try {\n            const response = await fetch(\"http://127.0.0.1:5000/signup\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    password,\n                    displayName\n                })\n            });\n            if (!response.ok) {\n                console.log(\"failed to sign up\");\n                // return response;\n                return false;\n            }\n            console.log(\"success\");\n            return true;\n        // redirect(\"/pages/login\");\n        // return {\"success\": true};\n        } catch (error) {\n            return false;\n        }\n    };\n    const signIn = async (email, password)=>{\n        try {\n            const response = await fetch(\"http://127.0.0.1:5000/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            if (!response.ok) {\n                return false;\n            }\n            console.log(response);\n            const { access_token } = await response.json();\n            (0,node_modules_next_headers__WEBPACK_IMPORTED_MODULE_4__.cookies)().set(\"accessToken\", access_token);\n            return true;\n        } catch (error) {\n            console.log(error);\n            return false;\n        }\n    };\n    const signOut = ()=>{\n        return _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.signOut();\n    };\n    const value = {\n        user,\n        userId,\n        signUp,\n        signIn,\n        signOut,\n        updateUser,\n        displayName: (user === null || user === void 0 ? void 0 : user.displayName) || \"\",\n        id: (user === null || user === void 0 ? void 0 : user.uid) || \"\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/raymond/Desktop/EditorAI/client/editor-ai/app/context/AuthContext.tsx\",\n        lineNumber: 142,\n        columnNumber: 10\n    }, undefined);\n};\n_s1(AuthProvider, \"K+f346DNG4w+YAOm1IS3QCePXLk=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb250ZXh0L0F1dGhDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRThFO0FBQ2xDO0FBQ3VHO0FBQy9GO0FBYXBELE1BQU1RLDRCQUFjUCxvREFBYUEsQ0FBbUIsQ0FBQztBQUU5QyxNQUFNUSxVQUFVOztJQUFNUCxPQUFBQSxpREFBVUEsQ0FBQ007QUFBVyxFQUFFO0dBQXhDQztBQUVOLE1BQU1DLGVBQXdEO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUNoRixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1YsK0NBQVFBLENBQWM7SUFDOUMsTUFBTSxDQUFDVyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFnQjtJQUNwRCxvQkFBb0I7SUFDcEIsNkRBQTZEO0lBQzdELHFCQUFxQjtJQUNyQixRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFHViw2Q0FBNkM7SUFDN0MsZUFBZWEsc0JBQXNCSixJQUFTLEVBQUVLLFdBQWtCO1FBQ2hFLElBQUk7WUFDRixNQUFNWiw0REFBYUEsQ0FBQ08sTUFBTTtnQkFDeEJLLGFBQWFBO1lBQ2Y7WUFDQUMsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2RGLFFBQVFFLEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQ2hEO0lBQ0Y7SUFFQSx5Q0FBeUM7SUFDekMsZUFBZUMsbUJBQW1CVCxJQUFTLEVBQUVVLFdBQWtCO1FBQzdELElBQUk7WUFDRixNQUFNaEIsNkRBQWNBLENBQUNNLE1BQU1VO1lBQzNCSixRQUFRQyxHQUFHLENBQUM7UUFDZCxFQUFFLE9BQU9DLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDLDRCQUE0QkE7UUFDNUM7SUFDRjtJQUVBLE1BQU1HLGFBQWEsQ0FBQ0MsZ0JBQXNCRjtRQUN4QyxNQUFNVixPQUFPUixvREFBSUEsQ0FBQ3FCLFdBQVc7UUFDN0IsSUFBSWIsTUFBTTtZQUNSSSxzQkFBc0JKLE1BQU1ZO1lBQzVCSCxtQkFBbUJULE1BQU1VO1FBQzNCO0lBQ0Y7SUFFQSxNQUFNSSxTQUFTLE9BQU9DLE9BQWVDLFVBQWtCWDtRQUNyRCxRQUFRO1FBQ1IsMEZBQTBGO1FBQzFGLHdDQUF3QztRQUV4QyxrQ0FBa0M7UUFDbEMsaUNBQWlDO1FBQ2pDLFVBQVU7UUFFVixnREFBZ0Q7UUFDaEQsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQiw4QkFBOEI7UUFDOUIsOENBQThDO1FBQzlDLG9CQUFvQjtRQUNwQixJQUFJO1FBQ0osSUFBSTtZQUNGLE1BQU1ZLFdBQVcsTUFBTUMsTUFBTSxnQ0FBZ0M7Z0JBQ3pEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRVI7b0JBQU9DO29CQUFVWDtnQkFBWTtZQUN4RDtZQUVBLElBQUksQ0FBQ1ksU0FBU08sRUFBRSxFQUFFO2dCQUNkbEIsUUFBUUMsR0FBRyxDQUFDO2dCQUNaLG1CQUFtQjtnQkFDbkIsT0FBTztZQUNYO1lBQ0FELFFBQVFDLEdBQUcsQ0FBQztZQUNaLE9BQU87UUFDUCw0QkFBNEI7UUFDNUIsNEJBQTRCO1FBQ2hDLEVBQUUsT0FBT0MsT0FBTztZQUNaLE9BQU87UUFDWDtJQUVGO0lBRUEsTUFBTWlCLFNBQVMsT0FBT1YsT0FBZUM7UUFDbkMsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSwrQkFBK0I7Z0JBQ3hEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRVI7b0JBQU9DO2dCQUFTO1lBQzNDO1lBRUEsSUFBSSxDQUFDQyxTQUFTTyxFQUFFLEVBQUU7Z0JBQ2QsT0FBTztZQUNYO1lBQ0FsQixRQUFRQyxHQUFHLENBQUNVO1lBQ1osTUFBTSxFQUFFUyxZQUFZLEVBQUUsR0FBRyxNQUFNVCxTQUFTVSxJQUFJO1lBQzVDaEMsa0VBQU9BLEdBQUdpQyxHQUFHLENBQUMsZUFBZUY7WUFDN0IsT0FBTztRQUNYLEVBQUUsT0FBT2xCLE9BQU87WUFDZEYsUUFBUUMsR0FBRyxDQUFDQztZQUNWLE9BQU87UUFDWDtJQUNBO0lBRUUsTUFBTXFCLFVBQVU7UUFDZCxPQUFPckMsb0RBQUlBLENBQUNxQyxPQUFPO0lBQ3JCO0lBRUEsTUFBTUMsUUFBMEI7UUFDOUI5QjtRQUNBRTtRQUNBWTtRQUNBVztRQUNBSTtRQUNBbEI7UUFDQU4sYUFBYUwsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNSyxXQUFXLEtBQUk7UUFDbEMwQixJQUFJL0IsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNZ0MsR0FBRyxLQUFJO0lBQ25CO0lBRUEscUJBQU8sOERBQUNwQyxZQUFZcUMsUUFBUTtRQUFDSCxPQUFPQTtrQkFBUS9COzs7Ozs7QUFDOUMsRUFBRTtJQXhIV0Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbnRleHQvQXV0aENvbnRleHQudHN4Pzk5YjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9maXJlYmFzZS9maXJlYmFzZSc7XG5pbXBvcnQgeyBVc2VyLCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLCBvbkF1dGhTdGF0ZUNoYW5nZWQsIHVwZGF0ZVByb2ZpbGUsIHVwZGF0ZVBhc3N3b3JkfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICdub2RlX21vZHVsZXMvbmV4dC9oZWFkZXJzJztcblxuaW50ZXJmYWNlIEF1dGhDb250ZXh0UHJvcHMge1xuICB1c2VyOiBVc2VyIHwgbnVsbDtcbiAgdXNlcklkOiBzdHJpbmcgfCBudWxsOyAvL3RlbXBcbiAgc2lnblVwOiAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgZGlzcGxheU5hbWU6IHN0cmluZykgPT4gUHJvbWlzZTxhbnk+O1xuICBzaWduSW46IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiBPYmplY3Q7XG4gIHNpZ25PdXQ6ICgpID0+IFByb21pc2U8dm9pZD47XG4gIHVwZGF0ZVVzZXI6IChuZXdEaXNwbGF5TmFtZTogc3RyaW5nLCBuZXdQYXNzd29yZDogc3RyaW5nKSA9PiB2b2lkO1xuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xufVxuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHRQcm9wcz4oe30gYXMgQXV0aENvbnRleHRQcm9wcyk7XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXI6IFJlYWN0LkZDPHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcbiAgLy8gICAgIHNldFVzZXIodXNlcik7XG4gIC8vICAgfSk7XG4gIC8vICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XG4gIC8vIH0sIFtdKTtcblxuXG4gIC8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgdXNlcidzIGRpc3BsYXkgbmFtZVxuICBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyRGlzcGxheU5hbWUodXNlcjpVc2VyLCBkaXNwbGF5TmFtZTpzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdXBkYXRlUHJvZmlsZSh1c2VyLCB7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZVxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnRGlzcGxheSBuYW1lIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGRpc3BsYXkgbmFtZTonLCBlcnJvcik7XG4gICAgfVxuICB9XG4gIFxuICAvLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIHVzZXIncyBwYXNzd29yZFxuICBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyUGFzc3dvcmQodXNlcjpVc2VyLCBuZXdQYXNzd29yZDpzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdXBkYXRlUGFzc3dvcmQodXNlciwgbmV3UGFzc3dvcmQpO1xuICAgICAgY29uc29sZS5sb2coJ1Bhc3N3b3JkIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHBhc3N3b3JkOicsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB1cGRhdGVVc2VyID0gKG5ld0Rpc3BsYXlOYW1lOnN0cmluZyxuZXdQYXNzd29yZDpzdHJpbmcpID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcbiAgICBpZiAodXNlcikge1xuICAgICAgdXBkYXRlVXNlckRpc3BsYXlOYW1lKHVzZXIsIG5ld0Rpc3BsYXlOYW1lKTtcbiAgICAgIHVwZGF0ZVVzZXJQYXNzd29yZCh1c2VyLCBuZXdQYXNzd29yZCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2lnblVwID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGRpc3BsYXlOYW1lOnN0cmluZykgPT4ge1xuICAgIC8vIHRyeSB7XG4gICAgLy8gICAgIGNvbnN0IHVzZXJDcmVkZW50aWFsID0gYXdhaXQgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCk7XG4gICAgLy8gICAgIGNvbnN0IHVzZXIgPSB1c2VyQ3JlZGVudGlhbC51c2VyO1xuXG4gICAgLy8gICAgIGF3YWl0IHVwZGF0ZVByb2ZpbGUodXNlciwge1xuICAgIC8vICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZVxuICAgIC8vICAgICB9KTtcblxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlNpZ24gdXAgc3VjY2Vzc2Z1bDpcIiwgdXNlcik7XG4gICAgLy8gICAgIHJldHVybiB0cnVlO1xuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICAgIC8vIEhhbmRsZSBzaWduIHVwIGVycm9yXG4gICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJTaWduIHVwIGVycm9yOlwiLCBlcnJvcik7XG4gICAgLy8gICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjUwMDAvc2lnbnVwXCIsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCwgZGlzcGxheU5hbWUgfSksXG4gICAgICB9KTtcbiAgXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJmYWlsZWQgdG8gc2lnbiB1cFwiKVxuICAgICAgICAgIC8vIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIilcbiAgICAgIHJldHVybiB0cnVlO1xuICAgICAgLy8gcmVkaXJlY3QoXCIvcGFnZXMvbG9naW5cIik7XG4gICAgICAvLyByZXR1cm4ge1wic3VjY2Vzc1wiOiB0cnVlfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbn07XG5cbmNvbnN0IHNpZ25JbiA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9sb2dpblwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgY29uc3QgeyBhY2Nlc3NfdG9rZW4gfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb29raWVzKCkuc2V0KFwiYWNjZXNzVG9rZW5cIiwgYWNjZXNzX3Rva2VuKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn0gY2F0Y2ggKGVycm9yKSB7XG4gIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIHJldHVybiBmYWxzZTtcbn1cbn07XG5cbiAgY29uc3Qgc2lnbk91dCA9ICgpID0+IHtcbiAgICByZXR1cm4gYXV0aC5zaWduT3V0KCk7XG4gIH07XG5cbiAgY29uc3QgdmFsdWU6IEF1dGhDb250ZXh0UHJvcHMgPSB7XG4gICAgdXNlcixcbiAgICB1c2VySWQsXG4gICAgc2lnblVwLFxuICAgIHNpZ25JbixcbiAgICBzaWduT3V0LFxuICAgIHVwZGF0ZVVzZXIsXG4gICAgZGlzcGxheU5hbWU6IHVzZXI/LmRpc3BsYXlOYW1lIHx8ICcnLFxuICAgIGlkOiB1c2VyPy51aWQgfHwgJydcbiAgfTtcblxuICByZXR1cm4gPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvQXV0aENvbnRleHQuUHJvdmlkZXI+O1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJhdXRoIiwidXBkYXRlUHJvZmlsZSIsInVwZGF0ZVBhc3N3b3JkIiwiY29va2llcyIsIkF1dGhDb250ZXh0IiwidXNlQXV0aCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJ1cGRhdGVVc2VyRGlzcGxheU5hbWUiLCJkaXNwbGF5TmFtZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInVwZGF0ZVVzZXJQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwidXBkYXRlVXNlciIsIm5ld0Rpc3BsYXlOYW1lIiwiY3VycmVudFVzZXIiLCJzaWduVXAiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwic2lnbkluIiwiYWNjZXNzX3Rva2VuIiwianNvbiIsInNldCIsInNpZ25PdXQiLCJ2YWx1ZSIsImlkIiwidWlkIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/context/AuthContext.tsx\n"));

/***/ })

});
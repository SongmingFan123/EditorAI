"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/homepage/page",{

/***/ "(app-pages-browser)/./app/context/AuthContext.tsx":
/*!*************************************!*\
  !*** ./app/context/AuthContext.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/firebase */ \"(app-pages-browser)/./app/firebase/firebase.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var node_modules_next_headers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node_modules/next/headers */ \"(app-pages-browser)/./node_modules/next/dist/api/headers.js\");\n/* __next_internal_client_entry_do_not_use__ useAuth,AuthProvider auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst useAuth = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};\n_s(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s1();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // useEffect(() => {\n    //   const unsubscribe = onAuthStateChanged(auth, (user) => {\n    //     setUser(user);\n    //   });\n    //   return () => unsubscribe();\n    // }, []);\n    // Function to update the user's display name\n    async function updateUserDisplayName(user, displayName) {\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.updateProfile)(user, {\n                displayName: displayName\n            });\n            console.log(\"Display name updated successfully\");\n        } catch (error) {\n            console.error(\"Error updating display name:\", error);\n        }\n    }\n    // Function to update the user's password\n    async function updateUserPassword(user, newPassword) {\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.updatePassword)(user, newPassword);\n            console.log(\"Password updated successfully\");\n        } catch (error) {\n            console.error(\"Error updating password:\", error);\n        }\n    }\n    const updateUser = (newDisplayName, newPassword)=>{\n        const user = _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.currentUser;\n        if (user) {\n            updateUserDisplayName(user, newDisplayName);\n            updateUserPassword(user, newPassword);\n        }\n    };\n    const signUp = async (email, password, displayName)=>{\n        // try {\n        //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);\n        //     const user = userCredential.user;\n        //     await updateProfile(user, {\n        //       displayName: displayName\n        //     });\n        //     console.log(\"Sign up successful:\", user);\n        //     return true;\n        // } catch (error) {\n        //     // Handle sign up error\n        //     console.error(\"Sign up error:\", error);\n        //     return false;\n        // }\n        try {\n            const response = await fetch(\"http://127.0.0.1:5000/signup\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    password,\n                    displayName\n                })\n            });\n            if (!response.ok) {\n                console.log(\"failed to sign up\");\n                // return response;\n                return false;\n            }\n            console.log(\"success\");\n            return true;\n        // redirect(\"/pages/login\");\n        // return {\"success\": true};\n        } catch (error) {\n            return false;\n        }\n    };\n    const signIn = async (email, password)=>{\n        try {\n            const response = await fetch(\"http://127.0.0.1:5000/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            if (!response.ok) {\n                return false;\n            }\n            console.log(response);\n            const data = await response.json();\n            setUserId(data.u);\n            (0,node_modules_next_headers__WEBPACK_IMPORTED_MODULE_4__.cookies)().set(\"accessToken\", data.access_token);\n            return true;\n        } catch (error) {\n            console.log(error);\n            return false;\n        }\n    };\n    const signOut = ()=>{\n        return _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.signOut();\n    };\n    const value = {\n        user,\n        userId,\n        signUp,\n        signIn,\n        signOut,\n        updateUser,\n        displayName: (user === null || user === void 0 ? void 0 : user.displayName) || \"\",\n        id: (user === null || user === void 0 ? void 0 : user.uid) || \"\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/raymond/Desktop/EditorAI/client/editor-ai/app/context/AuthContext.tsx\",\n        lineNumber: 143,\n        columnNumber: 10\n    }, undefined);\n};\n_s1(AuthProvider, \"K+f346DNG4w+YAOm1IS3QCePXLk=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb250ZXh0L0F1dGhDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRThFO0FBQ2xDO0FBQ3VHO0FBQy9GO0FBYXBELE1BQU1RLDRCQUFjUCxvREFBYUEsQ0FBbUIsQ0FBQztBQUU5QyxNQUFNUSxVQUFVOztJQUFNUCxPQUFBQSxpREFBVUEsQ0FBQ007QUFBVyxFQUFFO0dBQXhDQztBQUVOLE1BQU1DLGVBQXdEO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUNoRixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1YsK0NBQVFBLENBQWM7SUFDOUMsTUFBTSxDQUFDVyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFnQjtJQUNwRCxvQkFBb0I7SUFDcEIsNkRBQTZEO0lBQzdELHFCQUFxQjtJQUNyQixRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFHViw2Q0FBNkM7SUFDN0MsZUFBZWEsc0JBQXNCSixJQUFTLEVBQUVLLFdBQWtCO1FBQ2hFLElBQUk7WUFDRixNQUFNWiw0REFBYUEsQ0FBQ08sTUFBTTtnQkFDeEJLLGFBQWFBO1lBQ2Y7WUFDQUMsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2RGLFFBQVFFLEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQ2hEO0lBQ0Y7SUFFQSx5Q0FBeUM7SUFDekMsZUFBZUMsbUJBQW1CVCxJQUFTLEVBQUVVLFdBQWtCO1FBQzdELElBQUk7WUFDRixNQUFNaEIsNkRBQWNBLENBQUNNLE1BQU1VO1lBQzNCSixRQUFRQyxHQUFHLENBQUM7UUFDZCxFQUFFLE9BQU9DLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDLDRCQUE0QkE7UUFDNUM7SUFDRjtJQUVBLE1BQU1HLGFBQWEsQ0FBQ0MsZ0JBQXNCRjtRQUN4QyxNQUFNVixPQUFPUixvREFBSUEsQ0FBQ3FCLFdBQVc7UUFDN0IsSUFBSWIsTUFBTTtZQUNSSSxzQkFBc0JKLE1BQU1ZO1lBQzVCSCxtQkFBbUJULE1BQU1VO1FBQzNCO0lBQ0Y7SUFFQSxNQUFNSSxTQUFTLE9BQU9DLE9BQWVDLFVBQWtCWDtRQUNyRCxRQUFRO1FBQ1IsMEZBQTBGO1FBQzFGLHdDQUF3QztRQUV4QyxrQ0FBa0M7UUFDbEMsaUNBQWlDO1FBQ2pDLFVBQVU7UUFFVixnREFBZ0Q7UUFDaEQsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQiw4QkFBOEI7UUFDOUIsOENBQThDO1FBQzlDLG9CQUFvQjtRQUNwQixJQUFJO1FBQ0osSUFBSTtZQUNGLE1BQU1ZLFdBQVcsTUFBTUMsTUFBTSxnQ0FBZ0M7Z0JBQ3pEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRVI7b0JBQU9DO29CQUFVWDtnQkFBWTtZQUN4RDtZQUVBLElBQUksQ0FBQ1ksU0FBU08sRUFBRSxFQUFFO2dCQUNkbEIsUUFBUUMsR0FBRyxDQUFDO2dCQUNaLG1CQUFtQjtnQkFDbkIsT0FBTztZQUNYO1lBQ0FELFFBQVFDLEdBQUcsQ0FBQztZQUNaLE9BQU87UUFDUCw0QkFBNEI7UUFDNUIsNEJBQTRCO1FBQ2hDLEVBQUUsT0FBT0MsT0FBTztZQUNaLE9BQU87UUFDWDtJQUVGO0lBRUEsTUFBTWlCLFNBQVMsT0FBT1YsT0FBZUM7UUFDbkMsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSwrQkFBK0I7Z0JBQ3hEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRVI7b0JBQU9DO2dCQUFTO1lBQzNDO1lBRUEsSUFBSSxDQUFDQyxTQUFTTyxFQUFFLEVBQUU7Z0JBQ2QsT0FBTztZQUNYO1lBQ0FsQixRQUFRQyxHQUFHLENBQUNVO1lBQ1osTUFBTVMsT0FBTyxNQUFNVCxTQUFTVSxJQUFJO1lBQ2hDeEIsVUFBVXVCLEtBQUtFLENBQUM7WUFDaEJqQyxrRUFBT0EsR0FBR2tDLEdBQUcsQ0FBQyxlQUFlSCxLQUFLSSxZQUFZO1lBQzlDLE9BQU87UUFDWCxFQUFFLE9BQU90QixPQUFPO1lBQ2RGLFFBQVFDLEdBQUcsQ0FBQ0M7WUFDVixPQUFPO1FBQ1g7SUFDQTtJQUVFLE1BQU11QixVQUFVO1FBQ2QsT0FBT3ZDLG9EQUFJQSxDQUFDdUMsT0FBTztJQUNyQjtJQUVBLE1BQU1DLFFBQTBCO1FBQzlCaEM7UUFDQUU7UUFDQVk7UUFDQVc7UUFDQU07UUFDQXBCO1FBQ0FOLGFBQWFMLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTUssV0FBVyxLQUFJO1FBQ2xDNEIsSUFBSWpDLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTWtDLEdBQUcsS0FBSTtJQUNuQjtJQUVBLHFCQUFPLDhEQUFDdEMsWUFBWXVDLFFBQVE7UUFBQ0gsT0FBT0E7a0JBQVFqQzs7Ozs7O0FBQzlDLEVBQUU7SUF6SFdEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb250ZXh0L0F1dGhDb250ZXh0LnRzeD85OWI3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vZmlyZWJhc2UvZmlyZWJhc2UnO1xuaW1wb3J0IHsgVXNlciwgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCwgb25BdXRoU3RhdGVDaGFuZ2VkLCB1cGRhdGVQcm9maWxlLCB1cGRhdGVQYXNzd29yZH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbm9kZV9tb2R1bGVzL25leHQvaGVhZGVycyc7XG5cbmludGVyZmFjZSBBdXRoQ29udGV4dFByb3BzIHtcbiAgdXNlcjogVXNlciB8IG51bGw7XG4gIHVzZXJJZDogc3RyaW5nIHwgbnVsbDsgLy90ZW1wXG4gIHNpZ25VcDogKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGRpc3BsYXlOYW1lOiBzdHJpbmcpID0+IFByb21pc2U8YW55PjtcbiAgc2lnbkluOiAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gT2JqZWN0O1xuICBzaWduT3V0OiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICB1cGRhdGVVc2VyOiAobmV3RGlzcGxheU5hbWU6IHN0cmluZywgbmV3UGFzc3dvcmQ6IHN0cmluZykgPT4gdm9pZDtcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbn1cblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEF1dGhDb250ZXh0UHJvcHM+KHt9IGFzIEF1dGhDb250ZXh0UHJvcHMpO1xuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XG4gIC8vICAgICBzZXRVc2VyKHVzZXIpO1xuICAvLyAgIH0pO1xuICAvLyAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xuICAvLyB9LCBbXSk7XG5cblxuICAvLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIHVzZXIncyBkaXNwbGF5IG5hbWVcbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlckRpc3BsYXlOYW1lKHVzZXI6VXNlciwgZGlzcGxheU5hbWU6c3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZVByb2ZpbGUodXNlciwge1xuICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWVcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ0Rpc3BsYXkgbmFtZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBkaXNwbGF5IG5hbWU6JywgZXJyb3IpO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHRoZSB1c2VyJ3MgcGFzc3dvcmRcbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlclBhc3N3b3JkKHVzZXI6VXNlciwgbmV3UGFzc3dvcmQ6c3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZVBhc3N3b3JkKHVzZXIsIG5ld1Bhc3N3b3JkKTtcbiAgICAgIGNvbnNvbGUubG9nKCdQYXNzd29yZCB1cGRhdGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwYXNzd29yZDonLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdXBkYXRlVXNlciA9IChuZXdEaXNwbGF5TmFtZTpzdHJpbmcsbmV3UGFzc3dvcmQ6c3RyaW5nKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIHVwZGF0ZVVzZXJEaXNwbGF5TmFtZSh1c2VyLCBuZXdEaXNwbGF5TmFtZSk7XG4gICAgICB1cGRhdGVVc2VyUGFzc3dvcmQodXNlciwgbmV3UGFzc3dvcmQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNpZ25VcCA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBkaXNwbGF5TmFtZTpzdHJpbmcpID0+IHtcbiAgICAvLyB0cnkge1xuICAgIC8vICAgICBjb25zdCB1c2VyQ3JlZGVudGlhbCA9IGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpO1xuICAgIC8vICAgICBjb25zdCB1c2VyID0gdXNlckNyZWRlbnRpYWwudXNlcjtcblxuICAgIC8vICAgICBhd2FpdCB1cGRhdGVQcm9maWxlKHVzZXIsIHtcbiAgICAvLyAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWVcbiAgICAvLyAgICAgfSk7XG5cbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJTaWduIHVwIHN1Y2Nlc3NmdWw6XCIsIHVzZXIpO1xuICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgICAvLyBIYW5kbGUgc2lnbiB1cCBlcnJvclxuICAgIC8vICAgICBjb25zb2xlLmVycm9yKFwiU2lnbiB1cCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIC8vICAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8gfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo1MDAwL3NpZ251cFwiLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQsIGRpc3BsYXlOYW1lIH0pLFxuICAgICAgfSk7XG4gIFxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFpbGVkIHRvIHNpZ24gdXBcIilcbiAgICAgICAgICAvLyByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzXCIpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIC8vIHJlZGlyZWN0KFwiL3BhZ2VzL2xvZ2luXCIpO1xuICAgICAgLy8gcmV0dXJuIHtcInN1Y2Nlc3NcIjogdHJ1ZX07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG59O1xuXG5jb25zdCBzaWduSW4gPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjUwMDAvbG9naW5cIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgc2V0VXNlcklkKGRhdGEudSlcbiAgICBjb29raWVzKCkuc2V0KFwiYWNjZXNzVG9rZW5cIiwgZGF0YS5hY2Nlc3NfdG9rZW4pO1xuICAgIHJldHVybiB0cnVlO1xufSBjYXRjaCAoZXJyb3IpIHtcbiAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xufVxufTtcblxuICBjb25zdCBzaWduT3V0ID0gKCkgPT4ge1xuICAgIHJldHVybiBhdXRoLnNpZ25PdXQoKTtcbiAgfTtcblxuICBjb25zdCB2YWx1ZTogQXV0aENvbnRleHRQcm9wcyA9IHtcbiAgICB1c2VyLFxuICAgIHVzZXJJZCxcbiAgICBzaWduVXAsXG4gICAgc2lnbkluLFxuICAgIHNpZ25PdXQsXG4gICAgdXBkYXRlVXNlcixcbiAgICBkaXNwbGF5TmFtZTogdXNlcj8uZGlzcGxheU5hbWUgfHwgJycsXG4gICAgaWQ6IHVzZXI/LnVpZCB8fCAnJ1xuICB9O1xuXG4gIHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9BdXRoQ29udGV4dC5Qcm92aWRlcj47XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImF1dGgiLCJ1cGRhdGVQcm9maWxlIiwidXBkYXRlUGFzc3dvcmQiLCJjb29raWVzIiwiQXV0aENvbnRleHQiLCJ1c2VBdXRoIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInVzZXJJZCIsInNldFVzZXJJZCIsInVwZGF0ZVVzZXJEaXNwbGF5TmFtZSIsImRpc3BsYXlOYW1lIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidXBkYXRlVXNlclBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJ1cGRhdGVVc2VyIiwibmV3RGlzcGxheU5hbWUiLCJjdXJyZW50VXNlciIsInNpZ25VcCIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJzaWduSW4iLCJkYXRhIiwianNvbiIsInUiLCJzZXQiLCJhY2Nlc3NfdG9rZW4iLCJzaWduT3V0IiwidmFsdWUiLCJpZCIsInVpZCIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/context/AuthContext.tsx\n"));

/***/ })

});
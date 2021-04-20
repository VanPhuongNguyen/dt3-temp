/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/handlers/users/loginByGoogle.ts":
/*!*********************************************!*\
  !*** ./src/handlers/users/loginByGoogle.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handler\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-errors */ \"http-errors\");\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/models/User */ \"./src/models/User.ts\");\n/* harmony import */ var _src_middlewares_middy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/middlewares/middy */ \"./src/middlewares/middy.ts\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst loginByGoogle = async (event) => {\n    const { email, firstName, lastName, avatar, authToken } = JSON.parse(event.body);\n    try {\n        const decodeToken = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(authToken);\n        if (decodeToken.email !== email &&\n            decodeToken.iss !== 'accounts.google.com')\n            throw new (http_errors__WEBPACK_IMPORTED_MODULE_1___default().InternalServerError)('Token is invalid.');\n        const user = await _src_models_User__WEBPACK_IMPORTED_MODULE_2__.default.findOne({ email, accountType: 'GoogleAuth' });\n        if (!user) {\n            const newUser = new _src_models_User__WEBPACK_IMPORTED_MODULE_2__.default({\n                email,\n                firstName,\n                lastName,\n                avatar,\n                accountType: 'GoogleAuth',\n            });\n            const token = await newUser.generateSessionToken();\n            await newUser.save();\n            newUser.password = undefined;\n            newUser.token = undefined;\n            return {\n                statusCode: 200,\n                body: JSON.stringify({ user: newUser, token }),\n            };\n        }\n        const token = await user.generateSessionToken();\n        user.password = undefined;\n        user.token = undefined;\n        return {\n            statusCode: 200,\n            body: JSON.stringify({ user, token }),\n        };\n    }\n    catch (error) {\n        throw new (http_errors__WEBPACK_IMPORTED_MODULE_1___default().InternalServerError)(JSON.stringify({ message: error.message }));\n    }\n};\nconst handler = (0,_src_middlewares_middy__WEBPACK_IMPORTED_MODULE_3__.commonMiddleware)(loginByGoogle);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvdXNlcnMvbG9naW5CeUdvb2dsZS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2R0My1iYWNrZW5kLy4vc3JjL2hhbmRsZXJzL3VzZXJzL2xvZ2luQnlHb29nbGUudHM/NjlkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElHYXRld2F5UHJveHlIYW5kbGVyIH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgY3JlYXRlRXJyb3IgZnJvbSAnaHR0cC1lcnJvcnMnO1xuaW1wb3J0IFVzZXIgZnJvbSAnQHNyYy9tb2RlbHMvVXNlcic7XG5pbXBvcnQgeyBjb21tb25NaWRkbGV3YXJlIH0gZnJvbSAnQHNyYy9taWRkbGV3YXJlcy9taWRkeSc7XG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xuXG5pbnRlcmZhY2UgRGVjb2RlVG9rZW4ge1xuICBpc3M6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbn1cblxuY29uc3QgbG9naW5CeUdvb2dsZTogQVBJR2F0ZXdheVByb3h5SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICBjb25zdCB7IGVtYWlsLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBhdmF0YXIsIGF1dGhUb2tlbiB9ID0gSlNPTi5wYXJzZShcbiAgICBldmVudC5ib2R5LFxuICApO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgZGVjb2RlVG9rZW46IERlY29kZVRva2VuID0gand0RGVjb2RlKGF1dGhUb2tlbik7XG4gICAgaWYgKFxuICAgICAgZGVjb2RlVG9rZW4uZW1haWwgIT09IGVtYWlsICYmXG4gICAgICBkZWNvZGVUb2tlbi5pc3MgIT09ICdhY2NvdW50cy5nb29nbGUuY29tJ1xuICAgIClcbiAgICAgIHRocm93IG5ldyBjcmVhdGVFcnJvci5JbnRlcm5hbFNlcnZlckVycm9yKCdUb2tlbiBpcyBpbnZhbGlkLicpO1xuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsLCBhY2NvdW50VHlwZTogJ0dvb2dsZUF1dGgnIH0pO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIoe1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgZmlyc3ROYW1lLFxuICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgYXZhdGFyLFxuICAgICAgICBhY2NvdW50VHlwZTogJ0dvb2dsZUF1dGgnLFxuICAgICAgfSk7XG4gICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IG5ld1VzZXIuZ2VuZXJhdGVTZXNzaW9uVG9rZW4oKTtcbiAgICAgIGF3YWl0IG5ld1VzZXIuc2F2ZSgpO1xuICAgICAgbmV3VXNlci5wYXNzd29yZCA9IHVuZGVmaW5lZDtcbiAgICAgIG5ld1VzZXIudG9rZW4gPSB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VyOiBuZXdVc2VyLCB0b2tlbiB9KSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCB1c2VyLmdlbmVyYXRlU2Vzc2lvblRva2VuKCk7XG4gICAgdXNlci5wYXNzd29yZCA9IHVuZGVmaW5lZDtcbiAgICB1c2VyLnRva2VuID0gdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlciwgdG9rZW4gfSksXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgY3JlYXRlRXJyb3IuSW50ZXJuYWxTZXJ2ZXJFcnJvcihcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KSxcbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGNvbW1vbk1pZGRsZXdhcmUobG9naW5CeUdvb2dsZSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/handlers/users/loginByGoogle.ts\n");

/***/ }),

/***/ "./src/middlewares/checkAdmin.ts":
/*!***************************************!*\
  !*** ./src/middlewares/checkAdmin.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-errors */ \"http-errors\");\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_0__);\n\nconst authMiddleware = () => ({\n    before: (handler, next) => {\n        const { authUser } = JSON.parse(handler.event.body);\n        if (authUser.role === 0) {\n            throw new (http_errors__WEBPACK_IMPORTED_MODULE_0___default().Unauthorized)(JSON.stringify({ message: 'You are unauthorized.' }));\n        }\n        next();\n    },\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authMiddleware);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWlkZGxld2FyZXMvY2hlY2tBZG1pbi50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2R0My1iYWNrZW5kLy4vc3JjL21pZGRsZXdhcmVzL2NoZWNrQWRtaW4udHM/ODg5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlRXJyb3IgZnJvbSAnaHR0cC1lcnJvcnMnO1xuXG5jb25zdCBhdXRoTWlkZGxld2FyZSA9ICgpOiBhbnkgPT4gKHtcbiAgYmVmb3JlOiAoaGFuZGxlciwgbmV4dCkgPT4ge1xuICAgIGNvbnN0IHsgYXV0aFVzZXIgfSA9IEpTT04ucGFyc2UoaGFuZGxlci5ldmVudC5ib2R5KTtcbiAgICBpZiAoYXV0aFVzZXIucm9sZSA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IGNyZWF0ZUVycm9yLlVuYXV0aG9yaXplZChcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiAnWW91IGFyZSB1bmF1dGhvcml6ZWQuJyB9KSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbmV4dCgpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhNaWRkbGV3YXJlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/middlewares/checkAdmin.ts\n");

/***/ }),

/***/ "./src/middlewares/checkAuth.ts":
/*!**************************************!*\
  !*** ./src/middlewares/checkAuth.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-errors */ \"http-errors\");\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/models/User */ \"./src/models/User.ts\");\n\n\nconst authMiddleware = () => ({\n    before: (handler, next) => {\n        if (!handler.event.headers.Authorization) {\n            throw new (http_errors__WEBPACK_IMPORTED_MODULE_0___default().Unauthorized)(JSON.stringify('You are unauthorized.'));\n        }\n        const token = handler.event.headers.Authorization.split(' ')[1];\n        _src_models_User__WEBPACK_IMPORTED_MODULE_1__.default.findByToken(token).then((user) => {\n            if (!user) {\n                throw new (http_errors__WEBPACK_IMPORTED_MODULE_0___default().Unauthorized)(JSON.stringify('You are unauthorized.'));\n            }\n            const oldBody = JSON.parse(handler.event.body);\n            const newBody = JSON.stringify(Object.assign(Object.assign({}, oldBody), { authUser: user }));\n            handler.event.body = newBody;\n            return next();\n        });\n    },\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authMiddleware);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWlkZGxld2FyZXMvY2hlY2tBdXRoLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHQzLWJhY2tlbmQvLi9zcmMvbWlkZGxld2FyZXMvY2hlY2tBdXRoLnRzPzllNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUVycm9yIGZyb20gJ2h0dHAtZXJyb3JzJztcbmltcG9ydCBVc2VyIGZyb20gJ0BzcmMvbW9kZWxzL1VzZXInO1xuXG5jb25zdCBhdXRoTWlkZGxld2FyZSA9ICgpOiBhbnkgPT4gKHtcbiAgYmVmb3JlOiAoaGFuZGxlciwgbmV4dCkgPT4ge1xuICAgIGlmICghaGFuZGxlci5ldmVudC5oZWFkZXJzLkF1dGhvcml6YXRpb24pIHtcbiAgICAgIHRocm93IG5ldyBjcmVhdGVFcnJvci5VbmF1dGhvcml6ZWQoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KCdZb3UgYXJlIHVuYXV0aG9yaXplZC4nKSxcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHRva2VuID0gaGFuZGxlci5ldmVudC5oZWFkZXJzLkF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXTtcbiAgICBVc2VyLmZpbmRCeVRva2VuKHRva2VuKS50aGVuKCh1c2VyKSA9PiB7XG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IGNyZWF0ZUVycm9yLlVuYXV0aG9yaXplZChcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSgnWW91IGFyZSB1bmF1dGhvcml6ZWQuJyksXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9sZEJvZHkgPSBKU09OLnBhcnNlKGhhbmRsZXIuZXZlbnQuYm9keSk7XG4gICAgICBjb25zdCBuZXdCb2R5ID0gSlNPTi5zdHJpbmdpZnkoeyAuLi5vbGRCb2R5LCBhdXRoVXNlcjogdXNlciB9KTtcbiAgICAgIGhhbmRsZXIuZXZlbnQuYm9keSA9IG5ld0JvZHk7XG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH0pO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhNaWRkbGV3YXJlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/middlewares/checkAuth.ts\n");

/***/ }),

/***/ "./src/middlewares/connectDB.ts":
/*!**************************************!*\
  !*** ./src/middlewares/connectDB.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_services_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/services/mongoose */ \"./src/services/mongoose.ts\");\n\nconst connectToMongo = () => ({\n    before: (handler, next) => {\n        handler.context.callbackWaitsForEmptyEventLoop = false;\n        (0,_src_services_mongoose__WEBPACK_IMPORTED_MODULE_0__.default)().then(next());\n    },\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToMongo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWlkZGxld2FyZXMvY29ubmVjdERCLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHQzLWJhY2tlbmQvLi9zcmMvbWlkZGxld2FyZXMvY29ubmVjdERCLnRzPzIyOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3RUb0RhdGFiYXNlIGZyb20gJ0BzcmMvc2VydmljZXMvbW9uZ29vc2UnO1xuXG5jb25zdCBjb25uZWN0VG9Nb25nbyA9ICgpOiBhbnkgPT4gKHtcbiAgYmVmb3JlOiAoaGFuZGxlciwgbmV4dCkgPT4ge1xuICAgIGhhbmRsZXIuY29udGV4dC5jYWxsYmFja1dhaXRzRm9yRW1wdHlFdmVudExvb3AgPSBmYWxzZTtcbiAgICBjb25uZWN0VG9EYXRhYmFzZSgpLnRoZW4obmV4dCgpKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9Nb25nbztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/middlewares/connectDB.ts\n");

/***/ }),

/***/ "./src/middlewares/middy.ts":
/*!**********************************!*\
  !*** ./src/middlewares/middy.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commonMiddleware\": () => (/* binding */ commonMiddleware),\n/* harmony export */   \"authMiddleware\": () => (/* binding */ authMiddleware),\n/* harmony export */   \"adminMiddleware\": () => (/* binding */ adminMiddleware)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_event_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-event-normalizer */ \"@middy/http-event-normalizer\");\n/* harmony import */ var _middy_http_event_normalizer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_event_normalizer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _middy_http_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @middy/http-error-handler */ \"@middy/http-error-handler\");\n/* harmony import */ var _middy_http_error_handler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_middy_http_error_handler__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _middy_http_security_headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @middy/http-security-headers */ \"@middy/http-security-headers\");\n/* harmony import */ var _middy_http_security_headers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_middy_http_security_headers__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _middy_http_cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @middy/http-cors */ \"@middy/http-cors\");\n/* harmony import */ var _middy_http_cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_middy_http_cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _checkAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkAuth */ \"./src/middlewares/checkAuth.ts\");\n/* harmony import */ var _connectDB__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connectDB */ \"./src/middlewares/connectDB.ts\");\n/* harmony import */ var _checkAdmin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkAdmin */ \"./src/middlewares/checkAdmin.ts\");\n\n\n\n\n\n\n\n\nconst commonMiddleware = (handler) => _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use([\n    _middy_http_error_handler__WEBPACK_IMPORTED_MODULE_2___default()(),\n    _middy_http_event_normalizer__WEBPACK_IMPORTED_MODULE_1___default()(),\n    _middy_http_security_headers__WEBPACK_IMPORTED_MODULE_3___default()(),\n    _middy_http_cors__WEBPACK_IMPORTED_MODULE_4___default()(),\n    (0,_connectDB__WEBPACK_IMPORTED_MODULE_6__.default)(),\n]);\nconst authMiddleware = (handler) => _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use([\n    _middy_http_error_handler__WEBPACK_IMPORTED_MODULE_2___default()(),\n    _middy_http_event_normalizer__WEBPACK_IMPORTED_MODULE_1___default()(),\n    _middy_http_security_headers__WEBPACK_IMPORTED_MODULE_3___default()(),\n    _middy_http_cors__WEBPACK_IMPORTED_MODULE_4___default()(),\n    (0,_connectDB__WEBPACK_IMPORTED_MODULE_6__.default)(),\n    (0,_checkAuth__WEBPACK_IMPORTED_MODULE_5__.default)(),\n]);\nconst adminMiddleware = (handler) => _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use([\n    _middy_http_error_handler__WEBPACK_IMPORTED_MODULE_2___default()(),\n    _middy_http_event_normalizer__WEBPACK_IMPORTED_MODULE_1___default()(),\n    _middy_http_security_headers__WEBPACK_IMPORTED_MODULE_3___default()(),\n    _middy_http_cors__WEBPACK_IMPORTED_MODULE_4___default()(),\n    (0,_connectDB__WEBPACK_IMPORTED_MODULE_6__.default)(),\n    (0,_checkAuth__WEBPACK_IMPORTED_MODULE_5__.default)(),\n    (0,_checkAdmin__WEBPACK_IMPORTED_MODULE_7__.default)(),\n]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWlkZGxld2FyZXMvbWlkZHkudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kdDMtYmFja2VuZC8uL3NyYy9taWRkbGV3YXJlcy9taWRkeS50cz8xZTA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWRkeSBmcm9tICdAbWlkZHkvY29yZSc7XG5pbXBvcnQgaHR0cEV2ZW50Tm9ybWFsaXplciBmcm9tICdAbWlkZHkvaHR0cC1ldmVudC1ub3JtYWxpemVyJztcbmltcG9ydCBodHRwRXJyb3JIYW5kbGVyIGZyb20gJ0BtaWRkeS9odHRwLWVycm9yLWhhbmRsZXInO1xuaW1wb3J0IGh0dHBTZWN1cml0eUhlYWRlcnMgZnJvbSAnQG1pZGR5L2h0dHAtc2VjdXJpdHktaGVhZGVycyc7XG5pbXBvcnQgY29ycyBmcm9tICdAbWlkZHkvaHR0cC1jb3JzJztcbmltcG9ydCBhdXRoIGZyb20gJy4vY2hlY2tBdXRoJztcbmltcG9ydCBjb25uZWN0VG9EQiBmcm9tICcuL2Nvbm5lY3REQic7XG5pbXBvcnQgY2hlY2tBZG1pbiBmcm9tICcuL2NoZWNrQWRtaW4nO1xuXG5leHBvcnQgY29uc3QgY29tbW9uTWlkZGxld2FyZSA9IChoYW5kbGVyKSA9PlxuICBtaWRkeShoYW5kbGVyKS51c2UoW1xuICAgIGh0dHBFcnJvckhhbmRsZXIoKSxcbiAgICBodHRwRXZlbnROb3JtYWxpemVyKCksXG4gICAgaHR0cFNlY3VyaXR5SGVhZGVycygpLFxuICAgIGNvcnMoKSxcbiAgICBjb25uZWN0VG9EQigpLFxuICBdKTtcblxuZXhwb3J0IGNvbnN0IGF1dGhNaWRkbGV3YXJlID0gKGhhbmRsZXIpID0+XG4gIG1pZGR5KGhhbmRsZXIpLnVzZShbXG4gICAgaHR0cEVycm9ySGFuZGxlcigpLFxuICAgIGh0dHBFdmVudE5vcm1hbGl6ZXIoKSxcbiAgICBodHRwU2VjdXJpdHlIZWFkZXJzKCksXG4gICAgY29ycygpLFxuICAgIGNvbm5lY3RUb0RCKCksXG4gICAgYXV0aCgpLFxuICBdKTtcblxuZXhwb3J0IGNvbnN0IGFkbWluTWlkZGxld2FyZSA9IChoYW5kbGVyKSA9PlxuICBtaWRkeShoYW5kbGVyKS51c2UoW1xuICAgIGh0dHBFcnJvckhhbmRsZXIoKSxcbiAgICBodHRwRXZlbnROb3JtYWxpemVyKCksXG4gICAgaHR0cFNlY3VyaXR5SGVhZGVycygpLFxuICAgIGNvcnMoKSxcbiAgICBjb25uZWN0VG9EQigpLFxuICAgIGF1dGgoKSxcbiAgICBjaGVja0FkbWluKCksXG4gIF0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/middlewares/middy.ts\n");

/***/ }),

/***/ "./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    firstName: {\n        type: String,\n        trim: true,\n    },\n    lastName: {\n        type: String,\n        trim: true,\n    },\n    email: {\n        type: String,\n        required: true,\n        trim: true,\n        unique: true,\n        validate: (value) => {\n            if (!validator__WEBPACK_IMPORTED_MODULE_1___default().isEmail(value))\n                throw new Error('Email is invalid.');\n        },\n    },\n    password: {\n        type: String,\n        validate: (value) => {\n            if (/\\s/.test(value))\n                throw new Error('Password cannot contain whitespace.');\n            if (!/[a-zA-Z]/.test(value) || !/\\d/.test(value))\n                throw new Error('Password must contain both number and character.');\n        },\n    },\n    avatar: {\n        type: String,\n    },\n    role: {\n        type: Number,\n        enum: [0, 1, 2],\n        default: 0,\n    },\n    accountType: {\n        type: String,\n        enum: ['GoogleAuth', 'FacebookAuth', 'TraditionalAuth'],\n        default: 'TraditionalAuth',\n    },\n    friends: [\n        {\n            type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n            ref: 'User',\n        },\n    ],\n    token: {\n        type: Array,\n    },\n    saveNews: [\n        {\n            type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n            ref: 'New',\n        },\n    ],\n    favoriteCategories: [\n        {\n            type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n            ref: 'Category',\n        },\n    ],\n}, {\n    timestamps: true,\n});\nUserSchema.statics.generateHashPassword = async (password) => bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hash(password, 8);\nUserSchema.statics.findByToken = async (token) => {\n    const { email, userId } = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);\n    return User.findOne({\n        email,\n        _id: userId,\n        token: { $in: token },\n    }).select('-password -token');\n};\nUserSchema.methods.generateSessionToken = async function () {\n    const sessionToken = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({ userId: this.id, email: this.email, type: 'BeehiveAuth' }, process.env.JWT_SECRET);\n    this.token = this.token.concat(sessionToken);\n    await this.save();\n    return sessionToken;\n};\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) ||\n    (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('User', UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL1VzZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kdDMtYmFja2VuZC8uL3NyYy9tb2RlbHMvVXNlci50cz80NThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBEb2N1bWVudCwgbW9kZWwsIFNjaGVtYSwgTW9kZWwgfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gJ3ZhbGlkYXRvcic7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCBqd3REZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZD86IHN0cmluZztcbiAgZ2VuZGVycz86ICdNYWxlJyB8ICdGZW1hbGUnO1xuICB0eXBlOiAnR29vZ2xlQXV0aCcgfCAnRmFjZWJvb2tBdXRoJyB8ICdUcmFkaXRpb25hbEF1dGgnO1xuICBiaXJ0aGRheT86IHN0cmluZztcbiAgcm9sZTogTnVtYmVyO1xuICBmYXZvcml0ZUNhdGVnb3JpZXM/OiBBcnJheTxzdHJpbmc+O1xuICBzYXZlTmV3cz86IEFycmF5PHN0cmluZz47XG4gIHRva2VuOiBBcnJheTxzdHJpbmc+O1xufVxuXG5pbnRlcmZhY2UgVXNlckRvY3VtZW50IGV4dGVuZHMgVXNlciwgRG9jdW1lbnQge1xuICBnZW5lcmF0ZVNlc3Npb25Ub2tlbigpOiBQcm9taXNlPHN0cmluZz47XG4gIGdlbmVyYXRlRnVsbE5hbWUoKTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVXNlck1vZGVsIGV4dGVuZHMgTW9kZWw8VXNlckRvY3VtZW50PiB7XG4gIGdlbmVyYXRlSGFzaFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz47XG4gIGZpbmRCeVRva2VuKHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPE1vZGVsPFVzZXJEb2N1bWVudD4+O1xufVxuXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYShcbiAge1xuICAgIGZpcnN0TmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICB9LFxuICAgIGxhc3ROYW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB0cmltOiB0cnVlLFxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgIHZhbGlkYXRlOiAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIXZhbGlkYXRvci5pc0VtYWlsKHZhbHVlKSkgdGhyb3cgbmV3IEVycm9yKCdFbWFpbCBpcyBpbnZhbGlkLicpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0ZTogKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKC9cXHMvLnRlc3QodmFsdWUpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGFzc3dvcmQgY2Fubm90IGNvbnRhaW4gd2hpdGVzcGFjZS4nKTtcbiAgICAgICAgaWYgKCEvW2EtekEtWl0vLnRlc3QodmFsdWUpIHx8ICEvXFxkLy50ZXN0KHZhbHVlKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bhc3N3b3JkIG11c3QgY29udGFpbiBib3RoIG51bWJlciBhbmQgY2hhcmFjdGVyLicpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIGF2YXRhcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gICAgcm9sZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZW51bTogWzAsIDEsIDJdLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIGFjY291bnRUeXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBlbnVtOiBbJ0dvb2dsZUF1dGgnLCAnRmFjZWJvb2tBdXRoJywgJ1RyYWRpdGlvbmFsQXV0aCddLFxuICAgICAgZGVmYXVsdDogJ1RyYWRpdGlvbmFsQXV0aCcsXG4gICAgfSxcbiAgICBmcmllbmRzOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICAgICAgcmVmOiAnVXNlcicsXG4gICAgICB9LFxuICAgIF0sXG4gICAgdG9rZW46IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgIH0sXG4gICAgc2F2ZU5ld3M6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgICByZWY6ICdOZXcnLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGZhdm9yaXRlQ2F0ZWdvcmllczogW1xuICAgICAge1xuICAgICAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICAgIHJlZjogJ0NhdGVnb3J5JyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH0sXG4pO1xuXG5Vc2VyU2NoZW1hLnN0YXRpY3MuZ2VuZXJhdGVIYXNoUGFzc3dvcmQgPSBhc3luYyAocGFzc3dvcmQ6IHN0cmluZykgPT5cbiAgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDgpO1xuXG5pbnRlcmZhY2UgVG9rZW4ge1xuICBlbWFpbDogc3RyaW5nO1xuICB1c2VySWQ6IHN0cmluZztcbn1cblxuVXNlclNjaGVtYS5zdGF0aWNzLmZpbmRCeVRva2VuID0gYXN5bmMgKHRva2VuOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgeyBlbWFpbCwgdXNlcklkIH06IFRva2VuID0gand0RGVjb2RlKHRva2VuKTtcblxuICByZXR1cm4gVXNlci5maW5kT25lKHtcbiAgICBlbWFpbCxcbiAgICBfaWQ6IHVzZXJJZCxcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdG9rZW46IHsgJGluOiB0b2tlbiB9LFxuICB9KS5zZWxlY3QoJy1wYXNzd29yZCAtdG9rZW4nKTtcbn07XG5cblVzZXJTY2hlbWEubWV0aG9kcy5nZW5lcmF0ZVNlc3Npb25Ub2tlbiA9IGFzeW5jIGZ1bmN0aW9uIChcbiAgdGhpczogVXNlckRvY3VtZW50LFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgY29uc3Qgc2Vzc2lvblRva2VuID0gYXdhaXQgand0LnNpZ24oXG4gICAgeyB1c2VySWQ6IHRoaXMuaWQsIGVtYWlsOiB0aGlzLmVtYWlsLCB0eXBlOiAnQmVlaGl2ZUF1dGgnIH0sXG4gICAgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCxcbiAgKTtcblxuICB0aGlzLnRva2VuID0gdGhpcy50b2tlbi5jb25jYXQoc2Vzc2lvblRva2VuKTtcbiAgYXdhaXQgdGhpcy5zYXZlKCk7XG4gIHJldHVybiBzZXNzaW9uVG9rZW47XG59O1xuY29uc3QgVXNlciA9XG4gIChtb25nb29zZS5tb2RlbHMuVXNlciBhcyBVc2VyTW9kZWwpIHx8XG4gIG1vZGVsPFVzZXJEb2N1bWVudCwgVXNlck1vZGVsPignVXNlcicsIFVzZXJTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEwQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/models/User.ts\n");

/***/ }),

/***/ "./src/services/mongoose.ts":
/*!**********************************!*\
  !*** ./src/services/mongoose.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n(mongoose__WEBPACK_IMPORTED_MODULE_0___default().Promise) = global.Promise;\nlet isConnected;\nconst connectToDatabase = () => {\n    if (isConnected) {\n        console.log('=> Using existing database connection.');\n        return Promise.resolve();\n    }\n    console.log('=> Using new database connection.');\n    return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URL, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true,\n        useCreateIndex: true,\n    })\n        .then((db) => {\n        isConnected = db.connections[0].readyState;\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDatabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvbW9uZ29vc2UudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kdDMtYmFja2VuZC8uL3NyYy9zZXJ2aWNlcy9tb25nb29zZS50cz8zNTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbm1vbmdvb3NlLlByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbmxldCBpc0Nvbm5lY3RlZDogYm9vbGVhbiB8IG51bWJlcjtcblxuY29uc3QgY29ubmVjdFRvRGF0YWJhc2UgPSAoKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgY29uc29sZS5sb2coJz0+IFVzaW5nIGV4aXN0aW5nIGRhdGFiYXNlIGNvbm5lY3Rpb24uJyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgY29uc29sZS5sb2coJz0+IFVzaW5nIG5ldyBkYXRhYmFzZSBjb25uZWN0aW9uLicpO1xuICByZXR1cm4gbW9uZ29vc2VcbiAgICAuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkwsIHtcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuICAgIH0pXG4gICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICBpc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9EYXRhYmFzZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0Esa0VBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/mongoose.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");;

/***/ }),

/***/ "@middy/http-cors":
/*!***********************************!*\
  !*** external "@middy/http-cors" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@middy/http-cors");;

/***/ }),

/***/ "@middy/http-error-handler":
/*!********************************************!*\
  !*** external "@middy/http-error-handler" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-error-handler");;

/***/ }),

/***/ "@middy/http-event-normalizer":
/*!***********************************************!*\
  !*** external "@middy/http-event-normalizer" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-event-normalizer");;

/***/ }),

/***/ "@middy/http-security-headers":
/*!***********************************************!*\
  !*** external "@middy/http-security-headers" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-security-headers");;

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");;

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("http-errors");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("jwt-decode");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");;

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("validator");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/handlers/users/loginByGoogle.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n// /api/new-meetup name file its path segments in URL\n// виконается кожного разу коли приходить запрос на даний маршрут\n// POST  /api/new-meetup\n// req - data for request. Можно достать header,body or methods\n// res - response for request? for sending back response\nasync function handler(req, res) {\n    // тільки якщо POST\n    if (req.method === \"POST\") {\n        const data = req.body;\n        // will back a promise\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://yak1:Yakimo2883@cluster0.tomul.mongodb.net/?retryWrites=true&w=majority\");\n        const db = client.db(); // отримуємо доступ до DB\n        // db  приходять у вигляді коллекції, витягуємо потрібний документ\n        //\n        const meetupsCollection = db.collection(\"meetups\");\n        // додаєтся один док в колекцію.  Цей документ є обьектом for exmpl data {title: , id:, ets...}\n        const result = await meetupsCollection.insertOne(data);\n        console.log(result);\n        client.close(); // close db\n        // відправляєтся відповідь на запрос.\n        // json може містити додаткову інфу\n        res.status(201).json({\n            message: \"Meetup inserted!\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMscURBQXFEO0FBQ3JEO0FBQ3NELHdCQUE5QjtBQUN4QjtBQUNZLHdEQUE0QztBQUN4RCxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQy9CO0lBQ1UsSUFBTkQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFJO1FBQ3JCLHNCQUFzQjtRQUN0QixNQUFNQyxNQUFNLEdBQUcsTUFBTVAsd0RBQW1CLENBQ3RDLHVGQUF1RixDQUN4RjtRQUNELE1BQU1TLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFFLEVBQUUsRUFBRTtRQUVQO1FBQ21DLEVBQWxEO1FBQ0YsTUFBTUMsaUJBQWlCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUVsRDtRQUM0QyxNQUF0Q0MsTUFBTSxHQUFHLE1BQU1GLGlCQUFpQixDQUFDRyxTQUFTLENBQUNSLElBQUksQ0FBQztRQUV0RFMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQyxDQUFDO1FBRXBCTCxNQUFNLENBQUNTLEtBQUssRUFBRSxDQUFDLENBQUMsV0FBVztRQUUzQjtRQUM4QjtRQUU5QmIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsa0JBQWtCO1NBQUUsQ0FBQyxDQUFDO0tBQ3ZEO0NBQ0Y7QUFFRCxpRUFBZWxCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz83Mzk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbi8vIC9hcGkvbmV3LW1lZXR1cCBuYW1lIGZpbGUgaXRzIHBhdGggc2VnbWVudHMgaW4gVVJMXG4vLyDQstC40LrQvtC90LDQtdGC0YHRjyDQutC+0LbQvdC+0LPQviDRgNCw0LfRgyDQutC+0LvQuCDQv9GA0LjRhdC+0LTQuNGC0Ywg0LfQsNC/0YDQvtGBINC90LAg0LTQsNC90LjQuSDQvNCw0YDRiNGA0YPRglxuLy8gUE9TVCAgL2FwaS9uZXctbWVldHVwXG4vLyByZXEgLSBkYXRhIGZvciByZXF1ZXN0LiDQnNC+0LbQvdC+INC00L7RgdGC0LDRgtGMIGhlYWRlcixib2R5IG9yIG1ldGhvZHNcbi8vIHJlcyAtIHJlc3BvbnNlIGZvciByZXF1ZXN0PyBmb3Igc2VuZGluZyBiYWNrIHJlc3BvbnNlXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIC8vINGC0ZbQu9GM0LrQuCDRj9C60YnQviBQT1NUXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG4gICAgLy8gd2lsbCBiYWNrIGEgcHJvbWlzZVxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgICAnbW9uZ29kYitzcnY6Ly95YWsxOllha2ltbzI4ODNAY2x1c3RlcjAudG9tdWwubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcbiAgICApO1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7IC8vINC+0YLRgNC40LzRg9GU0LzQviDQtNC+0YHRgtGD0L8g0LTQviBEQlxuXG4gICAgLy8gZGIgINC/0YDQuNGF0L7QtNGP0YLRjCDRgyDQstC40LPQu9GP0LTRliDQutC+0LvQu9C10LrRhtGW0ZcsINCy0LjRgtGP0LPRg9GU0LzQviDQv9C+0YLRgNGW0LHQvdC40Lkg0LTQvtC60YPQvNC10L3RglxuICAgIC8vXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG5cbiAgICAvLyDQtNC+0LTQsNGU0YLRgdGPINC+0LTQuNC9INC00L7QuiDQsiDQutC+0LvQtdC60YbRltGOLiAg0KbQtdC5INC00L7QutGD0LzQtdC90YIg0ZQg0L7QsdGM0LXQutGC0L7QvCBmb3IgZXhtcGwgZGF0YSB7dGl0bGU6ICwgaWQ6LCBldHMuLi59XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEpO1xuXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgIGNsaWVudC5jbG9zZSgpOyAvLyBjbG9zZSBkYlxuXG4gICAgLy8g0LLRltC00L/RgNCw0LLQu9GP0ZTRgtGB0Y8g0LLRltC00L/QvtCy0ZbQtNGMINC90LAg0LfQsNC/0YDQvtGBLlxuICAgIC8vIGpzb24g0LzQvtC20LUg0LzRltGB0YLQuNGC0Lgg0LTQvtC00LDRgtC60L7QstGDINGW0L3RhNGDXG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdNZWV0dXAgaW5zZXJ0ZWQhJyB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();
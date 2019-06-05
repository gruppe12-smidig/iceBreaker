(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/App.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/App.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Backdrop.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Backdrop.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".backdrop {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: rgba(0,0,0,0.3);\n    z-index: 100;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/DrawerToggleButton.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/DrawerToggleButton.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".toggle-button {\n    margin: 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height: 50px;\n    width: 50px ;\n    background: rgba(196, 152, 40, 0.274);\n    border-radius: 50%;\n    border: none;\n    cursor: pointer;\n    padding: 10px;\n    box-sizing: border-box;\n\n    /* margin-right: 1rem; */\n}\n\n.toggle-button:focus {\n    outline: none;\n}\n\n.toggle-button_line{\n\n    width: 30px;\n    height: 4px;\n    border-radius: 2px;\n    background: rgb(235, 168, 0);\n    z-index: 999;\n \n}\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NewEvent/RegisterEventPage.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/NewEvent/RegisterEventPage.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n\n/* Deletes chrome blue focus-border */\n:focus {\n    outline: none !important;\n}\n\n\np {\n    margin: 0%;\n    padding: 0%;\n}\n\n.signBtn {\n    height: 50px;\n    width: 150px;\n    border-radius: 2px;\n    color: rgb(255, 255, 255);\n    font-size: 1rem;\n    background-color: #155767;\n\n}\n\n\n\n/*Wrapper whole order input section  */\n.formContainerReg{\n    margin: 0 auto;\n    margin-top: 7rem;\n    max-width: 700px;\n\n  \n\n}\n\n.inputShort {\n   \n    margin: 0.5rem auto 1rem auto;\n    display: grid;\n    grid-template-columns: 1fr 1fr ;\n    justify-content: space-between;\n}\n\n.inputForm{\n    /* border: solid 3px rgb(23, 71, 175); */\n    margin-top:-1rem; \n    padding: 2rem; \n   \n}\n\n/* Class for all sections containing input-fields */\n.inputSection {\n    margin-bottom: 1rem;\n    padding: 0rem;\n\n/* border: solid 3px rgb(134, 153, 51); */\n    display: grid;\n    grid-template-columns: 1fr;\n}\n\n\n/* Class for all input-fields */\n.input-box, .input-box-short, .input-box-text{\n    border: solid 2px rgb(226, 226, 226);\n    border-radius: 2px;\n    padding: 0.5rem;\n    font-size: 1rem;\n    height: 20px;\n\n}\n.input-box-a{\n   \n    border: solid 2px rgb(226, 226, 226);\n    border-radius: 2px;\n    padding: 0.5rem;\n    font-size: 1rem;\n    height: 40px;\n\n}\n\n.input-box-text {\n\n    height: 100px;\n\n}\n.input-box-short{\n    width: 100px;\n    \n}\n\n\n/* Container for feedback to user below message-area */\n#status-bar {\n    height: 20px;\n    width: 100%;\n}\n\n.wrapperButtons {\n    display: flex;\n    justify-content: flex-start;\n}\n\n\n\n/* -----------  iPad  ----------- */\n\n/* Portrait and Landscape */\n@media only screen \n  and (min-device-width: 568px) \n  and (max-device-width: 1112px)\n  and (-webkit-min-device-pixel-ratio: 2)\n{\n\n   \n    \n  }\n\n  /* ----------- Desktop ----------- */\n@media screen \nand (min-device-width: 1200px) \n\n { \n        .formContainer{\n         \n        }\n        .inputForm{\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n            grid-column-gap: 50px;\n        }\n        .subHeader{\n\n             padding:2rem;\n\n        }\n        .wrapperButtons {\n            \n            float: left;\n\n        }    \n\n        .input-box-short {\n        \n            margin-right: 2rem;\n        \n        }\n           \n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/SideDrawer.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/SideDrawer.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".side-drawer {\n    padding-top: 10rem;\n    height: 100%;\n    background-color:#155767;\n    box-shadow: 2px 0px 5px rgba(0,0,0,0.5);\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 100%;\n    max-width: 400px;\n    text-align: center;\n    text-transform: uppercase;\n    z-index: 200;\n}\n\n.backdrop {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: rgba(0,0,0,0.3);\n    z-index: -1000;\n}\n\n.side-drawer ul {\n    height: 100%;\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n\n\n\n}\n\n.side-drawer li {\n    margin: 0.5rem 0;\n    \n}\n\n.side-drawer a{\n    color: rgb(255, 255, 255);\n    text-decoration: none;\n    font-size: 1.2rem;\n\n}\n\n.side-drawer a:hover,\n.side-drawer a:active {\n    color: orange;\n\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/about/About.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/about/About.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:100,300,400&display=swap);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);", ""]);

// Module
exports.push([module.i, "\nbody {\nmargin: 0 auto;\n}\n/* Deletes chrome blue focus-border */\n:focus {\noutline: none !important;\n}\n\nh2{\n    font-size: 20px;\n}\n\n\n.mainContainer{\n    background-color:#FAFAFA;\n}\n\n.subHeader{\n    margin-top: 80px;\n    margin-bottom: 20px;\n}\n\n.aboutUs{\n    margin: 0 auto;\n    margin-bottom: 2rem;\n    padding: 1rem;\n    height: 200px;\n    box-shadow: 0px 3px 6px rgba(68, 113, 124, 0.452);\n}\n.heading{\n    text-align: left;\n    font-weight: 300;\n    color: black;\n}\n\n.contactUs{\n    margin: 0 auto;\n    margin-bottom: 2rem;\n    padding: 1rem;\n    height: 100px;\n    box-shadow: 0px 3px 6px rgba(68, 113, 124, 0.452); \n}\n\n.aboutUs-description, .contactUs-description{\n    font-family: 'Roboto', sans-serif;\n    font-size: 15px;\n    letter-spacing: 0.1px;\n}\n\n.mail, .phone{ \nmargin-bottom: -3px;\nmargin-right: 10px;\nheight: 20px;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/cookies/Cookies.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/cookies/Cookies.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:100,300,400&display=swap);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);", ""]);

// Module
exports.push([module.i, "\nbody {\n    margin: 0 auto;\n\n}\n\n.pageHeadline {\n    font-size: 20px;\n\n        /* Font: Montserrat eller Roboto?? */\n\n}\n\n.miniHeadline {\n    font-family: 'Roboto', 'sans-serif';\n    font-size: 15px;\n\n}\n\n.mainArticle {\n    font-family: 'Roboto', 'sans-serif';\n    font-size: 12px;\n\n}\n\n.bulletList {\n    font-size: 12px;\n}\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/eventView/EventView.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/eventView/EventView.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n\n.descriptionWrapper, .infoWrapper{\n   \n    padding: 2rem;\n}\n\n.description{\n    font-weight: 100;\n    font-style: italic;\n    line-height: 1.5rem;\n    font-size: 1.1rem;\n}\n\n.infoSection *{\n \n    display:inline;\n}\n\n.floePeng{\n    margin: 0 auto;\n    width: 100%;\n    max-width: 500px;\n}\n\n.userContainer{\n    margin-top: 1rem;\n    padding: 2rem;\n \n}\n\n.user{\n    margin-top: 1rem;\n}\n.peng{\n    height: 20px;\n}\n\n.chatContainer{\n    margin: 0 auto;\n    margin: 2rem auto 1rem auto;\n    border: dashed rgb(133, 182, 194) 5px;\n    display: block;\n    height: auto;\n    min-height: 200px;\n    width: 90%;\n}\n.post {\n    padding: 1rem;\n    border-bottom: solid 1px rgb(212, 212, 212);\n    width: auto;\n    display: flex;\n    justify-content: space-between;\n}\n\n\n\n.userIcon{\n    margin: 0 auto;\n    display: block;\n    height: 40px;\n    width: 40px;\n    border-radius: 50%;\n    background-color: rgb(123, 68, 145);\n}\n\n.message{\n    margin: 1rem;\n}\n.chatFormWrapper {\n    margin-bottom: 3rem;\n    padding: 1rem;\n    display: flex;\n    justify-content: space-between;\n}\n.chatForm{\n\n    height: 45px;\n    width: 250px;\n    border-radius: 20px;\n    background-color: rgb(255, 255, 255);\n}\n\n.chatBtn{\npadding: 0%;\nheight: 45px; \nwidth: 45px;   \nbackground-color: rgb(236, 162, 0);\ncolor: black;\ntext-transform: uppercase;\nborder-radius: 50%;\n}\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/events/Events.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/events/Events.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap);", ""]);

// Module
exports.push([module.i, "\n\nbody {\nmargin: 0 auto;\n}\n/* Deletes chrome blue focus-border */\n:focus {\noutline: none !important;\n}\n\n\n.wrapperGenreButtons {\ndisplay: grid;\njustify-content: center;\n\n}\n\n.wrapperGenreButtons button {\nborder-radius: 3px;\nfont-family: 'Montserrat', sans-serif;\nmargin: 1.8rem;\nheight: 88px;\nwidth: 289px;\ntext-align: left;\nfont-size: 22px;\nborder-style: none;\nmargin-top: 10px;\nmargin-bottom: 10px;\nbox-shadow: 0px 3px 6px grey;\nposition: relative;\npadding-left: 20px;\ndisplay: flex;\njustify-content: space-around;\n}\n\n\n/*Buttons*/\n.btn-coffeMeeting {\nbackground-color: #155767;\ncolor: white;\n    vertical-align: middle;\n}\n\n.btn-coffeMeeting img{\n    position: relative;\n    height: 50px;\n    width: 50px;\n    top: 1px;\n    margin-left: 100px;\n}\n\n.btn-onTour {\ncolor: black;\nbackground-color: #678C97;\n}\n\n.btn-onTour img{\n    position: relative;\n    height: 50px;\n    width: 50px;\n    top: 1px;\n    margin-left: 100px;\n}\n\n.btn-physicalActivity {\ncolor: black;\nbackground-color: #7DFBBC;\n}\n\n.btn-physicalActivity img{\n    position: relative;\n    height: 50px;\n    width: 50px;\n    top: 1px;\n    margin-left: 40px;\n}\n\n.btn-foodAndTalk {\ncolor: black;\nbackground-color: #EE8178;\n}\n\n.btn-foodAndTalk img{\n    position: relative;\n    height: 50px;\n    width: 50px;\n    top: 1px;\n    margin-left: 100px;\n}\n\n.btn-studyGroup {\ncolor: white;\nbackground-color: #BB2D56;\n}\n\n.btn-studyGroup img {\n    position: relative;\n    height: 50px;\n    width: 50px;\n    top: 1px;\n    margin-left: 40px;\n}\n\n.btn-createEvent{\n    display:block;\n\tmargin:0 auto;\n    background-color: #155767;\n    color: white;\n    border-radius: 3px;\n    font-family: 'Montserrat', sans-serif;\n    height: 76px;\n    width: 207px;\n    text-align: center;\n    font-size: 16px;\n    border-style: none;\n    margin-top: 40px;\n    margin-bottom: 10px;\n    box-shadow: 0px 3px 6px grey;\n    \n}\n\n.btn-createEvent img{\n    position: relative;\n    height: 30px;\n    width: 30px;\n    top: 1px;\n    margin-right: 1px;\n}\n.btnP{\n\n    margin-top: 0.7rem;\n}\n\n.btnBigScreen{\n    display: none;\n    margin-top: 1rem;\n    text-align: center;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 100;\n    font-size: 1.8rem;\n    color: #252525;\n}\n\n\n\n/* ----------- < iPad  ----------- */\n\n/* Portrait and Landscape */\n@media only screen \n\n  and (max-device-width: 1112px)\n  and (-webkit-min-device-pixel-ratio: 2)\n{\n\n    .wrapperContent{\n    \n        margin-top: 4rem;\n      }\n    \n  }\n\n  /* ----------- Desktop ----------- */\n@media screen \nand (min-device-width: 1200px) \n\n { \n    .wrapperGenreButtons{\n        margin-top: 5rem;\n        margin-bottom: 5rem;\n        max-width: 100%;;\n        display: flex;\n        justify-content: 40% 40% ;\n    }\n    .wrapperGenreButtons button {\n        height: 150px;\n        width:150px;\n        border-radius: 50%;\n      \n        }\n\n        .wrapperGenreButtons button * {\n            margin: 0 auto;\n            padding: 0%;\n            height: 60%;\n            width: 60%\n           \n            }\n\n            .wrapperGenreButtons button .btnP {\n            \n               display: none;\n               \n            }\n\n            .btnBigScreen{\n                display: block;\n           \n            }\n            \n\n            \n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/findEvents/FindEvents.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/findEvents/FindEvents.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".calender{\n    height: 40px;\n}\n\n.btn {\npadding: 2rem;\nwidth: 100%;\nmax-width: 300px;\ndisplay: flex;\njustify-content: space-between;\nfont-size: 1.3rem;\n}\n .findEventsContainer{\n     margin-top: 7rem;\n }\n .eventBox{\n    margin: 0 auto;\n    margin: 5%;\n}\n\n\n .heading{\n    text-align: center;\n    color: #008099; \n    margin-top: 0;\n    font-weight: normal;\n    }\n.arr-info{\n    padding-left: 30%;\n    margin-top: -10px;\n    }\n.btn-participate{\n    background-color: #F5C759;\n    color: black;\n    width: 80px;\n    height: 30px;\n    text-align: center;\n    border-radius: 5px;\n    float: right;\n    font-size: 15px;\n    }\n\n    /* ----------- < iPad  ----------- */\n\n/* Portrait and Landscape */\n@media only screen \nand (min-device-width: 568px) \nand (max-device-width: 1112px)\nand (-webkit-min-device-pixel-ratio: 2)\n{\n\n\n  \n}\n\n/* ----------- Desktop ----------- */\n@media screen \nand (min-device-width: 1200px) \n\n{ \n\n    .eventContainer{\n        margin: 0 auto;\n        margin-top: 2rem;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        \n    }\n\n    .eventBox{\n        margin: 0 auto;\n        width: 95%;\n    }\n\n    .findEventsContainer{\n        margin-top: 9rem;\n    }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/footer/Footer.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/footer/Footer.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body{\n    background-color:white;\n\n }\n \n \n .link {\n     color: rgb(255, 255, 255);\n     margin: 0%;\n     padding: 0%;\n     text-decoration: underline;\n   }\n   \n   .link:visited {\n     text-decoration: none;\n   }\n   \n   .link:hover {\n     text-decoration: underline;\n   }\n   \n   .link:active {\n     text-decoration: underline;\n   }\n h3, h4{\n    margin-bottom: 10px;\n     padding: 0%;\n     font-size: 1rem;\n \n     \n }\n\n .footerContainer{\n    margin: 0 auto;\n    padding: 20px;\n    max-height: 600px;\n    background-color: #2B455C;\n    color: rgb(255, 255, 255);\n    font-family: 'Roboto', sans-serif;\n    \n\n\n}\n.topSection  {\n    display: grid;\n    grid-template-columns: 1fr;\n    \n     \n     }\n .bottomSection  {\n padding-bottom: 10px;    \ndisplay: flex;\njustify-content: space-between;\n\n \n }\n .bottomSection img {\n  \n    margin-right: 20px;\n     \n     }\n\n \n \n .minP{\n    margin-right: 20px;\n    font-size:  0.8em;\n    color: rgb(122, 122, 122);\n }\n \n \n .footer-p{\n     margin-left: 10px;\n     padding: 0%;\n     font-size: 0.9em;\n }\n \n .top-section{\n     /* border:  2px solid rgb(52, 43, 139); */\n     height: 67%;\n     display: flex;\n     justify-content: space-between;\n }\n \n\n \n .contactWrapper{\nmargin-bottom: 20px;\n\n \n }\n hr { \n     display: block;\n     margin-top: 0.5em;\n     margin-bottom: 0.5em;\n     margin-left: 20%;\n     margin-right: 20%;\n     border-style: inset;\n     border-width: 0.8px;\n     opacity: 0.4;\n   } \n \n   .bottom-section{\n     /* border:  2px solid rgb(189, 22, 50); */\n     height: 20%;\n     display: flex;\n     justify-content: flex-end;\n }\n .phoneIcon{\n\n     margin-bottom: -3px;\n     margin-right: 10px;\n     height: 20px;\n\n }\n .mailIcon{\n    margin-bottom: -3px;\n    margin-right: 10px;\n    height: 20px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/formError/FormError.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/formError/FormError.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".alertDanger{\n    background: red;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/header/Header.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/header/Header.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.main_toolbar {\n    /* background-color: #2B455C; */\n    border-color: #282c34;\n    padding: 10px;\n    width: 100%;\n    position:fixed;\n    background-color: rgb(255, 255, 255);\n        box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.377);\n    z-index: 999;\n\n}\n\n\n.toolbar_navigation{\n    display: flex;\n    align-items: center;\n    height: 100%;\n    padding: 0 1rem;\n}\n\n.logo{\n    height: 52px;\n}\n\n.toolbar_logo a{\n    color: rgb(255, 255, 255);\n    text-decoration: none;\n    font-size: 1.5rem;\n}\n\n.spacer {\n    flex: 1 1;\n}\n\n.toolbar_navigation_items ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n}\n\n.toolbar_navigation_items li {\n    padding: 0 0.5rem;\n\n}\n\n.toolbar_navigation_items a {\n    color: white;\n    text-decoration: none;\n}\n\n.toolbar_navigation_items a:hover,\n.toolbar_navigation_items a:active {\n    color: orange;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/home/Home.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/home/Home.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.greeting {\n    font-size: 2.2rem;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 100;\n\n  }\n.wrapperPenguin{\n    margin: 0 auto;\n    padding: 0%;\n    height: 100px;\n    width: 80%;\n    text-align: center;\n}\n\n.frontPenguin{\nheight: 90%;\n}\n\n.greetContainer{\n    text-align: center;\n    margin:-2rem auto auto auto; \n\n}\n.homeContainer .btn{\n\n    height: 110px;\n    font-size: 1.2em;\n    max-width: 300px;\n   \n}\n\n.btnWrapper{\n    margin-bottom: 20%;\n    padding: 5%;\n    text-align: center;\n}\n/* ----------- < iPad  ----------- */\n\n/* Portrait and Landscape */\n@media only screen \n  and (min-device-width: 568px) \n  and (max-device-width: 1112px)\n  and (-webkit-min-device-pixel-ratio: 2)\n{\n\n    .wrapperPenguin{\n        margin-top: 10rem;\n       \n    }\n  \n\n       \n        .btnWrapper {\n            margin-top: -2rem;\n           display: flex;\n           justify-content: space-evenly;\n        }\n\n        .btnWrapper .btn { \n            width: 96%;\n        }\n    \n  }\n\n  /* ----------- Desktop ----------- */\n@media screen \nand (min-device-width: 1200px) \n\n { \n    .wrapperPenguin{\n        margin: 12rem auto 3rem auto;\n       \n    }\n\n    .frontPenguin{\n        height: 100%;\n        }\n\n    \n\n        .btnWrapper {\n           display: flex;\n           justify-content: space-evenly;\n        }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/login/loginPage.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/login/loginPage.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap);", ""]);

// Module
exports.push([module.i, "\n\nbody, html{\nmargin: 0 auto;\nmin-height: 100%;\n}\n\n/* Deletes chrome blue focus-border */\n:focus {\noutline: none !important;\n}\n\n.logo img{\n    display:block;\n    margin:0 auto;\n    width: 150px;\n    height: 60px;\n\n}\n\n.logo{\n    margin-top: 50px;\n    margin-bottom: 50px;\n}\n\n.mainContainerLogIn{\n    padding: 10px 10px 10px;\n    background: #50C9C3;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\nbackground: linear-gradient(to right, #96DEDA, #50C9C3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n}\n\n.inputFormLogIn{\n    width: 300px;\n\theight: 450px;\n\tbackground: #f9ffff;\n\tmargin: 100px auto;\n\ttext-align: center;\n\tborder-radius: 10px;\n box-shadow: 0 0 20px rgba(0,0,0,0.2);\n    padding: 10px 10px;\n}\n\n.username, .password{\n\twidth: 70%;\n\toutline: none;\n\tborder-top: 0;\n\tborder-left: 0;\n\tborder-right: 0;\n\tfont-size: 14px;\n\tpadding: 16px;\n    font-weight: 300;\n    background-color: #ebe5e567;\n    border-radius: 15px;\n    margin-top: 10px;\n}\n\n\n.btn-login{\n    font-family: 'Montserrat', sans-serif;\n    border-radius: 3px;\n    border-style: none;\n    border-radius: 3px;\n    font-size: 20px;\n    font-weight: 700;\n    display:block;\n\tmargin:0 auto;\n    background-color: #E2B14D;\n    color: white;\n    width: 240px;\n    height: 50px;\n    margin-top: 50px;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/myEvents/MyEvents.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/myEvents/MyEvents.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* .mainContainer{\npadd\n} */\n.subHeaderMin{\n    margin-top: 1rem;\n    text-align: center;\n    color: rgb(117, 117, 117);\n    font-size: 1.4rem;\n    font-weight: 700;\n    \n}\n\n.btnRounded{\n    margin: 0 auto;\n    margin-top: -2rem;\n    font-size: 1rem;\n    padding: 2px;\n   height: 43px;\n   width: 200px;\n   border-radius: 20px;\n   text-align: center;\n   display: block;\n}\n\n\n\n\n.adminEventsContainer , \n.joinedEventsContainer{\n    margin: 0 auto;\n  padding-top: 0.5rem;\n    justify-content: center;\n    border-radius: 5px;\n    background-color: rgb(255, 255, 255);\n}\n\n.joinedEventsContainer{\n  \n    margin-top:-3rem;\n   \n}\n\n\n\n\n\n.testEvent{\n  \n    margin: 0 auto;\n    margin-bottom: 2rem;\n    padding: 1rem;\n    height: 130px;\n    box-shadow: 0px 3px 6px rgba(68, 113, 124, 0.452);\n\n \n}\n\n.wrapperButtons {\n    margin: 0 auto;\n    width : 300px;\n    display: flex;\n    justify-content: space-between;\n\n}\n\n\n/* -----------  iPad  ----------- */\n\n/* Portrait and Landscape */\n@media only screen \n  and (min-device-width: 568px) \n  and (max-device-width: 1112px)\n  and (-webkit-min-device-pixel-ratio: 2)\n{\n.myEventsList{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.joinedEventsContainer{\n  \n    margin-top:-7rem;\n   \n}\n   \n    \n  }\n\n  /* ----------- Desktop ----------- */\n@media screen \nand (min-device-width: 1200px) \n\n { \n\n    .myEventsList{\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n   \n    }\n    .joinedEventsContainer{\n  \n        margin-top:-15rem;\n       \n    }\n            \n           \n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/notFound/notFound.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/notFound/notFound.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n\n\n.wrapperContent{\n    margin:8rem 2rem; \n    text-align: center;\n}    \n\nh2{\n    font-size: 1.7rem;\n}\n\n.pengNotFound{\n    margin: 2rem;\n    max-height: 200px;\n\n}\n\n\n\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/privacy/Privacy.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/privacy/Privacy.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:100,300,400&display=swap);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);", ""]);

// Module
exports.push([module.i, "\nbody {\n    margin: 0 auto;\n\n}\n\n.pageHeadline {\n    font-size: 20px;\n\n        /* Font: Montserrat eller Roboto?? */\n\n}\n\n.preamble {\n    font-family: 'Roboto', 'sans-serif';\n    font-size: 14px;\n\n}\n\n.miniHeadline {\n    font-family: 'Roboto', 'sans-serif';\n    font-size: 15px;\n\n}\n\n.mainArticle {\n    font-family: 'Roboto', 'sans-serif';\n    font-size: 12px;\n\n}\n\n\n\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/profile/ProfilePage.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/profile/ProfilePage.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n\n    margin: 0rem;\n    background-color:#FAFAFA;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/signup/SignupPage.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/signup/SignupPage.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n\n    margin: 0rem;\n    background-color:#FAFAFA;\n}\n\n/* Deletes chrome blue focus-border */\n:focus {\n    outline: none !important;\n}\n\n\np {\n    margin: 0%;\n    padding: 0%;\n    line-height: 2rem;\n    font-family: 'Open Sans', sans-serif;\n}\n\n.signBtn {\n\n    margin: 1.5rem;\n    height: 45px;\n    width: 150px;\n    border-radius: 3px;\n    color: rgb(255, 255, 255);\n    font-size: 1rem;\n    background-color: #155767;\n\n}\n\n\n/*Wrapper whole order input section  */\n.formContainer{\n     \n    margin: 0 auto;\n    margin-top: 7rem;\n    height: 500px;\n    width: 300px;\n\n}\n\n.inputContainerShorts {\n    margin: 0.5rem auto 1rem auto;\n    display: grid;\n    grid-template-columns: 30% 30%;\n}\n\n.inputForm{\n    /* border: solid 3px rgb(23, 71, 175); */\n    padding: 2rem; \n   \n}\n\n/* Class for all sections containing input-fields */\n.inputSection {\n    margin-bottom: 1rem;\n    padding: 0rem;\n    display: grid;\n    grid-template-columns: 1fr;\n}\n\n\n/* Class for all input-fields */\n.input-box, .input-box-text{\n    border: solid 2px rgb(226, 226, 226);\n    border-radius: 2px;\n    padding: 0.5rem;\n    font-size: 1rem;\n    height: 17px;\n\n}\n\n.input-box-text {\n\n    height: 100px;\n\n}\n\n\n\n/* Container for feedback to user below message-area */\n#status-bar {\n    height: 20px;\n    width: 100%;\n}\n\n.wrapperButtons {\n    width : 300px;\n    display: flex;\n    justify-content: space-between;\n}\n\n\n\n/* -----------  iPad  ----------- */\n\n/* Portrait and Landscape */\n@media only screen \n  and (min-device-width: 568px) \n  and (max-device-width: 1112px)\n  and (-webkit-min-device-pixel-ratio: 2)\n{\n\n\n    \n  }\n\n  /* ----------- Desktop ----------- */\n@media screen \nand (min-device-width: 1200px) \n\n { \n\n  .inputForm{\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      grid-column-gap: 50px;\n  }\n  .formContainer{\n\n      float: left;\n  }\n            \n           \n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/startpage/StartPage.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/startpage/StartPage.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:100,300,400&display=swap);", ""]);
var urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../images/background.jpg */ "./src/images/background.jpg"));

// Module
exports.push([module.i, "\nbody {\nmargin: 0 auto;\nheight: 100%;\nwidth: 100%;\n}\n/* Deletes chrome blue focus-border */\n:focus {\noutline: none !important;\n}\n\n.header img{\n    display:block;\n\tmargin:0 auto;\n    width: 100px;\n    height: 70px;\n    margin-left: 10px;\n    margin-top: -20px;\n}\n\n.header h1{\n    margin-left: 110px;\n    margin-top: -50px;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 30px;\n    color: #B9B9B9;\n    font-weight: 300;\n}\n\n.mainContainerStartPage{\n    background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n    width: 375px;\n    height: 700px;\n    border: 0.1px solid transparent;\n}\n\n.formContainer{\n    padding: 10px;\n    margin-top: 40px;\n}\n\n\n.quote{\n    font-family: 'Montserrat', sans-serif;\n    color: #F4BC36;\n    font-size: 25px;\n    font-weight: 100;\n    text-align: center;\n    margin-top: 80px;\n    margin-bottom: 90px;\n}\n\nbutton{\n    font-family: 'Montserrat', sans-serif;\n    border-radius: 3px;\n    border-style: none;\n    border-radius: 6px;\n    font-size: 23px;\n    display:block;\n\tmargin:0 auto;\n    background-color:#366E7C;\n    color: white;\n    width: 290px;\n    height: 86px;\n    margin-bottom: 40px;\n}\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html {\n  height: 100%;\n}\n\n\nbody {\n  margin: 0;\n  height: 100%;\n  /* font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; */\n\n  font-family: 'Roboto', sans-serif;\n\n}\n.wrapperContent{\n  margin-top: 5rem;\n  \n}\n.subHeader {\n    margin: 0%;\n    font-weight: 300;\n    text-transform: uppercase;\n    font-size: 1.5rem;\n    text-align: center;\n    color: #498492;\n\n}\n.boldP{\nfont-weight: 700;\n}\n\n.mainContainer{\n  margin: 0 auto;\n  padding: 0.01rem;\n  height: auto; \n  background-color: rgba(248, 247, 246, 0.596);\n\n}\na{\n  text-decoration: none;\n}\n\nul{\n \n  padding: 0%;\n\n}\n\nli {\n  list-style: none;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\n.btn{\n  margin-bottom: 2rem;\n  width: 80%;\n  height: 110px;\n  border-radius: 3px;\n  text-align: center;\n  text-transform:uppercase;\n  color: #ffffff;\n  font-size: 1.1em;\n  background-color:#155767;  \n  cursor: pointer;\n}\n", ""]);



/***/ }),

/***/ "./src/components/App.css":
/*!********************************!*\
  !*** ./src/components/App.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/App.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var _firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase/Firebase */ "./src/components/firebase/Firebase.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./src/components/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _header_Header_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/Header.css */ "./src/components/header/Header.css");
/* harmony import */ var _header_Header_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_header_Header_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _profile_ProfilePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/ProfilePage */ "./src/components/profile/ProfilePage.jsx");
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home */ "./src/components/home/home.jsx");
/* harmony import */ var _login_LoginPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/LoginPage */ "./src/components/login/LoginPage.jsx");
/* harmony import */ var _NewEvent_RegisterEventPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NewEvent/RegisterEventPage */ "./src/components/NewEvent/RegisterEventPage.jsx");
/* harmony import */ var _signup_SignupPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/SignupPage */ "./src/components/signup/SignupPage.jsx");
/* harmony import */ var _events_Events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./events/Events */ "./src/components/events/Events.jsx");
/* harmony import */ var _myEvents_MyEvents__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./myEvents/MyEvents */ "./src/components/myEvents/MyEvents.jsx");
/* harmony import */ var _findEvents_FindEvents__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./findEvents/FindEvents */ "./src/components/findEvents/FindEvents.jsx");
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/Header */ "./src/components/header/Header.jsx");
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Backdrop */ "./src/components/Backdrop.js");
/* harmony import */ var _SideDrawer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SideDrawer */ "./src/components/SideDrawer.js");
/* harmony import */ var _about_About__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./about/About */ "./src/components/about/About.jsx");
/* harmony import */ var _startpage_StartPage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./startpage/StartPage */ "./src/components/startpage/StartPage.jsx");
/* harmony import */ var _eventView_EventView__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./eventView/EventView */ "./src/components/eventView/EventView.jsx");
/* harmony import */ var _cookies_cookies__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cookies/cookies */ "./src/components/cookies/cookies.jsx");
/* harmony import */ var _privacy_Privacy__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./privacy/Privacy */ "./src/components/privacy/Privacy.jsx");
/* harmony import */ var _notFound_NotFound__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./notFound/NotFound */ "./src/components/notFound/NotFound.jsx");
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/App.js";
























class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.drawerClickHandler = () => {
      this.setState(prevState => {
        return {
          sideDrawerOpen: !prevState.sideDrawerOpen
        };
      });
    };

    this.backDropClickHandler = () => {
      this.setState({
        sideDrawerOpen: false
      });
    };

    this.registerUser = userName => {
      _firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().onAuthStateChanged(FBUser => {
        FBUser.updateProfile({
          displayName: userName
        }).then(() => {
          this.setState({
            user: FBUser,
            displayName: FBUser.displayName,
            userID: FBUser.uid
          });
          console.log(this.props.registerUser);
        });
      });
    };

    this.logOutUser = e => {
      e.preventDefault();
      this.setState({
        displayName: null,
        userID: null,
        user: null
      });
      _firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signOut().then(() => {
        console.log('you are logged out');
        window.location = '/loginPage';
      });
    };

    this.addEvent = eventName => {
      const ref = _firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref("events/".concat(this.state.user.uid));
      ref.push({
        eventName: eventName
      });
    };

    this.state = {
      user: null,
      displayName: null,
      userID: null,
      sideDrawerOpen: false
    };
    this.drawerClickHandler = this.drawerClickHandler.bind(this);
    this.backDropClickHandler = this.backDropClickHandler.bind(this);
  }

  componentDidMount() {
    _firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().onAuthStateChanged(FBUser => {
      if (FBUser) {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
      }
    });
  }

  render() {
    console.log(this.props.registerUser);
    let sideDrawer;
    let backdrop;
    let header = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_Header__WEBPACK_IMPORTED_MODULE_14__["default"], {
      userName: this.state.displayName,
      drawerClickHandler: this.drawerClickHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    });

    if (this.state.sideDrawerOpen) {
      sideDrawer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SideDrawer__WEBPACK_IMPORTED_MODULE_16__["default"], {
        logOutUser: this.logOutUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      });
      sideDrawer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SideDrawer__WEBPACK_IMPORTED_MODULE_16__["default"], {
        drawerClickHandler: this.drawerClickHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      });
      backdrop = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Backdrop__WEBPACK_IMPORTED_MODULE_15__["default"], {
        click: this.backDropClickHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      });
    }

    if (window.location.pathname === '/LoginPage') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_LoginPage__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      });
    }

    if (window.location.pathname === '/StartPage') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_startpage_StartPage__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      });
    }

    if (window.location.pathname === '/SignupPage') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_signup_SignupPage__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      });
    } else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, sideDrawer, backdrop, header, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/",
      render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_home_home__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, props, {
        user: this.state.user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/ProfilePage",
      user: this.state.user,
      component: _profile_ProfilePage__WEBPACK_IMPORTED_MODULE_6__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/loginPage",
      render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_LoginPage__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/SignupPage",
      render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_signup_SignupPage__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, props, {
        registerUser: this.registerUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/RegisterEventPage",
      render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewEvent_RegisterEventPage__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, props, {
        addEvent: this.addEvent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/events",
      user: this.state.user,
      component: _events_Events__WEBPACK_IMPORTED_MODULE_11__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/myEvents",
      user: this.state.user,
      component: _myEvents_MyEvents__WEBPACK_IMPORTED_MODULE_12__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/findEvents",
      user: this.state.user,
      component: _findEvents_FindEvents__WEBPACK_IMPORTED_MODULE_13__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/About",
      user: this.state.user,
      component: _about_About__WEBPACK_IMPORTED_MODULE_17__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/StartPage",
      user: this.state.user,
      component: _startpage_StartPage__WEBPACK_IMPORTED_MODULE_18__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/EventView",
      user: this.state.user,
      component: _eventView_EventView__WEBPACK_IMPORTED_MODULE_19__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/Cookies",
      user: this.state.user,
      component: _cookies_cookies__WEBPACK_IMPORTED_MODULE_20__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/Privacy",
      user: this.state.user,
      component: _privacy_Privacy__WEBPACK_IMPORTED_MODULE_21__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      component: _notFound_NotFound__WEBPACK_IMPORTED_MODULE_22__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Backdrop.css":
/*!*************************************!*\
  !*** ./src/components/Backdrop.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Backdrop.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Backdrop.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Backdrop.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Backdrop.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Backdrop.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Backdrop.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Backdrop.js":
/*!************************************!*\
  !*** ./src/components/Backdrop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Backdrop_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Backdrop.css */ "./src/components/Backdrop.css");
/* harmony import */ var _Backdrop_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Backdrop_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/Backdrop.js";



const Backdrop = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "backdrop",
  onClick: props.click,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, " ");

/* harmony default export */ __webpack_exports__["default"] = (Backdrop);

/***/ }),

/***/ "./src/components/DrawerToggleButton.css":
/*!***********************************************!*\
  !*** ./src/components/DrawerToggleButton.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./DrawerToggleButton.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/DrawerToggleButton.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./DrawerToggleButton.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/DrawerToggleButton.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./DrawerToggleButton.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/DrawerToggleButton.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/DrawerToggleButton.js":
/*!**********************************************!*\
  !*** ./src/components/DrawerToggleButton.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DrawerToggleButton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrawerToggleButton.css */ "./src/components/DrawerToggleButton.css");
/* harmony import */ var _DrawerToggleButton_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DrawerToggleButton_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/DrawerToggleButton.js";



const drawerToggleButton = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  className: "toggle-button",
  onClick: props.click,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "toggle-button_line",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "toggle-button_line",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "toggle-button_line",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, " "));

/* harmony default export */ __webpack_exports__["default"] = (drawerToggleButton);

/***/ }),

/***/ "./src/components/NewEvent/RegisterEventPage.css":
/*!*******************************************************!*\
  !*** ./src/components/NewEvent/RegisterEventPage.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./RegisterEventPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NewEvent/RegisterEventPage.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./RegisterEventPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NewEvent/RegisterEventPage.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./RegisterEventPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/NewEvent/RegisterEventPage.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/NewEvent/RegisterEventPage.jsx":
/*!*******************************************************!*\
  !*** ./src/components/NewEvent/RegisterEventPage.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RegisterEventPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterEventPage.css */ "./src/components/NewEvent/RegisterEventPage.css");
/* harmony import */ var _RegisterEventPage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_RegisterEventPage_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/es/index.js");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/Footer */ "./src/components/footer/Footer.jsx");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase/Firebase */ "./src/components/firebase/Firebase.js");
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/NewEvent/RegisterEventPage.jsx";







class RegisterEventPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      eventType: '',
      startDate: '',
      endDate: '',
      lastSignDate: '',
      maxParticipants: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForms = this.resetForms.bind(this);
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;
    this.setState({
      [itemName]: itemValue
    });
  }

  resetForms() {
    this.setState({
      eventName: '',
      eventType: '',
      startDate: '',
      endDate: '',
      lastSignDate: '',
      maxParticipants: '',
      description: ''
    });
  }

  handleSubmit(e) {
    let eventInfo = {
      eventName: this.state.eventName,
      eventType: this.state.eventType,
      maxParticipants: this.state.maxParticipants,
      description: this.state.description
    };
    e.preventDefault();
    this.props.addEvent(eventInfo);
    this.setState({
      eventInfo: ' '
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "formContainerReg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "subHeader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Opprett arrangement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "inputForm",
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inputSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "boldP",
      htmlFor: "eventName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Navn p\xE5 arrangement *"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "input-box",
      type: "text",
      name: "eventName",
      placeholder: "Navn",
      value: this.state.eventName,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inputSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "boldP",
      htmlFor: "eventType",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, " Type arrangement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      className: "input-box-a",
      placeholder: "Arrangement-typ",
      name: "eventType",
      value: this.state.eventType,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "kaffetreff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "Kaffetreff"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ut p\xE5 tur",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Ut p\xE5 tur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Fysisk aktivitet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "Fysisk aktivitet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Mat&Prat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "Mat&Prat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "studiegrupper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Studiegrupper"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inputShort",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inputSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "boldP",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, " Starter: *"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "input-box-short",
      name: "startDate",
      value: this.state.startDate,
      selected: this.state.startDate,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inputSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "boldP",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, " Slutter *"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "input-box-short",
      name: "endDate",
      value: this.state.endDate,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inputSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "boldP",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, " Siste p\xE5melding"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "input-box-short",
      name: "lastSignDate",
      value: this.state.lastSignDate,
      selected: this.state.lastSignDate,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inputSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "boldP",
      htmlFor: "maxParticipants",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, " Maks"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "input-box-short",
      type: "number",
      placeholder: "Maks",
      name: "maxParticipants",
      value: this.state.maxParticipants,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inputSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "boldP",
      htmlFor: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, " Beskrivelse"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "input-box-text",
      type: "text",
      placeholder: "Beskrivelse",
      name: "description",
      value: this.state.description,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperButtons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "signBtn",
      onClick: this.resetForms,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, "T\xF8m"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "signBtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, "Opprett"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RegisterEventPage);

/***/ }),

/***/ "./src/components/SideDrawer.css":
/*!***************************************!*\
  !*** ./src/components/SideDrawer.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./SideDrawer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/SideDrawer.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./SideDrawer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/SideDrawer.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./SideDrawer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/SideDrawer.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/SideDrawer.js":
/*!**************************************!*\
  !*** ./src/components/SideDrawer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _SideDrawer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideDrawer.css */ "./src/components/SideDrawer.css");
/* harmony import */ var _SideDrawer_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SideDrawer_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase/Firebase */ "./src/components/firebase/Firebase.js");
/* harmony import */ var _DrawerToggleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DrawerToggleButton */ "./src/components/DrawerToggleButton.js");
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/SideDrawer.js";






class SideDrawer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props); // this.state = {
    //     sideDrawOpen: false
    // };
  }

  render() {
    const logOutUser = this.props.logOutUser;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "side-drawer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/",
      onClick: this.props.drawerClickHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/LoginPage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Login Page")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/SignupPage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Sign up")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/RegisterEventPage",
      onClick: this.props.drawerClickHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "New event")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/Events",
      onClick: this.props.drawerClickHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Events")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/StartPage",
      onClick: this.props.drawerClickHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Startpage TEMPORARY")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/LoginPage",
      onClick: e => logOutUser(e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Sign out"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SideDrawer);

/***/ }),

/***/ "./src/components/about/About.css":
/*!****************************************!*\
  !*** ./src/components/about/About.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./About.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/about/About.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./About.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/about/About.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./About.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/about/About.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/about/About.jsx":
/*!****************************************!*\
  !*** ./src/components/about/About.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _About_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.css */ "./src/components/about/About.css");
/* harmony import */ var _About_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_About_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_black_phone_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/black-phone-icon.png */ "./src/images/black-phone-icon.png");
/* harmony import */ var _images_black_phone_icon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_black_phone_icon_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_black_mail_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/black-mail-icon.png */ "./src/images/black-mail-icon.png");
/* harmony import */ var _images_black_mail_icon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_black_mail_icon_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/about/About.jsx";





class About extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "subHeader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, " Om oss"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "aboutUs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Bakgrunn"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "aboutUs-description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "IceBreaker er et konsept for \xE5 hjelpe studenter \xE5 f\xE5 nye bekjentskap  i hverdagen. Ved \xE5 enkelt kunne komme i kontakt med personer du ikke kjenner fra f\xF8r av, ved bruk av felles interesser.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "contactUs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Kontak oss"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "contactUs-description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "mail",
      src: _images_black_mail_icon_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "mail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), "IceBreaker@mail.com", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "phone",
      src: _images_black_phone_icon_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: "phone",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), "999 99 999"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/cookies/Cookies.css":
/*!********************************************!*\
  !*** ./src/components/cookies/Cookies.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Cookies.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/cookies/Cookies.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Cookies.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/cookies/Cookies.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Cookies.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/cookies/Cookies.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/cookies/cookies.jsx":
/*!********************************************!*\
  !*** ./src/components/cookies/cookies.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cookies_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cookies.css */ "./src/components/cookies/Cookies.css");
/* harmony import */ var _Cookies_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Cookies_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/Footer */ "./src/components/footer/Footer.jsx");
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/cookies/cookies.jsx";




class Cookies extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "pageHeadline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Informasjonskapsler"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "textWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "miniHeadline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Info om Informasjonskapsler"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mainArticle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Icebreaker benytter seg av s\xE5kalte informasjonskapsler eller cookies for \xE5 bedre din brukeropplevelse n\xE5r du bes\xF8ker v\xE5r nettside. En informasjonskapsel er en tekstfil som ved bes\xF8k p\xE5 eller interaksjon med en nettside legges i din nettlesers internminne.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), "Behandlingsgrunnlaget for dette er personvernforordninger artikkel 6 nr 1 f, som tillater oss \xE5 behandle personopplysninger som er n\xF8dvendig for \xE5 ivareta en interesse som veier tyngre enn hensynet til den enkeltes personvern. Den interessen er \xE5 f\xE5 nettsiden v\xE5r til \xE5 fungere godt slik at du f\xE5r en god brukeropplevelse."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "miniHeadline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Tilpass selv"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mainArticle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "De fleste moderne nettlesere (Chrome, Firefox, Opera, Safari, Internet Explorer, Edge, etc) er innstilt p\xE5 \xE5 akseptere informasjonskapsler automatisk, men du kan selv velge \xE5 endre innstillingene slik at Informasjonskapsler ikke blir akseptert. Vi gj\xF8r oppmerksom p\xE5 at dette kan f\xF8re til at Icebreakers nettjenester ikke vil fungere optimalt.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://nettvett.no/slik-administrer-du-informasjonskapsler/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Nettsiden nettvett.no forklarer hvordan du selv kan administrere informasjonskapsler.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "miniHeadline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Hvordan varsle brukere om cookies?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mainArticle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "I tillegg til personvernforordningen er det ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://lovdata.no/dokument/NL/lov/2003-07-04-83/KAPITTEL_2#%C2%A72-7b",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "ekomloven \xA7 2-7 b"), ", den s\xE5kalte \"cookie paragrafen\", som regulerer vilk\xE5rene for lagring av opplysninger i kommunikasjonsutstyr. Nasjonal kommunikasjonsmyndighet ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.nkom.no/teknisk/internett/cookies/informasjonskapsler-cookies",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "(Nkom) har tolket ekomloven"), " og sier at kravene til \xE5 varsle brukerne anses som oppfyllt n\xE5r:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "bulletList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Informasjonen er lett synlig n\xE5r bruker kommer inn p\xE5 nettstedet. For eksempel en lett synlig lenke i topptekst, bunntekst, en tekstboks p\xE5 siden eller en \"pop-up\" der ordet cookies eller informasjonskapsler nevnes slik at det er tydelig hva en informerer om."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Informasjonen inneholder opplysninger om hvilke informasjonskapsler som brukes, hvilke opplysninger som behandles, form\xE5l og hvem som behandler opplysningene.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "miniHeadline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Informasjonskapsler"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mainArticle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Informasjonskapslene nevnt nedenfor finnes p\xE5 disse sidene:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "bulletList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Icebreaker.no"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "Login.Icebreaker.no"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "etc"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "etc2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "miniHeadline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Diverse"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mainArticle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "Icebreaker er behandlingsansvarlig. Databehandler er den som behandler dataene p\xE5 vegne av Icebreaker dersom vi ikke gj\xF8r det selv."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Cookies);

/***/ }),

/***/ "./src/components/eventView/EventView.css":
/*!************************************************!*\
  !*** ./src/components/eventView/EventView.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./EventView.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/eventView/EventView.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./EventView.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/eventView/EventView.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./EventView.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/eventView/EventView.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/eventView/EventView.jsx":
/*!************************************************!*\
  !*** ./src/components/eventView/EventView.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventView_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventView.css */ "./src/components/eventView/EventView.css");
/* harmony import */ var _EventView_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_EventView_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/Footer */ "./src/components/footer/Footer.jsx");
/* harmony import */ var _images_floePeng_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/floePeng.png */ "./src/images/floePeng.png");
/* harmony import */ var _images_floePeng_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_floePeng_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_penguin_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/penguin.png */ "./src/images/penguin.png");
/* harmony import */ var _images_penguin_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_penguin_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/eventView/EventView.jsx";






class EventView extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      isHidden: true
    };
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "eventViewContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "subHeader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, " Kontegrupp 2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "descriptionWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "\xABJeg vil gjerne finne noen \xE5 sitte sammen med \xE5 \xF8ve til programeringeksamen, har mine styrker og svakheter s\xE5 h\xE5per vi kan hjelpe hverandre \xBB")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "infoWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "infoSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "boldP",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Dato:"), "  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, " 20-02-2019 - 23-02-2019 ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "infoSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "boldP",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Siste p\xE5melding:"), "  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "20-02-2019")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "infoSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "boldP",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Maks deltakere:"), "  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "4")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "infoSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "boldP",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Ansvarlig:"), "  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Anne Lien"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "floePeng",
      src: _images_floePeng_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "penguins",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "userContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "peng",
      src: _images_penguin_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: " penguin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Anne Lien"), "   "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "peng",
      src: _images_penguin_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: " penguin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Per Olsen"), "  "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "peng",
      src: _images_penguin_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: " penguin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "Johan Berg"), "  "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chatContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "post",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperUserIcon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "userIcon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperMessage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "\xABHei folkens! Har dere startet, hvor m\xF8tes vi?\xBB"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "post",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperUserIcon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "userIcon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperMessage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "\xABHei folkens! Har dere startet, hvor m\xF8tes vi?\xBB"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "post",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperUserIcon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "userIcon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperMessage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, "\xABHalo! Jeg sitter p\xE5 Fjerdingen i morgen Onsdag fra 13:00. Dere kan kontakte meg p\xE5 4055789\xBB"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "post",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperUserIcon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "userIcon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperMessage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "      ", !this.state.isHidden && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Melding, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chatFormWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chatForm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chatBtn",
      onClick: this.toggleHidden.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }));
  }

}

const Melding = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "modal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154
  },
  __self: undefined
}, "Test melding vises ved klikking :D!");

/* harmony default export */ __webpack_exports__["default"] = (EventView);

/***/ }),

/***/ "./src/components/events/Events.css":
/*!******************************************!*\
  !*** ./src/components/events/Events.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Events.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/events/Events.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Events.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/events/Events.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Events.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/events/Events.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/events/Events.jsx":
/*!******************************************!*\
  !*** ./src/components/events/Events.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Events_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events.css */ "./src/components/events/Events.css");
/* harmony import */ var _Events_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Events_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_tea_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/tea.png */ "./src/images/tea.png");
/* harmony import */ var _images_tea_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_tea_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_boot_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/boot.png */ "./src/images/boot.png");
/* harmony import */ var _images_boot_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_boot_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_gym_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/gym.png */ "./src/images/gym.png");
/* harmony import */ var _images_gym_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_gym_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_cutlery_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/cutlery.png */ "./src/images/cutlery.png");
/* harmony import */ var _images_cutlery_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_cutlery_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_studying_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/studying.png */ "./src/images/studying.png");
/* harmony import */ var _images_studying_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_studying_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_kalender_white_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/kalender-white.png */ "./src/images/kalender-white.png");
/* harmony import */ var _images_kalender_white_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_kalender_white_png__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/events/Events.jsx";









class Events extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "subHeader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Arrangementer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperGenreButtons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperBtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/FindEvents",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn-coffeMeeting",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "btnP",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Kaffetreff"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "tea",
      src: _images_tea_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: "tea",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "btnBigScreen",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Kaffetreff")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperBtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/FindEvents",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn-onTour",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "btnP",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Ut p\xE5 tur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "boot",
      src: _images_boot_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "boot",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "btnBigScreen",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Ut p\xE5 tur")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperBtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/FindEvents",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn-physicalActivity",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "btnP",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Fysisk aktivitet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "gym",
      src: _images_gym_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "gym",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "btnBigScreen",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Fysisk aktivitet")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperBtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/FindEvents",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn-foodAndTalk",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "btnP",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "Mat&Prat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "cutlery",
      src: _images_cutlery_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "cutlery",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    })), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "btnBigScreen",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Mat&Prat")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperBtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/FindEvents",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn-studyGroup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "btnP",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Studiegrupper"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "studying",
      src: _images_studying_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      alt: "studying",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    })), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "btnBigScreen",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "Studiegrupper"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/RegisterEventPage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn-createEvent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "OPPRETT ARRANGEMENT", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "calender",
      src: _images_kalender_white_png__WEBPACK_IMPORTED_MODULE_7___default.a,
      alt: "calender",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ }),

/***/ "./src/components/findEvents/FindEvents.css":
/*!**************************************************!*\
  !*** ./src/components/findEvents/FindEvents.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./FindEvents.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/findEvents/FindEvents.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./FindEvents.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/findEvents/FindEvents.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./FindEvents.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/findEvents/FindEvents.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/findEvents/FindEvents.jsx":
/*!**************************************************!*\
  !*** ./src/components/findEvents/FindEvents.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FindEvents_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FindEvents.css */ "./src/components/findEvents/FindEvents.css");
/* harmony import */ var _FindEvents_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FindEvents_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/Footer */ "./src/components/footer/Footer.jsx");
/* harmony import */ var _images_kalender_white_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/kalender-white.png */ "./src/images/kalender-white.png");
/* harmony import */ var _images_kalender_white_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_kalender_white_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/findEvents/FindEvents.jsx";





class FindEvents extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "subHeader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, " Genre-navn"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "eventContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "eventBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "testEvent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Event navn"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "arr-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Kontakt: Heidi Larsen", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), " Dato: 4/8-2019"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn-participate",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "DELTA ")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "eventBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "testEvent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "eventBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "testEvent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/RegisterEventPage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Opprett ny"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "calender",
      src: _images_kalender_white_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "boot",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FindEvents);

/***/ }),

/***/ "./src/components/firebase/Firebase.js":
/*!*********************************************!*\
  !*** ./src/components/firebase/Firebase.js ***!
  \*********************************************/
/*! exports provided: provider, auth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provider", function() { return provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");



const firebaseConfig = {
  apiKey: "AIzaSyA9PZxcM-47HTb1X4MX6tJdlCyz50T4H5w",
  authDomain: "icebreaker-eca4f.firebaseapp.com",
  databaseURL: "https://icebreaker-eca4f.firebaseio.com",
  projectId: "icebreaker-eca4f",
  storageBucket: "icebreaker-eca4f.appspot.com",
  messagingSenderId: "672727885033",
  appId: "1:672727885033:web:50834aca20d42f5b"
};
firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./src/components/footer/Footer.css":
/*!******************************************!*\
  !*** ./src/components/footer/Footer.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Footer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/footer/Footer.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Footer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/footer/Footer.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Footer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/footer/Footer.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/footer/Footer.jsx":
/*!******************************************!*\
  !*** ./src/components/footer/Footer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.css */ "./src/components/footer/Footer.css");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_white_mail_icon_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/white-mail-icon.jpg */ "./src/images/white-mail-icon.jpg");
/* harmony import */ var _images_white_mail_icon_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_white_mail_icon_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_white_phone_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/white-phone.png */ "./src/images/white-phone.png");
/* harmony import */ var _images_white_phone_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_white_phone_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_insta_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/insta.png */ "./src/images/insta.png");
/* harmony import */ var _images_insta_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_insta_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_fb_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/fb.png */ "./src/images/fb.png");
/* harmony import */ var _images_fb_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_fb_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/footer/Footer.jsx";








class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footerContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "top_section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "topSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      className: "link",
      to: "/About",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Om oss")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Kontakt"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "contactWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "mailIcon",
      src: _images_white_mail_icon_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "Mailicon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "IceBreaker@gmail.com")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "contactWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "phoneIcon",
      src: _images_white_phone_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "Phoneicon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "99999 9999")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "contactWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "footerAdress",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Chr. Kroghs gate 16"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "footerAdress",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "0186 Oslo"))), " "), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bottomSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperIcons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "phoneIcon",
      src: _images_insta_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "Instagram icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "phoneIcon",
      src: _images_fb_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      alt: "Facebook icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "minP",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "Smidig gruppe 12")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/formError/FormError.css":
/*!************************************************!*\
  !*** ./src/components/formError/FormError.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./FormError.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/formError/FormError.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./FormError.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/formError/FormError.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./FormError.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/formError/FormError.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/formError/FormError.jsx":
/*!************************************************!*\
  !*** ./src/components/formError/FormError.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/formError/FormError.jsx";


class FormError extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const theMessage = this.props.theMessage;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "alertDanger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, theMessage);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FormError);

/***/ }),

/***/ "./src/components/header/Header.css":
/*!******************************************!*\
  !*** ./src/components/header/Header.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/header/Header.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/header/Header.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/header/Header.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/header/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/header/Header.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DrawerToggleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DrawerToggleButton */ "./src/components/DrawerToggleButton.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.css */ "./src/components/header/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase_Firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase/Firebase */ "./src/components/firebase/Firebase.js");
/* harmony import */ var _welcome_Welcome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../welcome/Welcome */ "./src/components/welcome/Welcome.jsx");
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/header/Header.jsx";








class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const _this$props = this.props,
          user = _this$props.user,
          userName = _this$props.userName;
    console.log(this.props);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: "main_toolbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: "toolbar_navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "toolbar_logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "logo",
      src: _images_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "Logo icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "spacer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "username-tag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "username-txt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Hei ", userName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DrawerToggleButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      click: this.props.drawerClickHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/home/Home.css":
/*!**************************************!*\
  !*** ./src/components/home/Home.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/home/Home.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/home/Home.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/home/Home.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/home/home.jsx":
/*!**************************************!*\
  !*** ./src/components/home/home.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.css */ "./src/components/home/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/Footer */ "./src/components/footer/Footer.jsx");
/* harmony import */ var _images_penguin_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/penguin.png */ "./src/images/penguin.png");
/* harmony import */ var _images_penguin_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_penguin_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/home/home.jsx";






class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperPenguin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "frontPenguin",
      src: _images_penguin_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: " penguin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "frontPenguin",
      src: _images_penguin_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: " penguin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "greetContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "greeting",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Break some Ice"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Lorem ipsum lorem lorem lorem lorem ipsum lorem lorem lorem lorem")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "btnWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/Events",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Finn arrangementer")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/MyEvents",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Mine arrangementer")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/RegisterEventPage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Opprett arrangement"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/login/LoginPage.jsx":
/*!********************************************!*\
  !*** ./src/components/login/LoginPage.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_Firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase/Firebase */ "./src/components/firebase/Firebase.js");
/* harmony import */ var _formError_FormError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formError/FormError */ "./src/components/formError/FormError.jsx");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _loginPage_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loginPage.css */ "./src/components/login/loginPage.css");
/* harmony import */ var _loginPage_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_loginPage_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_logo_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/login/LoginPage.jsx";








class LoginPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;
    this.setState({
      [itemName]: itemValue
    });
  }

  handleSubmit(e) {
    let signupInfo = {
      email: this.state.email,
      password: this.state.password
    };
    e.preventDefault();
    _firebase_Firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithEmailAndPassword(signupInfo.email, signupInfo.password).then(() => {
      console.log('you are logged in');
      window.location = '/';
    }).catch(error => {
      if (error.message !== null) {
        this.setState({
          errorMessage: error.message
        });
      } else {
        this.setState({
          errorMessage: null
        });
      }
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainContainerLogIn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainLogIn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "inputFormLogIn",
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "logo",
      src: _images_logo_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      alt: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "username",
      placeholder: "Brukernavn",
      type: "text",
      id: "email",
      name: "email",
      required: true,
      value: this.state.email,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "password",
      placeholder: "Passord",
      type: "text",
      id: "password",
      name: "password",
      required: true,
      value: this.state.password,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn-login",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "Logg inn")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, this.state.errorMessage !== null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_formError_FormError__WEBPACK_IMPORTED_MODULE_2__["default"], {
      theMessage: this.state.errorMessage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "h4-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "Ikke registrert?", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, " Lag en bruker")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LoginPage);

/***/ }),

/***/ "./src/components/login/loginPage.css":
/*!********************************************!*\
  !*** ./src/components/login/loginPage.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./loginPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/login/loginPage.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./loginPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/login/loginPage.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./loginPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/login/loginPage.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/myEvents/MyEvents.css":
/*!**********************************************!*\
  !*** ./src/components/myEvents/MyEvents.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./MyEvents.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/myEvents/MyEvents.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./MyEvents.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/myEvents/MyEvents.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./MyEvents.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/myEvents/MyEvents.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/myEvents/MyEvents.jsx":
/*!**********************************************!*\
  !*** ./src/components/myEvents/MyEvents.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyEvents_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyEvents.css */ "./src/components/myEvents/MyEvents.css");
/* harmony import */ var _MyEvents_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MyEvents_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/Footer */ "./src/components/footer/Footer.jsx");
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/myEvents/MyEvents.jsx";




class MyEvents extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "subHeader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Mine arrangementer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "adminEventsContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "subHeaderMin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Ansvarlig for"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "myEventsList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "eventBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "testEvent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "eventBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "testEvent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "eventBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "testEvent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "btnWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/RegisterEventPage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btnRounded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Opprett ny")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "joinedEventsContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "subHeaderMin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Oppmeldt til"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "myEventsList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "eventBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "testEvent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "eventBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "testEvent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "eventBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "testEvent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "eventBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "testEvent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "eventBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "testEvent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "btnWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/Events",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btnRounded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Finn ny"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyEvents);

/***/ }),

/***/ "./src/components/notFound/NotFound.jsx":
/*!**********************************************!*\
  !*** ./src/components/notFound/NotFound.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _notFound_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notFound.css */ "./src/components/notFound/notFound.css");
/* harmony import */ var _notFound_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_notFound_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_pengError_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/pengError.png */ "./src/images/pengError.png");
/* harmony import */ var _images_pengError_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_pengError_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/notFound/NotFound.jsx";




function notFound() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mainContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapperContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "pengNotFound",
    src: _images_pengError_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "penguin not knowing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "NOT FOUND: 404"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "boldP",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "  Feilmelding:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Siden du leter etter blir desverre ikke funnet.")));
}

/* harmony default export */ __webpack_exports__["default"] = (notFound);

/***/ }),

/***/ "./src/components/notFound/notFound.css":
/*!**********************************************!*\
  !*** ./src/components/notFound/notFound.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./notFound.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/notFound/notFound.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./notFound.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/notFound/notFound.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./notFound.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/notFound/notFound.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/privacy/Privacy.css":
/*!********************************************!*\
  !*** ./src/components/privacy/Privacy.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Privacy.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/privacy/Privacy.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Privacy.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/privacy/Privacy.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Privacy.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/privacy/Privacy.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/privacy/Privacy.jsx":
/*!********************************************!*\
  !*** ./src/components/privacy/Privacy.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Privacy_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Privacy.css */ "./src/components/privacy/Privacy.css");
/* harmony import */ var _Privacy_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Privacy_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/Footer */ "./src/components/footer/Footer.jsx");
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/privacy/Privacy.jsx";




class Privacy extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "pageHeadline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Personvernerkl\xE6ring"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "textWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "preamble",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Personvernerkl\xE6ringen handler om hvordan Icebreaker samler inn og bruker informasjon om bes\xF8kende p\xE5 v\xE5rt nettsted. Erkl\xE6ringen inneholder informasjon du har krav p\xE5 n\xE5r det samles inn opplysninger fra nettstedet v\xE5rt, og generell informasjon om hvordan vi behandler personopplysninger."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mainArticle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Icebreaker er behandlingsansvarlig for nettstedets behandling av personopplysninger. Behandlingsgrunnlaget er samtykke fra den enkelte."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "miniHeadline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Informasjonskapsler i nettleser"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mainArticle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Vi har laget en fullstendig ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/Cookies",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "liste over alle informasjonskapsler som finnes p\xE5 icebreaker.no"), " P\xE5 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "nettvett.no",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "nettvett.no"), " kan du lese om hvordan du ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://nettvett.no/slik-administrer-du-informasjonskapsler/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "stiller inn nettleseren for \xE5 godta/avvise informasjonskapsler"), ", og f\xE5 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://nettvett.no/veiledninger/sikrere-bruk/internett/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "tips til sikrere bruk av internett")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "miniHeadline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "IP-adresse"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mainArticle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Din IP-adresse logges av v\xE5r webserver. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://no.wikipedia.org/wiki/IP-adresse",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Brukerens IP-adresse"), ", tidspunkt, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://no.wikipedia.org/wiki/Uniform_Resource_Locator",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "nettadresse"), ", ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://no.wikipedia.org/wiki/Liste_over_HTTP-statuskoder",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "HTTP-status"), ", antall bytes sendt, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://en.wikipedia.org/wiki/HTTP_referer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "HTTP referer"), " og ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://en.wikipedia.org/wiki/User_agent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "HTTP user agent"), " blir logget i 15 dager. Deretter blir loggen slettet automatisk."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "miniHeadline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Kommentarer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mainArticle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Der det er mulig for brukere \xE5 legge igjen kommentarer p\xE5 arrangementer, blir det publisert navn p\xE5 kommentatoren."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "miniHeadline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Rettigheter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mainArticle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Alle som sp\xF8r, har rett p\xE5 grunnleggende informasjon om hvordan en virksomhet behandler personopplysninger. I denne erkl\xE6ringen omtaler vi hvilke opplysninger vi samler inn, og hvordan de brukes. Dersom du er registrert hos Icebreaker, har du rett p\xE5 innsyn i dine egne personopplysninger. Du kan ogs\xE5 be om retting eller sletting av mangelfulle eller uriktige opplysninger. Kravet ditt vil bli behandlet kostnadsfritt og innen 30 dager. Alle henvendelser om innsynn i personopplysninger kan sendes til oss p\xE5 hjelp@icebreaker.no"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Privacy);

/***/ }),

/***/ "./src/components/profile/ProfilePage.css":
/*!************************************************!*\
  !*** ./src/components/profile/ProfilePage.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./ProfilePage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/profile/ProfilePage.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./ProfilePage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/profile/ProfilePage.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./ProfilePage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/profile/ProfilePage.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/profile/ProfilePage.jsx":
/*!************************************************!*\
  !*** ./src/components/profile/ProfilePage.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProfilePage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfilePage.css */ "./src/components/profile/ProfilePage.css");
/* harmony import */ var _ProfilePage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ProfilePage_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/profile/ProfilePage.jsx";



class ProfilePage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "subheader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "MIN PROFIL")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProfilePage);

/***/ }),

/***/ "./src/components/signup/SignupPage.css":
/*!**********************************************!*\
  !*** ./src/components/signup/SignupPage.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./SignupPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/signup/SignupPage.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./SignupPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/signup/SignupPage.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./SignupPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/signup/SignupPage.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/signup/SignupPage.jsx":
/*!**********************************************!*\
  !*** ./src/components/signup/SignupPage.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_Firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase/Firebase */ "./src/components/firebase/Firebase.js");
/* harmony import */ var _formError_FormError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formError/FormError */ "./src/components/formError/FormError.jsx");
/* harmony import */ var _SignupPage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignupPage.css */ "./src/components/signup/SignupPage.css");
/* harmony import */ var _SignupPage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SignupPage_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _formError_FormError_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../formError/FormError.css */ "./src/components/formError/FormError.css");
/* harmony import */ var _formError_FormError_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_formError_FormError_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/signup/SignupPage.jsx";






class SignupPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      lastName: '',
      email: '',
      passOne: '',
      passTwo: '',
      errorMessage: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;
    this.setState({
      [itemName]: itemValue
    }, () => {
      if (this.state.passOne !== this.state.passTwo) {
        this.setState({
          errorMessage: 'Passord er ikke like'
        });
      } else {
        this.setState({
          errorMessage: null
        });
      }
    });
  }

  handleSubmit(e) {
    let signupInfo = {
      displayName: this.state.displayName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.passOne
    };
    e.preventDefault();
    _firebase_Firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().createUserWithEmailAndPassword(signupInfo.email, signupInfo.password).then(() => {
      this.props.registerUser(signupInfo.displayName);
    }).catch(error => {
      if (error.message !== null) {
        this.setState({
          errorMessage: error.message
        });
      } else {
        this.setState({
          errorMessage: null
        });
      }
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "formContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "subHeader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, " Opprett bruker "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "inputForm",
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inputSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, this.state.errorMessage !== null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_formError_FormError__WEBPACK_IMPORTED_MODULE_2__["default"], {
      theMessage: this.state.errorMessage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "boldP",
      htmlFor: "displayName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Fornavn *"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "input-box",
      type: "text",
      id: "displayName",
      placeholder: "Fornavn",
      name: "displayName",
      required: true,
      value: this.state.displayName,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inputSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "boldP",
      htmlFor: "lastName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, " Etternavn *"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "input-box",
      type: "text",
      id: "lastName",
      placeholder: "Etternavn",
      name: "lastName",
      required: true,
      value: this.state.lastName,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inputSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "boldP",
      htmlFor: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, " E-mail *"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "input-box",
      type: "text",
      id: "email",
      placeholder: "E-mail",
      name: "email",
      required: true,
      value: this.state.email,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inputSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "boldP",
      htmlFor: "passOne",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, " Passord *"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "input-box",
      type: "passOne",
      id: "passOne",
      placeholder: "Passord ...",
      name: "passOne",
      required: true,
      value: this.state.passOne,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inputSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "boldP",
      htmlFor: "passTwo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, "Gjenta passord *"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "input-box",
      type: "passTwo",
      id: "passTwo",
      placeholder: "Passord...",
      name: "passTwo",
      required: true,
      value: this.state.passTwo,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inputSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "boldP",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, " Skole"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "input-box",
      type: "school",
      placeholder: "Skole ...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inputSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "boldP",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, " Interesser"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "input-box",
      type: "school",
      placeholder: "Interesser ... ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperButtons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "signBtn",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, "Opprett")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SignupPage);

/***/ }),

/***/ "./src/components/startpage/StartPage.css":
/*!************************************************!*\
  !*** ./src/components/startpage/StartPage.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./StartPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/startpage/StartPage.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./StartPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/startpage/StartPage.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./StartPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/startpage/StartPage.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/startpage/StartPage.jsx":
/*!************************************************!*\
  !*** ./src/components/startpage/StartPage.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _StartPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StartPage.css */ "./src/components/startpage/StartPage.css");
/* harmony import */ var _StartPage_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_StartPage_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_logo_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/logo-1.png */ "./src/images/logo-1.png");
/* harmony import */ var _images_logo_1_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_logo_1_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/startpage/StartPage.jsx";





class StartPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainContainerStartPage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "formContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "logo",
      src: _images_logo_1_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "IceBreaker",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "IceBreaker")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "quote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "\xABA place to connect with other students\xBB"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/LoginPage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn-logIn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Logg inn")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/SignupPage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn-joinIceBreaker",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Opprett bruker"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (StartPage);

/***/ }),

/***/ "./src/components/welcome/Welcome.jsx":
/*!********************************************!*\
  !*** ./src/components/welcome/Welcome.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/components/welcome/Welcome.jsx";



class Welcome extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const userName = this.props.userName;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center mt-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-secondary font-weight-bold pl-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "hei,", userName));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/background.fa83c6c5.jpg";

/***/ }),

/***/ "./src/images/black-mail-icon.png":
/*!****************************************!*\
  !*** ./src/images/black-mail-icon.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/black-phone-icon.png":
/*!*****************************************!*\
  !*** ./src/images/black-phone-icon.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/boot.png":
/*!*****************************!*\
  !*** ./src/images/boot.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/boot.9524bdc8.png";

/***/ }),

/***/ "./src/images/cutlery.png":
/*!********************************!*\
  !*** ./src/images/cutlery.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/cutlery.8ff5ec3a.png";

/***/ }),

/***/ "./src/images/fb.png":
/*!***************************!*\
  !*** ./src/images/fb.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/floePeng.png":
/*!*********************************!*\
  !*** ./src/images/floePeng.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/floePeng.dcac01b8.png";

/***/ }),

/***/ "./src/images/gym.png":
/*!****************************!*\
  !*** ./src/images/gym.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/gym.ed84d7f8.png";

/***/ }),

/***/ "./src/images/insta.png":
/*!******************************!*\
  !*** ./src/images/insta.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/insta.db139ff8.png";

/***/ }),

/***/ "./src/images/kalender-white.png":
/*!***************************************!*\
  !*** ./src/images/kalender-white.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/kalender-white.34b0e417.png";

/***/ }),

/***/ "./src/images/logo-1.png":
/*!*******************************!*\
  !*** ./src/images/logo-1.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo-1.ca98d106.png";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.bb3da526.png";

/***/ }),

/***/ "./src/images/pengError.png":
/*!**********************************!*\
  !*** ./src/images/pengError.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pengError.2e81f327.png";

/***/ }),

/***/ "./src/images/penguin.png":
/*!********************************!*\
  !*** ./src/images/penguin.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/penguin.d8ad1dc6.png";

/***/ }),

/***/ "./src/images/studying.png":
/*!*********************************!*\
  !*** ./src/images/studying.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/studying.c662217f.png";

/***/ }),

/***/ "./src/images/tea.png":
/*!****************************!*\
  !*** ./src/images/tea.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/tea.cc999fcf.png";

/***/ }),

/***/ "./src/images/white-mail-icon.jpg":
/*!****************************************!*\
  !*** ./src/images/white-mail-icon.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/white-mail-icon.155c4877.jpg";

/***/ }),

/***/ "./src/images/white-phone.png":
/*!************************************!*\
  !*** ./src/images/white-phone.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/white-phone.8e2e8495.png";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/elsakristensen/Documents/GitHub/IceBreaker/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/elsakristensen/Documents/GitHub/IceBreaker/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/elsakristensen/Documents/GitHub/IceBreaker/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map
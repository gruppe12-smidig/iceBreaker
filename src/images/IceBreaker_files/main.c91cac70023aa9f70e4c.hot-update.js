webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.c91cac70023aa9f70e4c.hot-update.js.map
(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunk_24HrsUserApp"] = self["webpackChunk_24HrsUserApp"] || []).push([["src_app_signup_signup_module_ts"], {
    /***/
    28191:
    /*!****************************************!*\
      !*** ./src/app/shared/http.service.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpService": function HttpService() {
          return (
            /* binding */
            _HttpService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);

      var _HttpService = /*#__PURE__*/function () {
        function HttpService(http) {
          _classCallCheck(this, HttpService);

          this.http = http;
        }

        _createClass(HttpService, [{
          key: "get",
          value: function get(serviceName) {
            var userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders() // .set("Access-Control-Allow-Origin", "*")
            // .set("Access-Control-Allow-Methods", "GET,POST")
            // .set('Accept','application/json')
            // .set('Content-Type','application/json')
            // .set("Access-Control-Allow-Headers", "Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
            .set("Token", userdetails.token); //   let httpOptions = {
            //     headers: new HttpHeaders({
            //       "Access-Control-Allow-Origin": "*",
            //       "Access-Control-Allow-Methods": "*",
            //       "Access-Control-Allow-Headers":"Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
            //       'Authorization':userdetails.token,
            //       "Content-Type": "application/json"
            //     })
            // };

            var options = {
              headers: header,
              withCredentials: true
            };
            return this.http.get(url, {
              headers: header
            });
          }
        }, {
          key: "post",
          value: function post(serviceName, data) {
            var token = localStorage.getItem("token");
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;

            if (serviceName == '/user_get_otp' || serviceName == '/user_verify_otp' || serviceName == '/user_register' || serviceName == '/user_login') {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
              var options = {
                headers: headers,
                withCredentials: false
              };
              return this.http.post(url, JSON.stringify(data), {
                headers: headers
              });
            } else {
              var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Token", token);

              var _options = {
                headers: _headers,
                withCredentials: true
              };
              return this.http.post(url, JSON.stringify(data), {
                headers: _headers
              });
            }
          }
        }, {
          key: "postFormData",
          value: function postFormData(serviceName, data) {
            var token = localStorage.getItem("token");
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
            var headers = {
              'enctype': 'multipart/form-data;',
              'Content-Type': 'multipart/form-data;',
              'Accept': 'plain/text',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
              'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
              'Token': token
            }; // const headers = new HttpHeaders().set("Token", token );
            //  headers.set('Content-Type', 'multipart/form-data'); 

            var options = {
              headers: headers,
              withCredentials: true
            };
            return this.http.post(url, data, {
              headers: headers
            });
          }
        }]);

        return HttpService;
      }();

      _HttpService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _HttpService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _HttpService);
      /***/
    },

    /***/
    50159:
    /*!*************************************************!*\
      !*** ./src/app/signup/signup-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupPageRoutingModule": function SignupPageRoutingModule() {
          return (
            /* binding */
            _SignupPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./signup.page */
      80771);

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
      }];

      var _SignupPageRoutingModule = function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      };

      _SignupPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SignupPageRoutingModule);
      /***/
    },

    /***/
    77648:
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupPageModule": function SignupPageModule() {
          return (
            /* binding */
            _SignupPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./signup-routing.module */
      50159);
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signup.page */
      80771);

      var _SignupPageModule = function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      };

      _SignupPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
      })], _SignupPageModule);
      /***/
    },

    /***/
    80771:
    /*!***************************************!*\
      !*** ./src/app/signup/signup.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupPage": function SignupPage() {
          return (
            /* binding */
            _SignupPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./signup.page.html */
      21355);
      /* harmony import */


      var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signup.page.scss */
      74194);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/animations */
      55160);

      var _SignupPage = /*#__PURE__*/function () {
        function SignupPage(router, http, toastCtrl, popoverController, route) {
          var _this = this;

          _classCallCheck(this, SignupPage);

          this.router = router;
          this.http = http;
          this.toastCtrl = toastCtrl;
          this.popoverController = popoverController;
          this.route = route;
          this.userTbid = localStorage.getItem("loginstatus");
          this.mobilenumber = localStorage.getItem("mobilenumber");
          this.userName = "";
          this.mobileNumber = 8838373520;
          this.locationsList = [];
          this.route.queryParams.subscribe(function (queryParams) {
            _this.locationList();
          });
        }

        _createClass(SignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.locationList();
          }
        }, {
          key: "locationList",
          value: function locationList() {
            var _this2 = this;

            this.http.get('/list_location').subscribe(function (response) {
              console.log(response);
              _this2.locationsList = response.records;
              console.log(response.records.city);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "userDetailsUpload",
          value: function userDetailsUpload() {
            var _this3 = this;

            var data = {
              "tbid": this.userTbid,
              "user_name": this.userName,
              "mobile_number": this.mobilenumber,
              "location": this.location
            };
            console.log(data);
            this.http.post('/user_update_profile', data).subscribe(function (response) {
              console.log(response);

              if (response.success == "true") {
                localStorage.setItem("userName", _this3.userName);
                localStorage.setItem("location", _this3.location);

                _this3.router.navigate(['/selectcategories']);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "navigateHome",
          value: function navigateHome() {
            this.router.navigate(['/selectcategories']);
          }
        }]);

        return SignupPage;
      }();

      _SignupPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }];
      };

      _SignupPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('fadein', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 0
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 0
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('900ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 1
        }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slidelefttitle', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 0,
          transform: 'translateX(150%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('600ms 300ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          transform: 'translateX(0%)',
          opacity: 1
        }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slideup', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 0,
          transform: 'translateY(150%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('900ms 300ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          transform: 'translateY(0%)',
          opacity: 1
        }))])])],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SignupPage);
      /***/
    },

    /***/
    74194:
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.page.scss ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".get-started {\n  font-size: 20px;\n  color: #4d4848;\n  margin: 8px;\n}\n\n.myproduct-div {\n  position: absolute;\n  top: 18%;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 96% !important;\n  margin: 5px;\n}\n\ninput[type=text] {\n  font-size: 15px;\n  margin: 0 5px;\n  margin-top: 18px !important;\n  width: 90%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid #23d5ab;\n}\n\ninput:focus {\n  outline: none !important;\n  border-bottom: 2px solid blue;\n}\n\n.update-btn {\n  border-radius: 5px !important;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%) !important;\n  color: #fff;\n  height: 25px;\n  width: 55%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 5px !important;\n  margin-left: 35px !important;\n}\n\n.skip-btn {\n  border-radius: 5px !important;\n  background-color: #fff;\n  color: #23d5ab;\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 13px !important;\n  padding: 3px;\n  margin: 5px !important;\n}\n\nlottie-player {\n  cursor: pointer;\n}\n\nselect {\n  border: 1px solid #fff;\n}\n\n.row {\n  margin-bottom: 10px !important;\n}\n\nion-content {\n  --background:#F4F7FA !important;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\nmodal-wrapper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n@media not all and (min-height: 600px) and (min-width: 768px) {\n  ion-modal ion-backdrop {\n    visibility: hidden;\n  }\n}\n\n@media only screen and (min-height: 0px) and (min-width: 0px) {\n  .modal-wrapper {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFDRTtFQUNFLHdCQUFBO0VBR0EsNkJBQUE7QUFBSjs7QUFFRTtFQUNFLDZCQUFBO0VBQ0EseUVBQUE7RUFHQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQURKOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNJLDhCQUFBO0FBQ0o7O0FBR0E7RUFDRSwrQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFDRTtFQUNJLGFBQUE7QUFDTjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFGSjs7QUFLRTtFQUNFO0lBQ0Usa0JBQUE7RUFGSjtBQUNGOztBQUtFO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFISjtBQUNGIiwiZmlsZSI6InNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2V0LXN0YXJ0ZWQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvciAgICA6ICM0ZDQ4NDg7XG4gICAgbWFyZ2luICAgOiA4cHg7XG59XG5cbi5teXByb2R1Y3QtZGl2e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MTglO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2ViZTZlNjtcbiAgICB3aWR0aDo5NiUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46NXB4O1xuICAgIFxuICB9XG4gIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDAgNXB4O1xuICAgIG1hcmdpbi10b3A6IDE4cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyM2Q1YWI7O1xuICB9XG4gIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgLy8gYm9yZGVyOjFweCBzb2xpZCAjMjNkNWFiICFpbXBvcnRhbnQ7XG4gICAgLy8gYm94LXNoYWRvdzogMCAwIDJweCAjMjNkNWFiO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibHVlOztcbiAgfVxuICAudXBkYXRlLWJ0bntcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIzYTZkNVxuICAgIDAlLCAjMjNkNWFiXG4gICAgMTAwJSkgIWltcG9ydGFudDtcbiAgICBjb2xvcjojZmZmO1xuICAgIGhlaWdodDoyNXB4O1xuICAgIHdpZHRoOjU1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBtYXJnaW46NXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDM1cHggIWltcG9ydGFudCA7XG59XG4uc2tpcC1idG57XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjojMjNkNWFiO1xuICBoZWlnaHQ6MjVweDtcbiAgd2lkdGg6MjUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDNweDtcbiAgbWFyZ2luOjVweCAhaW1wb3J0YW50O1xufVxubG90dGllLXBsYXllcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnNlbGVjdHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiBcbn1cbi5yb3d7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiNGNEY3RkEgICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuXG5tb2RhbC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICBAbWVkaWEgbm90IGFsbCBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBpb24tbW9kYWwgaW9uLWJhY2tkcm9wIHtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDBweCkgYW5kIChtaW4td2lkdGg6IDBweCkge1xuICAgIC5tb2RhbC13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cblxuXG5cbiAgIl19 */";
      /***/
    },

    /***/
    21355:
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"mt-2\">\n  <div class=\"myproduct-div mt-5 \">\n    <div class=\"row\">\n      <div class=\"col-7\">\n        <ion-icon (click)=\"navigateHome()\" style=\"margin:20px;cursor:pointer;color:#23d5ab\" name=\"close\"></ion-icon>\n\n      </div>\n\n      <div class=\"col-5 ion-text-center\">\n        <span class=\"seller\"><b>24hrs</b></span>\n        <!-- <img id=\"logo\" height=\"100px\" width=\"120px\" src=\"assets/logo.jpeg\" alt=\"\"> -->\n      </div>\n\n    </div>\n    <p class=\"get-started mt-2 mx-3\"><b>Getting Started</b></p>\n\n\n\n\n\n    <div class=\"row ion-text-center\">\n      <div class=\"col-4\">\n        <lottie-player src=\"https://assets6.lottiefiles.com/packages/lf20_ultyaniw.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:60%;margin-left: 15px;\" autoplay></lottie-player>\n      </div>\n      <div class=\"col-8\">\n        <input type=\"text\" id=\"edit-field\" placeholder=\"Username\" [(ngModel)]=\"userName\" maxlength=\"10\">\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <lottie-player src=\"https://assets6.lottiefiles.com/packages/lf20_uz8b4wzt.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:65%;margin-left: 15px;\" autoplay></lottie-player>\n      </div>\n      <div class=\"col-8\">\n        <input disabled type=\"text\" id=\"edit-field\" placeholder=\"Mobile number\" [(ngModel)]=\"mobileNumber\">\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <lottie-player src=\"https://assets6.lottiefiles.com/datafiles/uihIaQIvWBfYL9a/data.json\"\n          background=\"transparent\" speed=\"1.5\" style=\"width:100%;\" autoplay></lottie-player>\n      </div>\n      <div class=\"col-8\">\n        <ion-item>\n          <svg style=\"margin: 5px;\" (click)=\"locationChange()\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"\n            fill=\"#23d5ab\" class=\"bi bi-geo-alt-fill\" viewBox=\"0 0 16 16\">\n            <path d=\"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z\" />\n          </svg>\n          <ion-label style=\"font-size:13px !important;color: #121212;\">{{city}}</ion-label>\n          <ion-select (ionChange)=\"changeLocation()\" style=\"font-size: 10px;\" [(ngModel)]=\"city\" interface=\"popover\">\n            <ion-select-option *ngFor=\"let location of locationsList\" [value]=\"location.city\">{{location.city}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </div>\n    </div>\n\n\n    <div class=\"row \">\n      <div class=\"col-7\">\n        <button (click)=\"navigateHome()\" type=\"button\" class=\"btn btn-success btn-sm skip-btn\">Skip</button>\n      </div>\n      <div class=\"col-5\">\n        <button (click)=\"userDetailsUpload()\" type=\"button\" class=\"btn btn-success btn-sm update-btn\">Next</button>\n      </div>\n    </div>\n  </div>\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_signup_signup_module_ts-es5.js.map
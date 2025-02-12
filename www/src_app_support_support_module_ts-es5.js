(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunk_24HrsUserApp"] = self["webpackChunk_24HrsUserApp"] || []).push([["src_app_support_support_module_ts"], {
    /***/
    10185:
    /*!***************************************************!*\
      !*** ./src/app/support/support-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SupportPageRoutingModule": function SupportPageRoutingModule() {
          return (
            /* binding */
            _SupportPageRoutingModule
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


      var _support_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./support.page */
      35028);

      var routes = [{
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_0__.SupportPage
      }];

      var _SupportPageRoutingModule = function SupportPageRoutingModule() {
        _classCallCheck(this, SupportPageRoutingModule);
      };

      _SupportPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SupportPageRoutingModule);
      /***/
    },

    /***/
    96758:
    /*!*******************************************!*\
      !*** ./src/app/support/support.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SupportPageModule": function SupportPageModule() {
          return (
            /* binding */
            _SupportPageModule
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


      var _support_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./support-routing.module */
      10185);
      /* harmony import */


      var _support_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./support.page */
      35028);

      var _SupportPageModule = function SupportPageModule() {
        _classCallCheck(this, SupportPageModule);
      };

      _SupportPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _support_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupportPageRoutingModule],
        declarations: [_support_page__WEBPACK_IMPORTED_MODULE_1__.SupportPage]
      })], _SupportPageModule);
      /***/
    },

    /***/
    35028:
    /*!*****************************************!*\
      !*** ./src/app/support/support.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SupportPage": function SupportPage() {
          return (
            /* binding */
            _SupportPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_support_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./support.page.html */
      65455);
      /* harmony import */


      var _support_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./support.page.scss */
      95524);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/animations */
      55160);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);

      var _SupportPage = /*#__PURE__*/function () {
        function SupportPage(http, router, route) {
          _classCallCheck(this, SupportPage);

          this.http = http;
          this.router = router;
          this.route = route;
          this.userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
          this.problemDescription = '';
        }

        _createClass(SupportPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "backToPrivious",
          value: function backToPrivious() {
            this.router.navigate(['/homepage']);
          }
        }, {
          key: "searchPage",
          value: function searchPage() {
            this.router.navigate(['/searchpage']);
          }
        }, {
          key: "setalarm",
          value: function setalarm() {
            this.router.navigate(['/setalarm']);
          }
        }, {
          key: "notification",
          value: function notification() {
            this.router.navigate(['/notification']);
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            var Data = {
              tbid: this.userdetails.id,
              description: this.problemDescription
            };
            this.http.post('/user_description', Data).subscribe(function (response) {
              if (response.success == "true") {
                _this.problemDescription = '';
                var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1000,
                  timerProgressBar: true,
                  didOpen: function didOpen(toast) {
                    toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer);
                    toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer);
                  }
                });
                Toast.fire({
                  icon: 'success',
                  title: 'Message Send Successfully'
                });
              } else {}
            }, function (error) {
              console.log(error);
              var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: function didOpen(toast) {
                  toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer);
                  toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer);
                }
              });
              Toast.fire({
                icon: 'error',
                title: 'Something Went Wrong'
              });
            });
          }
        }, {
          key: "navigateToFaq",
          value: function navigateToFaq() {
            this.router.navigate(['/faq']);
          }
        }]);

        return SupportPage;
      }();

      _SupportPage.ctorParameters = function () {
        return [{
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }];
      };

      _SupportPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-support',
        template: _raw_loader_support_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('fadein', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 0
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 0
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('900ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 1
        }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slidelefttitle', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 0,
          transform: 'translateX(150%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('500ms 200ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          transform: 'translateX(0%)',
          opacity: 1
        }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slideup', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 0,
          transform: 'translateY(150%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('500ms 200ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          transform: 'translateY(0%)',
          opacity: 1
        }))])])],
        styles: [_support_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SupportPage);
      /***/
    },

    /***/
    95524:
    /*!*******************************************!*\
      !*** ./src/app/support/support.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".submit-btn {\n  border-radius: 5px !important;\n  width: 50%;\n  height: 35px;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  border: 1px solid #fff;\n  margin: 5px;\n}\n\nimg {\n  border-radius: 20px;\n  height: 100px;\n  width: 125px;\n}\n\ntextarea:focus {\n  border-color: #23d5ab !important;\n}\n\nion-content {\n  background-color: #F4F7FA !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksNkJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDhEQUFBO0VBR0Esc0JBQUE7RUFDQSxXQUFBO0FBRko7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBREo7O0FBR0E7RUFDSSxnQ0FBQTtBQUFKOztBQUVBO0VBQ0ksb0NBQUE7RUFLQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUhKOztBQUlJO0VBQ0ksYUFBQTtBQUZSIiwiZmlsZSI6InN1cHBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc3VibWl0LWJ0bntcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDozNXB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1XG4gIDAlLCAjMjNkNWFiXG4gIDEwMCUpO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgICBtYXJnaW46NXB4O1xufVxuaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgaGVpZ2h0OjEwMHB4O1xuICAgIHdpZHRoOiAxMjVweDtcbn1cbnRleHRhcmVhOmZvY3Vze1xuICAgIGJvcmRlci1jb2xvcjogIzIzZDVhYiAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6I0Y0RjdGQSAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM4Y2RiZTJcbiAgICAvLyAwJSwgI2QxZjJlN1xuICAgIC8vIDEwMCUpICFpbXBvcnRhbnQ7XG5cbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9Il19 */";
      /***/
    },

    /***/
    65455:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  style=\"margin-top: -7px;\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"margin-top:15px;color:#fff\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    \n    <div class=\"row\">\n      <div class=\"col-5\">\n        <h5 style=\"color:#fff;margin-top:30px\"><b>24HRS</b></h5>\n      </div>\n      <div class=\"col-7\" style=\"text-align: right;width: 90%;margin-top: -40px;\" >\n        <svg  (click)=\"searchPage()\" style=\"margin:5px;\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M14.2998 12.5863H13.3974L13.0775 12.2779C14.3299 10.8187 14.9685 8.93097 14.8587 7.01111C14.749 5.09124 13.8996 3.28856 12.489 1.98152C11.0785 0.674474 9.21659 -0.0352438 7.29394 0.00134777C5.3713 0.0379394 3.53754 0.817948 2.17778 2.17771C0.818015 3.53748 0.0379393 5.37125 0.00134789 7.2939C-0.0352436 9.21655 0.674402 11.0786 1.98144 12.4891C3.28848 13.8996 5.09129 14.7489 7.01115 14.8586C8.93101 14.9683 10.8187 14.33 12.2779 13.0775L12.5864 13.3974V14.2998L18.298 20L20 18.298L14.2998 12.5863ZM7.44594 12.5863C6.42926 12.5863 5.43548 12.2849 4.59014 11.72C3.7448 11.1552 3.08585 10.3523 2.69678 9.41302C2.30772 8.47373 2.20589 7.44016 2.40423 6.44301C2.60258 5.44586 3.09231 4.52992 3.81121 3.81102C4.53011 3.09211 5.44592 2.60259 6.44306 2.40424C7.44021 2.20589 8.47391 2.30765 9.4132 2.69672C10.3525 3.08579 11.1553 3.74468 11.7201 4.59002C12.285 5.43536 12.5864 6.42921 12.5864 7.44589C12.5873 8.1212 12.4551 8.79006 12.197 9.41414C11.939 10.0382 11.5604 10.6052 11.0829 11.0827C10.6054 11.5602 10.0381 11.9389 9.41404 12.1969C8.78996 12.4549 8.12124 12.5872 7.44594 12.5863Z\" fill=\"white\"/>\n          </svg>\n          <svg (click)=\"notification()\" style=\"margin:5px;text-align:right\" width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.0002 0C7.11654 0 6.4002 0.716344 6.4002 1.6V1.80156C3.63963 2.51189 1.5998 5.01775 1.5998 8.00003V13.6H2C0.895431 13.6 0 14.4955 0 15.6V15.8C0 16.3523 0.447715 16.8 1 16.8H15C15.5523 16.8 16 16.3523 16 15.8V15.6C16 14.4955 15.1046 13.6 14 13.6H14.3998V8.00003C14.3998 5.01803 12.3604 2.51237 9.60019 1.80176V1.6C9.60019 0.716344 8.88385 0 8.0002 0ZM5.5998 17.6C5.5998 18.9255 6.67432 20 7.9998 20C9.32529 20 10.3998 18.9255 10.3998 17.6H5.5998Z\" fill=\"white\"/>\n            </svg>\n            <svg  (click)=\"setalarm()\" style=\"margin-left:15px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"24\" fill=\"#fff\"\n          class=\"bi bi-alarm\" viewBox=\"0 0 16 16\">\n          <path d=\"M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z\" />\n          <path\n            d=\"M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z\" />\n          </svg>\n          </div>     \n    </div>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"bg-class\" [fullscreen]=\"true\">\n  <div class=\"container\">\n    <div class=\"signin-div mt-5 \">\n      <div  class=\"row\">\n        <div class=\"col-6 \">\n          <h4 style=\"margin:10px; color:#5C5C5C\"><b>Support</b></h4>\n        </div>\n        <div (click)=\"navigateToFaq()\" class=\"col-6\">\n          <h5 style=\"margin:10px; color:#23d5ab;text-align: right;\"><b>FAQ</b></h5>\n        </div>\n\n      </div>\n\n      <div class=\"col-12 ion-text-center\">\n        <img @fadein height=\"40%\" width=\"40%\" src=\"assets/customersupport.png\" alt=\"\">\n          \n      </div>\n\n      <div  class=\"row mt-2\">\n        <div class=\"col-6\" >\n          <p class=\"name\" style=\"margin:0 12px;font-size: smaller;\">Email us at           :</p>\n        </div>\n        <div class=\"col-6\">\n          <p style=\"font-size: 12px;color:#5C5C5C;margin-left: -40px;\">support@24hours.com</p></div>\n  \n          <div class=\"col-6\">\n            <p  class=\"name\" style=\"margin:0 12px;font-size: smaller;\">Call us at              :</p>\n          </div>\n          <div class=\"col-6\">\n          <p style=\"font-size: 12px; color:#5C5C5C;margin-left: -40px;\">+91 9876543210</p>\n        </div>\n      </div>\n      <hr style=\"width: 75%;margin-left:10%;color:#5C5C5C\">\n      <p  style=\"color: red; font-size: smaller;padding:0 20px;\"><b>Usually we respond in 60 minutes. </b></p>\n\n        <div class=\"form-group\" >\n          <label  style=\"margin-left: 5px;\" for=\"exampleFormControlTextarea1\">Problem Description  :</label>\n          <textarea [(ngModel)]=\"problemDescription\" style=\"background-color: #fff;\" class=\"form-control\" id=\"exampleFormControlTextarea1\" maxlength=\"100\" rows=\"3\"></textarea>\n        </div>\n\n        <div @slideup style=\"width:100%; text-align: center;\">\n          <button  type=\"button\" [disabled]=\"!problemDescription\"[disabled]=\"!problemDescription\" (click)=\"submit()\" class=\"btn btn-primary  submit-btn mt-2\">Submit</button>\n         </div>\n    </div>\n    </div>\n   \n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_support_support_module_ts-es5.js.map
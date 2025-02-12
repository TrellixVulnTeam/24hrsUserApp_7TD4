(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunk_24HrsUserApp"] = self["webpackChunk_24HrsUserApp"] || []).push([["src_app_notification_notification_module_ts"], {
    /***/
    84264:
    /*!*****************************************************************************!*\
      !*** ./node_modules/@capacitor/local-notifications/dist/esm/definitions.js ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Weekday": function Weekday() {
          return (
            /* binding */
            _Weekday
          );
        }
        /* harmony export */

      }); /// <reference types="@capacitor/cli" />

      /**
       * Day of the week. Used for scheduling notifications on a particular weekday.
       */


      var _Weekday;

      (function (Weekday) {
        Weekday[Weekday["Sunday"] = 1] = "Sunday";
        Weekday[Weekday["Monday"] = 2] = "Monday";
        Weekday[Weekday["Tuesday"] = 3] = "Tuesday";
        Weekday[Weekday["Wednesday"] = 4] = "Wednesday";
        Weekday[Weekday["Thursday"] = 5] = "Thursday";
        Weekday[Weekday["Friday"] = 6] = "Friday";
        Weekday[Weekday["Saturday"] = 7] = "Saturday";
      })(_Weekday || (_Weekday = {})); //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    12273:
    /*!***********************************************************************!*\
      !*** ./node_modules/@capacitor/local-notifications/dist/esm/index.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Weekday": function Weekday() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.Weekday
          );
        },

        /* harmony export */
        "LocalNotifications": function LocalNotifications() {
          return (
            /* binding */
            _LocalNotifications
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      68384);
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      84264);

      var _LocalNotifications = (0, _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('LocalNotifications', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() */
          "node_modules_capacitor_local-notifications_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__,
          /*! ./web */
          81161)).then(function (m) {
            return new m.LocalNotificationsWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    89753:
    /*!*************************************************************!*\
      !*** ./src/app/notification/notification-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationPageRoutingModule": function NotificationPageRoutingModule() {
          return (
            /* binding */
            _NotificationPageRoutingModule
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


      var _notification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./notification.page */
      13320);

      var routes = [{
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_0__.NotificationPage
      }];

      var _NotificationPageRoutingModule = function NotificationPageRoutingModule() {
        _classCallCheck(this, NotificationPageRoutingModule);
      };

      _NotificationPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NotificationPageRoutingModule);
      /***/
    },

    /***/
    22154:
    /*!*****************************************************!*\
      !*** ./src/app/notification/notification.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationPageModule": function NotificationPageModule() {
          return (
            /* binding */
            _NotificationPageModule
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


      var _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./notification-routing.module */
      89753);
      /* harmony import */


      var _notification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notification.page */
      13320);

      var _NotificationPageModule = function NotificationPageModule() {
        _classCallCheck(this, NotificationPageModule);
      };

      _NotificationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationPageRoutingModule],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_1__.NotificationPage]
      })], _NotificationPageModule);
      /***/
    },

    /***/
    13320:
    /*!***************************************************!*\
      !*** ./src/app/notification/notification.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationPage": function NotificationPage() {
          return (
            /* binding */
            _NotificationPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./notification.page.html */
      89034);
      /* harmony import */


      var _notification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notification.page.scss */
      31435);
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


      var _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/local-notifications */
      12273);

      var _NotificationPage = /*#__PURE__*/function () {
        function NotificationPage(router, activatedRoute, http, route) {
          var _this = this;

          _classCallCheck(this, NotificationPage);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.http = http;
          this.notificationsDelayInSeconds = "2";
          this.notificationList = [];
          route.params.subscribe(function (val) {
            _this.alaramList();
          });
        }

        _createClass(NotificationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} //-------------- Navigate to searchpage ----------//

        }, {
          key: "searchPage",
          value: function searchPage() {
            this.router.navigate(['/searchpage']);
          } //-------------- Navigate to setalarmPage ----------//

        }, {
          key: "setalarm",
          value: function setalarm() {
            this.router.navigate(['/setalarm']);
          } //-------------- Get Alaram List ----------//

        }, {
          key: "alaramList",
          value: function alaramList() {
            var _this2 = this;

            this.http.get('/alarm_notification').subscribe(function (response) {
              console.log(response);
              _this2.notificationList = response.records;
              console.log(_this2.notificationList);

              _this2.ScheduleNotification();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "ScheduleNotification",
          value: function ScheduleNotification() {
            var options = {
              id: 123,
              title: "Sparrow",
              body: "Test",
              summaryText: "Test Msg",
              largeBody: "largeBody",
              schedule: {
                at: new Date(new Date().getTime() + parseInt(this.notificationsDelayInSeconds) * 1000)
              },
              extra: "extra"
            };

            _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_3__.LocalNotifications.schedule({
              notifications: [options]
            }).then(function () {});
          }
        }]);

        return NotificationPage;
      }();

      _NotificationPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }];
      };

      _NotificationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-notification',
        template: _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_notification_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NotificationPage);
      /***/
    },

    /***/
    31435:
    /*!*****************************************************!*\
      !*** ./src/app/notification/notification.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dot {\n  margin: 10px;\n  height: 25px;\n  width: 55px;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  border-radius: 10%;\n  display: inline-block;\n}\n\nion-content {\n  background-color: #F4F7FA !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw4REFBQTtFQUdBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBRko7O0FBS0E7RUFDSSxvQ0FBQTtFQUtBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTko7O0FBT0k7RUFDSSxhQUFBO0FBTFIiLCJmaWxlIjoibm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmRvdCB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogNTVweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIzYTZkNVxuICAgIDAlLCAjMjNkNWFiXG4gICAgMTAwJSk7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbmlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGNEY3RkEgIWltcG9ydGFudDtcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjOGNkYmUyXG4gICAgLy8gMCUsICNkMWYyZTdcbiAgICAvLyAxMDAlKSAhaW1wb3J0YW50O1xuICBcbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9Il19 */";
      /***/
    },

    /***/
    89034:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  style=\"margin-top: -7px;\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"margin-top:15px;color:#fff\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <h5 style=\"color:#fff;margin-top:30px\"><b>24HRS</b></h5>\n      </div>\n      <div class=\"col-8\" style=\"text-align: right;width: 90%;margin-top: -40px;\">\n        <svg (click)=\"searchPage()\" style=\"margin:10px;\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M14.2998 12.5863H13.3974L13.0775 12.2779C14.3299 10.8187 14.9685 8.93097 14.8587 7.01111C14.749 5.09124 13.8996 3.28856 12.489 1.98152C11.0785 0.674474 9.21659 -0.0352438 7.29394 0.00134777C5.3713 0.0379394 3.53754 0.817948 2.17778 2.17771C0.818015 3.53748 0.0379393 5.37125 0.00134789 7.2939C-0.0352436 9.21655 0.674402 11.0786 1.98144 12.4891C3.28848 13.8996 5.09129 14.7489 7.01115 14.8586C8.93101 14.9683 10.8187 14.33 12.2779 13.0775L12.5864 13.3974V14.2998L18.298 20L20 18.298L14.2998 12.5863ZM7.44594 12.5863C6.42926 12.5863 5.43548 12.2849 4.59014 11.72C3.7448 11.1552 3.08585 10.3523 2.69678 9.41302C2.30772 8.47373 2.20589 7.44016 2.40423 6.44301C2.60258 5.44586 3.09231 4.52992 3.81121 3.81102C4.53011 3.09211 5.44592 2.60259 6.44306 2.40424C7.44021 2.20589 8.47391 2.30765 9.4132 2.69672C10.3525 3.08579 11.1553 3.74468 11.7201 4.59002C12.285 5.43536 12.5864 6.42921 12.5864 7.44589C12.5873 8.1212 12.4551 8.79006 12.197 9.41414C11.939 10.0382 11.5604 10.6052 11.0829 11.0827C10.6054 11.5602 10.0381 11.9389 9.41404 12.1969C8.78996 12.4549 8.12124 12.5872 7.44594 12.5863Z\"\n            fill=\"white\" />\n        </svg>\n       \n        <svg (click)=\"setalarm()\" style=\"margin-left:15px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"24\" fill=\"#fff\"\n          class=\"bi bi-alarm\" viewBox=\"0 0 16 16\">\n          <path d=\"M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z\" />\n          <path\n            d=\"M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z\" />\n        </svg>\n      </div>\n    </div>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n<div class=\"container\">\n  <div *ngFor=\"let  notification of notificationList\" class=\" card mt-4\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <img style=\"margin: 7px;\" height=\"30px\" width=\"30px\" src=\"{{notification.store_logo}}\" alt=\"\">\n        <span>{{notification.store_name}}/ {{notification.product}}</span>\n      </div>\n      <div class=\"col-8\">\n        <p style=\"font-size:10px;margin:10px;\">{{notification.description}}</p>\n      </div>\n      <div class=\"col-4 ion-text-right\">\n        <span class=\"dot ion-text-center\"><span style=\"margin-top:15px;font-size: 14px;\">{{notification .offer}}% off</span></span>\n      </div>\n    </div>\n    <div class=\"row\">\n      \n      <div class=\"col-5\">\n        <p style=\"margin:5px;font-size: 10px;\">\n          <svg width=\"20\" height=\"18\" viewBox=\"0 0 29 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              d=\"M18.9116 3.42642V1.81135H20.5929V0.22644H15.5488V1.81135H17.2302V3.42642C14.4736 3.62501 12.0001 4.79208 10.1921 6.56606H3.66697V8.15044H8.86504C8.52445 8.65143 8.22897 9.18153 7.98298 9.73587H1.98559V11.3202H7.43614C7.30667 11.8354 7.21773 12.3647 7.1739 12.9057H0.304199V14.4906H7.17384C7.21773 15.0316 7.30662 15.5609 7.43608 16.0755H1.98559V17.6604H7.98298C8.22891 18.2147 8.52445 18.7448 8.86504 19.2453H3.66697V20.8302H10.1921C12.1821 22.7828 14.9784 24 18.0709 24C24.0971 24 28.9999 19.3786 28.9999 13.6981C28.9999 8.28426 24.5466 3.83242 18.9116 3.42642ZM27.2799 14.4906C26.8787 18.666 23.3412 22.0006 18.9116 22.3787V20.8302H17.2302V22.3787C12.8005 22.0006 9.26297 18.666 8.86184 14.4906H10.5046V12.9057H8.86184C9.26297 8.73025 12.8005 5.39566 17.2302 5.01756V6.56606H18.9116V5.01756C23.3412 5.39566 26.8787 8.73025 27.2799 12.9057H25.6371V14.4906H27.2799Z\"\n              fill=\"#5F5F5F\" />\n            <path\n              d=\"M15.5488 13.6981C15.5488 15.009 16.6802 16.0755 18.0709 16.0755C19.0607 16.0755 19.9634 15.5259 20.3705 14.6754L23.1146 8.94385L17.0341 11.5305C16.1318 11.9144 15.5488 12.7652 15.5488 13.6981ZM17.7258 12.9751L19.7527 12.1128L18.838 14.0235C18.7021 14.3072 18.401 14.4906 18.0709 14.4906C17.6074 14.4906 17.2302 14.1351 17.2302 13.6981C17.2302 13.387 17.4248 13.1032 17.7258 12.9751Z\"\n              fill=\"#5F5F5F\" />\n          </svg>\n          {{notification.offer_time}}\n        </p>\n      </div>\n      <div class=\"col-7\">\n        <p style=\"margin:5px;font-size: 10px;\" class=\"product-name\">Date/Time: <span>{{notification.created_at | date: 'MMMM d'}}/ {{notification.created_at | date: 'h :mm a'}}</span></p>\n      </div>\n      \n    </div>\n  </div>\n\n</div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_notification_notification_module_ts-es5.js.map
(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunk_24HrsUserApp"] = self["webpackChunk_24HrsUserApp"] || []).push([["src_app_folder_folder_module_ts"], {
    /***/
    59771:
    /*!*************************************************!*\
      !*** ./src/app/folder/folder-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FolderPageRoutingModule": function FolderPageRoutingModule() {
          return (
            /* binding */
            _FolderPageRoutingModule
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


      var _folder_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./folder.page */
      48470);

      var routes = [{
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_0__.FolderPage
      }];

      var _FolderPageRoutingModule = function FolderPageRoutingModule() {
        _classCallCheck(this, FolderPageRoutingModule);
      };

      _FolderPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FolderPageRoutingModule);
      /***/
    },

    /***/
    3412:
    /*!*****************************************!*\
      !*** ./src/app/folder/folder.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FolderPageModule": function FolderPageModule() {
          return (
            /* binding */
            _FolderPageModule
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


      var _folder_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./folder-routing.module */
      59771);
      /* harmony import */


      var _folder_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./folder.page */
      48470);

      var _FolderPageModule = function FolderPageModule() {
        _classCallCheck(this, FolderPageModule);
      };

      _FolderPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _folder_routing_module__WEBPACK_IMPORTED_MODULE_0__.FolderPageRoutingModule],
        declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_1__.FolderPage]
      })], _FolderPageModule);
      /***/
    },

    /***/
    48470:
    /*!***************************************!*\
      !*** ./src/app/folder/folder.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FolderPage": function FolderPage() {
          return (
            /* binding */
            _FolderPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_folder_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./folder.page.html */
      7154);
      /* harmony import */


      var _folder_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./folder.page.scss */
      77065);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _darkmode_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../darkmode/theme.service */
      10917);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/animations */
      55160);

      var _FolderPage = /*#__PURE__*/function () {
        function FolderPage(theme, router, activatedRoute, http, route, popoverController) {
          var _this = this;

          _classCallCheck(this, FolderPage);

          this.theme = theme;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.http = http;
          this.popoverController = popoverController;
          this.intervalId = 0;
          this.Counter = '';
          this.seconds = 11;
          this.hour = 1;
          this.city = "coimbatore"; // userdetails: any = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));

          this.slideName = 'Home';
          this.isvisible = false;
          this.popUpisvisible = false;
          this.productDetails = true;
          this.storedetailsVisible = false;
          this.noDataFound = false;
          this.ExpirynoDataFound = true;
          this.offerListVisible = true;
          this.getCategoryList = [];
          this.offerlist = [];
          this.offerView = [];
          this.storedetails = [];
          this.locationChangeVisible = false; //--------------- Ion slide option ----------//

          this.slideOpts = {
            slidesPerView: 3,
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }
          };
          this.expiryofferlist = [];
          this.locationsList = [];
          route.params.subscribe(function (val) {
            _this.offerList();

            _this.locationList(); // this.expiryOfferList()

          });
        }

        _createClass(FolderPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSelectCategory();
            this.offerList();
            this.start();
            this.folder = this.activatedRoute.snapshot.paramMap.get('id');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.clearTimer();
          }
        }, {
          key: "clearTimer",
          value: function clearTimer() {
            clearInterval(this.intervalId);
          }
        }, {
          key: "start",
          value: function start() {
            this.countDown();
          }
        }, {
          key: "stop",
          value: function stop() {
            this.clearTimer();
            this.Counter = "$ ".concat(this.hour, " {this.seconds} ");
          }
        }, {
          key: "countDown",
          value: function countDown() {
            var _this2 = this;

            this.clearTimer();
            this.intervalId = window.setInterval(function () {
              _this2.seconds -= 1;

              if (_this2.seconds === 0) {
                _this2.Counter = 'Offers Ends..!';
              } else {
                if (_this2.seconds < 0) {
                  _this2.seconds = 60;
                } // reset


                _this2.Counter = "".concat(_this2.hour, ". ").concat(_this2.seconds, " Hrs");
              }
            }, 1000);
          }
        }, {
          key: "hidepopup",
          value: function hidepopup() {
            this.popUpisvisible = false;
          }
        }, {
          key: "showPopup",
          value: function showPopup() {
            this.popUpisvisible = true;
          } // ----------- spam report -----------//

        }, {
          key: "spam",
          value: function spam(val) {
            console.log(this.spamMsg);

            if (this.spamMsg == true) {
              this.spam_msg = "spam Msg";
            } else {
              this.spam_msg = "";
            }
          } // ----------- storeNA report -----------//

        }, {
          key: "storeNA",
          value: function storeNA(val) {
            if (this.store == true) {
              this.store = "store NA";
            } else {
              this.store = "";
            }
          } // ----------- OfferDenaid report -----------//

        }, {
          key: "OfferDenaid",
          value: function OfferDenaid(val) {
            if (this.store == true) {
              this.offer_denied = "offer Denaid";
            } else {
              this.offer_denied = "";
            }
          } // ----------- Seller report Api call -----------//

        }, {
          key: "reportSeller",
          value: function reportSeller() {
            var _this3 = this;

            var obj = {
              store_name: this.storeID,
              spam_msg: this.spam_msg,
              store: this.store,
              offer_denied: this.offer_denied,
              others: this.others
            };
            this.http.post('/seller_report', obj).subscribe(function (response) {
              console.log(response);

              if (response.success == "true") {
                _this3.others = '';
                var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1000,
                  timerProgressBar: true,
                  didOpen: function didOpen(toast) {
                    toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().stopTimer);
                    toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().resumeTimer);
                  }
                });
                Toast.fire({
                  icon: 'success',
                  title: 'Report Successfully'
                });
                _this3.popUpisvisible = false;
              }
            }, function (error) {
              console.log(error);
              var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: function didOpen(toast) {
                  toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().stopTimer);
                  toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().resumeTimer);
                }
              });
              Toast.fire({
                icon: 'error',
                title: 'Something Went Wrong'
              });
            });
          } //------------- Read one Offer(card) Api call ------------//

        }, {
          key: "singleCard",
          value: function singleCard(tbid) {
            var _this4 = this;

            this.deliveryAvilability = '';
            var o = tbid;
            this.isvisible = true;
            this.storedetailsVisible = false;
            this.productDetails = true;
            this.http.get('/readone_offer_user?o=' + o).subscribe(function (response) {
              if (response.success == "true") {
                _this4.storeTbid = response.records.tbid;
                _this4.storeLogo = response.records.store_logo;
                _this4.storeName = response.records.store_name;
                _this4.productName = response.records.product;
                _this4.productImage = response.records.product_image;
                _this4.description = response.records.description;
                _this4.offer = response.records.offer;
                _this4.totalPrice = response.records.total_cost;
                _this4.offerPrice = response.records.offer_price;
                _this4.offerTime = response.records.offer_time, _this4.unit = response.records.product_unit;
              }
            }, function (error) {
              console.log(error);
            });
          } //---------------Get Store Details  Api call -------------//

        }, {
          key: "storeDetails",
          value: function storeDetails(storename) {
            var _this5 = this;

            this.storedetailsVisible = true;
            this.productDetails = false;
            var obj = {
              store_name: storename
            };
            this.http.post('/store_details_user', obj).subscribe(function (response) {
              _this5.storedetails = response.records;
              console.log(_this5.storedetails);
              _this5.storeAddress = response.records.store_address;
              _this5.websiteLink = response.records.website;
              _this5.whatsApp = response.records.whatsapp;
              _this5.contact = response.records.contact_number;
              _this5.instagram = response.records.instagram;
              _this5.storeID = response.records.tbid;
              _this5.deliveryAvilability = response.records.delivery_availability;

              if (_this5.deliveryAvilability == 1 && _this5.deliveryAvilability == false && _this5.deliveryAvilability == "Available") {
                _this5.deliveryAvilability = false;
              } else {
                _this5.deliveryAvilability = true;
              }
            }, function (error) {
              console.log(error);
            });
          } //-------------- Navigate to dashboard ----------//

        }, {
          key: "navigateHome",
          value: function navigateHome() {
            this.storedetailsVisible = false;
            this.isvisible = false;
            this.productDetails = true;
          } //-------------- Navigate to searchPage ----------//

        }, {
          key: "searchPage",
          value: function searchPage() {
            this.router.navigate(['/searchpage']);
          } //-------------- Navigate to setalarmPage ----------//

        }, {
          key: "setalarm",
          value: function setalarm() {
            this.router.navigate(['/setalarm']);
          } //-------------- Navigate to notificationPage ----------//

        }, {
          key: "notification",
          value: function notification() {
            this.router.navigate(['/notification']);
          } //--------- Get User Selected store Category's------------//

        }, {
          key: "getSelectCategory",
          value: function getSelectCategory() {
            var _this6 = this;

            this.http.get('/store_category').subscribe(function (response) {
              _this6.getCategoryList = response.records;
              console.log(response);
            }, function (error) {
              console.log(error);
            });
          } //------------- get offer list -----------//

        }, {
          key: "offerList",
          value: function offerList() {
            var _this7 = this;

            var data = {
              city: this.city
            };
            this.http.post('/list_all_offer', data).subscribe(function (response) {
              _this7.offerlist = response.records;
              console.log(_this7.offerlist);

              if (response.message == "No offers found.") {
                _this7.noDataFound = true;
              } else {
                _this7.noDataFound = false;
              }
            }, function (error) {
              console.log(error);
              _this7.noDataFound = true;
            });
          } //------------- get offer list -----------//

        }, {
          key: "expiryOfferList",
          value: function expiryOfferList() {
            var _this8 = this;

            this.http.get('/list_all_offer').subscribe(function (response) {
              _this8.expiryofferlist = response.records;
              console.log(_this8.offerlist); // if(response.message == "No offers found."){
              //   this.noDataFound = true;
              // }else{
              //   this.noDataFound = false;
              // }
            }, function (error) {
              console.log(error); // this.noDataFound = true;
            });
          } //------------- click home slider ----------//

        }, {
          key: "clickSlideHome",
          value: function clickSlideHome() {
            this.offerlist = [];
            this.slideName = "Home";
            this.offerListVisible = true;
            this.noDataFound = false;
            this.isvisible = false;
            this.offerList();
          } //------------- click  slider to fetch data based on category ----------//

        }, {
          key: "clickSlide",
          value: function clickSlide(item) {
            var _this9 = this;

            console.log(item);
            this.isvisible = false;
            this.slideName = item;

            if (this.slideName == "Home") {
              this.offerListVisible = true;
              this.noDataFound = false;
              this.offerList();
            }

            var obj = {
              store_category: item,
              city: this.city
            };
            this.http.post('/list_offer_category', obj).subscribe(function (response) {
              if (response.success == "true") {
                _this9.offerlist = response.records;
                console.log(response);
                _this9.offerListVisible = true;
                _this9.noDataFound = false;
              } else {}
            }, function (error) {
              console.log(error);
              _this9.offerListVisible = false;
              _this9.noDataFound = true;
            });
          }
        }, {
          key: "locationList",
          value: function locationList() {
            var _this10 = this;

            this.http.get('/list_location').subscribe(function (response) {
              console.log(response);
              _this10.locationsList = response.records;
              console.log(response.records.city);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "changeLocation",
          value: function changeLocation() {
            var _this11 = this;

            console.log(this.city);

            if (this.city == "All") {
              this.http.get('/list_all_offer').subscribe(function (response) {
                _this11.offerlist = response.records;
                console.log(_this11.offerlist);

                if (response.message == "No offers found.") {
                  _this11.noDataFound = true;
                } else {
                  _this11.noDataFound = false;
                }
              }, function (error) {
                console.log(error);
                _this11.noDataFound = true;
              });
            }
          }
        }, {
          key: "locationChange",
          value: function locationChange() {
            this.locationChangeVisible = !this.locationChangeVisible;
          }
        }, {
          key: "testSlide",
          value: function testSlide() {
            this.router.navigate(['/slide-test']);
          }
        }]);

        return FolderPage;
      }();

      _FolderPage.ctorParameters = function () {
        return [{
          type: _darkmode_theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController
        }];
      };

      _FolderPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-folder',
        template: _raw_loader_folder_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        //------------- Animations ----------//
        animations: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('fadein', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
          opacity: 0
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
          opacity: 0
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('900ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
          opacity: 1
        }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('slidelefttitle', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
          opacity: 0,
          transform: 'translateX(150%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('900ms 300ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
          transform: 'translateX(0%)',
          opacity: 1
        }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('slideup', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
          opacity: 0,
          transform: 'translateY(150%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('400ms 200ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
          transform: 'translateY(0%)',
          opacity: 1
        }))])])],
        styles: [_folder_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FolderPage);
      /***/
    },

    /***/
    77065:
    /*!*****************************************!*\
      !*** ./src/app/folder/folder.page.scss ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card {\n  border: 1px solid #FFFFFF;\n  border-radius: 3px;\n  box-shadow: 4px 4px 4px 4px #ccc;\n  margin-bottom: 20px;\n  margin-right: 4px;\n  cursor: pointer;\n}\n\n#social-media-icon-div {\n  border: 1px solid #FFFFFF;\n  border-radius: 8px;\n  box-shadow: 4px 4px 4px 4px #ccc;\n}\n\np {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n#offer {\n  padding: 2px !important;\n  margin: 5px !important;\n}\n\n.report-seller-btn {\n  background: linear-gradient(to right, #ff80a0 0%, #eb154b 100%);\n  color: #fff;\n  margin-left: 10%;\n}\n\n#product_img {\n  border: 1px solid #FFFFFF;\n  border-radius: 15%;\n  box-shadow: 3px 3px 16px 4px #ccc;\n  width: 85px;\n  height: 75px;\n}\n\n#share {\n  color: #fff !important;\n}\n\n.dot {\n  height: 30px;\n  width: 30px;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  border-radius: 50%;\n  display: inline-block;\n  box-shadow: 3px 3px 16px 4px #ccc;\n}\n\n#heart {\n  margin-left: -10px !important;\n  border-radius: 50% !important;\n  height: 20px;\n  width: 20px;\n}\n\n.green {\n  color: #404040 !important;\n}\n\n.red {\n  color: red !important;\n  border-radius: 55%;\n  padding: 2px;\n}\n\n.btn-default {\n  color: white;\n  background-color: blue;\n}\n\n.btn-change {\n  color: Red;\n  background-color: white;\n}\n\nion-chip.active {\n  color: red !important;\n  background: linear-gradient(to right, #555c59 0%, #1d1f1e 100%);\n}\n\nion-slides {\n  height: 50px !important;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-bottom: 15px;\n  background-color: #fff !important;\n}\n\n.featured-slide {\n  width: 50% !important;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.featured-slide .info {\n  margin: 50px !important;\n  margin-left: 0 !important;\n  margin-right: 0px !important;\n  font-size: 17px !important;\n  color: #6E7989;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.div-slides {\n  bottom: 0;\n  width: 100%;\n  display: block;\n  background-color: #e6e6e6;\n}\n\n.div-slides img {\n  margin: 10px;\n  margin-right: 2px !important;\n  border-radius: 75px;\n}\n\n.tam-title {\n  margin-top: -0.5%;\n  font-size: 80%;\n  font-weight: bold;\n  color: #6E7989;\n}\n\nion-slide {\n  margin-left: -20px !important;\n  margin-right: 23px !important;\n}\n\nion-badge {\n  z-index: 999 !important;\n}\n\n#slideItem.active {\n  color: #23d5ab;\n  font-weight: 700;\n}\n\n.tam-title.active {\n  color: blue !important;\n  background: linear-gradient(to right, #555c59 0%, #1d1f1e 100%);\n}\n\n.pop-up-card {\n  box-shadow: 2px 2px 3px rgba(128, 128, 128, 0.664);\n  position: absolute;\n  top: 35%;\n  z-index: 1;\n  left: 2%;\n  border-radius: 10px;\n  width: 95%;\n}\n\nion-label {\n  font-size: 10px !important;\n}\n\nion-checkbox {\n  margin: 10px;\n}\n\ninput {\n  border-radius: 3px;\n  width: 90%;\n}\n\n.submit-btn {\n  text-align: center;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  margin: 5px;\n  color: #fff;\n}\n\nion-item {\n  --background:#F4F7FA;\n  height: 35px;\n  width: 100%;\n  margin-left: 35%;\n  --box-shadow: rgba(172, 22, 22, 0.04) 0px 3px 5px !important;\n}\n\nion-content {\n  background-color: #F4F7FA !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0FBRUY7O0FBQUE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBQUE7RUFDRSwrREFBQTtFQUdBLFdBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFFQTtFQUNDLHNCQUFBO0FBQ0Q7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhEQUFBO0VBR0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtBQURGOztBQVFBO0VBQ0MsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTEQ7O0FBT0E7RUFDRSx5QkFBQTtBQUpGOztBQU9BO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFKRDs7QUFPQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtBQUpGOztBQVFBO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0FBTEY7O0FBUUE7RUFDRSxxQkFBQTtFQUNBLCtEQUFBO0FBTEY7O0FBVUE7RUFFRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0FBUkY7O0FBV0E7RUFDRSxxQkFBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFURjs7QUFXRTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBVEo7O0FBaUJBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFFQSxjQUFBO0VBQ0EseUJBQUE7QUFmRjs7QUFnQkU7RUFJSSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQWpCTjs7QUFvQkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsNkJBQUE7RUFDQSw2QkFBQTtBQWpCRjs7QUFvQkE7RUFDRSx1QkFBQTtBQWpCRjs7QUFvQkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFqQkY7O0FBb0JBO0VBQ0Usc0JBQUE7RUFDQSwrREFBQTtBQWpCRjs7QUF1QkE7RUFDRSxrREFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBcEJGOztBQXdCQTtFQUNFLDBCQUFBO0FBckJGOztBQXVCQTtFQUNFLFlBQUE7QUFwQkY7O0FBMkJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBeEJGOztBQTRCQTtFQUNFLGtCQUFBO0VBQ0EsOERBQUE7RUFHQSxXQUFBO0VBQ0EsV0FBQTtBQTNCRjs7QUE4QkE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSw0REFBQTtBQTVCQTs7QUErQkE7RUFDRSxvQ0FBQTtFQUtBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBaENGOztBQWlDRTtFQUNJLGFBQUE7QUEvQk4iLCJmaWxlIjoiZm9sZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICBib3JkZXI6MXB4IHNvbGlkICNGRkZGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggNHB4ICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1yaWdodDo0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3NvY2lhbC1tZWRpYS1pY29uLWRpdntcbiAgYm9yZGVyOjFweCBzb2xpZCAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDRweCAjY2NjO1xufVxucHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbiNvZmZlcntcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZXBvcnQtc2VsbGVyLWJ0bntcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY4MGEwXG4gIDAlLCAjZWIxNTRiXG4gIDEwMCUpO1xuICBjb2xvcjojZmZmO1xuICBtYXJnaW4tbGVmdDoxMCU7XG4gIFxufVxuXG4jcHJvZHVjdF9pbWd7XG4gIGJvcmRlcjoxcHggc29saWQgI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xuICBib3gtc2hhZG93OjNweCAzcHggMTZweCA0cHggI2NjYztcbiAgd2lkdGg6IDg1cHg7XG4gIGhlaWdodDo3NXB4O1xufVxuI3NoYXJle1xuIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcbn1cblxuLmRvdCB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1XG4gIDAlLCAjMjNkNWFiXG4gIDEwMCUpO1xuICBjb2xvcjojZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNoYWRvdzozcHggM3B4IDE2cHggNHB4ICNjY2M7XG4gIFxufVxuXG5cblxuXG4jaGVhcnR7XG4gbWFyZ2luLWxlZnQ6IC0xMHB4ICFpbXBvcnRhbnQ7XG4gYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gaGVpZ2h0OjIwcHg7XG4gd2lkdGg6IDIwcHg7XG59XG4uZ3JlZW4ge1xuICBjb2xvcjogIzQwNDA0MCAhaW1wb3J0YW50O1xufVxuXG4ucmVkIHtcbiBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gYm9yZGVyLXJhZGl1czogNTUlO1xuIHBhZGRpbmc6IDJweDtcbn1cblxuLmJ0bi1kZWZhdWx0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuXG59XG5cbi5idG4tY2hhbmdlIHtcbiAgY29sb3I6IFJlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jaGlwLmFjdGl2ZXsgXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNTU1YzU5XG4gIDAlLCAjMWQxZjFlXG4gIDEwMCUpO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgXG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmZlYXR1cmVkLXNsaWRlIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICAvLyBib3gtc2hhZG93OiAzcHggLTJweCAxMXB4IDNweCNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gIC5pbmZvIHtcbiAgICBtYXJnaW46IDUwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQgO1xuICAgIGNvbG9yOiAjNkU3OTg5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxufVxuXG5cbi8vIGlvbi1zbGlkZXN7XG4vLyAgIGhlaWdodDoxNTBweCAhaW1wb3J0YW50O1xuLy8gfVxuLmRpdi1zbGlkZXN7ICAgIFxuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlOyAgICBcbiAgLy8gaGVpZ2h0OiAxNjBweDtcbiAgZGlzcGxheTogYmxvY2s7ICAgICAgICBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgaW1ne1xuICAgICAgLy8gd2lkdGg6IDU1cHg7XG4gICAgICAvLyBoZWlnaHQ6IDUwcHg7XG4gICAgICAvLyBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgbWFyZ2luOjEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJweCAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogNzVweCA7XG4gIH1cbn1cbi50YW0tdGl0bGV7XG4gIG1hcmdpbi10b3A6IC0wLjUlO1xuICBmb250LXNpemU6IDgwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNkU3OTg5O1xuICAvLyBtYXJnaW4tbGVmdDogLTc1cHggIWltcG9ydGFudDtcbn1cbmlvbi1zbGlkZXtcbiAgbWFyZ2luLWxlZnQ6LTIwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OjIzcHggIWltcG9ydGFudDsgXG59ICBcblxuaW9uLWJhZGdle1xuICB6LWluZGV4OiA5OTkgIWltcG9ydGFudDtcbn1cblxuI3NsaWRlSXRlbS5hY3RpdmV7XG4gIGNvbG9yOiAjMjNkNWFiO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4udGFtLXRpdGxlLmFjdGl2ZXsgXG4gIGNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzU1NWM1OVxuICAwJSwgIzFkMWYxZVxuICAxMDAlKTtcbn1cblxuLy9Qb3AtVXAtQ2FyZFxuLnBvcC11cC1jYXJkIHtcbiAgYm94LXNoYWRvdyAgIDogMnB4IDJweCAzcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjY2NCk7XG4gIHBvc2l0aW9uICAgICA6IGFic29sdXRlO1xuICB0b3AgICAgICAgICAgOiAzNSU7XG4gIHotaW5kZXggICAgICA6IDE7XG4gIGxlZnQgICAgICAgIDogMiU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA5NSU7XG59XG5cblxuaW9uLWxhYmVse1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbmlvbi1jaGVja2JveHtcbiAgbWFyZ2luOjEwcHg7XG59XG4vLyAuY2FyZHtcbi8vICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xuLy8gICBoZWlnaHQ6MTAwJSAhaW1wb3J0YW50O1xuLy8gICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2ZmZjtcbi8vIH1cbmlucHV0e1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHdpZHRoOiA5MCU7XG59XG5cblxuLnN1Ym1pdC1idG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyM2E2ZDVcbjAlLCAjMjNkNWFiXG4xMDAlKTtcbiAgbWFyZ2luOjVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmlvbi1pdGVte1xuLS1iYWNrZ3JvdW5kOiNGNEY3RkE7XG5oZWlnaHQ6MzVweDtcbndpZHRoOiAxMDAlO1xubWFyZ2luLWxlZnQ6IDM1JTtcbi8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xuLS1ib3gtc2hhZG93OiByZ2JhKDE3MiwgMjIsIDIyLCAwLjA0KSAwcHggM3B4IDVweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6I0Y0RjdGQSAhaW1wb3J0YW50O1xuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjOGNkYmUyXG4gIC8vIDAlLCAjZDFmMmU3XG4gIC8vIDEwMCUpICFpbXBvcnRhbnQ7XG5cbiAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdzogYXV0bztcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    7154:
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!------------ Header  ---------------->\n<ion-header style=\"margin-top: -7px;\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"margin-top:15px;color:#fff\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <h5 style=\"color:#fff;margin-top:30px\"><b>24HRS</b></h5>\n      </div>\n      <div class=\"col-8\" style=\"text-align: right;width: 90%;margin-top: -40px;\">\n        <svg (click)=\"searchPage()\" style=\"margin:10px;\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M14.2998 12.5863H13.3974L13.0775 12.2779C14.3299 10.8187 14.9685 8.93097 14.8587 7.01111C14.749 5.09124 13.8996 3.28856 12.489 1.98152C11.0785 0.674474 9.21659 -0.0352438 7.29394 0.00134777C5.3713 0.0379394 3.53754 0.817948 2.17778 2.17771C0.818015 3.53748 0.0379393 5.37125 0.00134789 7.2939C-0.0352436 9.21655 0.674402 11.0786 1.98144 12.4891C3.28848 13.8996 5.09129 14.7489 7.01115 14.8586C8.93101 14.9683 10.8187 14.33 12.2779 13.0775L12.5864 13.3974V14.2998L18.298 20L20 18.298L14.2998 12.5863ZM7.44594 12.5863C6.42926 12.5863 5.43548 12.2849 4.59014 11.72C3.7448 11.1552 3.08585 10.3523 2.69678 9.41302C2.30772 8.47373 2.20589 7.44016 2.40423 6.44301C2.60258 5.44586 3.09231 4.52992 3.81121 3.81102C4.53011 3.09211 5.44592 2.60259 6.44306 2.40424C7.44021 2.20589 8.47391 2.30765 9.4132 2.69672C10.3525 3.08579 11.1553 3.74468 11.7201 4.59002C12.285 5.43536 12.5864 6.42921 12.5864 7.44589C12.5873 8.1212 12.4551 8.79006 12.197 9.41414C11.939 10.0382 11.5604 10.6052 11.0829 11.0827C10.6054 11.5602 10.0381 11.9389 9.41404 12.1969C8.78996 12.4549 8.12124 12.5872 7.44594 12.5863Z\"\n            fill=\"white\" />\n        </svg>\n\n        <svg (click)=\"setalarm()\" style=\"margin:5px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"24\"\n        fill=\"#fff\" class=\"bi bi-alarm\" viewBox=\"0 0 16 16\">\n        <path d=\"M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z\" />\n        <path\n          d=\"M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z\" />\n      </svg>\n\n        <svg (click)=\"notification()\" style=\"margin:10px;\" width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n            d=\"M8.0002 0C7.11654 0 6.4002 0.716344 6.4002 1.6V1.80156C3.63963 2.51189 1.5998 5.01775 1.5998 8.00003V13.6H2C0.895431 13.6 0 14.4955 0 15.6V15.8C0 16.3523 0.447715 16.8 1 16.8H15C15.5523 16.8 16 16.3523 16 15.8V15.6C16 14.4955 15.1046 13.6 14 13.6H14.3998V8.00003C14.3998 5.01803 12.3604 2.51237 9.60019 1.80176V1.6C9.60019 0.716344 8.88385 0 8.0002 0ZM5.5998 17.6C5.5998 18.9255 6.67432 20 7.9998 20C9.32529 20 10.3998 18.9255 10.3998 17.6H5.5998Z\"\n            fill=\"white\" />\n            \n        </svg>\n\n        <!-- <ion-badge style=\"border-radius: 50%;margin-left: -14px ;color:#eb154b ;font-size: 12px;\" color=\"light\">10</ion-badge> -->\n\n      </div>\n    </div>\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content [ngStyle]=\"{'opacity':popUpisvisible ? '0.52' : '1' }\">\n\n  <!------------ Ion slides  ---------------->\n  <div class=\"div-slides ion-text-left\">\n    <ion-slides slidesPerView=\"3\" spaceBetween=\"1\" [options]=\"slideOpts\">\n      <ion-slide text-start>\n        <p [style.border-bottom]=\"slideName == 'Home' ? '2px solid red' : '#23d5ab' \"\n          [style.color]=\"slideName == 'Home' ? '#eb154b' : '#23d5ab' \" (click)=\"clickSlideHome('Home')\"\n          class=\"tam-title ion-text-left\">Home</p>\n      </ion-slide>\n      <ion-slide slidesPerView=\"3\" *ngFor=\"let category of getCategoryList\" (mouseup)=\"clickSlide(category.tbid)\"\n        text-start>\n        <p [style.border-bottom]=\"slideName == category.tbid ? '2px solid red' : '#23d5ab' \"\n          [style.color]=\"slideName == category.tbid ? '#eb154b' : '#23d5ab' \" class=\"tam-title ion-text-left\">\n          {{category.category}} </p>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n\n  <div style=\"margin-top: -7%;\" class=\"row\">\n    <div class=\"col-4 mt-2\">\n      <h6 style=\"color: #272A3F;margin-left:15%;\"> Live Offers</h6>\n    </div>\n\n    <!-----------   Location Dropdown    ---------------->\n    <div class=\"col-8 mt-2\">\n      <ion-item>\n        <svg style=\"margin: 5px;\" (click)=\"locationChange()\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"\n          fill=\"#23d5ab\" class=\"bi bi-geo-alt-fill\" viewBox=\"0 0 16 16\">\n          <path d=\"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z\" />\n        </svg>\n        <ion-label style=\"font-size:13px !important;color: #121212;\">{{city}}</ion-label>\n        <ion-select (ionChange)=\"changeLocation()\" style=\"font-size: 10px;color:#F4F7FA\" [(ngModel)]=\"city\"\n          interface=\"popover\">\n          <ion-select-option *ngFor=\"let location of locationsList\" [value]=\"location.city\">{{location.city}}\n          </ion-select-option>\n          <ion-select-option [value]=\"All\">All</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </div>\n  </div>\n\n\n\n\n  <div class=\"container\">\n    <div class=\"row ion-text-center\">\n      <div class=\"container\">\n        <div *ngIf=\"isvisible\" class=\"col-12 card\">\n          <div class=\"row\">\n            <div class=\"col-10 ion-text-left\">\n              <div class=\"row\">\n                <!-- <div class=\"col-2\">\n                  <img style=\"margin: 5px;\" src=\"{{storeLogo}}\" height=\"20px\" width=\"25px\" alt=\"\">\n                </div> -->\n                <div class=\"col-9 mx-3 mb-3 mt-1\">\n                  <p (click)=\"storeDetails(storeName)\" style=\"font-size: 18px;color: #404040;\"><b>{{storeName}}</b>\n\n                  </p>\n                </div>\n                <!-- <div *ngIf=\"deliveryAvilability\" class=\"col-3 mt-1 \">\n                  <div>\n                    <img style=\"height:40px;width:65px;margin-left: 5px;\"\n                      src=\"https://static.thenounproject.com/png/100245-200.png\" alt=\"\">\n                  </div>\n                </div> -->\n              </div>\n            </div>\n            <div class=\"col-2 ion-text-right\">\n              <ion-icon (click)=\"navigateHome()\" *ngIf=\"storedetailsVisible\"\n                style=\"margin:10px;cursor:pointer;color:#eb154b\" name=\"close\"></ion-icon>\n            </div>\n\n\n            <!------------- Product details --------------->\n            <div *ngIf=\"productDetails\" class=\"row\">\n              <div class=\"col-8\"></div>\n              <div style=\"margin-top: -14%;\" class=\"col-4 ion-text-right\">\n                <img style=\"height:35px;width:35px; color: #23d5ab;\" src=\"assets/icon/delivery.png\" alt=\"\">\n              </div>\n              <div class=\"col-6\">\n                <img id=\"product_img\" height=\"75px\" width=\"95px\" style=\"margin-left:5px;border-radius: 5px;\"\n                  src=\"{{productImage}}\" alt=\"\">\n                <div class=\"row\">\n                  <div class=\"col-12 ion-text-center mt-3\">\n                    <p style=\"color: #404040;\">{{productName}}</p>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-6\">\n                <div>\n                  <ion-badge class=\"badge ion-text-left\" id=\"kg\" slot=\"start\">{{offer}}{{unit}}\n                  </ion-badge>\n                </div>\n                <p><span id=\"offer\" style=\"font-size: smaller;color: #5F5F5F;text-decoration: line-through\">\n                    <i style=\"color:#23d5ab\" class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n                    {{totalPrice}}</span> <span style=\"margin: 0;padding:0;font-size:15px;\">{{offerPrice}}</span></p>\n                <p style=\"font-size: smaller;\">\n                  <svg width=\"20\" height=\"18\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path\n                      d=\"M8.49963 12.492L8.49859 12.5105C8.42789 13.7644 9.12154 14.9391 10.2662 15.5023L10.278 15.5081C10.6815 15.7035 11.0123 16.0258 11.221 16.4265L11.2257 16.4352C11.8025 17.5473 12.9954 18.2214 14.2672 18.1538L14.2865 18.1527C14.7477 18.1266 15.2055 18.247 15.5958 18.4974C16.6726 19.1795 18.0396 19.1795 19.1164 18.4974C19.5067 18.247 19.9645 18.1266 20.4257 18.1527L20.445 18.1538C21.7147 18.2219 22.9092 17.5473 23.4873 16.4334L23.4902 16.4273C23.6996 16.0255 24.0312 15.7027 24.4361 15.507L24.4455 15.5023C25.5902 14.9388 26.2841 13.7644 26.2131 12.5102L26.2121 12.4928C26.1886 12.0511 26.3096 11.614 26.5569 11.2492C27.2688 10.1979 27.2688 8.81162 26.5572 7.76004C26.3101 7.39552 26.1886 6.95861 26.2121 6.51696L26.2131 6.49847C26.2841 5.24429 25.5902 4.06988 24.4444 3.50618L24.434 3.5009C24.0312 3.30596 23.7012 2.98528 23.4922 2.58562L23.4862 2.57374C22.9092 1.46167 21.7147 0.787825 20.445 0.855183L20.4255 0.85624C19.9645 0.88239 19.5067 0.761938 19.1167 0.511525H19.1162C18.0393 -0.170508 16.6724 -0.170508 15.5955 0.511525C15.2052 0.761674 14.7474 0.882126 14.2862 0.855975L14.2669 0.854919C12.997 0.786768 11.8027 1.46141 11.226 2.57321L11.2215 2.5814C11.0126 2.9829 10.6815 3.30543 10.2774 3.50117L10.2665 3.50645C9.1218 4.06961 8.42789 5.24429 8.49885 6.49847L8.49989 6.5159C8.52337 6.95756 8.40233 7.39472 8.15503 7.75925C7.44312 8.81083 7.44312 10.1973 8.15503 11.2487C8.40207 11.6132 8.52337 12.0504 8.49963 12.492ZM9.03441 8.37366C9.41606 7.81102 9.60311 7.13639 9.56658 6.45488L9.56554 6.43639C9.52798 5.60538 9.98867 4.83353 10.7324 4.48037L10.7415 4.47588C11.3517 4.18003 11.8513 3.69294 12.1664 3.08698L12.1716 3.07694C12.5548 2.33785 13.3575 1.88986 14.21 1.93582L14.2288 1.93661C14.911 1.97544 15.5879 1.7974 16.165 1.42707C16.8936 0.965597 17.8181 0.965597 18.5467 1.42707C19.1238 1.79687 19.8007 1.97518 20.4826 1.93687L20.5014 1.93582C21.3581 1.89038 22.1569 2.33785 22.539 3.07483L22.5461 3.0883C22.8612 3.69347 23.3603 4.17976 23.9696 4.47535L23.9785 4.47984C24.734 4.85176 25.1926 5.61964 25.1464 6.43666L25.1454 6.45594C25.1089 7.13744 25.2962 7.81182 25.6778 8.37445C26.139 9.05569 26.1388 9.9538 25.6773 10.6348C25.2959 11.1977 25.1089 11.8723 25.1454 12.5538L25.1464 12.572C25.1926 13.3891 24.734 14.1572 23.9782 14.5294L23.9704 14.5331C23.3597 14.8295 22.8596 15.3171 22.5443 15.9241L22.5403 15.932C22.1569 16.6711 21.3555 17.1194 20.5017 17.0732L20.4831 17.0721C19.801 17.0335 19.1238 17.2118 18.5464 17.5819C17.8181 18.0431 16.8936 18.0431 16.1652 17.5819C15.6404 17.2451 15.0315 17.0665 14.4101 17.0671C14.3499 17.0671 14.2893 17.0687 14.2288 17.0721L14.21 17.0729C13.3687 17.127 12.5728 16.6812 12.1708 15.9307L12.1654 15.9204C11.8507 15.3155 11.352 14.8295 10.7428 14.5339L10.7329 14.5289C9.97719 14.1569 9.51858 13.3888 9.56502 12.572L9.56606 12.5528C9.60232 11.8713 9.41502 11.1966 9.03363 10.6342C8.57268 9.95301 8.57294 9.0549 9.03441 8.37419V8.37366Z\"\n                      fill=\"#23d5ab\" />\n                    <path\n                      d=\"M13.9082 15.097C14.1584 15.2553 14.4879 15.1779 14.6441 14.9245L20.9731 4.65812C21.0764 4.49408 21.085 4.28646 20.9952 4.1145C20.9055 3.94228 20.7312 3.83239 20.5392 3.82631C20.3472 3.82024 20.1667 3.91903 20.0665 4.08518L13.7379 14.3516C13.5816 14.6052 13.6578 14.9388 13.9082 15.097Z\"\n                      fill=\"#23d5ab\" />\n                    <path\n                      d=\"M14.4755 9.53113C15.7765 9.53113 16.8351 8.30891 16.8351 6.80669C16.8351 5.30447 15.7765 4.08252 14.4755 4.08252C13.1746 4.08252 12.1162 5.30447 12.1162 6.80669C12.1162 8.30891 13.1746 9.53113 14.4755 9.53113ZM14.4755 5.16448C15.1874 5.16448 15.7665 5.90119 15.7665 6.80669C15.7665 7.7122 15.1874 8.44917 14.4755 8.44917C13.7639 8.44917 13.1847 7.71193 13.1847 6.80669C13.1847 5.90145 13.7639 5.16448 14.4755 5.16448Z\"\n                      fill=\"#23d5ab\" />\n                    <path\n                      d=\"M17.8765 12.2027C17.8765 13.7049 18.9348 14.9269 20.2358 14.9269C21.5367 14.9269 22.5953 13.7046 22.5953 12.2027C22.5953 10.701 21.537 9.47852 20.236 9.47852C18.9348 9.47852 17.8765 10.7002 17.8765 12.2027ZM21.5268 12.2027C21.5268 13.1082 20.9477 13.8449 20.2358 13.8449C19.5241 13.8449 18.945 13.1082 18.945 12.2027C18.945 11.2972 19.5241 10.5605 20.2358 10.5605C20.9477 10.5605 21.5268 11.2967 21.5268 12.2027Z\"\n                      fill=\"#23d5ab\" />\n                    <path\n                      d=\"M28.6263 21.186C27.9188 19.9146 26.35 19.4304 25.0626 20.0861L20.8775 22.0883C20.2997 21.0003 19.1912 20.3077 17.9714 20.2728L14.108 20.165C13.4962 20.1473 12.896 19.9902 12.352 19.706L11.9589 19.4997C9.94606 18.4372 7.54686 18.4399 5.53609 19.5065L5.56061 18.6047C5.5687 18.306 5.33626 18.0571 5.04122 18.0489L0.804722 17.9309C0.50968 17.9227 0.264203 18.158 0.256116 18.4568L0.000204782 27.8708C-0.00788216 28.1696 0.224551 28.4184 0.519593 28.4266L4.75609 28.5447H4.77096C5.06026 28.5444 5.29687 28.3111 5.30496 28.0185L5.31696 27.5681L6.41756 26.9714C6.84956 26.736 7.35486 26.68 7.82677 26.8153L14.3988 28.6831C14.4103 28.6865 14.4218 28.6891 14.4335 28.6918C14.9086 28.7924 15.3927 28.8429 15.8782 28.8426C16.906 28.8431 17.9218 28.6189 18.856 28.1846C18.879 28.174 18.9011 28.1619 18.9223 28.1482L28.4513 21.9066C28.6889 21.7513 28.7656 21.4351 28.6263 21.186ZM1.08307 27.3597L1.3095 19.0276L4.47801 19.1158L4.25131 27.4482L1.08307 27.3597ZM18.3744 27.2178C17.2138 27.7482 15.9176 27.8946 14.6701 27.6362L8.11555 25.7737C7.37808 25.5624 6.58817 25.6501 5.9133 26.0175L5.35087 26.3224L5.50165 20.7824C7.28364 19.5821 9.56937 19.4587 11.4674 20.4601L11.8606 20.6664C12.5477 21.0256 13.3058 21.224 14.0787 21.2465L17.9422 21.3542C19.0274 21.3857 19.949 22.1681 20.1692 23.2448L14.4145 23.0844C14.1194 23.0762 13.874 23.3116 13.8659 23.6103C13.8578 23.9091 14.0902 24.1579 14.3853 24.1661L20.7361 24.3431H20.7512C21.0403 24.3428 21.2769 24.1096 21.285 23.8169C21.2915 23.5818 21.274 23.3465 21.2333 23.1151L25.5251 21.0613L25.5376 21.0552C26.1465 20.743 26.8829 20.8473 27.3835 21.3167L18.3744 27.2178Z\"\n                      fill=\"#23d5ab\" />\n                  </svg>\n                  {{offer}}%\n                </p>\n\n                <p id=\"offer\" style=\"font-size: smaller;margin-left: 8%;\">\n                  <svg width=\"20\" height=\"18\" viewBox=\"0 0 29 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path\n                      d=\"M18.9116 3.42642V1.81135H20.5929V0.22644H15.5488V1.81135H17.2302V3.42642C14.4736 3.62501 12.0001 4.79208 10.1921 6.56606H3.66697V8.15044H8.86504C8.52445 8.65143 8.22897 9.18153 7.98298 9.73587H1.98559V11.3202H7.43614C7.30667 11.8354 7.21773 12.3647 7.1739 12.9057H0.304199V14.4906H7.17384C7.21773 15.0316 7.30662 15.5609 7.43608 16.0755H1.98559V17.6604H7.98298C8.22891 18.2147 8.52445 18.7448 8.86504 19.2453H3.66697V20.8302H10.1921C12.1821 22.7828 14.9784 24 18.0709 24C24.0971 24 28.9999 19.3786 28.9999 13.6981C28.9999 8.28426 24.5466 3.83242 18.9116 3.42642ZM27.2799 14.4906C26.8787 18.666 23.3412 22.0006 18.9116 22.3787V20.8302H17.2302V22.3787C12.8005 22.0006 9.26297 18.666 8.86184 14.4906H10.5046V12.9057H8.86184C9.26297 8.73025 12.8005 5.39566 17.2302 5.01756V6.56606H18.9116V5.01756C23.3412 5.39566 26.8787 8.73025 27.2799 12.9057H25.6371V14.4906H27.2799Z\"\n                      fill=\"#23d5ab\" />\n                    <path\n                      d=\"M15.5488 13.6981C15.5488 15.009 16.6802 16.0755 18.0709 16.0755C19.0607 16.0755 19.9634 15.5259 20.3705 14.6754L23.1146 8.94385L17.0341 11.5305C16.1318 11.9144 15.5488 12.7652 15.5488 13.6981ZM17.7258 12.9751L19.7527 12.1128L18.838 14.0235C18.7021 14.3072 18.401 14.4906 18.0709 14.4906C17.6074 14.4906 17.2302 14.1351 17.2302 13.6981C17.2302 13.387 17.4248 13.1032 17.7258 12.9751Z\"\n                      fill=\"#23d5ab\" />\n                  </svg>\n                  {{Counter}}\n                </p>\n              </div>\n            </div>\n          </div>\n\n\n          <!--------------- Store Details -------------------->\n          <div class=\"row\">\n\n            <div *ngIf=\"storedetailsVisible\">\n              <div class=\"col-12 ion-text-center\">\n                <img id=\"product_img\" style=\"margin: 5px;\" src=\"{{storeLogo}}\" height=\"75px\" width=\"75px\" alt=\"\">\n              </div>\n              <div class=\"container\">\n                <p>We have served quality products and reliable service @ fair prices</p>\n                <p style=\"font-size: 12px;\">\n                  <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path\n                      d=\"M17.3802 13.4026H12.1973C11.5029 14.5013 10.7411 15.5558 9.91615 16.5602C9.09125 15.5558 8.32941 14.5013 7.63503 13.4026H2.45214L0 19.8316H19.8323L17.3802 13.4026Z\"\n                      fill=\"#DFEEF4\" />\n                    <path\n                      d=\"M9.91611 0C8.51624 4.55814e-05 7.17371 0.556163 6.18385 1.54602C5.19399 2.53588 4.63788 3.87841 4.63783 5.27828C4.60689 10.3142 9.91611 16.5602 9.91611 16.5602C9.91611 16.5602 15.2253 10.3142 15.1944 5.27828C15.1943 3.87841 14.6382 2.53588 13.6484 1.54602C12.6585 0.556163 11.316 4.55814e-05 9.91611 0ZM9.91611 7.51781C9.47317 7.51781 9.04018 7.38647 8.67189 7.14038C8.3036 6.8943 8.01656 6.54453 7.84705 6.13531C7.67755 5.72609 7.6332 5.2758 7.71961 4.84137C7.80602 4.40694 8.01932 4.0079 8.33252 3.69469C8.64573 3.38149 9.04477 3.16819 9.4792 3.08178C9.91363 2.99537 10.3639 3.03972 10.7731 3.20922C11.1824 3.37873 11.5321 3.66578 11.7782 4.03406C12.0243 4.40235 12.1556 4.83534 12.1556 5.27828C12.1558 5.57241 12.0979 5.86368 11.9854 6.13545C11.8729 6.40721 11.7079 6.65414 11.4999 6.86212C11.292 7.0701 11.045 7.23506 10.7733 7.34757C10.5015 7.46008 10.2102 7.51793 9.91611 7.51781Z\"\n                      fill=\"#F45858\" />\n                    <path\n                      d=\"M17.9497 14.893L8.05316 18.413L4.19629 13.4028H7.63551C8.32972 14.5014 9.09144 15.5559 9.91629 16.5601C10.7411 15.5559 11.5029 14.5014 12.1971 13.4028H17.3808L17.9497 14.893Z\"\n                      fill=\"#F2DA30\" />\n                    <path d=\"M4.06543 19.8316L13.8616 16.347L16.5436 19.8316H4.06543Z\" fill=\"#3EA2E5\" />\n                  </svg>\n                  15, Ganapathy, Sivasakthi Colony, Ganapathy, Coimbatore, Tamil Nadu 641006\n                </p>\n              </div>\n\n            </div>\n            <div class=\"col-12 ion-text-left mt-2 mb-2\">\n              <p *ngIf=\"productDetails\" style=\"font-size:10px;margin-left:5% !important;\">\n                Ginger adds flavor to foods and can relieve nausea and irritation and reduce ...</p>\n\n            </div>\n\n            <div class=\"col-6 mt-2 mb-2\">\n              <button (click)=\"showPopup()\" *ngIf=\"storedetailsVisible\" class=\"btn btn-sm report-seller-btn\"><svg\n                  width=\"20\" height=\"18\" viewBox=\"0 0 20 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path\n                    d=\"M19.6812 14.4165L12.0367 1.17586C11.6116 0.439608 10.8502 0 9.99998 0C9.14979 0 8.38838 0.439608 7.96331 1.17586L0.318837 14.4165C-0.106279 15.1528 -0.106279 16.0319 0.318837 16.7682C0.743953 17.5045 1.50528 17.9441 2.35551 17.9441H17.6445C18.4946 17.9441 19.256 17.5045 19.6812 16.7683C20.1063 16.0319 20.1063 15.1528 19.6812 14.4165ZM18.6664 16.1824C18.4531 16.5519 18.0711 16.7724 17.6445 16.7724H2.35551C1.92887 16.7724 1.54684 16.5519 1.33356 16.1824C1.12028 15.813 1.12028 15.3719 1.33356 15.0024L8.97811 1.76175C9.19139 1.3923 9.57342 1.17175 10 1.17175C10.4266 1.17175 10.8087 1.3923 11.0219 1.76175L18.6664 15.0024C18.8797 15.3719 18.8797 15.813 18.6664 16.1824Z\"\n                    fill=\"white\" />\n                  <path d=\"M10.5858 5.84747H9.41406V11.7061H10.5858V5.84747Z\" fill=\"white\" />\n                  <path\n                    d=\"M9.99992 12.8779C9.56918 12.8779 9.21875 13.2283 9.21875 13.6591C9.21875 14.0898 9.56918 14.4402 9.99992 14.4402C10.4306 14.4402 10.7811 14.0898 10.7811 13.6591C10.7811 13.2283 10.4307 12.8779 9.99992 12.8779Z\"\n                    fill=\"white\" />\n                </svg>\n                Report Seller</button>\n            </div>\n            <div *ngIf=\"storedetailsVisible\" class=\"col-6 mt-1\">\n              <img style=\"height:35px;width:35px; color: #23d5ab;\" src=\"assets/icon/delivery.png\" alt=\"\">\n            </div>\n\n          </div>\n\n          <!------------- Social icons ------------------>\n          <div id=\"social-media-icon-div\">\n            <div class=\"row\">\n              <div class=\"col-3\">\n                <a href=\"{{websiteLink}}\">\n                  <svg style=\"margin: 10px;\" width=\"30\" height=\"35\" viewBox=\"0 0 36 36\" fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\">\n                    <path\n                      d=\"M36 18C36 18.1847 35.9969 18.3663 35.9906 18.5478C35.9124 21.3393 35.1801 24.0735 33.8525 26.5304C33.6522 26.903 33.4393 27.2692 33.2108 27.6261C31.0424 31.0502 27.7837 33.644 23.9603 34.9889C22.2187 35.6002 20.3929 35.9382 18.5478 35.9906C18.3663 35.9969 18.1847 36 18 36C17.8153 36 17.6337 35.9969 17.4522 35.9906C15.6071 35.9382 13.7813 35.6002 12.0397 34.9889C8.21632 33.644 4.95758 31.0502 2.78922 27.6261C2.5607 27.2692 2.34783 26.903 2.14748 26.5304C0.819938 24.0735 0.0876035 21.3393 0.00939137 18.5478C0.0031305 18.3663 0 18.1847 0 18C0 17.8153 0.0031305 17.6337 0.00939137 17.4522C0.0876035 14.6607 0.819938 11.9265 2.14748 9.46957C2.34783 9.09704 2.5607 8.73078 2.78922 8.37391C4.95758 4.94977 8.21632 2.35601 12.0397 1.01113C13.7813 0.399761 15.6071 0.0618426 17.4522 0.00939137C17.6337 0.0031305 17.8153 0 18 0C18.1847 0 18.3663 0.0031305 18.5478 0.00939137C20.3929 0.0618426 22.2187 0.399761 23.9603 1.01113C27.7837 2.35601 31.0424 4.94977 33.2108 8.37391C33.4393 8.73078 33.6522 9.09704 33.8525 9.46957C35.1801 11.9265 35.9124 14.6607 35.9906 17.4522C35.9969 17.6337 36 17.8153 36 18Z\"\n                      fill=\"#85C646\" />\n                    <path\n                      d=\"M35.9906 18.5478C35.9969 18.3663 36 18.1847 36 18C36 17.8153 35.9969 17.6337 35.9906 17.4522H28.4431C28.4198 14.7653 28.106 12.0889 27.5071 9.46957H33.8525C33.6522 9.09704 33.4393 8.73078 33.2108 8.37391H27.2317C26.5732 5.74963 25.4665 3.25876 23.9603 1.01113C23.3681 0.802708 22.7652 0.626108 22.1541 0.482087C23.8226 2.37913 25.1781 5.09948 26.0953 8.37391H18.5478V0.00939137C18.3663 0.0031305 18.1847 0 18 0C17.8153 0 17.6337 0.0031305 17.4522 0.00939137V8.37391H9.9047C10.8219 5.09948 12.1774 2.37913 13.8459 0.482087C13.2348 0.626108 12.6319 0.802708 12.0397 1.01113C10.5335 3.25876 9.42678 5.74963 8.76835 8.37391H2.78922C2.5607 8.73078 2.34783 9.09704 2.14748 9.46957H8.49287C7.894 12.0889 7.58017 14.7653 7.55687 17.4522H0.00939137C0.0031305 17.6337 0 17.8153 0 18C0 18.1847 0.0031305 18.3663 0.00939137 18.5478H7.55687C7.58017 21.2347 7.894 23.9111 8.49287 26.5304H2.14748C2.34783 26.903 2.5607 27.2692 2.78922 27.6261H8.76835C9.42554 30.2508 10.5323 32.7419 12.0397 34.9889C12.6319 35.1973 13.2348 35.3739 13.8459 35.5179C12.1774 33.6209 10.8219 30.9005 9.9047 27.6261H17.4522V35.9906C17.6337 35.9969 17.8153 36 18 36C18.1847 36 18.3663 35.9969 18.5478 35.9906V27.6261H26.0953C25.1781 30.9005 23.8226 33.6209 22.1541 35.5179C22.7652 35.3739 23.3681 35.1973 23.9603 34.9889C25.4689 32.7426 26.5758 30.2513 27.2317 27.6261H33.2108C33.4393 27.2692 33.6522 26.903 33.8525 26.5304H27.5071C28.106 23.9111 28.4198 21.2347 28.4431 18.5478H35.9906ZM17.4522 26.5304H9.62296C9.00202 23.9142 8.67651 21.2366 8.65252 18.5478H17.4522V26.5304ZM17.4522 17.4522H8.65252C8.6767 14.7634 9.00221 12.0858 9.62296 9.46957H17.4522V17.4522ZM26.377 26.5304H18.5478V18.5478H27.3475C27.3233 21.2366 26.9978 23.9142 26.377 26.5304ZM18.5478 17.4522V9.46957H26.377C26.998 12.0858 27.3235 14.7634 27.3475 17.4522H18.5478Z\"\n                      fill=\"#6A9E38\" />\n                    <path d=\"M3.52197 13.1478H32.4785V22.8522H3.52197V13.1478Z\" fill=\"#E4E4E4\" />\n                    <path\n                      d=\"M7.29199 15.6913H8.21265L9.20062 18.998L10.2963 15.6913H11.2104L12.2991 18.998L13.2871 15.6913H14.2077L12.7493 20.3087H11.9094L10.7533 16.8812L9.59067 20.3087H8.75735L7.29199 15.6913Z\"\n                      fill=\"#6A9E38\" />\n                    <path\n                      d=\"M14.542 15.6913H15.4642L16.4522 18.998L17.5478 15.6913H18.4619L19.5507 18.998L20.5355 15.6913H21.4562L19.9977 20.3087H19.1581L18.0033 16.8812L16.8416 20.3087H16.007L14.542 15.6913Z\"\n                      fill=\"#6A9E38\" />\n                    <path\n                      d=\"M21.7925 15.6913H22.7131L23.7011 18.998L24.7968 15.6913H25.7108L26.7996 18.998L27.7876 15.6913H28.7082L27.2498 20.3087H26.4096L25.2535 16.8812L24.0912 20.3087H23.2575L21.7925 15.6913Z\"\n                      fill=\"#6A9E38\" />\n                  </svg>\n                </a>\n\n              </div>\n              <div class=\"col-3\">\n                <a href=\"{{whatsApp}}\">\n                  <svg style=\"margin: 10px;\" width=\"40\" height=\"35\" viewBox=\"0 0 40 41\" fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\">\n                    <path\n                      d=\"M0.854827 40.8334C0.629238 40.8334 0.409779 40.7446 0.247024 40.5807C0.0324696 40.3646 -0.0502871 40.0509 0.0303241 39.7576L2.64207 30.2618C1.01605 27.3342 0.15875 24.0225 0.159976 20.6606C0.164574 9.72772 9.10046 0.833374 20.0801 0.833374C25.4057 0.83551 30.4097 2.90094 34.1709 6.6485C37.9314 10.3964 40.0015 15.3784 40 20.6765C39.9951 31.6097 31.0592 40.5047 20.0801 40.5047C20.0801 40.5047 20.0719 40.5047 20.0716 40.5047C16.8646 40.5035 13.6852 39.7253 10.8543 38.2513L1.07153 40.8056C0.999804 40.8242 0.926856 40.8334 0.854827 40.8334Z\"\n                      fill=\"#E5E5E5\" />\n                    <path\n                      d=\"M0.85498 39.9823L3.55959 30.1486C1.89128 27.2705 1.01375 24.0057 1.01498 20.661C1.01927 10.1974 9.57141 1.68457 20.0803 1.68457C25.18 1.68671 29.9667 3.66303 33.5663 7.25006C37.1656 10.8371 39.1471 15.6052 39.1453 20.6763C39.1407 31.1395 30.5873 39.6536 20.0803 39.6536C20.0797 39.6536 20.0806 39.6536 20.0803 39.6536H20.072C16.8813 39.6524 13.7463 38.8556 10.9617 37.3434L0.85498 39.9823ZM11.4298 33.9081L12.0088 34.2496C14.4412 35.687 17.2301 36.4471 20.0742 36.4487H20.0803C28.8139 36.4487 35.9224 29.3723 35.9261 20.6751C35.9276 16.4603 34.281 12.4969 31.2892 9.51569C28.2971 6.53442 24.319 4.89166 20.0861 4.88983C11.3455 4.88983 4.23728 11.9653 4.23391 20.6622C4.23268 23.6426 5.07006 26.5448 6.65654 29.0564L7.03354 29.6533L5.43235 35.4736L11.4298 33.9081Z\"\n                      fill=\"white\" />\n                    <path\n                      d=\"M1.51758 39.3197L4.12871 29.826C2.51771 27.0477 1.67083 23.8955 1.67175 20.6671C1.67574 10.5657 9.9321 2.34766 20.0765 2.34766C25.0003 2.34979 29.6215 4.25775 33.0957 7.72058C36.5709 11.1834 38.4835 15.7864 38.4817 20.6814C38.4774 30.783 30.2207 39.002 20.0775 39.002C20.0765 39.002 20.0778 39.002 20.0775 39.002H20.0692C16.9891 39.0008 13.9624 38.2311 11.2743 36.7724L1.51758 39.3197Z\"\n                      fill=\"#64B161\" />\n                    <path\n                      d=\"M0.85498 39.9823L3.55959 30.1486C1.89128 27.2705 1.01375 24.0057 1.01498 20.661C1.01927 10.1974 9.57141 1.68457 20.0803 1.68457C25.18 1.68671 29.9667 3.66303 33.5663 7.25006C37.1656 10.8371 39.1471 15.6052 39.1453 20.6763C39.1407 31.1395 30.5873 39.6536 20.0803 39.6536C20.0797 39.6536 20.0806 39.6536 20.0803 39.6536H20.072C16.8813 39.6524 13.7463 38.8556 10.9617 37.3434L0.85498 39.9823ZM11.4298 33.9081L12.0088 34.2496C14.4412 35.687 17.2301 36.4471 20.0742 36.4487H20.0803C28.8139 36.4487 35.9224 29.3723 35.9261 20.6751C35.9276 16.4603 34.281 12.4969 31.2892 9.51569C28.2971 6.53442 24.319 4.89166 20.0861 4.88983C11.3455 4.88983 4.23728 11.9653 4.23391 20.6622C4.23268 23.6426 5.07006 26.5448 6.65654 29.0564L7.03354 29.6533L5.43235 35.4736L11.4298 33.9081Z\"\n                      fill=\"white\" />\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                      d=\"M15.3154 12.7277C14.9586 11.9379 14.5828 11.922 14.2432 11.9083C13.9655 11.8964 13.6477 11.897 13.3304 11.897C13.0129 11.897 12.4967 12.016 12.0603 12.4905C11.6235 12.9651 10.3926 14.1126 10.3926 16.4462C10.3926 18.7802 12.0998 21.0352 12.338 21.3519C12.5761 21.6684 15.6335 26.6104 20.4754 28.5117C24.4995 30.0919 25.3182 29.7775 26.1918 29.6985C27.0653 29.6195 29.0101 28.551 29.407 27.4435C29.8042 26.3361 29.8042 25.387 29.685 25.1883C29.5658 24.9909 29.2482 24.8721 28.7719 24.635C28.2956 24.3979 25.9536 23.2501 25.5168 23.092C25.0801 22.9337 24.7625 22.8549 24.445 23.3298C24.1271 23.804 23.215 24.8721 22.937 25.1883C22.659 25.5054 22.381 25.545 21.9047 25.3076C21.4283 25.0699 19.894 24.5694 18.0739 22.9535C16.6579 21.6965 15.7016 20.1437 15.4236 19.6689C15.1459 19.1946 15.419 18.9603 15.6329 18.7012C16.0182 18.2346 16.6646 17.3956 16.8234 17.0795C16.9822 16.7627 16.9028 16.4859 16.7839 16.2485C16.6646 16.0114 15.7387 13.6658 15.3154 12.7277Z\"\n                      fill=\"white\" />\n                  </svg>\n                </a>\n\n              </div>\n              <div class=\"col-3\">\n                <a href=\"contact\">\n                  <svg style=\"margin: 10px;\" width=\"30\" height=\"35\" viewBox=\"0 0 36 36\" fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\">\n                    <path\n                      d=\"M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z\"\n                      fill=\"#007CFF\" />\n                    <path\n                      d=\"M27 21.7215C25.0583 21.7215 23.2065 21.2985 21.4988 20.4638C21.231 20.3355 20.9205 20.3152 20.637 20.412C20.3535 20.511 20.1218 20.718 19.9913 20.9857L19.1812 22.662C16.7512 21.267 14.7352 19.2487 13.338 16.8187L15.0165 16.0087C15.2865 15.8782 15.4912 15.6465 15.5903 15.363C15.687 15.0795 15.669 14.769 15.5385 14.5013C14.7015 12.7958 14.2785 10.944 14.2785 9C14.2785 8.379 13.7745 7.875 13.1535 7.875H9C8.379 7.875 7.875 8.379 7.875 9C7.875 19.5457 16.4543 28.125 27 28.125C27.621 28.125 28.125 27.621 28.125 27V22.8465C28.125 22.2255 27.621 21.7215 27 21.7215Z\"\n                      fill=\"white\" />\n                  </svg>\n                </a>\n\n              </div>\n              <div class=\"col-3\">\n                <a href=\"instagram\">\n                  <svg style=\"margin: 10px;\" width=\"30\" height=\"35\" viewBox=\"0 0 38 37\" fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\">\n                    <g clip-path=\"url(#clip0_1172:10)\">\n                      <path\n                        d=\"M12.6672 18.5C12.6672 17.2803 13.0386 16.0881 13.7346 15.074C14.4305 14.0599 15.4197 13.2695 16.577 12.8027C17.7343 12.336 19.0078 12.2139 20.2364 12.4518C21.465 12.6898 22.5935 13.2771 23.4793 14.1395C24.365 15.0019 24.9682 16.1007 25.2126 17.2969C25.457 18.4932 25.3316 19.7331 24.8522 20.8599C24.3728 21.9867 23.561 22.9498 22.5195 23.6274C21.4779 24.305 20.2534 24.6667 19.0007 24.6667C17.321 24.6667 15.71 24.017 14.5222 22.8605C13.3344 21.704 12.6672 20.1355 12.6672 18.5ZM9.24293 18.5C9.24293 20.3788 9.81512 22.2154 10.8872 23.7776C11.9592 25.3397 13.4829 26.5573 15.2656 27.2764C17.0484 27.9954 19.0101 28.1836 20.9027 27.8171C22.7952 27.4507 24.5337 26.546 25.8983 25.2176C27.2628 23.8892 28.1921 22.1966 28.5687 20.3539C28.9453 18.5113 28.7522 16.6013 28.014 14.8654C27.2757 13.1296 26.0253 11.6459 24.421 10.6019C22.8166 9.55797 20.9304 9.00065 19.0007 9.00043C17.7195 9.00038 16.4507 9.24607 15.267 9.72345C14.0832 10.2008 13.0076 10.9006 12.1016 11.7827C11.1956 12.6648 10.4769 13.7121 9.98663 14.8646C9.49633 16.0172 9.244 17.2525 9.24405 18.5H9.24293ZM26.8618 8.6239C26.8617 9.06298 26.9953 9.49223 27.2457 9.85739C27.4961 10.2225 27.8521 10.5072 28.2687 10.6754C28.6853 10.8435 29.1437 10.8876 29.586 10.8021C30.0283 10.7166 30.4347 10.5053 30.7537 10.1949C31.0726 9.88455 31.2899 9.48905 31.3781 9.05844C31.4662 8.62783 31.4212 8.18145 31.2487 7.77574C31.0763 7.37003 30.7842 7.02322 30.4093 6.77917C30.0344 6.53511 29.5936 6.40477 29.1427 6.40463C28.5382 6.40492 27.9585 6.6388 27.531 7.05491C27.1035 7.47102 26.8631 8.03534 26.8626 8.6239H26.8618ZM11.3259 33.5586C10.121 33.5452 8.92736 33.33 7.79738 32.9224C6.97211 32.6254 6.22543 32.1526 5.61193 31.5385C4.98031 30.9425 4.49453 30.2157 4.1906 29.4121C3.77124 28.312 3.54967 27.1499 3.53563 25.9765C3.44361 24.0264 3.42386 23.4406 3.42386 18.5004C3.42386 13.5601 3.44361 12.9758 3.53563 11.0242C3.55077 9.85111 3.77177 8.68918 4.18911 7.58863C4.49415 6.7851 4.97976 6.0581 5.61044 5.46076C6.22287 4.84545 6.96986 4.37243 7.79589 4.07689C8.92627 3.66879 10.1204 3.45344 11.3259 3.44027C13.3288 3.35068 13.9305 3.33145 19.0007 3.33145C24.071 3.33145 24.6749 3.35068 26.6793 3.44027C27.8841 3.45501 29.0775 3.67019 30.2078 4.07653C31.0334 4.37299 31.7802 4.84587 32.3933 5.4604C33.0245 6.05734 33.5101 6.78446 33.8146 7.58826C34.2335 8.68842 34.4545 9.8506 34.4681 11.0238C34.5601 12.9754 34.5799 13.5598 34.5799 18.5C34.5799 23.4402 34.5616 24.0246 34.4681 25.9762C34.4535 27.1493 34.2325 28.3113 33.8146 29.4117C33.4984 30.2096 33.0141 30.9341 32.3929 31.5387C31.7717 32.1432 31.0274 32.6145 30.2078 32.922C29.0779 33.3298 27.8843 33.5451 26.6793 33.5583C24.6764 33.6479 24.0747 33.6671 19.0007 33.6671C13.9268 33.6671 13.3266 33.6493 11.3259 33.5583V33.5586ZM11.1672 0.112088C9.59104 0.142448 8.03158 0.433021 6.55526 0.971431C5.28728 1.43599 4.13856 2.16412 3.18914 3.1051C2.2217 4.02863 1.47359 5.14715 0.997353 6.38214C0.444504 7.8197 0.146193 9.33818 0.115122 10.8729C0.0216087 12.8455 0 13.476 0 18.5C0 23.524 0.0216087 24.1545 0.115122 26.1271C0.14634 27.6617 0.444777 29.1801 0.997725 30.6175C1.47395 31.8525 2.22191 32.9711 3.18914 33.8949C4.13888 34.8354 5.28733 35.5636 6.55488 36.0289C8.03127 36.5671 9.59069 36.8577 11.1668 36.8883C13.194 36.9779 13.8404 37.0004 19.0004 37.0004C24.1604 37.0004 24.8079 36.9793 26.8339 36.8883C28.4101 36.8579 29.9695 36.5673 31.4459 36.0289C32.7084 35.5537 33.8549 34.8268 34.812 33.895C35.7691 32.9631 36.5157 31.8467 37.0038 30.6175C37.5574 29.1803 37.8559 27.6618 37.8864 26.1271C37.9784 24.153 37.9981 23.524 37.9981 18.5C37.9981 13.476 37.9765 12.8455 37.8864 10.8729C37.8552 9.33827 37.5568 7.8199 37.0038 6.3825C36.5259 5.14828 35.7782 4.02998 34.8123 3.1051C33.864 2.16366 32.7158 1.43533 31.4481 0.971069C29.9717 0.432382 28.4121 0.14192 26.8358 0.112088C24.8101 0.0224902 24.1622 0 19.0007 0C13.8392 0 13.1925 0.0210392 11.1657 0.112088\"\n                        fill=\"url(#paint0_radial_1172:10)\" />\n                      <path\n                        d=\"M12.6672 18.5C12.6672 17.2803 13.0386 16.0881 13.7346 15.074C14.4305 14.0599 15.4197 13.2695 16.577 12.8027C17.7343 12.336 19.0078 12.2139 20.2364 12.4518C21.465 12.6898 22.5935 13.2771 23.4793 14.1395C24.365 15.0019 24.9682 16.1007 25.2126 17.2969C25.457 18.4932 25.3316 19.7331 24.8522 20.8599C24.3728 21.9867 23.561 22.9498 22.5195 23.6274C21.4779 24.305 20.2534 24.6667 19.0007 24.6667C17.321 24.6667 15.71 24.017 14.5222 22.8605C13.3344 21.704 12.6672 20.1355 12.6672 18.5ZM9.24293 18.5C9.24293 20.3788 9.81512 22.2154 10.8872 23.7776C11.9592 25.3397 13.4829 26.5573 15.2656 27.2764C17.0484 27.9954 19.0101 28.1836 20.9027 27.8171C22.7952 27.4507 24.5337 26.546 25.8983 25.2176C27.2628 23.8892 28.1921 22.1966 28.5687 20.3539C28.9453 18.5113 28.7522 16.6013 28.014 14.8654C27.2757 13.1296 26.0253 11.6459 24.421 10.6019C22.8166 9.55797 20.9304 9.00065 19.0007 9.00043C17.7195 9.00038 16.4507 9.24607 15.267 9.72345C14.0832 10.2008 13.0076 10.9006 12.1016 11.7827C11.1956 12.6648 10.4769 13.7121 9.98663 14.8646C9.49633 16.0172 9.244 17.2525 9.24405 18.5H9.24293ZM26.8618 8.6239C26.8617 9.06298 26.9953 9.49223 27.2457 9.85739C27.4961 10.2225 27.8521 10.5072 28.2687 10.6754C28.6853 10.8435 29.1437 10.8876 29.586 10.8021C30.0283 10.7166 30.4347 10.5053 30.7537 10.1949C31.0726 9.88455 31.2899 9.48905 31.3781 9.05844C31.4662 8.62783 31.4212 8.18145 31.2487 7.77574C31.0763 7.37003 30.7842 7.02322 30.4093 6.77917C30.0344 6.53511 29.5936 6.40477 29.1427 6.40463C28.5382 6.40492 27.9585 6.6388 27.531 7.05491C27.1035 7.47102 26.8631 8.03534 26.8626 8.6239H26.8618ZM11.3259 33.5586C10.121 33.5452 8.92736 33.33 7.79738 32.9224C6.97211 32.6254 6.22543 32.1526 5.61193 31.5385C4.98031 30.9425 4.49453 30.2157 4.1906 29.4121C3.77124 28.312 3.54967 27.1499 3.53563 25.9765C3.44361 24.0264 3.42386 23.4406 3.42386 18.5004C3.42386 13.5601 3.44361 12.9758 3.53563 11.0242C3.55077 9.85111 3.77177 8.68918 4.18911 7.58863C4.49415 6.7851 4.97976 6.0581 5.61044 5.46076C6.22287 4.84545 6.96986 4.37243 7.79589 4.07689C8.92627 3.66879 10.1204 3.45344 11.3259 3.44027C13.3288 3.35068 13.9305 3.33145 19.0007 3.33145C24.071 3.33145 24.6749 3.35068 26.6793 3.44027C27.8841 3.45501 29.0775 3.67019 30.2078 4.07653C31.0334 4.37299 31.7802 4.84587 32.3933 5.4604C33.0245 6.05734 33.5101 6.78446 33.8146 7.58826C34.2335 8.68842 34.4545 9.8506 34.4681 11.0238C34.5601 12.9754 34.5799 13.5598 34.5799 18.5C34.5799 23.4402 34.5616 24.0246 34.4681 25.9762C34.4535 27.1493 34.2325 28.3113 33.8146 29.4117C33.4984 30.2096 33.0141 30.9341 32.3929 31.5387C31.7717 32.1432 31.0274 32.6145 30.2078 32.922C29.0779 33.3298 27.8843 33.5451 26.6793 33.5583C24.6764 33.6479 24.0747 33.6671 19.0007 33.6671C13.9268 33.6671 13.3266 33.6493 11.3259 33.5583V33.5586ZM11.1672 0.112088C9.59104 0.142448 8.03158 0.433021 6.55526 0.971431C5.28728 1.43599 4.13856 2.16412 3.18914 3.1051C2.2217 4.02863 1.47359 5.14715 0.997353 6.38214C0.444504 7.8197 0.146193 9.33818 0.115122 10.8729C0.0216087 12.8455 0 13.476 0 18.5C0 23.524 0.0216087 24.1545 0.115122 26.1271C0.14634 27.6617 0.444777 29.1801 0.997725 30.6175C1.47395 31.8525 2.22191 32.9711 3.18914 33.8949C4.13888 34.8354 5.28733 35.5636 6.55488 36.0289C8.03127 36.5671 9.59069 36.8577 11.1668 36.8883C13.194 36.9779 13.8404 37.0004 19.0004 37.0004C24.1604 37.0004 24.8079 36.9793 26.8339 36.8883C28.4101 36.8579 29.9695 36.5673 31.4459 36.0289C32.7084 35.5537 33.8549 34.8268 34.812 33.895C35.7691 32.9631 36.5157 31.8467 37.0038 30.6175C37.5574 29.1803 37.8559 27.6618 37.8864 26.1271C37.9784 24.153 37.9981 23.524 37.9981 18.5C37.9981 13.476 37.9765 12.8455 37.8864 10.8729C37.8552 9.33827 37.5568 7.8199 37.0038 6.3825C36.5259 5.14828 35.7782 4.02998 34.8123 3.1051C33.864 2.16366 32.7158 1.43533 31.4481 0.971069C29.9717 0.432382 28.4121 0.14192 26.8358 0.112088C24.8101 0.0224902 24.1622 0 19.0007 0C13.8392 0 13.1925 0.0210392 11.1657 0.112088\"\n                        fill=\"url(#paint1_radial_1172:10)\" />\n                    </g>\n                    <defs>\n                      <radialGradient id=\"paint0_radial_1172:10\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\"\n                        gradientTransform=\"translate(5.04861 37.1748) scale(49.6057 48.2984)\">\n                        <stop offset=\"0.09\" stop-color=\"#FA8F21\" />\n                        <stop offset=\"0.78\" stop-color=\"#D82D7E\" />\n                      </radialGradient>\n                      <radialGradient id=\"paint1_radial_1172:10\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\"\n                        gradientTransform=\"translate(23.0464 38.8322) scale(39.0961 38.0657)\">\n                        <stop offset=\"0.64\" stop-color=\"#8C3AAA\" stop-opacity=\"0\" />\n                        <stop offset=\"1\" stop-color=\"#8C3AAA\" />\n                      </radialGradient>\n                      <clipPath id=\"clip0_1172:10\">\n                        <rect width=\"38\" height=\"37\" fill=\"white\" />\n                      </clipPath>\n                    </defs>\n                  </svg>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n\n      <!--------------- Live offer card ------------------>\n      <div class=\"container\">\n        <div *ngIf=\"offerListVisible\" class=\"row mb-2\">\n          <div @slideup *ngFor=\"let offer of offerlist\" id=\"productCard\" class=\"col-6 ion-text-center\">\n            <div class=\"row mt-2\">\n              <!-- <div class=\"col-4\">\n                <img src=\"{{offer.store_logo}}\" style=\"margin:1px;\" height=\"19px\" width=\"19px\" alt=\"\">\n              </div> -->\n              <div class=\"col-12 ion-text-left\">\n                <span style=\"font-size: 14px;color:#404040;\"><b>{{offer.store_name}} </b></span>\n\n              </div>\n              <div (click)=\"singleCard(offer.tbid)\" class=\"col-9 ion-text-left mt-2\">\n                <img id=\"product_img\" src=\"{{offer.product_image}}\" alt=\"\">\n              </div>\n\n              <div class=\"col-3 mt-2\">\n                <!-- <div>\n                  <ion-icon  id=\"heart\" style=\"margin-left:3px\" (click)=\"selectedItem(product.tbid)\"\n                  [ngClass]=\"{'green' : toggle, 'red': !toggle}\" name=\"heart-sharp\"></ion-icon>\n                </div> -->\n                <div>\n                  <ion-badge style=\"margin-left: -5px;\" id=\"kg\">{{offer.offer}}{{offer.product_unit}}</ion-badge>\n                </div>\n              </div>\n\n              <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left mt-1\">\n                <p style=\"padding: 0; margin:0;color: #121212;font-size: 12px;\"><b>{{offer.product}}</b></p>\n              </div>\n              <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left \">\n\n                <p><span style=\"font-size:10px;color: #404040;text-decoration: line-through\">\n                    <i style=\"color:#23d5ab\" class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n                    Rs.{{offer.total_cost}}.00</span> <span style=\"margin: 3px;padding:0;font-size:13px;\">\n                    <b>{{offer.offer_price}}.00</b></span></p>\n              </div>\n              <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left\">\n                <p style=\"padding: 0; margin:0;color: #272A3F;font-size: 12px;\">\n                  <i style=\"color:#23d5ab\" class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n                  {{offer.other_offer}}\n                </p>\n              </div>\n              <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left \">\n                <p style=\"padding: 0; margin:0;color: #272A3F;font-size: 12px;\">\n                  <i style=\"color:#23d5ab\" class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                  {{offer.offer_time}}\n                </p>\n              </div>\n              <!-- <div style=\"margin-top: -18px;\" class=\"col-4 ion-text-left \">\n                <div class=\"dot\">\n                  <svg style=\"margin:8px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"#fff\"\n                    class=\"bi bi-share\" viewBox=\"0 0 16 16\">\n                    <path\n                      d=\"M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z\" />\n                  </svg>\n                </div>\n              </div> -->\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n\n  <!------------- live offers No data found Gif ------------------->\n  <div *ngIf=\"noDataFound\">\n    <lottie-player src=\"https://assets2.lottiefiles.com/packages/lf20_qlwqp9xi.json\" background=\"transparent\"\n      speed=\"1.5\" style=\"width:100%;margin:3%; margin-top: 15%;\" loop autoplay></lottie-player>\n  </div>\n\n  <div style=\"margin-top: -5%;\" class=\"row\">\n    <div class=\"col-12 mt-2\">\n      <h6 style=\"color: #272A3F;margin-left:5%;\"> Expired Offers</h6>\n    </div>\n\n    <!--------------- Expiry offer card ------------------>\n    <div class=\"container\">\n      <div *ngIf=\"offerListVisible\" class=\"row mb-2\">\n        <div @slideup *ngFor=\"let offer of expiryofferlist\" id=\"productCard\" class=\"col-6 ion-text-center\">\n          <div class=\"row mt-2\">\n            <!-- <div class=\"col-4\">\n              <img src=\"{{offer.store_logo}}\" style=\"margin:1px;\" height=\"19px\" width=\"19px\" alt=\"\">\n            </div> -->\n            <div class=\"col-12 ion-text-left\">\n              <span style=\"font-size: 14px;color:#404040;\"><b>{{offer.store_name}} </b></span>\n\n            </div>\n            <div (click)=\"singleCard(offer.tbid)\" class=\"col-9 ion-text-left mt-2\">\n              <img id=\"product_img\" src=\"{{offer.product_image}}\" alt=\"\">\n            </div>\n\n            <div class=\"col-3 mt-2\">\n              <!-- <div>\n                <ion-icon  id=\"heart\" style=\"margin-left:3px\" (click)=\"selectedItem(product.tbid)\"\n                [ngClass]=\"{'green' : toggle, 'red': !toggle}\" name=\"heart-sharp\"></ion-icon>\n              </div> -->\n              <div>\n                <ion-badge style=\"margin-left: -5px;\" id=\"kg\">{{offer.offer}}{{offer.product_unit}}</ion-badge>\n              </div>\n            </div>\n\n            <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left mt-1\">\n              <p style=\"padding: 0; margin:0;color: #121212;font-size: 12px;\"><b>{{offer.product}}</b></p>\n            </div>\n            <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left \">\n\n              <p><span style=\"font-size:10px;color: #404040;text-decoration: line-through\">\n                  <i style=\"color:#23d5ab\" class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n                  Rs.{{offer.total_cost}}.00</span> <span style=\"margin: 3px;padding:0;font-size:13px;\">\n                  <b>{{offer.offer_price}}.00</b></span></p>\n            </div>\n            <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left\">\n              <p style=\"padding: 0; margin:0;color: #272A3F;font-size: 12px;\">\n                <i style=\"color:#23d5ab\" class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n                {{offer.other_offer}}\n              </p>\n            </div>\n            <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left \">\n              <p style=\"padding: 0; margin:0;color: #272A3F;font-size: 12px;\">\n                <i style=\"color:#23d5ab\" class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                {{offer.offer_time}}\n              </p>\n            </div>\n            <!-- <div style=\"margin-top: -18px;\" class=\"col-4 ion-text-left \">\n              <div class=\"dot\">\n                <svg style=\"margin:8px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"#fff\"\n                  class=\"bi bi-share\" viewBox=\"0 0 16 16\">\n                  <path\n                    d=\"M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z\" />\n                </svg>\n              </div>\n            </div> -->\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n\n<!-- <button (click)=\"testSlide()\">click</button> -->\n\n  <!------------- Expiry No data found Gif ------------------->\n  <div *ngIf=\"ExpirynoDataFound\">\n    <lottie-player src=\"https://assets2.lottiefiles.com/packages/lf20_qlwqp9xi.json\" background=\"transparent\"\n      speed=\"1.5\" style=\"width:100%;margin:3%; margin-top: 15%;\" loop autoplay></lottie-player>\n  </div>\n\n\n  <!-- <button (click)=\"testSlide()\">Slide</button> -->\n</ion-content>\n\n<!----- Single product details card Pop-Up ----->\n<div @fadein *ngIf=\"popUpisvisible\" class=\"container\">\n  <div class=\"card pop-up-card \">\n    <div class=\"container\">\n      <div style=\"font-size: 13px;\" class=\"row\">\n        <div class=\"col-10\">\n          <h5>Report Seller</h5>\n        </div>\n        <div class=\"col-2\">\n          <ion-icon (click)=\"hidepopup()\" style=\"margin:15px;cursor:pointer;color:#eb154b\" name=\"close\"></ion-icon>\n        </div>\n        <div class=\"col-4\">\n          <input type=\"checkbox\" (change)=\"spam()\" [(ngModel)]=\"spamMsg\"> Spam Msg\n        </div>\n        <div class=\"col-4\">\n          <input type=\"checkbox\" (change)=\"storeNA()\" [(ngModel)]=\"storeNa\"> store NA\n        </div>\n        <div class=\"col-4\">\n          <input type=\"checkbox\" (change)=\"OfferDenaid()\" [(ngModel)]=\"offerDenaid\"> Offer Denaid\n        </div>\n        <div class=\"col-12 ion-text-center mt-3\">\n          <p>Others:</p>\n        </div>\n        <div class=\"col-12 ion-text-center\">\n          <input [(ngModel)]=\"other\" type=\"text\">\n          <button (click)=\"reportSeller()\" class=\"btn btn-sm submit-btn\">Submit</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_folder_folder_module_ts-es5.js.map
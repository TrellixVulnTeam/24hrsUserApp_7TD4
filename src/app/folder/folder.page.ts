import { Component, OnDestroy, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ThemeService } from '../darkmode/theme.service';
import { trigger, style, state, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  
  //------------- Animations ----------//
  animations: [
    trigger('fadein', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('900ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slidelefttitle', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(150%)' }),
        animate('900ms 300ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 },))
      ])
    ]),
    trigger('slideup', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(150%)' }),
        animate('400ms 200ms ease-out', style({ transform: 'translateY(0%)', opacity: 1 },))
      ])
    ])
  ]

})

export class FolderPage implements OnInit, OnDestroy {
  public folder: string;

  constructor(private theme: ThemeService, private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute, public popoverController: PopoverController) {
    route.params.subscribe(val => {
      
      this.offerList()
      this.locationList()
      // this.expiryOfferList()
    });
  }

  ngOnInit() {
    this.getSelectCategory()
    this.offerList()
    this.start()
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  ngOnDestroy() { this.clearTimer(); }

  intervalId = 0;
  Counter = '';
  seconds = 11;
  hour = 1;

  city:any = "coimbatore";

  clearTimer() { clearInterval(this.intervalId); }
  start() { this.countDown(); }
  stop() {
    this.clearTimer();
    this.Counter = `$ ${this.hour} {this.seconds} `;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.Counter = 'Offers Ends..!';
      } else {
        if (this.seconds < 0) { this.seconds = 60; } // reset
        this.Counter = `${this.hour}. ${this.seconds} Hrs`;
      }
    }, 1000);
  }

  // userdetails: any = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
  slideName: any = 'Home';
  isvisible: any = false;
  deliveryAvilability: any;
  popUpisvisible: any = false;
  productDetails: any = true;
  storedetailsVisible: any = false;
  noDataFound: any = false;
  ExpirynoDataFound:any = true;
  offerListVisible: any = true;
  getCategoryList: any = [];
  offerlist: any = [];
  offerView: any = []
  storedetails: any = []
  storeTbid: any;
  storeLogo: any;
  storeName: any;
  productName: any;
  productImage: any;
  description: any;
  offer: any;
  totalPrice: any;
  offerPrice: any;
  offerTime: any;
  storeAddress: any;
  websiteLink: any;
  whatsApp: any;
  contact: any;
  instagram: any;
  others: any;
  storeID: any;
  spamMsg: any;
  storeNa: any;
  offerDenaid: any;
  spam_msg: any;
  store: any;
  offer_denied: any;
  locationChangeVisible:any = false;
  unit:any;

  hidepopup() {
    this.popUpisvisible = false;
  }
  showPopup() {
    this.popUpisvisible = true;

  }
  //--------------- Ion slide option ----------//
  slideOpts = {
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  }

  // ----------- spam report -----------//
  spam(val) {
    console.log(this.spamMsg);
    if (this.spamMsg == true) {
      this.spam_msg = "spam Msg"
    } else {
      this.spam_msg = ""
    }

  }

  // ----------- storeNA report -----------//
  storeNA(val) {
    if (this.store == true) {
      this.store = "store NA"
    } else {
      this.store = ""
    }
  }

  // ----------- OfferDenaid report -----------//
  OfferDenaid(val) {
    if (this.store == true) {
      this.offer_denied = "offer Denaid"
    } else {
      this.offer_denied = ""
    }
  }


  // ----------- Seller report Api call -----------//
  reportSeller() {
    const obj = {
      store_name: this.storeID,
      spam_msg: this.spam_msg,
      store: this.store,
      offer_denied: this.offer_denied,
      others: this.others
    }

    this.http.post('/seller_report', obj).subscribe((response: any) => {
      console.log(response);
      if (response.success == "true") {
        this.others = ''
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Report Successfully'
        })
        this.popUpisvisible = false
      }

    }, (error: any) => {
      console.log(error);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'error',
        title: 'Something Went Wrong'
      })
    });
  }


  //------------- Read one Offer(card) Api call ------------//
  singleCard(tbid) {
    this.deliveryAvilability = ''
    const o = tbid
    this.isvisible = true;
    this.storedetailsVisible = false
    this.productDetails = true
    this.http.get('/readone_offer_user?o=' + o).subscribe((response: any) => {
      if (response.success == "true") {
        this.storeTbid = response.records.tbid
        this.storeLogo = response.records.store_logo
        this.storeName = response.records.store_name
        this.productName = response.records.product
        this.productImage = response.records.product_image
        this.description = response.records.description
        this.offer = response.records.offer
        this.totalPrice = response.records.total_cost
        this.offerPrice = response.records.offer_price
        this.offerTime = response.records.offer_time,
        this.unit = response.records.product_unit
      }

    }, (error: any) => {
      console.log(error);
    });
  }


  //---------------Get Store Details  Api call -------------//
  storeDetails(storename) {
    this.storedetailsVisible = true;
    this.productDetails = false;
    const obj = {
      store_name: storename
    }
    this.http.post('/store_details_user', obj).subscribe((response: any) => {
      this.storedetails = response.records;
      console.log(this.storedetails);
      this.storeAddress = response.records.store_address
      this.websiteLink = response.records.website
      this.whatsApp = response.records.whatsapp
      this.contact = response.records.contact_number
      this.instagram = response.records.instagram
      this.storeID = response.records.tbid
      this.deliveryAvilability = response.records.delivery_availability

      if (this.deliveryAvilability == 1 && this.deliveryAvilability == false && this.deliveryAvilability == "Available" ) {
        this.deliveryAvilability = false
      } else {
        this.deliveryAvilability = true
      }
    }
      , (error: any) => {
        console.log(error);
      }
    );
  }

  //-------------- Navigate to dashboard ----------//
  navigateHome() {
    this.storedetailsVisible = false;
    this.isvisible = false;
    this.productDetails = true;

  }

  //-------------- Navigate to searchPage ----------//
  searchPage() {
    this.router.navigate(['/searchpage'])
  }

  //-------------- Navigate to setalarmPage ----------//
  setalarm() {
    this.router.navigate(['/setalarm'])
  }

  //-------------- Navigate to notificationPage ----------//
  notification() {
    this.router.navigate(['/notification'])
  }

  //--------- Get User Selected store Category's------------//
  getSelectCategory() {
    this.http.get('/store_category').subscribe((response: any) => {
      this.getCategoryList = response.records
      console.log(response);

    }, (error: any) => {
      console.log(error);
    });
  }

  //------------- get offer list -----------//
  offerList() {
    const data = {
      city:this.city
    }

    this.http.post('/list_all_offer', data).subscribe((response: any) => {
      this.offerlist = response.records;
      console.log(this.offerlist);
      if(response.message == "No offers found."){
        this.noDataFound = true;
      }else{
        this.noDataFound = false;
      }

    }, (error: any) => {
      console.log(error);
      this.noDataFound = true;
    }
    );
  }
  expiryofferlist:any = []
   //------------- get offer list -----------//
   expiryOfferList() {
   

    this.http.get('/list_all_offer', ).subscribe((response: any) => {
      this.expiryofferlist = response.records;
      console.log(this.offerlist);
      // if(response.message == "No offers found."){
      //   this.noDataFound = true;
      // }else{
      //   this.noDataFound = false;
      // }

    }, (error: any) => {
      console.log(error);
      // this.noDataFound = true;
    }
    );
  }

  //------------- click home slider ----------//
  clickSlideHome() {
    this.offerlist = []
    this.slideName = "Home";
    this.offerListVisible = true;
    this.noDataFound = false;
    this.isvisible = false
    this.offerList()
  }


  //------------- click  slider to fetch data based on category ----------//
  clickSlide(item) {
    console.log(item);
    this.isvisible = false
    this.slideName = item;
    if (this.slideName == "Home") {
      this.offerListVisible = true;
      this.noDataFound = false;
      this.offerList()
    }

    const obj = {
      store_category: item,
      city:this.city

    }
    this.http.post('/list_offer_category', obj).subscribe((response: any) => {
      if (response.success == "true") {
        this.offerlist = response.records;
        console.log(response);
        this.offerListVisible = true;
        this.noDataFound = false;
      } else {

      }
    }, (error: any) => {
      console.log(error);
      this.offerListVisible = false;
      this.noDataFound = true;

    }
    );
  }

  locationsList:any = []
  locationList() {
   
    this.http.get('/list_location',).subscribe((response: any) => {
      console.log(response);
      this.locationsList = response.records
      console.log(response.records.city);
      
    }, (error: any) => {
      console.log(error);
    });
    
  }

  changeLocation(){
    console.log(this.city);
    
    if(this.city == "All"){
      this.http.get('/list_all_offer', ).subscribe((response: any) => {
        this.offerlist = response.records;
        console.log(this.offerlist);
        if(response.message == "No offers found."){
          this.noDataFound = true;
        }else{
          this.noDataFound = false;
        }
  
      }, (error: any) => {
        console.log(error);
        this.noDataFound = true;
      }
      );
    }
  }

  locationChange(){
   this.locationChangeVisible = !this.locationChangeVisible;
  }
 
  testSlide(){
    this.router.navigate(['/slide-test'])
  }

}

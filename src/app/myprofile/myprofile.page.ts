import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],

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
        animate('900ms 300ms ease-out', style({ transform: 'translateY(0%)', opacity: 1 },))
      ])
    ])
  ]
})
export class MyprofilePage implements OnInit {

  constructor(private router: Router, private http: HttpService,
    private toastCtrl: ToastController, route: ActivatedRoute, public alertController: AlertController) {
    route.params.subscribe(val => {
      this.PopupModel = false;
      this.getSelectCategory()
      this.locationList()
    });
  }

  ngOnInit() {
   

  }

  userdetails: any = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
  city: any = ((localStorage.getItem("location")));
  mobileNumber:any = ((localStorage.getItem("mobilenumber")));
  locationsList: any = []
  PopupModel: any = false;
  password: any = ''
  updateUsername: any ;
  updateMobile: any = this.userdetails.mobile;
  getCategoryList: any = [];

  //-------------- Navigate to supportPage ----------//
  support() {
    this.router.navigate(['/support'])
  }

  backToprivious() {
    this.PopupModel = false;

  }
  popupModelOpen() {
    this.PopupModel = true;
  }

  //-------------- Navigate to change-categoryPage ----------//
  changeCategory() {
    this.router.navigate(['change-category'])
  }

  //-------------- update profile Api call ----------//
  updateProfile() {
    const updateData = {
      tbid: this.userdetails.id,
      user_name: this.updateUsername,
      mobile_number: this.updateMobile,
      location:this.city
      
    }

    console.log(updateData);
    
    this.http.post('/user_update_profile',updateData).subscribe((response: any) => {
      console.log(response);
      if (response.success == "true") {
        this.updateUsername = response.user_name
        this.PopupModel = false;

      } else {

      }
    }, (error: any) => {
      console.log(error);
    });

  }
  //-------------- Navigate to homepage ----------//
  back() {
    this.router.navigate(['/homepage'])
  }


  //-------------- Delete account func ----------//
  deleteAccount() {
    this.presentAlertConfirm()
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'buttonCss ',
      header: 'Delete Your Account!',
      message: 'Are You <strong>Sure</strong>!!!',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'alert-danger',
          handler: (blah) => {
            console.log('Confirm Cancel: No');
          }
        }, {
          text: 'Yes',
          cssClass: 'buttonCss',
          handler: () => {
            console.log('Confirm Okay');
            this.showPrompt()
          }
        }
      ]
    });

    await alert.present();
  }

  showPrompt() {
    this.alertController.create({
      cssClass: 'buttonCss ',
      header: 'Enter The Password To Delete Your Account',
      inputs: [
        {
          name: 'Place',
          placeholder: 'Password',
          type: 'text'

        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (data: any) => {

            console.log('Canceled', data);
          }
        },
        {
          text: 'Delete Account!',
          handler: (data: any) => {
            this.password = data
            const obj = {
              tbid: this.userdetails.id,
              password: this.password
            }
            console.log(obj);


            this.http.post('/user_delete_account', obj).subscribe((response: any) => {
              console.log(response);
              if (response.success == "true") {
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
                  title: 'Account Deleted Successfully.'
                })
              }




            }, (error: any) => {
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
              console.log(error);

            })
            console.log('Saved Information', data);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }


  //----------- get store category List ---------//
  getSelectCategory() {
    this.http.get('/store_category').subscribe((response: any) => {
      this.getCategoryList = response.records
      console.log(response);

    }, (error: any) => {
      console.log(error);
    });
  }


  
  
  locationList() {

    this.http.get('/list_location',).subscribe((response: any) => {
      console.log(response);
      this.locationsList = response.records
      console.log(response.records.city);

    }, (error: any) => {
      console.log(error);
    });
  }

 
}

import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';
import { Geolocation } from '@ionic-native/geolocation';

import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  classDay: any;
  notifications: any[] = [];
  days: any[];
  chosenHours: number;
  chosenMinutes: number;

  user = {
    name: '',
    localization: '',
    classDay: '',
    classHour: ''
  }

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public platform: Platform, public alertCtrl: AlertController, public geolocation: Geolocation) {
    this.classDay = moment(new Date()).format()

    this.chosenHours = new Date().getHours()
    this.chosenMinutes = new Date().getMinutes()

    this.days = [
        {title: 'Segunda', dayCode: 1, checked: false},
        {title: 'Terça', dayCode: 2, checked: false},
        {title: 'Quarta', dayCode: 3, checked: false},
        {title: 'Quinta', dayCode: 4, checked: false},
        {title: 'Sexta', dayCode: 5, checked: false},
        {title: 'Sábado', dayCode: 6, checked: false},
        {title: 'Domingo', dayCode: 0, checked: false}
    ]

    this.loadMap();

  }



   loadMap(){

       this.geolocation.getCurrentPosition().then((position) => {

         let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

         let mapOptions = {
           center: latLng,
           zoom: 15,
           mapTypeId: this.google.maps.MapTypeId.ROADMAP
         }

         this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

       }, (err) => {
         console.log(err);
       });

     }

   addNotifications(){
     console.log()
   }

   save() {
     console.log(this.user)
   }

   cancelAll(){

   }

}

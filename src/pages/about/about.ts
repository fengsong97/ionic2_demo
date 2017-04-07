import { Component } from '@angular/core';
import {  ActionSheetController ,AlertController} from 'ionic-angular';
// import { NavControlle, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

 // use the home icon
  myIcon: string = "home";

  
  brightness: number = 20;
  contrast: number = 0;
  warmth: number = 1300;
  structure: any = { lower: 33, upper: 60 };
  text: number = 0;


  pet: string = "puppies";
  isAndroid: boolean = false;
}

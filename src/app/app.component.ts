import { Component,  Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('add') add : ElementRef;
  @ViewChild('show') show : ElementRef;
 bt1:string="block";
 bt2:string="none";
show1() {
   this.bt1="block";
   this.bt2="none";
   
 }

 show2() {
  this.bt2="block";
  this.bt1="none";
  
}


  title = 'app';
}

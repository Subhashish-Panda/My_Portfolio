import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  btn1:boolean;
  btn2:boolean;

  constructor() { }

  ngOnInit(): void {
  }
  soc()
  {
  this.btn1=true;
  this.btn2=false;
  }
  bus()
  {
  this.btn1=false;
  this.btn2=true;
  }

}

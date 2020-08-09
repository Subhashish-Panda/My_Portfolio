import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  photo:string="assets/cropme.jpg";
  skills:boolean;
  hobbies:boolean;

  constructor() { }

  ngOnInit(): void {
  }
  Show_skills()
  {
  this.skills=true;
  this.hobbies=false;
  }
  Show_hobbies()
  {
  this.skills=false;
  this.hobbies=true;   
  }

}

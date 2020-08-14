import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  allowed:boolean;
  projects:any[]=[
  {name:"Ecommerce Website",
  git:"https://github.com/Subhashish-Panda/Ecommerce.git",
  url:"https://neologic-guests.000webhostapp.com/"
  },
  {
  name:"Scribe",
  git:"https://github.com/Subhashish-Panda/Scribe_Project.git",
  url:"https://scribe-26bd8.web.app/"
  },
  {
  name:"Temperature Converter",
  git:"https://github.com/Subhashish-Panda/Fastest_Temp_conversion.git",
  url:"https://angular-conv-temp-hacker99-1b5tph.stackblitz.io/"
  },
  {
  name:"Calculator",
  git:"https://github.com/Subhashish-Panda/Fastest_Temp_conversion.git",
  url:"https://angular-calc-hacker99.stackblitz.io/"
  },
  {
  name:"Expense Manager",
  git:"",
  url:"https://soul-stirring-swive.000webhostapp.com/"
  },
  {
  name:"Weather app",
  git:"https://github.com/Subhashish-Panda/Weather_App.git",
  url:"https://weather-1ac0a.web.app/"
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  show(){
  this.allowed=true;
  }
  hide(){
  this.allowed=false;
  }

}

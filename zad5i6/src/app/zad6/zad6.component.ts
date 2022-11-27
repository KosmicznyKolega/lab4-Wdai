import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zad6',
  templateUrl: './zad6.component.html',
  styleUrls: ['./zad6.component.css']
})
export class Zad6Component implements OnInit {

  clicked1=false
  clicked2=false
  clicked3=false
  constructor() { }

  ngOnInit(): void {
  }
  handleClick1(){
    this.clicked1=true
    this.clicked2=false
    this.clicked3=false
  }
  handleClick2(){
    this.clicked1=false
    this.clicked2=true
    this.clicked3=false
  }
  handleClick3(){
    this.clicked1=false
    this.clicked2=false
    this.clicked3=true
  }

}

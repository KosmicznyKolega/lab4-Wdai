import { Component, OnInit } from '@angular/core';
import { InjectMockDataService } from '../inject-mock-data.service';
import { Wycieczka } from '../Wycieczka';
@Component({
  selector: 'app-zad7',
  templateUrl: './zad7.component.html',
  styleUrls: ['./zad7.component.css']
})
export class Zad7Component implements OnInit {
  numberOfWycieczki=0;
  listOfWycieczki:boolean[];
  wycieczki;
  constructor() { 
    let service= new InjectMockDataService;
    this.wycieczki=service.getWycieczki();
    this.listOfWycieczki=[]
    this.wypelnij()
  }
  ngOnInit(): void {
  }
  isnajtanszy(wycieczka:Wycieczka){
    let index=0
    for (let i of this.wycieczki){
      if (i.cena < wycieczka.cena&&this.listOfWycieczki[index]){
        return false
      }
      index+=1
    }
    return true
  }
  isnajdrozszy(wycieczka:Wycieczka){
    let index=0
    for (let i of this.wycieczki){
      if (i.cena > wycieczka.cena&&this.listOfWycieczki[index]){
        return false
      }
      index+=1
    }
    return true
  }
  add(event:number){
    this.numberOfWycieczki+=event
  }
  whatColor(){
    if (this.numberOfWycieczki>10){
      return 'yellowgreen'
    }
    return 'red'
  }
  wypelnij(){
    for (let _ of this.wycieczki){
    this.listOfWycieczki.push(true)}    
  }
  handleclick(index:number){
    this.listOfWycieczki[index]=false
    this.wycieczki[index]
  }
}

import { Component, OnInit } from '@angular/core';
import samochody from './samochody.json'

@Component({
  selector: 'zad5',
  templateUrl: './zad5.component.html',
  styleUrls: ['./zad5.component.css']
})
export class Zad5Component implements OnInit {
  constructor() {
  }
  marki:string[]=[]
  showkolor=false
  showmarka=false
  showmodel=false
  kolor ="placeholder";
  model = "placeholder";
  marka = "placeholder";
  carData=samochody
  clicked1=false
  ngOnInit(): void {
  }
  handleclick1(item:string){
    if(this.showmarka){
      this.marka=item
      this.showmodel=false
      this.model="placeholder"
      this.showkolor=false
      this.kolor="placeholder"
    }
    else{
    this.marka=item
    this.showmarka=true
    }
  }
  handleclick2(item:string){
  if(this.showmodel){
    this.model=item
    this.showkolor=false
    this.kolor="placeholder"
  }  
  else{
    this.model=item
    this.showmodel=true
   }
  }
  handleclick3(item:string){
    
      this.kolor=item
      this.showkolor=true
     
  }
  unique(){
    for (let i=0; i<Object.keys(this.carData).length;i++){
      if(this.notIn(this.carData[i].marka)){
      this.marki.push(this.carData[i].marka)}
    }
  }
  
  notIn(text:string){
    for (let i in this.marki){
      if (this.marki[i]==text){
        return false
      }
    }
    return true
  }

}

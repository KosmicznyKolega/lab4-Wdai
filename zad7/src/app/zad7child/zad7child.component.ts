import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Wycieczka } from '../Wycieczka';

@Component({
  selector: 'zad7-child',
  templateUrl: './zad7child.component.html',
  styleUrls: ['./zad7child.component.css']
})
export class Zad7childComponent implements OnInit {
  iloscMiejscMax!: number;
  iloscMiejscTeraz!: number;
  czyKupiono!:boolean;
  saMiejsca!:boolean;
  constructor() {  }
  @Input() 
  wycieczka!: Wycieczka;
  @Output() newItemEvent = new EventEmitter<number>();
  ngOnInit(): void {
    this.iloscMiejscMax=this.wycieczka.iloscmiejsc
    this.iloscMiejscTeraz=this.iloscMiejscMax
    this.czyKupiono=!(this.iloscMiejscMax==this.iloscMiejscTeraz)
    this.saMiejsca=(this.iloscMiejscTeraz>0);
  }
  minus(){
    this.iloscMiejscTeraz+=1;
    this.czyKupiono=!(this.iloscMiejscMax==this.iloscMiejscTeraz)
    this.saMiejsca=(this.iloscMiejscTeraz>0);
    this.newItemEvent.emit(-1)
  }
  plus(){
    this.iloscMiejscTeraz-=1;
    this.czyKupiono=!(this.iloscMiejscMax==this.iloscMiejscTeraz)
    this.saMiejsca=(this.iloscMiejscTeraz>0);
    this.newItemEvent.emit(1)
  }
  getColor(){
    if (this.iloscMiejscTeraz<10&&this.iloscMiejscTeraz>=5){
      return 'rgb(240, 200, 58)'
    }
    else if (this.iloscMiejscTeraz<5){
      return 'red'
    }
    return 'black'
  }

}

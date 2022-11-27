import { Injectable } from '@angular/core';
import { MockData } from './mock-wycieczka-data';
@Injectable({
  providedIn: 'root'
})
export class InjectMockDataService {
  wycieczki=MockData.wycieczki
  constructor() { }
  getWycieczki(){
    return this.wycieczki
  }
}

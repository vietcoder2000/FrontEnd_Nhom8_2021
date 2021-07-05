import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewRssDetailService {
index=0;
  constructor() {
   }

   getRssDetailService(index:number){
     this.index=index;
  }
}

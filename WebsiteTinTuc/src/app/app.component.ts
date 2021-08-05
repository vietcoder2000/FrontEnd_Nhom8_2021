import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'WebsiteTinTuc';
  constructor() {
    setInterval(this.scrollFunction,100);
  }

  onActivate(event:Event){
    window.scroll(0,0);
}
  scrollFunction(){

    let element :HTMLElement = document.getElementById('btn-backontop')!;
    if(document.body.scrollTop>100 || document.documentElement.scrollTop >100){
      element.style.display = 'block';
    }else{
      element.style.display = 'none';
    }
  }

}

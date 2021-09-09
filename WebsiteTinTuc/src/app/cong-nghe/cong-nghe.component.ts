import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewRssService } from '../Service/new-rss.service';
import { Rss } from '../RssServer/Rss';import * as xml2js from 'xml2js';
import { NewRssDetailService } from '../Service/new-rss-detail.service';

@Component({
  selector: 'app-cong-nghe',
  templateUrl: './cong-nghe.component.html',
  styleUrls: ['./cong-nghe.component.css']
})
export class CongNgheComponent implements OnInit {
  RssDataCongNghe: Rss|any;
  // heading:string[]=[];
  constructor(private https:HttpClient,private newrssservice:NewRssService,private newrssservicedetail:NewRssDetailService) { }

  ngOnInit(): void {
    this.GetRssFeedDataCongNghe();



  }
  GetRssFeedDataCongNghe() {
    this.newrssservice.GetRssCongNghe().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataCongNghe = result;
        // for (let i = 0; i < this.RssDataCongNghe?.rss.channel[0].item.length; i++) {

        //   var g=this.RssDataCongNghe?.rss.channel[0].item[i].encoded.join('');

        //       this.heading.push(g.substring(g.indexOf('<p')+3,g.indexOf('</p>')));


        // }
        // console.log(this.heading)
      });
    });
  }
  getRssDetail(index: number) {
    this.newrssservicedetail.index = index;
  }
  countHours(i:number){
    var datenews = new Date(this.RssDataCongNghe?.rss.channel[0].item[i].pubDate);
    var currentDate = new Date(Date.now());
    if(datenews.getDate()==currentDate.getDate()&& datenews.getMonth()==currentDate.getMonth()&& datenews.getFullYear()==currentDate.getFullYear()){
      if(datenews.getHours()!=currentDate.getHours())
        return currentDate.getHours()-datenews.getHours()+" giờ trước";
      else{
        return currentDate.getMinutes()-datenews.getMonth()+" phút trước";
      }
    }
    return 0;

  }

}

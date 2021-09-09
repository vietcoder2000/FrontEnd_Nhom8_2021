import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewRssService } from '../Service/new-rss.service';
import { Rss } from '../RssServer/Rss';import * as xml2js from 'xml2js';
import { NewRssDetailService } from '../Service/new-rss-detail.service';
@Component({
  selector: 'app-goc-nhin-thang',
  templateUrl: './goc-nhin-thang.component.html',
  styleUrls: ['./goc-nhin-thang.component.css']
})
export class GocNhinThangComponent implements OnInit {
RssDataGocNhinThang: Rss|any;
  constructor(private https:HttpClient,private newrssservice:NewRssService,private newrssservicedetail:NewRssDetailService) { }

  ngOnInit(): void { this.GetRssFeedDataGocNhinThang();
  }
 GetRssFeedDataGocNhinThang() {
    this.newrssservice.GetRssGocNhinThang().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataGocNhinThang = result;
        // for (let i = 0; i < this.RssDataGocNhinThang?.rss.channel[0].item.length; i++) {

        //   var g=this.RssDataGocNhinThang?.rss.channel[0].item[i].encoded.join('');

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
    var datenews = new Date(this.RssDataGocNhinThang?.rss.channel[0].item[i].pubDate);
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

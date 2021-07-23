import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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


}

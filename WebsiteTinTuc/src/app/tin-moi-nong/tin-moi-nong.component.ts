import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewRssService } from '../Service/new-rss.service';
import { Rss } from '../RssServer/Rss';import * as xml2js from 'xml2js';
import { NewRssDetailService } from '../Service/new-rss-detail.service';
@Component({
  selector: 'app-tin-moi-nong',
  templateUrl: './tin-moi-nong.component.html',
  styleUrls: ['./tin-moi-nong.component.css']
})
export class TinMoiNongComponent implements OnInit {
  RssDataTinMoiNong: Rss|any;
  // images = [{path:''}]
  constructor(private https:HttpClient,private newrssservice:NewRssService,private newrssservicedetail:NewRssDetailService) { }

  ngOnInit(): void {this.GetRssFeedDataTinMoiNong();
  }
  GetRssFeedDataTinMoiNong() {
    this.newrssservice.GetRssTinMoiNong().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataTinMoiNong = result;
        // for (let i = 0; i < this.RssDataCongNghe?.rss.channel[0].item.length; i++) {

        //   var g=this.RssDataCongNghe?.rss.channel[0].item[i].encoded.join('');

        //       this.heading.push(g.substring(g.indexOf('<p')+3,g.indexOf('</p>')));


// for (let index = 0; index < this.RssDataTinMoiNong.rss.channel[0].item.length; index++) {
//   const element = this.RssDataTinMoiNong.rss.channel[0].item[index].content[0].url;
// this.images.push({path:(element.join(''))})
// }
// console.log(this.images)
        // }
        // console.log(this.heading)
      });
    });
  }
  getRssDetail(index: number) {
    this.newrssservicedetail.index = index;
  }
}

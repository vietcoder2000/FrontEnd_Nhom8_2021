import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewRssService } from '../Service/new-rss.service';
import { Rss } from '../RssServer/Rss';import * as xml2js from 'xml2js';
import { NewRssDetailService } from '../Service/new-rss-detail.service';
@Component({
  selector: 'app-bat-dong-san',
  templateUrl: './bat-dong-san.component.html',
  styleUrls: ['./bat-dong-san.component.css']
})
export class BatDongSanComponent implements OnInit {
  RssDataBatDongSan: Rss|any;
  constructor(private https:HttpClient,private newrssservice:NewRssService,private newrssservicedetail:NewRssDetailService) { }

  ngOnInit(): void {    this.GetRssFeedDataBatDongSan();
  }
  GetRssFeedDataBatDongSan() {
    this.newrssservice.GetRssBatDongSan().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataBatDongSan = result;
     });
    });
  } getRssDetail(index: number) {
    this.newrssservicedetail.index = index;
  }
}

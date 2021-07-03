import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewRssService } from '../Service/new-rss.service';
import { RssBatDongSan } from '../RssServer/RssBatDongSan';import * as xml2js from 'xml2js';
@Component({
  selector: 'app-bat-dong-san',
  templateUrl: './bat-dong-san.component.html',
  styleUrls: ['./bat-dong-san.component.css']
})
export class BatDongSanComponent implements OnInit {
  RssDataBatDongSan: RssBatDongSan|any;
  constructor(private https:HttpClient,private newrssservice:NewRssService) { }

  ngOnInit(): void {    this.GetRssFeedDataBatDongSan();
  }
  GetRssFeedDataBatDongSan() {
    this.newrssservice.GetRssBatDongSan().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: RssBatDongSan) => {
        this.RssDataBatDongSan = result;
     });
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewRssService } from '../Service/new-rss.service';
import { Rss } from '../RssServer/Rss';import * as xml2js from 'xml2js';
@Component({
  selector: 'app-cong-nghe',
  templateUrl: './cong-nghe.component.html',
  styleUrls: ['./cong-nghe.component.css']
})
export class CongNgheComponent implements OnInit {
  RssDataCongNghe: Rss|any;
  constructor(private https:HttpClient,private newrssservice:NewRssService) { }

  ngOnInit(): void {    this.GetRssFeedDataCongNghe();
  }
  GetRssFeedDataCongNghe() {
    this.newrssservice.GetRssCongNghe().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataCongNghe = result;
      });
    });
  }
}

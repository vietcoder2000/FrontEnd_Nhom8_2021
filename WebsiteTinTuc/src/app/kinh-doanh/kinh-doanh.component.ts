import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Rss} from "../RssServer/Rss";
import { NewRssService } from '../Service/new-rss.service';
import * as xml2js from 'xml2js';
@Component({
  selector: 'app-kinh-doanh',
  templateUrl: './kinh-doanh.component.html',
  styleUrls: ['./kinh-doanh.component.css']
})
export class KinhDoanhComponent implements OnInit {
  RssDataKinhDoanh: Rss | any;
  constructor(private https:HttpClient,private newrssservice:NewRssService) { }

  ngOnInit(): void {    this.GetRssFeedDataKinhDoanh();
  }
  GetRssFeedDataKinhDoanh() {
    this.newrssservice.GetRssKinhDoanh().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };
      let parseString = xml2js.parseString;
      parseString(data, options,(err, result: Rss) => {
        this.RssDataKinhDoanh = result;
      });
    });
  }
}

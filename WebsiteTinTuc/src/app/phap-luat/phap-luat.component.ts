import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewRssService } from '../Service/new-rss.service';
import * as xml2js from 'xml2js';import {Rss} from "../RssServer/Rss";
import {NewRssDetailService} from "../Service/new-rss-detail.service";
@Component({
  selector: 'app-phap-luat',
  templateUrl: './phap-luat.component.html',
  styleUrls: ['./phap-luat.component.css']
})
export class PhapLuatComponent implements OnInit {
  RssDataPhapLuat: Rss | any;
  constructor(private https:HttpClient,private newrssservice:NewRssService,private newrssservicedetail: NewRssDetailService) { }

  ngOnInit(): void {this.GetRssFeedDataPhapLuat();
  }
  GetRssFeedDataPhapLuat() {
    this.newrssservice.GetRssPhapLuat().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };
      let parseString = xml2js.parseString;
      parseString(data, options,(err, result: Rss) => {
        this.RssDataPhapLuat = result;
      });
    });
  }
  getRssDetail(index: number) {
    this.newrssservicedetail.index = index;
  }
}

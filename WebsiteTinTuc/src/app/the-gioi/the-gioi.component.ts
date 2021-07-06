import { Component, OnInit } from '@angular/core';
import {Rss} from "../RssServer/Rss";import * as xml2js from 'xml2js';
import { HttpClient } from '@angular/common/http';
import { NewRssService } from '../Service/new-rss.service';
import {NewRssDetailService} from "../Service/new-rss-detail.service";
@Component({
  selector: 'app-the-gioi',
  templateUrl: './the-gioi.component.html',
  styleUrls: ['./the-gioi.component.css']
})
export class TheGioiComponent implements OnInit {
  RssDataTheGioi: Rss | any;
  constructor(private https:HttpClient,private newrssservice:NewRssService,private newrssservicedetail: NewRssDetailService) { }

  ngOnInit(): void {this.GetRssFeedDataTheGioi();
  }
  GetRssFeedDataTheGioi() {
    this.newrssservice.GetRssTheGioi().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };
      let parseString = xml2js.parseString;
      parseString(data, options,(err, result: Rss) => {
        this.RssDataTheGioi = result;
      });
    });
  }
  getRssDetail(index: number) {
    this.newrssservicedetail.index = index;
  }
}

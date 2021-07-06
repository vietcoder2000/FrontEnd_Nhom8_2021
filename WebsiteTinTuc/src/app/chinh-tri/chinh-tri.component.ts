import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Rss } from '../RssServer/Rss';
import { NewRssService } from '../Service/new-rss.service';
import * as xml2js from 'xml2js';
import {NewRssDetailService} from "../Service/new-rss-detail.service";
@Component({
  selector: 'app-chinh-tri',
  templateUrl: './chinh-tri.component.html',
  styleUrls: ['./chinh-tri.component.css']
})
export class ChinhTriComponent implements OnInit {

  constructor(private https:HttpClient,private newrssservice:NewRssService,private newrssservicedetail: NewRssDetailService) { }
  RssDataChinhTri: Rss|any;
  ngOnInit(): void {
    this.GetRssFeedDataChinhTri();
  }
  GetRssFeedDataChinhTri() {
    this.newrssservice.GetRssChinhTri().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataChinhTri = result;
      });
    });
  }

  getRssDetail(index: number) {
    this.newrssservicedetail.index = index;
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewRssService } from '../Service/new-rss.service';
import {Rss} from "../RssServer/Rss";import * as xml2js from 'xml2js';
@Component({
  selector: 'app-thoi-su',
  templateUrl: './thoi-su.component.html',
  styleUrls: ['./thoi-su.component.css']
})
export class ThoiSuComponent implements OnInit {  RssDataThoiSu: Rss | any;

  constructor(private https:HttpClient,private newrssservice:NewRssService) { }

  ngOnInit(): void {
    this.GetRssFeedDataThoiSu();
  }
  GetRssFeedDataThoiSu() {
    this.newrssservice.GetRssThoiSu().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };
      let parseString = xml2js.parseString;
      parseString(data,options, (err, result: Rss) => {
        this.RssDataThoiSu = result;
      });
    });
  }
}

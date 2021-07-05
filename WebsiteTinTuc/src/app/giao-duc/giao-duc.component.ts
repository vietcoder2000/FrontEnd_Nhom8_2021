import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewRssService } from '../Service/new-rss.service';
import {Rss} from "../RssServer/Rss";
import * as xml2js from 'xml2js';
@Component({
  selector: 'app-giao-duc',
  templateUrl: './giao-duc.component.html',
  styleUrls: ['./giao-duc.component.css']
})
export class GiaoDucComponent implements OnInit {
  RssDataGiaoDuc: Rss | any;
  constructor(private https:HttpClient,private newrssservice:NewRssService) { }

  ngOnInit(): void {this.GetRssFeedDataGiaoDuc();
  }
  GetRssFeedDataGiaoDuc() {
    this.newrssservice.GetRssGiaoDuc().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };
      let parseString = xml2js.parseString;
      parseString(data,options, (err, result: Rss) => {
        this.RssDataGiaoDuc = result;
      });
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewRssService } from '../Service/new-rss.service';
import { Rss } from '../RssServer/Rss';import * as xml2js from 'xml2js';
@Component({
  selector: 'app-tuan-vn',
  templateUrl: './tuan-vn.component.html',
  styleUrls: ['./tuan-vn.component.css']
})
export class TuanVnComponent implements OnInit {
  RssDataTuanVietNam: Rss|any;
  constructor(private https:HttpClient,private newrssservice:NewRssService) { }

  ngOnInit(): void {    this.GetRssFeedDataTuanVietNam();
  }
  GetRssFeedDataTuanVietNam() {
    this.newrssservice.GetRssTuanVietNam().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataTuanVietNam = result;
      });
    });
  }
}

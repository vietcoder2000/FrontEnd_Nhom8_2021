import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rss } from 'src/app/RssServer/Rss';
import { NewRssDetailService } from 'src/app/Service/new-rss-detail.service';
import { NewRssService } from 'src/app/Service/new-rss.service';
import * as xml2js from 'xml2js';
@Component({
  selector: 'app-bat-dong-san-detail',
  templateUrl: './bat-dong-san-detail.component.html',
  styleUrls: ['./bat-dong-san-detail.component.css'],
})
export class BatDongSanDetailComponent implements OnInit {
  RssDataBatDongSan: Rss | any;
  index = 0;
  title: string = '';
  encoded: Array<string> | any;
  constructor(
    private https: HttpClient,
    private newrssservice: NewRssService,
    private newrssservicedetail: NewRssDetailService
  ) {}

  ngOnInit(): void {
    this.GetRssFeedDataBatDongSan();
  }
  GetRssFeedDataBatDongSan() {
    this.newrssservice.GetRssBatDongSan().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataBatDongSan = result;
        this.encoded =
          this.RssDataBatDongSan.rss.channel[0].item[
            this.newrssservicedetail.index
          ].encoded;
        this.title =
          this.RssDataBatDongSan.rss.channel[0].item[
            this.newrssservicedetail.index
          ].title;
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rss } from 'src/app/RssServer/Rss';
import { NewRssDetailService } from 'src/app/Service/new-rss-detail.service';
import { NewRssService } from 'src/app/Service/new-rss.service';
import * as xml2js from 'xml2js';
@Component({
  selector: 'app-phap-luat-detail',
  templateUrl: './phap-luat-detail.component.html',
  styleUrls: ['./phap-luat-detail.component.css'],
})
export class PhapLuatDetailComponent implements OnInit {
  RssDataPhapLuat: Rss | any;
  index = 0;
  encoded: Array<string> | any;
  constructor(
    private https: HttpClient,
    private newrssservice: NewRssService,
    private newrssservicedetail: NewRssDetailService
  ) {}

  ngOnInit(): void {
    this.GetRssFeedDataPhapLuat();
  }
  GetRssFeedDataPhapLuat() {
    this.newrssservice.GetRssPhapLuat().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataPhapLuat = result;
        this.encoded =
          this.RssDataPhapLuat.rss.channel[0].item[
            this.newrssservicedetail.index
          ].encoded;
      });
    });
  }
}

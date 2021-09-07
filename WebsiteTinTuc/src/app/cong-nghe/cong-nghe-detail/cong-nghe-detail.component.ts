import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rss } from 'src/app/RssServer/Rss';
import { NewRssDetailService } from 'src/app/Service/new-rss-detail.service';
import { NewRssService } from 'src/app/Service/new-rss.service';
import * as xml2js from 'xml2js';
@Component({
  selector: 'app-cong-nghe-detail',
  templateUrl: './cong-nghe-detail.component.html',
  styleUrls: ['./cong-nghe-detail.component.css'],
})
export class CongNgheDetailComponent implements OnInit {
  RssDataCongNghe: Rss | any;
  index = 0;
  encoded: Array<string> | any;
  title:string=''
  constructor(
    private https: HttpClient,
    private newrssservice: NewRssService,
    private newrssservicedetail: NewRssDetailService
  ) {}

  ngOnInit(): void {
    this.GetRssFeedDataCongNghe();
  }
  GetRssFeedDataCongNghe() {
    this.newrssservice.GetRssCongNghe().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataCongNghe = result;
        this.encoded =
          this.RssDataCongNghe.rss.channel[0].item[
            this.newrssservicedetail.index
          ].encoded;


          this.title =
          this.RssDataCongNghe.rss.channel[0].item[
            this.newrssservicedetail.index
          ].title;
      });
    });
  }

}

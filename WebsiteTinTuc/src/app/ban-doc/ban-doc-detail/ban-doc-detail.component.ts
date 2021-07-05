import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Rss } from 'src/app/RssServer/Rss';
import { NewRssDetailService } from 'src/app/Service/new-rss-detail.service';
import { NewRssService } from 'src/app/Service/new-rss.service';
import * as xml2js from 'xml2js';
@Component({
  selector: 'app-ban-doc-detail',
  templateUrl: './ban-doc-detail.component.html',
  styleUrls: ['./ban-doc-detail.component.css'],
})
export class BanDocDetailComponent implements OnInit {
  RssDataBanDoc: Rss | any;
  index = 0;
  encoded: Array<string> | any;
  constructor(
    private https: HttpClient,
    private newrssservice: NewRssService,
    private newrssservicedetail: NewRssDetailService
  ) {}

  ngOnInit(): void {
    this.GetRssFeedDataBanDoc();
  }
  GetRssFeedDataBanDoc() {
    this.newrssservice.GetRssBanDoc().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataBanDoc = result;
        this.encoded =
          this.RssDataBanDoc.rss.channel[0].item[
            this.newrssservicedetail.index
          ].encoded;
      });
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Rss } from 'src/app/RssServer/Rss';
import { NewRssDetailService } from 'src/app/Service/new-rss-detail.service';
import { NewRssService } from 'src/app/Service/new-rss.service';
import * as xml2js from 'xml2js';
@Component({
  selector: 'app-chinh-tri-detail',
  templateUrl: './chinh-tri-detail.component.html',
  styleUrls: ['./chinh-tri-detail.component.css'],
})
export class ChinhTriDetailComponent implements OnInit {
  RssDataChinhTri: Rss | any;
  index = 0;
  encoded: Array<string> | any;
  title: string = '';
  constructor(
    private https: HttpClient,
    private newrssservice: NewRssService,
    private newrssservicedetail: NewRssDetailService
  ) {}

  ngOnInit(): void {
    this.GetRssFeedDataChinhTri();
  }
  GetRssFeedDataChinhTri() {
    this.newrssservice.GetRssChinhTri().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataChinhTri = result;
        this.encoded =
          this.RssDataChinhTri.rss.channel[0].item[
            this.newrssservicedetail.index
          ].encoded;
        this.title =
          this.RssDataChinhTri.rss.channel[0].item[
            this.newrssservicedetail.index
          ].title;
      });
    });
  }
}

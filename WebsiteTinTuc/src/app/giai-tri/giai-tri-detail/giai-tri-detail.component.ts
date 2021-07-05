import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rss } from 'src/app/RssServer/Rss';
import { NewRssDetailService } from 'src/app/Service/new-rss-detail.service';
import { NewRssService } from 'src/app/Service/new-rss.service';
import * as xml2js from 'xml2js';
@Component({
  selector: 'app-giai-tri-detail',
  templateUrl: './giai-tri-detail.component.html',
  styleUrls: ['./giai-tri-detail.component.css'],
})
export class GiaiTriDetailComponent implements OnInit {
  RssDataGiaiTri: Rss | any;
  index = 0;
  encoded: Array<string> | any;
  constructor(
    private https: HttpClient,
    private newrssservice: NewRssService,
    private newrssservicedetail: NewRssDetailService
  ) {}

  ngOnInit(): void {
    this.GetRssFeedDataGiaiTri();
  }
  GetRssFeedDataGiaiTri() {
    this.newrssservice.GetRssGiaiTri().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataGiaiTri = result;
        this.encoded =
          this.RssDataGiaiTri.rss.channel[0].item[
            this.newrssservicedetail.index
          ].encoded;
      });
    });
  }
}

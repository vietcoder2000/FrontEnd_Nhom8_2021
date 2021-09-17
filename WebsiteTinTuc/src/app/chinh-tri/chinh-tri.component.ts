import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Rss } from '../RssServer/Rss';
import { NewRssService } from '../Service/new-rss.service';
import * as xml2js from 'xml2js';
import { NewRssDetailService } from '../Service/new-rss-detail.service';
import { TestSearchService } from '../Service/search/test-search.service';
@Component({
  selector: 'app-chinh-tri',
  templateUrl: './chinh-tri.component.html',
  styleUrls: ['./chinh-tri.component.css'],
})
export class ChinhTriComponent implements OnInit {
  constructor(
    private https: HttpClient,
    private newrssservice: NewRssService,
    private newrssservicedetail: NewRssDetailService,
    private testsearchservice: TestSearchService
  ) {}
  RssDataChinhTri: Rss | any;

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
        console.log(this.RssDataChinhTri?.rss.channel[0]);
      });
    });
  }

  getRssDetail(index: number) {
    this.newrssservicedetail.index = index;
  }
  countHours(i: number) {
    var datenews = new Date(
      this.RssDataChinhTri?.rss.channel[0].item[i].pubDate
    );
    var currentDate = new Date(Date.now());
    if (
      datenews.getDate() == currentDate.getDate() &&
      datenews.getMonth() == currentDate.getMonth() &&
      datenews.getFullYear() == currentDate.getFullYear()
    ) {
      if (datenews.getHours() != currentDate.getHours())
        return currentDate.getHours() - datenews.getHours() + ' giờ trước';
      else {
        return currentDate.getMinutes() - datenews.getMonth() + ' phút trước';
      }
    }
    return 0;
  }
}

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
    private testsearchservice: TestSearchService,

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
  countHours(dateNews: Date){
      var currentDate = new Date(Date.now());
      var dateNew = new Date(dateNews.getFullYear(),dateNews.getMonth(),dateNews.getDate(),dateNews.getHours(),dateNews.getMinutes(),dateNews.getSeconds());
      if(dateNew.getDate()==currentDate.getDate()&& dateNew.getMonth()==currentDate.getMonth() && dateNew.getFullYear()==currentDate.getFullYear()){
        return currentDate.getHours()-dateNew.getHours();
      }else{
        return 0;
      }
  }
}


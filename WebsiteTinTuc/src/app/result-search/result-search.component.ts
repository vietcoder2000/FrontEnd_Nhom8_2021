import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewRssDetailService } from '../Service/new-rss-detail.service';
import { NewRssService } from '../Service/new-rss.service';
import { TestSearchService } from '../Service/search/test-search.service';
import * as xml2js from 'xml2js';
import { Rss } from '../RssServer/Rss';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css'],
})
export class ResultSearchComponent implements OnInit {
  textSearch = '';
  RssDataChinhTri: Rss | any;
  results = [];
  constructor(
    private https: HttpClient,
    private newrssservice: NewRssService,
    private newrssservicedetail: NewRssDetailService,
    private testsearchservice: TestSearchService
  ) {}

  ngOnInit(): void {
    this.getTextSearch();
    this.GetRssFeedDataChinhTri();
  }
  getTextSearch() {
    this.textSearch = this.testsearchservice.searchTerm.value;
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

        // start search
        this.RssDataChinhTri.rss.channel[0].item.forEach((rs: any) => {
          if (rs.description[0].toLowerCase().indexOf(this.textSearch) != -1) {
            // console.log(rs.description)
            let r = rs.description;
            this.results = Object.assign([], r);
          }
        });
        console.log(this.results);
      });
    });
  }
  getRssDetail(index: number) {
    this.newrssservicedetail.index = index;
  }
}

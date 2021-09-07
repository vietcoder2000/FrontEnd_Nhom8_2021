import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rss } from 'src/app/RssServer/Rss';
import { NewRssDetailService } from 'src/app/Service/new-rss-detail.service';
import { NewRssService } from 'src/app/Service/new-rss.service';
import * as xml2js from 'xml2js';
@Component({
  selector: 'app-doi-song-detail',
  templateUrl: './doi-song-detail.component.html',
  styleUrls: ['./doi-song-detail.component.css'],
})
export class DoiSongDetailComponent implements OnInit {
  RssDataDoiSong: Rss | any;
  index = 0;
  encoded: Array<string> | any;title: string = '';
  constructor(
    private https: HttpClient,
    private newrssservice: NewRssService,
    private newrssservicedetail: NewRssDetailService
  ) {}

  ngOnInit(): void {
    this.GetRssFeedDataDoiSong();
  }
  GetRssFeedDataDoiSong() {
    this.newrssservice.GetRssDoiSong().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataDoiSong = result;
        this.encoded =
          this.RssDataDoiSong.rss.channel[0].item[
            this.newrssservicedetail.index
          ].encoded;
          this.title =
          this.RssDataDoiSong.rss.channel[0].item[
            this.newrssservicedetail.index
          ].title;
      });
    });
  }
}

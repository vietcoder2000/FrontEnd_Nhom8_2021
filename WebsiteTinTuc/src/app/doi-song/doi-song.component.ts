import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewRssService } from '../Service/new-rss.service';
import * as xml2js from 'xml2js';
import {Rss} from "../RssServer/Rss";
import {NewRssDetailService} from "../Service/new-rss-detail.service";
@Component({
  selector: 'app-doi-song',
  templateUrl: './doi-song.component.html',
  styleUrls: ['./doi-song.component.css']
})
export class DoiSongComponent implements OnInit {
  RssDataDoiSong: Rss | any;
  constructor(private https:HttpClient,private newrssservice:NewRssService,private newrssservicedetail: NewRssDetailService) { }

  ngOnInit(): void {    this.GetRssFeedDataDoiSong();
  }
  GetRssFeedDataDoiSong() {
    this.newrssservice.GetRssDoiSong().subscribe((data) => { var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };
      let parseString = xml2js.parseString;
      parseString(data, options,(err, result: Rss) => {
        this.RssDataDoiSong = result;
      });
    });
  }
  getRssDetail(index: number) {
    this.newrssservicedetail.index = index;
  }
}

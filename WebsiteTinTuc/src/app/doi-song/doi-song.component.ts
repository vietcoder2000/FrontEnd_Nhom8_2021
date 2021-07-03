import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewRssService } from '../Service/new-rss.service';
import * as xml2js from 'xml2js';
import {RssDoiSong} from "../RssServer/RssDoiSong";
@Component({
  selector: 'app-doi-song',
  templateUrl: './doi-song.component.html',
  styleUrls: ['./doi-song.component.css']
})
export class DoiSongComponent implements OnInit {
  RssDataDoiSong: RssDoiSong | any;
  constructor(private https:HttpClient,private newrssservice:NewRssService) { }

  ngOnInit(): void {    this.GetRssFeedDataDoiSong();
  }
  GetRssFeedDataDoiSong() {
    this.newrssservice.GetRssDoiSong().subscribe((data) => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RssDoiSong) => {
        this.RssDataDoiSong = result;
      });
    });
  }
}

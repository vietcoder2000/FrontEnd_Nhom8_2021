import { Component, OnInit } from '@angular/core';
import {RssTheGioi} from "../RssServer/RssTheGioi";import * as xml2js from 'xml2js';
import { HttpClient } from '@angular/common/http';
import { NewRssService } from '../Service/new-rss.service';
@Component({
  selector: 'app-the-gioi',
  templateUrl: './the-gioi.component.html',
  styleUrls: ['./the-gioi.component.css']
})
export class TheGioiComponent implements OnInit {
  RssDataTheGioi: RssTheGioi | any;
  constructor(private https:HttpClient,private newrssservice:NewRssService) { }

  ngOnInit(): void {this.GetRssFeedDataTheGioi();
  }
  GetRssFeedDataTheGioi() {
    this.newrssservice.GetRssTheGioi().subscribe((data) => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RssTheGioi) => {
        this.RssDataTheGioi = result;
      });
    });
  }
}

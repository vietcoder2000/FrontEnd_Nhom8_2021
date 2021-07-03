import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewRssService } from '../Service/new-rss.service';
import * as xml2js from 'xml2js';import {RssPhapLuat} from "../RssServer/RssPhapLuat";
@Component({
  selector: 'app-phap-luat',
  templateUrl: './phap-luat.component.html',
  styleUrls: ['./phap-luat.component.css']
})
export class PhapLuatComponent implements OnInit {
  RssDataPhapLuat: RssPhapLuat | any;
  constructor(private https:HttpClient,private newrssservice:NewRssService) { }

  ngOnInit(): void {this.GetRssFeedDataPhapLuat();
  }
  GetRssFeedDataPhapLuat() {
    this.newrssservice.GetRssPhapLuat().subscribe((data) => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RssPhapLuat) => {
        this.RssDataPhapLuat = result;
      });
    });
  }
}

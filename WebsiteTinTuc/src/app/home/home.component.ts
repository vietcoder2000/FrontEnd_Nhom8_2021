import { Component, OnInit } from '@angular/core';
import { NewRssService } from '../Service/new-rss.service';
import { Rss } from '../RssServer/Rss';
import { HttpClient } from '@angular/common/http';
import * as xml2js from 'xml2js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public danhMuc = [
    'Chính trị',
    'Thời sự',
    'Kinh doanh',
    'Giải trí',
    'Thế giới',
    'Đời sống',
    'Pháp luật',
    'Thể thao',
    'Công nghệ',
    'Sức khỏe',
    'Bất động sản',
    'Bạn đọc',
    'Tuần Việt Nam',
    'Xe',
    'Video',
  ];
  public danhMuc_link = [
    'chinh-tri',
    'thoi-su',
    'kinh-doanh',
    'giai-tri',
    'the-gioi',
    'doi-song',
    'phap-luat',
    'the-thao',
    'cong-nghe',
    'suc-khoe',
    'bat-dong-san',
    'ban-doc',
    'tuan-vn',
    'xe',
    'video',
  ];
  constructor(private newrssservice: NewRssService, private http: HttpClient) {}

  RssData: Rss | any;

  ngOnInit(): void {
    this.GetRssFeedData();
  }
  GetRssFeedData() {
    this.newrssservice.GetRssFeedData().subscribe((data) => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: Rss) => {
        this.RssData = result;
      });
    });
  }
}

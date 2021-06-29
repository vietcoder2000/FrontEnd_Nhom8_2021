import { Component, OnInit } from '@angular/core';
import { NewRssService } from '../Service/new-rss.service';
import { RssChinhTri } from '../RssServer/RssChinhTri';
import { RssXe } from '../RssServer/RssXe';
import { RssTuanVietNam } from '../RssServer/RssTuanVietNam';
import { RssTinMoiNong } from '../RssServer/RssTinMoiNong';
import { RssTinMoiNhat } from '../RssServer/RssTinMoiNhat';
import { RssTheThao } from '../RssServer/RssTheThao';
import { RssSucKhoe } from '../RssServer/RssSucKhoe';
import { RssGocNhinThang } from '../RssServer/RssGocNhinThang';
import { RssCongNghe } from '../RssServer/RssCongNghe';
import { RssBatDongSan } from '../RssServer/RssBatDongSan';
import { RssBanDoc } from '../RssServer/RssBanDoc';
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

  RssDataChinhTri: RssChinhTri|any;
  RssDataXe: RssXe|any;
  RssDataTuanVietNam: RssTuanVietNam|any;
  RssDataTinMoiNong: RssTinMoiNong|any;
  RssDataTheThao: RssTheThao|any;
  RssDataSucKhoe: RssSucKhoe|any;
  RssDataGocNhinThang: RssGocNhinThang|any;
  RssDataCongNghe: RssCongNghe|any;
  RssDataBatDongSan: RssBatDongSan|any;
  RssDataBanDoc: RssBanDoc|any;
  RssDataTinMoiNhat: RssTinMoiNhat|any;

  ngOnInit(): void {
    this.GetRssFeedDataChinhTri();
    this.GetRssFeedDataXe();
    this.GetRssFeedDataSucKhoe();
    this.GetRssFeedDataTheThao();
    this.GetRssFeedDataBanDoc();
    this.GetRssFeedDataBatDongSan();
    this.GetRssFeedDataGocNhinThang();
    this.GetRssFeedDataTinMoiNhat();
    this.GetRssFeedDataTinMoiNong();
    this.GetRssFeedDataTuanVietNam();
    this.GetRssFeedDataCongNghe();
  }
  GetRssFeedDataChinhTri() {
    this.newrssservice.GetRssChinhTri().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };


      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: RssChinhTri) => {
        this.RssDataChinhTri = result;



      });
    });
  }
  GetRssFeedDataXe() {
    this.newrssservice.GetRssXe().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };


      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: RssXe) => {
        this.RssDataXe = result;



      });
    });
  }
  GetRssFeedDataTuanVietNam() {
    this.newrssservice.GetRssTuanVietNam().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };


      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: RssTuanVietNam) => {
        this.RssDataTuanVietNam = result;



      });
    });
  }
  GetRssFeedDataTinMoiNong() {
    this.newrssservice.GetRssTinMoiNong().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };


      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: RssTinMoiNong) => {
        this.RssDataTinMoiNong = result;



      });
    });
  }
  GetRssFeedDataTinMoiNhat() {
    this.newrssservice.GetRssTinMoiNhat().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };


      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: RssTinMoiNhat) => {
        this.RssDataTinMoiNhat = result;



      });
    });
  }
  GetRssFeedDataTheThao() {
    this.newrssservice.GetRssTheThao().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };


      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: RssTheThao) => {
        this.RssDataTheThao = result;



      });
    });
  }
  GetRssFeedDataSucKhoe() {
    this.newrssservice.GetRssSucKhoe().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };


      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: RssSucKhoe) => {
        this.RssDataSucKhoe = result;




      });
    });
  }
  GetRssFeedDataGocNhinThang() {
    this.newrssservice.GetRssGocNhinThang().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: RssGocNhinThang) => {
        this.RssDataGocNhinThang = result;

      });
    });
  }
  GetRssFeedDataCongNghe() {
    this.newrssservice.GetRssCongNghe().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };


      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: RssCongNghe) => {
        this.RssDataCongNghe = result;



      });
    });
  }
  GetRssFeedDataBatDongSan() {
    this.newrssservice.GetRssBatDongSan().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };


      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: RssBatDongSan) => {
        this.RssDataBatDongSan = result;



      });
    });
  }
  GetRssFeedDataBanDoc() {
    this.newrssservice.GetRssBanDoc().subscribe((data) => {
      var options = { mergeAttrs:true,tagNameProcessors: [xml2js.processors.stripPrefix] };


      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: RssBanDoc) => {
        this.RssDataBanDoc = result;



      });
    });
  }
}
export interface IRssData {}

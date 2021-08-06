import { Component, OnInit } from '@angular/core';
import { NewRssService } from '../Service/new-rss.service';

import { Rss } from '../RssServer/Rss';

import { HttpClient } from '@angular/common/http';
import * as xml2js from 'xml2js';
import { NewRssDetailService } from '../Service/new-rss-detail.service';
import { TestSearchService } from '../Service/search/test-search.service';

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
  constructor(
    private newrssservice: NewRssService,
    private http: HttpClient,
    private newrssservicedetail: NewRssDetailService,
    private testsearchservice: TestSearchService
  ) {}
  searchTerm='';
  RssDataChinhTri: Rss | any;
  RssDataXe: Rss | any;
  RssDataTuanVietNam: Rss | any;
  RssDataTinMoiNong: Rss | any;
  RssDataTheThao: Rss | any;
  RssDataSucKhoe: Rss | any;
  RssDataGocNhinThang: Rss | any;
  RssDataCongNghe: Rss | any;
  RssDataBatDongSan: Rss | any;
  RssDataBanDoc: Rss | any;
  RssDataTinMoiNhat: Rss | any;
  RssDataDoiSong: Rss | any;
  RssDataGiaiTri: Rss | any;
  RssDataGiaoDuc: Rss | any;
  RssDataKinhDoanh: Rss | any;
  RssDataPhapLuat: Rss | any;
  RssDataTalks: Rss | any;
  RssDataTheGioi: Rss | any;
  RssDataThoiSu: Rss | any;
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
    this.GetRssFeedDataDoiSong();
    this.GetRssFeedDataGiaiTri();
    this.GetRssFeedDataGiaoDuc();
    this.GetRssFeedDataKinhDoanh();
    this.GetRssFeedDataPhapLuat();
    this.GetRssFeedDataTalks();
    this.GetRssFeedDataTheGioi();
    this.GetRssFeedDataThoiSu();
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

      });
    });
  }
  GetRssFeedDataXe() {
    this.newrssservice.GetRssXe().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataXe = result;

      });
    });
  }
  GetRssFeedDataTuanVietNam() {
    this.newrssservice.GetRssTuanVietNam().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataTuanVietNam = result;

      });
    });
  }
  GetRssFeedDataTinMoiNong() {
    this.newrssservice.GetRssTinMoiNong().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataTinMoiNong = result;
      });
    });
  }
  GetRssFeedDataTinMoiNhat() {
    this.newrssservice.GetRssTinMoiNhat().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataTinMoiNhat = result;
      });
    });
  }
  GetRssFeedDataTheThao() {
    this.newrssservice.GetRssTheThao().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataTheThao = result;
      });
    });
  }
  GetRssFeedDataSucKhoe() {
    this.newrssservice.GetRssSucKhoe().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataSucKhoe = result;
      });
    });
  }
  GetRssFeedDataGocNhinThang() {
    this.newrssservice.GetRssGocNhinThang().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataGocNhinThang = result;
      });
    });
  }
  GetRssFeedDataCongNghe() {
    this.newrssservice.GetRssCongNghe().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataCongNghe = result;
      });
    });
  }
  GetRssFeedDataBatDongSan() {
    this.newrssservice.GetRssBatDongSan().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataBatDongSan = result;
      });
    });
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
      });
    });
  }
  GetRssFeedDataGiaiTri() {
    this.newrssservice.GetRssGiaiTri().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataGiaiTri = result;
      });
    });
  }

  GetRssFeedDataBanDoc() {
    this.newrssservice.GetRssBanDoc().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataBanDoc = result;
      });
    });
  }

  GetRssFeedDataGiaoDuc() {
    this.newrssservice.GetRssGiaoDuc().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataGiaoDuc = result;
      });
    });
  }
  GetRssFeedDataKinhDoanh() {
    this.newrssservice.GetRssKinhDoanh().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataKinhDoanh = result;
      });
    });
  }
  GetRssFeedDataPhapLuat() {
    this.newrssservice.GetRssPhapLuat().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataPhapLuat = result;
      });
    });
  }
  GetRssFeedDataTalks() {
    this.newrssservice.GetRssTalks().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataTalks = result;
      });
    });
  }
  GetRssFeedDataTheGioi() {
    this.newrssservice.GetRssTheGioi().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataTheGioi = result;
      });
    });
  }
  GetRssFeedDataThoiSu() {
    this.newrssservice.GetRssThoiSu().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: Rss) => {
        this.RssDataThoiSu = result;

      });
    });
  }
  getRssDetail(index: number) {
    this.newrssservicedetail.index = index;
  }
  //test Search
  getSearchText(){

  }
}

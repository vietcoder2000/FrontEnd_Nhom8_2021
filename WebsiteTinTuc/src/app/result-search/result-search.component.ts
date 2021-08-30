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
  results: string[] = [];

  constructor(
    private newrssservice: NewRssService,
    private newrssservicedetail: NewRssDetailService,
    private testsearchservice: TestSearchService
  ) {}

  ngOnInit(): void {
    this.getTextSearch();
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

        this.filterValue(this.RssDataChinhTri);
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
        this.filterValue(this.RssDataXe);
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
        this.filterValue(this.RssDataTuanVietNam);
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
        this.filterValue(this.RssDataTinMoiNong);
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
        this.filterValue(this.RssDataTinMoiNhat);
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
        this.filterValue(this.RssDataTheThao);
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
        this.filterValue(this.RssDataSucKhoe);
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
        this.filterValue(this.RssDataGocNhinThang);
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
        this.filterValue(this.RssDataCongNghe);
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
        this.filterValue(this.RssDataBatDongSan);
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
        this.filterValue(this.RssDataDoiSong);
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
        this.filterValue(this.RssDataGiaiTri);
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
        this.filterValue(this.RssDataBanDoc);
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
        this.filterValue(this.RssDataGiaoDuc);
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
        this.filterValue(this.RssDataKinhDoanh);
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
        this.filterValue(this.RssDataPhapLuat);
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
        this.filterValue(this.RssDataTalks);
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
        this.filterValue(this.RssDataTheGioi);
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
        this.filterValue(this.RssDataThoiSu);
      });
    });
  }
  filterValue(RssOther: Rss | any) {
    RssOther.rss.channel[0].item.forEach((rs: any, i: number) => {
      if (rs.description[0].toLowerCase().indexOf(this.textSearch) == -1) {
        delete RssOther.rss.channel[0].item[i];
      }
    });
  }
  getRssDetail(index: number) {
    this.newrssservicedetail.index = index;
  }
}

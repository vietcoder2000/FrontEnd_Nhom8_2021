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

        this.RssDataChinhTri.rss.channel[0].item.forEach(
          (rs: any, i: number) => {
            if (
              rs.description[0].toLowerCase().indexOf(this.textSearch) == -1
            ) {
              delete this.RssDataChinhTri.rss.channel[0].item[i];
            }
          }
        );
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

        this.RssDataXe.rss.channel[0].item.forEach((rs: any, i: number) => {
          if (rs.description[0].toLowerCase().indexOf(this.textSearch) == -1) {
            delete this.RssDataXe.rss.channel[0].item[i];

          }
        });
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
        this.RssDataTuanVietNam.rss.channel[0].item.forEach((rs: any, i: number) => {
          if (rs.description[0].toLowerCase().indexOf(this.textSearch) == -1) {
            delete this.RssDataTuanVietNam.rss.channel[0].item[i];
          }
        });
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
        this.RssDataTinMoiNong.rss.channel[0].item.forEach((rs: any, i: number) => {
          if (rs.description[0].toLowerCase().indexOf(this.textSearch) == -1) {
            delete this.RssDataTinMoiNong.rss.channel[0].item[i];
          }
        });
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
        this.RssDataTinMoiNhat.rss.channel[0].item.forEach((rs: any, i: number) => {
          if (rs.description[0].toLowerCase().indexOf(this.textSearch) == -1) {
            delete this.RssDataTinMoiNhat.rss.channel[0].item[i];
          }
        });
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
        this.RssDataTheThao.rss.channel[0].item.forEach((rs: any, i: number) => {
          if (rs.description[0].toLowerCase().indexOf(this.textSearch) == -1) {
            delete this.RssDataTheThao.rss.channel[0].item[i];
          }
        });
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
        this.RssDataSucKhoe.rss.channel[0].item.forEach((rs: any, i: number) => {
          if (rs.description[0].toLowerCase().indexOf(this.textSearch) == -1) {
            delete this.RssDataSucKhoe.rss.channel[0].item[i];
          }
        });
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
        this.RssDataGocNhinThang.rss.channel[0].item.forEach((rs: any, i: number) => {
          if (rs.description[0].toLowerCase().indexOf(this.textSearch) == -1) {
            delete this.RssDataGocNhinThang.rss.channel[0].item[i];
          }
        });
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
        this.RssDataCongNghe.rss.channel[0].item.forEach((rs: any, i: number) => {
          if (rs.description[0].toLowerCase().indexOf(this.textSearch) == -1) {
            delete this.RssDataCongNghe.rss.channel[0].item[i];
          }
        });
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
        this.RssDataBatDongSan.rss.channel[0].item.forEach((rs: any, i: number) => {
          if (rs.description[0].toLowerCase().indexOf(this.textSearch) == -1) {
            delete this.RssDataBatDongSan.rss.channel[0].item[i];
          }
        });
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
        this.RssDataDoiSong.rss.channel[0].item.forEach((rs: any, i: number) => {
          if (rs.description[0].toLowerCase().indexOf(this.textSearch) == -1) {
            delete this.RssDataDoiSong.rss.channel[0].item[i];
          }
        });
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
        this.RssDataGiaiTri.rss.channel[0].item.forEach((rs: any, i: number) => {
          if (rs.description[0].toLowerCase().indexOf(this.textSearch) == -1) {
            delete this.RssDataGiaiTri.rss.channel[0].item[i];
          }
        });
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
        this.RssDataBanDoc.rss.channel[0].item.forEach((rs: any, i: number) => {
          if (rs.description[0].toLowerCase().indexOf(this.textSearch) == -1) {
            delete this.RssDataBanDoc.rss.channel[0].item[i];
          }
        });
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
        this.RssDataGiaoDuc.rss.channel[0].item.forEach((rs: any, i: number) => {
          if (rs.description[0].toLowerCase().indexOf(this.textSearch) == -1) {
            delete this.RssDataGiaoDuc.rss.channel[0].item[i];
          }
        });
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
        this.RssDataKinhDoanh.rss.channel[0].item.forEach((rs: any, i: number) => {
          if (rs.description[0].toLowerCase().indexOf(this.textSearch) == -1) {
            delete this.RssDataKinhDoanh.rss.channel[0].item[i];
          }
        });
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
        this.RssDataPhapLuat.rss.channel[0].item.forEach((rs: any, i: number) => {
          if (rs.description[0].toLowerCase().indexOf(this.textSearch) == -1) {
            delete this.RssDataPhapLuat.rss.channel[0].item[i];
          }
        });
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
        this.RssDataTalks.rss.channel[0].item.forEach((rs: any, i: number) => {
          if (rs.description[0].toLowerCase().indexOf(this.textSearch) == -1) {
            delete this.RssDataTalks.rss.channel[0].item[i];
          }
        });
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
        this.RssDataTheGioi.rss.channel[0].item.forEach((rs: any, i: number) => {
          if (rs.description[0].toLowerCase().indexOf(this.textSearch) == -1) {
            delete this.RssDataTheGioi.rss.channel[0].item[i];
          }
        });
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
        this.RssDataThoiSu.rss.channel[0].item.forEach((rs: any, i: number) => {
          if (rs.description[0].toLowerCase().indexOf(this.textSearch) == -1) {
            delete this.RssDataThoiSu.rss.channel[0].item[i];
          }
        });
      });
    });
  }
  getRssDetail(index: number) {
    this.newrssservicedetail.index = index;
  }
}

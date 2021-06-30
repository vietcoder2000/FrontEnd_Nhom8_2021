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
import { RssDoiSong } from '../RssServer/RssDoiSong';
import { RssGiaiTri } from '../RssServer/RssGiaiTri';
import { RssGiaoDuc } from '../RssServer/RssGiaoDuc';
import { RssKinhDoanh } from '../RssServer/RssKinhDoanh';
import { RssPhapLuat } from '../RssServer/RssPhapLuat';
import { RssTalks } from '../RssServer/RssTalks';
import { RssTheGioi } from '../RssServer/RssTheGioi';
import { RssThoiSu } from '../RssServer/RssThoiSu';
import { TheGioiComponent } from '../the-gioi/the-gioi.component';
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

  RssDataChinhTri: RssChinhTri | any;
  RssDataXe: RssXe | any;
  RssDataTuanVietNam: RssTuanVietNam | any;
  RssDataTinMoiNong: RssTinMoiNong | any;
  RssDataTheThao: RssTheThao | any;
  RssDataSucKhoe: RssSucKhoe | any;
  RssDataGocNhinThang: RssGocNhinThang | any;
  RssDataCongNghe: RssCongNghe | any;
  RssDataBatDongSan: RssBatDongSan | any;
  RssDataBanDoc: RssBanDoc | any;
  RssDataTinMoiNhat: RssTinMoiNhat | any;
  RssDataDoiSong: RssDoiSong | any;
  RssDataGiaiTri: RssGiaiTri | any;
  RssDataGiaoDuc: RssGiaoDuc | any;
  RssDataKinhDoanh: RssKinhDoanh | any;
  RssDataPhapLuat: RssPhapLuat | any;
  RssDataTalks: RssTalks | any;
  RssDataTheGioi: RssTheGioi | any;
  RssDataThoiSu: RssThoiSu | any;
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

  GetRssFeedDataXe() {
    this.newrssservice.GetRssXe().subscribe((data) => {
      var options = {
        mergeAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
      };
      let parseString = xml2js.parseString;
      parseString(data, options, (err, result: RssXe) => {
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
      parseString(data, options, (err, result: RssTuanVietNam) => {
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
      parseString(data, options, (err, result: RssTinMoiNong) => {
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
      parseString(data, options, (err, result: RssTinMoiNhat) => {
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
      parseString(data, options, (err, result: RssTheThao) => {
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
      parseString(data, options, (err, result: RssSucKhoe) => {
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
      parseString(data, options, (err, result: RssGocNhinThang) => {
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
      parseString(data, options, (err, result: RssCongNghe) => {
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
      parseString(data, options, (err, result: RssBatDongSan) => {
        this.RssDataBatDongSan = result;
      });
    });
  }

  GetRssFeedDataChinhTri() {
    this.newrssservice.GetRssChinhTri().subscribe((data) => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RssChinhTri) => {
        this.RssDataChinhTri = result;
      });
    });
  }

  GetRssFeedDataDoiSong() {
    this.newrssservice.GetRssDoiSong().subscribe((data) => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RssDoiSong) => {
        this.RssDataDoiSong = result;
      });
    });
  }
  GetRssFeedDataGiaiTri() {
    this.newrssservice.GetRssGiaiTri().subscribe((data) => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RssGiaiTri) => {
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
      parseString(data, options, (err, result: RssBanDoc) => {
        this.RssDataBanDoc = result;
      });
    });
  }

  GetRssFeedDataGiaoDuc() {
    this.newrssservice.GetRssGiaoDuc().subscribe((data) => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RssGiaoDuc) => {
        this.RssDataGiaoDuc = result;
      });
    });
  }
  GetRssFeedDataKinhDoanh() {
    this.newrssservice.GetRssKinhDoanh().subscribe((data) => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RssKinhDoanh) => {
        this.RssDataKinhDoanh = result;
      });
    });
  }
  GetRssFeedDataPhapLuat() {
    this.newrssservice.GetRssPhapLuat().subscribe((data) => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RssPhapLuat) => {
        this.RssDataPhapLuat = result;
      });
    });
  }
  GetRssFeedDataTalks() {
    this.newrssservice.GetRssTalks().subscribe((data) => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RssTalks) => {
        this.RssDataTalks = result;
      });
    });
  }
  GetRssFeedDataTheGioi() {
    this.newrssservice.GetRssTheGioi().subscribe((data) => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: TheGioiComponent) => {
        this.RssDataTheGioi = result;
      });
    });
  }
  GetRssFeedDataThoiSu() {
    this.newrssservice.GetRssThoiSu().subscribe((data) => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RssThoiSu) => {
        this.RssDataThoiSu = result;
      });
    });
  }
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var xml2js = require("xml2js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(newrssservice, http, newrssservicedetail, testsearchservice) {
        this.newrssservice = newrssservice;
        this.http = http;
        this.newrssservicedetail = newrssservicedetail;
        this.testsearchservice = testsearchservice;
        this.danhMuc = [
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
        this.danhMuc_link = [
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
        this.searchTerm = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
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
    };
    HomeComponent.prototype.GetRssFeedDataChinhTri = function () {
        var _this = this;
        this.newrssservice.GetRssChinhTri().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataChinhTri = result;
                console.log(_this.RssDataChinhTri);
            });
        });
    };
    HomeComponent.prototype.GetRssFeedDataXe = function () {
        var _this = this;
        this.newrssservice.GetRssXe().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataXe = result;
            });
        });
    };
    HomeComponent.prototype.GetRssFeedDataTuanVietNam = function () {
        var _this = this;
        this.newrssservice.GetRssTuanVietNam().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataTuanVietNam = result;
            });
        });
    };
    HomeComponent.prototype.GetRssFeedDataTinMoiNong = function () {
        var _this = this;
        this.newrssservice.GetRssTinMoiNong().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataTinMoiNong = result;
            });
        });
    };
    HomeComponent.prototype.GetRssFeedDataTinMoiNhat = function () {
        var _this = this;
        this.newrssservice.GetRssTinMoiNhat().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataTinMoiNhat = result;
            });
        });
    };
    HomeComponent.prototype.GetRssFeedDataTheThao = function () {
        var _this = this;
        this.newrssservice.GetRssTheThao().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataTheThao = result;
            });
        });
    };
    HomeComponent.prototype.GetRssFeedDataSucKhoe = function () {
        var _this = this;
        this.newrssservice.GetRssSucKhoe().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataSucKhoe = result;
            });
        });
    };
    HomeComponent.prototype.GetRssFeedDataGocNhinThang = function () {
        var _this = this;
        this.newrssservice.GetRssGocNhinThang().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataGocNhinThang = result;
            });
        });
    };
    HomeComponent.prototype.GetRssFeedDataCongNghe = function () {
        var _this = this;
        this.newrssservice.GetRssCongNghe().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataCongNghe = result;
            });
        });
    };
    HomeComponent.prototype.GetRssFeedDataBatDongSan = function () {
        var _this = this;
        this.newrssservice.GetRssBatDongSan().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataBatDongSan = result;
            });
        });
    };
    HomeComponent.prototype.GetRssFeedDataDoiSong = function () {
        var _this = this;
        this.newrssservice.GetRssDoiSong().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataDoiSong = result;
            });
        });
    };
    HomeComponent.prototype.GetRssFeedDataGiaiTri = function () {
        var _this = this;
        this.newrssservice.GetRssGiaiTri().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataGiaiTri = result;
            });
        });
    };
    HomeComponent.prototype.GetRssFeedDataBanDoc = function () {
        var _this = this;
        this.newrssservice.GetRssBanDoc().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataBanDoc = result;
            });
        });
    };
    HomeComponent.prototype.GetRssFeedDataGiaoDuc = function () {
        var _this = this;
        this.newrssservice.GetRssGiaoDuc().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataGiaoDuc = result;
            });
        });
    };
    HomeComponent.prototype.GetRssFeedDataKinhDoanh = function () {
        var _this = this;
        this.newrssservice.GetRssKinhDoanh().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataKinhDoanh = result;
            });
        });
    };
    HomeComponent.prototype.GetRssFeedDataPhapLuat = function () {
        var _this = this;
        this.newrssservice.GetRssPhapLuat().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataPhapLuat = result;
            });
        });
    };
    HomeComponent.prototype.GetRssFeedDataTalks = function () {
        var _this = this;
        this.newrssservice.GetRssTalks().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataTalks = result;
            });
        });
    };
    HomeComponent.prototype.GetRssFeedDataTheGioi = function () {
        var _this = this;
        this.newrssservice.GetRssTheGioi().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataTheGioi = result;
            });
        });
    };
    HomeComponent.prototype.GetRssFeedDataThoiSu = function () {
        var _this = this;
        this.newrssservice.GetRssThoiSu().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataThoiSu = result;
            });
        });
    };
    HomeComponent.prototype.getRssDetail = function (index) {
        this.newrssservicedetail.index = index;
    };
    //test Search
    HomeComponent.prototype.getSearchText = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

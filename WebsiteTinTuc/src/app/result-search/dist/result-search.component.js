"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResultSearchComponent = void 0;
var core_1 = require("@angular/core");
var xml2js = require("xml2js");
var ResultSearchComponent = /** @class */ (function () {
    function ResultSearchComponent(newrssservice, newrssservicedetail, testsearchservice) {
        this.newrssservice = newrssservice;
        this.newrssservicedetail = newrssservicedetail;
        this.testsearchservice = testsearchservice;
        this.textSearch = '';
        this.results = [];
    }
    ResultSearchComponent.prototype.ngOnInit = function () {
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
    };
    ResultSearchComponent.prototype.getTextSearch = function () {
        this.textSearch = this.testsearchservice.searchTerm.value;
    };
    ResultSearchComponent.prototype.GetRssFeedDataChinhTri = function () {
        var _this = this;
        this.newrssservice.GetRssChinhTri().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataChinhTri = result;
                _this.filterValue(_this.RssDataChinhTri);
            });
        });
    };
    ResultSearchComponent.prototype.GetRssFeedDataXe = function () {
        var _this = this;
        this.newrssservice.GetRssXe().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataXe = result;
                _this.filterValue(_this.RssDataXe);
            });
        });
    };
    ResultSearchComponent.prototype.GetRssFeedDataTuanVietNam = function () {
        var _this = this;
        this.newrssservice.GetRssTuanVietNam().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataTuanVietNam = result;
                _this.filterValue(_this.RssDataTuanVietNam);
            });
        });
    };
    ResultSearchComponent.prototype.GetRssFeedDataTinMoiNong = function () {
        var _this = this;
        this.newrssservice.GetRssTinMoiNong().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataTinMoiNong = result;
                _this.filterValue(_this.RssDataTinMoiNong);
            });
        });
    };
    ResultSearchComponent.prototype.GetRssFeedDataTinMoiNhat = function () {
        var _this = this;
        this.newrssservice.GetRssTinMoiNhat().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataTinMoiNhat = result;
                _this.filterValue(_this.RssDataTinMoiNhat);
            });
        });
    };
    ResultSearchComponent.prototype.GetRssFeedDataTheThao = function () {
        var _this = this;
        this.newrssservice.GetRssTheThao().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataTheThao = result;
                _this.filterValue(_this.RssDataTheThao);
            });
        });
    };
    ResultSearchComponent.prototype.GetRssFeedDataSucKhoe = function () {
        var _this = this;
        this.newrssservice.GetRssSucKhoe().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataSucKhoe = result;
                _this.filterValue(_this.RssDataSucKhoe);
            });
        });
    };
    ResultSearchComponent.prototype.GetRssFeedDataGocNhinThang = function () {
        var _this = this;
        this.newrssservice.GetRssGocNhinThang().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataGocNhinThang = result;
                _this.filterValue(_this.RssDataGocNhinThang);
            });
        });
    };
    ResultSearchComponent.prototype.GetRssFeedDataCongNghe = function () {
        var _this = this;
        this.newrssservice.GetRssCongNghe().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataCongNghe = result;
                _this.filterValue(_this.RssDataCongNghe);
            });
        });
    };
    ResultSearchComponent.prototype.GetRssFeedDataBatDongSan = function () {
        var _this = this;
        this.newrssservice.GetRssBatDongSan().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataBatDongSan = result;
                _this.filterValue(_this.RssDataBatDongSan);
            });
        });
    };
    ResultSearchComponent.prototype.GetRssFeedDataDoiSong = function () {
        var _this = this;
        this.newrssservice.GetRssDoiSong().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataDoiSong = result;
                _this.filterValue(_this.RssDataDoiSong);
            });
        });
    };
    ResultSearchComponent.prototype.GetRssFeedDataGiaiTri = function () {
        var _this = this;
        this.newrssservice.GetRssGiaiTri().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataGiaiTri = result;
                _this.filterValue(_this.RssDataGiaiTri);
            });
        });
    };
    ResultSearchComponent.prototype.GetRssFeedDataBanDoc = function () {
        var _this = this;
        this.newrssservice.GetRssBanDoc().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataBanDoc = result;
                _this.filterValue(_this.RssDataBanDoc);
            });
        });
    };
    ResultSearchComponent.prototype.GetRssFeedDataGiaoDuc = function () {
        var _this = this;
        this.newrssservice.GetRssGiaoDuc().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataGiaoDuc = result;
                _this.filterValue(_this.RssDataGiaoDuc);
            });
        });
    };
    ResultSearchComponent.prototype.GetRssFeedDataKinhDoanh = function () {
        var _this = this;
        this.newrssservice.GetRssKinhDoanh().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataKinhDoanh = result;
                _this.filterValue(_this.RssDataKinhDoanh);
            });
        });
    };
    ResultSearchComponent.prototype.GetRssFeedDataPhapLuat = function () {
        var _this = this;
        this.newrssservice.GetRssPhapLuat().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataPhapLuat = result;
                _this.filterValue(_this.RssDataPhapLuat);
            });
        });
    };
    ResultSearchComponent.prototype.GetRssFeedDataTalks = function () {
        var _this = this;
        this.newrssservice.GetRssTalks().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataTalks = result;
                _this.filterValue(_this.RssDataTalks);
            });
        });
    };
    ResultSearchComponent.prototype.GetRssFeedDataTheGioi = function () {
        var _this = this;
        this.newrssservice.GetRssTheGioi().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataTheGioi = result;
                _this.filterValue(_this.RssDataTheGioi);
            });
        });
    };
    ResultSearchComponent.prototype.GetRssFeedDataThoiSu = function () {
        var _this = this;
        this.newrssservice.GetRssThoiSu().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataThoiSu = result;
                _this.filterValue(_this.RssDataThoiSu);
            });
        });
    };
    ResultSearchComponent.prototype.filterValue = function (RssOther) {
        var _this = this;
        RssOther.rss.channel[0].item.forEach(function (rs, i) {
            if (rs.description[0].toLowerCase().indexOf(_this.textSearch) == -1) {
                delete RssOther.rss.channel[0].item[i];
            }
        });
    };
    ResultSearchComponent.prototype.getRssDetail = function (index) {
        this.newrssservicedetail.index = index;
    };
    ResultSearchComponent = __decorate([
        core_1.Component({
            selector: 'app-result-search',
            templateUrl: './result-search.component.html',
            styleUrls: ['./result-search.component.css']
        })
    ], ResultSearchComponent);
    return ResultSearchComponent;
}());
exports.ResultSearchComponent = ResultSearchComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BatDongSanDetailComponent = void 0;
var core_1 = require("@angular/core");
var xml2js = require("xml2js");
var BatDongSanDetailComponent = /** @class */ (function () {
    function BatDongSanDetailComponent(https, newrssservice, newrssservicedetail) {
        this.https = https;
        this.newrssservice = newrssservice;
        this.newrssservicedetail = newrssservicedetail;
        this.index = 0;
        this.title = '';
    }
    BatDongSanDetailComponent.prototype.ngOnInit = function () {
        this.GetRssFeedDataBatDongSan();
    };
    BatDongSanDetailComponent.prototype.GetRssFeedDataBatDongSan = function () {
        var _this = this;
        this.newrssservice.GetRssBatDongSan().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataBatDongSan = result;
                _this.encoded =
                    _this.RssDataBatDongSan.rss.channel[0].item[_this.newrssservicedetail.index].encoded;
                _this.title =
                    _this.RssDataBatDongSan.rss.channel[0].item[_this.newrssservicedetail.index].title;
            });
        });
    };
    BatDongSanDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-bat-dong-san-detail',
            templateUrl: './bat-dong-san-detail.component.html',
            styleUrls: ['./bat-dong-san-detail.component.css']
        })
    ], BatDongSanDetailComponent);
    return BatDongSanDetailComponent;
}());
exports.BatDongSanDetailComponent = BatDongSanDetailComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TinMoiNongDetailComponent = void 0;
var core_1 = require("@angular/core");
var xml2js = require("xml2js");
var TinMoiNongDetailComponent = /** @class */ (function () {
    function TinMoiNongDetailComponent(https, newrssservice, newrssservicedetail) {
        this.https = https;
        this.newrssservice = newrssservice;
        this.newrssservicedetail = newrssservicedetail;
        this.index = 0;
        this.title = '';
    }
    TinMoiNongDetailComponent.prototype.ngOnInit = function () {
        this.GetRssFeedDataTinMoiNong();
    };
    TinMoiNongDetailComponent.prototype.GetRssFeedDataTinMoiNong = function () {
        var _this = this;
        this.newrssservice.GetRssTinMoiNong().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataTinMoiNong = result;
                _this.encoded =
                    _this.RssDataTinMoiNong.rss.channel[0].item[_this.newrssservicedetail.index].encoded;
                _this.title =
                    _this.RssDataTinMoiNong.rss.channel[0].item[_this.newrssservicedetail.index].title;
            });
        });
    };
    TinMoiNongDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-tin-moi-nong-detail',
            templateUrl: './tin-moi-nong-detail.component.html',
            styleUrls: ['./tin-moi-nong-detail.component.css']
        })
    ], TinMoiNongDetailComponent);
    return TinMoiNongDetailComponent;
}());
exports.TinMoiNongDetailComponent = TinMoiNongDetailComponent;

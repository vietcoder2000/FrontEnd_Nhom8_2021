"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TinMoiNongComponent = void 0;
var core_1 = require("@angular/core");
var xml2js = require("xml2js");
var TinMoiNongComponent = /** @class */ (function () {
    // images = [{path:''}]
    function TinMoiNongComponent(https, newrssservice, newrssservicedetail) {
        this.https = https;
        this.newrssservice = newrssservice;
        this.newrssservicedetail = newrssservicedetail;
    }
    TinMoiNongComponent.prototype.ngOnInit = function () {
        this.GetRssFeedDataTinMoiNong();
    };
    TinMoiNongComponent.prototype.GetRssFeedDataTinMoiNong = function () {
        var _this = this;
        this.newrssservice.GetRssTinMoiNong().subscribe(function (data) {
            var options = { mergeAttrs: true, tagNameProcessors: [xml2js.processors.stripPrefix] };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataTinMoiNong = result;
                // for (let i = 0; i < this.RssDataCongNghe?.rss.channel[0].item.length; i++) {
                //   var g=this.RssDataCongNghe?.rss.channel[0].item[i].encoded.join('');
                //       this.heading.push(g.substring(g.indexOf('<p')+3,g.indexOf('</p>')));
                // for (let index = 0; index < this.RssDataTinMoiNong.rss.channel[0].item.length; index++) {
                //   const element = this.RssDataTinMoiNong.rss.channel[0].item[index].content[0].url;
                // this.images.push({path:(element.join(''))})
                // }
                // console.log(this.images)
                // }
                // console.log(this.heading)
            });
        });
    };
    TinMoiNongComponent.prototype.getRssDetail = function (index) {
        this.newrssservicedetail.index = index;
    };
    TinMoiNongComponent = __decorate([
        core_1.Component({
            selector: 'app-tin-moi-nong',
            templateUrl: './tin-moi-nong.component.html',
            styleUrls: ['./tin-moi-nong.component.css']
        })
    ], TinMoiNongComponent);
    return TinMoiNongComponent;
}());
exports.TinMoiNongComponent = TinMoiNongComponent;

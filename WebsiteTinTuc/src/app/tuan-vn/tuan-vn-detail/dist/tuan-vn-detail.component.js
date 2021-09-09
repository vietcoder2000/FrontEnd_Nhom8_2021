"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TuanVnDetailComponent = void 0;
var core_1 = require("@angular/core");
var xml2js = require("xml2js");
var TuanVnDetailComponent = /** @class */ (function () {
    function TuanVnDetailComponent(https, newrssservice, newrssservicedetail) {
        this.https = https;
        this.newrssservice = newrssservice;
        this.newrssservicedetail = newrssservicedetail;
        this.index = 0;
        this.title = '';
    }
    TuanVnDetailComponent.prototype.ngOnInit = function () {
        this.GetRssFeedDataTuanVietNam();
    };
    TuanVnDetailComponent.prototype.GetRssFeedDataTuanVietNam = function () {
        var _this = this;
        this.newrssservice.GetRssTuanVietNam().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataTuanVietNam = result;
                _this.encoded =
                    _this.RssDataTuanVietNam.rss.channel[0].item[_this.newrssservicedetail.index].encoded;
                _this.title =
                    _this.RssDataTuanVietNam.rss.channel[0].item[_this.newrssservicedetail.index].title;
            });
        });
    };
    TuanVnDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-tuan-vn-detail',
            templateUrl: './tuan-vn-detail.component.html',
            styleUrls: ['./tuan-vn-detail.component.css']
        })
    ], TuanVnDetailComponent);
    return TuanVnDetailComponent;
}());
exports.TuanVnDetailComponent = TuanVnDetailComponent;

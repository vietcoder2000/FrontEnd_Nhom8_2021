"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhapLuatDetailComponent = void 0;
var core_1 = require("@angular/core");
var xml2js = require("xml2js");
var PhapLuatDetailComponent = /** @class */ (function () {
    function PhapLuatDetailComponent(https, newrssservice, newrssservicedetail) {
        this.https = https;
        this.newrssservice = newrssservice;
        this.newrssservicedetail = newrssservicedetail;
        this.index = 0;
        this.title = '';
    }
    PhapLuatDetailComponent.prototype.ngOnInit = function () {
        this.GetRssFeedDataPhapLuat();
    };
    PhapLuatDetailComponent.prototype.GetRssFeedDataPhapLuat = function () {
        var _this = this;
        this.newrssservice.GetRssPhapLuat().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataPhapLuat = result;
                _this.encoded =
                    _this.RssDataPhapLuat.rss.channel[0].item[_this.newrssservicedetail.index].encoded;
                _this.title =
                    _this.RssDataPhapLuat.rss.channel[0].item[_this.newrssservicedetail.index].title;
            });
        });
    };
    PhapLuatDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-phap-luat-detail',
            templateUrl: './phap-luat-detail.component.html',
            styleUrls: ['./phap-luat-detail.component.css']
        })
    ], PhapLuatDetailComponent);
    return PhapLuatDetailComponent;
}());
exports.PhapLuatDetailComponent = PhapLuatDetailComponent;

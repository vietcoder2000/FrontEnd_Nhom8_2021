"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChinhTriComponent = void 0;
var core_1 = require("@angular/core");
var xml2js = require("xml2js");
var ChinhTriComponent = /** @class */ (function () {
    function ChinhTriComponent(https, newrssservice, newrssservicedetail, testsearchservice) {
        this.https = https;
        this.newrssservice = newrssservice;
        this.newrssservicedetail = newrssservicedetail;
        this.testsearchservice = testsearchservice;
    }
    ChinhTriComponent.prototype.ngOnInit = function () {
        this.GetRssFeedDataChinhTri();
    };
    ChinhTriComponent.prototype.GetRssFeedDataChinhTri = function () {
        var _this = this;
        this.newrssservice.GetRssChinhTri().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                var _a;
                _this.RssDataChinhTri = result;
                console.log((_a = _this.RssDataChinhTri) === null || _a === void 0 ? void 0 : _a.rss.channel[0]);
            });
        });
    };
    ChinhTriComponent.prototype.getRssDetail = function (index) {
        this.newrssservicedetail.index = index;
    };
    ChinhTriComponent = __decorate([
        core_1.Component({
            selector: 'app-chinh-tri',
            templateUrl: './chinh-tri.component.html',
            styleUrls: ['./chinh-tri.component.css']
        })
    ], ChinhTriComponent);
    return ChinhTriComponent;
}());
exports.ChinhTriComponent = ChinhTriComponent;

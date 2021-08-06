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
    function ResultSearchComponent(https, newrssservice, newrssservicedetail, testsearchservice) {
        this.https = https;
        this.newrssservice = newrssservice;
        this.newrssservicedetail = newrssservicedetail;
        this.testsearchservice = testsearchservice;
        this.textSearch = '';
        this.results = [];
    }
    ResultSearchComponent.prototype.ngOnInit = function () {
        this.getTextSearch();
        this.GetRssFeedDataChinhTri();
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
                // start search
                _this.RssDataChinhTri.rss.channel[0].item.forEach(function (rs) {
                    if (rs.description[0].toLowerCase().indexOf(_this.textSearch) != -1) {
                        // console.log(rs.description)
                        var r = rs.description;
                        _this.results = Object.assign([], r);
                    }
                });
                console.log(_this.results);
            });
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

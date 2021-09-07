"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DoiSongDetailComponent = void 0;
var core_1 = require("@angular/core");
var xml2js = require("xml2js");
var DoiSongDetailComponent = /** @class */ (function () {
    function DoiSongDetailComponent(https, newrssservice, newrssservicedetail) {
        this.https = https;
        this.newrssservice = newrssservice;
        this.newrssservicedetail = newrssservicedetail;
        this.index = 0;
        this.title = '';
    }
    DoiSongDetailComponent.prototype.ngOnInit = function () {
        this.GetRssFeedDataDoiSong();
    };
    DoiSongDetailComponent.prototype.GetRssFeedDataDoiSong = function () {
        var _this = this;
        this.newrssservice.GetRssDoiSong().subscribe(function (data) {
            var options = {
                mergeAttrs: true,
                tagNameProcessors: [xml2js.processors.stripPrefix]
            };
            var parseString = xml2js.parseString;
            parseString(data, options, function (err, result) {
                _this.RssDataDoiSong = result;
                _this.encoded =
                    _this.RssDataDoiSong.rss.channel[0].item[_this.newrssservicedetail.index].encoded;
                _this.title =
                    _this.RssDataDoiSong.rss.channel[0].item[_this.newrssservicedetail.index].title;
            });
        });
    };
    DoiSongDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-doi-song-detail',
            templateUrl: './doi-song-detail.component.html',
            styleUrls: ['./doi-song-detail.component.css']
        })
    ], DoiSongDetailComponent);
    return DoiSongDetailComponent;
}());
exports.DoiSongDetailComponent = DoiSongDetailComponent;

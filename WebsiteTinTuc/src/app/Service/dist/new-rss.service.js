"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewRssService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var NewRssService = /** @class */ (function () {
    function NewRssService(http) {
        this.http = http;
    }
    NewRssService.prototype.GetRssDoiSong = function () {
        var requestOptions = {
            observe: 'body',
            responseType: 'text'
        };
        return this.http.get('https://vietnamnet.vn/rss/doi-song.rss', requestOptions).pipe(operators_1.catchError(this.handleError));
    };
    NewRssService.prototype.GetRssGiaiTri = function () {
        var requestOptions = {
            observe: 'body',
            responseType: 'text'
        };
        return this.http.get('https://vietnamnet.vn/rss/giai-tri.rss', requestOptions).pipe(operators_1.catchError(this.handleError));
    };
    NewRssService.prototype.GetRssGiaoDuc = function () {
        var requestOptions = {
            observe: 'body',
            responseType: 'text'
        };
        return this.http.get('https://vietnamnet.vn/rss/giao-duc.rss', requestOptions).pipe(operators_1.catchError(this.handleError));
    };
    NewRssService.prototype.GetRssKinhDoanh = function () {
        var requestOptions = {
            observe: 'body',
            responseType: 'text'
        };
        return this.http.get('https://vietnamnet.vn/rss/kinh-doanh.rss', requestOptions).pipe(operators_1.catchError(this.handleError));
    };
    NewRssService.prototype.GetRssPhapLuat = function () {
        var requestOptions = {
            observe: 'body',
            responseType: 'text'
        };
        return this.http.get('https://vietnamnet.vn/rss/phap-luat.rss', requestOptions).pipe(operators_1.catchError(this.handleError));
    };
    NewRssService.prototype.GetRssTalks = function () {
        var requestOptions = {
            observe: 'body',
            responseType: 'text'
        };
        return this.http.get('https://vietnamnet.vn/rss/talkshow.rss', requestOptions).pipe(operators_1.catchError(this.handleError));
    };
    NewRssService.prototype.GetRssTheGioi = function () {
        var requestOptions = {
            observe: 'body',
            responseType: 'text'
        };
        return this.http.get('https://vietnamnet.vn/rss/the-gioi.rss', requestOptions).pipe(operators_1.catchError(this.handleError));
    };
    NewRssService.prototype.GetRssThoiSu = function () {
        var requestOptions = {
            observe: 'body',
            responseType: 'text'
        };
        return this.http.get('https://vietnamnet.vn/rss/thoi-su.rss', requestOptions).pipe(operators_1.catchError(this.handleError));
    };
    NewRssService.prototype.GetRssChinhTri = function () {
        var requestOptions = {
            observe: 'body',
            responseType: 'text'
        };
        return this.http.get('https://vietnamnet.vn/rss/thoi-su-chinh-tri.rss', requestOptions).pipe(operators_1.catchError(this.handleError));
    };
    NewRssService.prototype.GetRssXe = function () {
        var requestOptions = {
            observe: 'body',
            responseType: 'text'
        };
        return this.http.get('https://vietnamnet.vn/rss/oto-xe-may.rss', requestOptions).pipe(operators_1.catchError(this.handleError));
    };
    NewRssService.prototype.GetRssTuanVietNam = function () {
        var requestOptions = {
            observe: 'body',
            responseType: 'text'
        };
        return this.http.get('https://vietnamnet.vn/rss/tuanvietnam.rss', requestOptions).pipe(operators_1.catchError(this.handleError));
    };
    NewRssService.prototype.GetRssTinMoiNong = function () {
        var requestOptions = {
            observe: 'body',
            responseType: 'text'
        };
        return this.http.get('https://vietnamnet.vn/rss/tin-moi-nong.rss', requestOptions).pipe(operators_1.catchError(this.handleError));
    };
    NewRssService.prototype.GetRssTinMoiNhat = function () {
        var requestOptions = {
            observe: 'body',
            responseType: 'text'
        };
        return this.http
            .get('https://vietnamnet.vn/rss/tin-moi-nhat.rss', requestOptions)
            .pipe(operators_1.catchError(this.handleError));
    };
    NewRssService.prototype.GetRssTheThao = function () {
        var requestOptions = {
            observe: 'body',
            responseType: 'text'
        };
        return this.http.get('\thttps://vietnamnet.vn/rss/the-thao.rss', requestOptions).pipe(operators_1.catchError(this.handleError));
    };
    NewRssService.prototype.GetRssSucKhoe = function () {
        var requestOptions = {
            observe: 'body',
            responseType: 'text'
        };
        return this.http.get('https://vietnamnet.vn/rss/suc-khoe.rss', requestOptions).pipe(operators_1.catchError(this.handleError));
    };
    NewRssService.prototype.GetRssGocNhinThang = function () {
        var requestOptions = {
            observe: 'body',
            responseType: 'text'
        };
        return this.http.get('https://vietnamnet.vn/rss/goc-nhin-thang.rss', requestOptions).pipe(operators_1.catchError(this.handleError));
    };
    NewRssService.prototype.GetRssCongNghe = function () {
        var requestOptions = {
            observe: 'body',
            responseType: 'text'
        };
        return this.http.get('https://vietnamnet.vn/rss/cong-nghe.rss', requestOptions).pipe(operators_1.catchError(this.handleError));
    };
    NewRssService.prototype.GetRssBatDongSan = function () {
        var requestOptions = {
            observe: 'body',
            responseType: 'text'
        };
        return this.http.get('https://vietnamnet.vn/rss/bat-dong-san.rss', requestOptions).pipe(operators_1.catchError(this.handleError));
    };
    NewRssService.prototype.GetRssBanDoc = function () {
        var requestOptions = {
            observe: 'body',
            responseType: 'text'
        };
        return this.http.get('https://vietnamnet.vn/rss/ban-doc.rss', requestOptions).pipe(operators_1.catchError(this.handleError));
    };
    NewRssService.prototype.handleError = function (error) {
        return rxjs_1.throwError('Something bad happened; please try again later.');
    };
    NewRssService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], NewRssService);
    return NewRssService;
}());
exports.NewRssService = NewRssService;

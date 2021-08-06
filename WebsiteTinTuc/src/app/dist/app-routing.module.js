"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var chinh_tri_component_1 = require("./chinh-tri/chinh-tri.component");
var ban_doc_component_1 = require("./ban-doc/ban-doc.component");
var bat_dong_san_component_1 = require("./bat-dong-san/bat-dong-san.component");
var cong_nghe_component_1 = require("./cong-nghe/cong-nghe.component");
var doi_song_component_1 = require("./doi-song/doi-song.component");
var giai_tri_component_1 = require("./giai-tri/giai-tri.component");
var kinh_doanh_component_1 = require("./kinh-doanh/kinh-doanh.component");
var phap_luat_component_1 = require("./phap-luat/phap-luat.component");
var suc_khoe_component_1 = require("./suc-khoe/suc-khoe.component");
var the_gioi_component_1 = require("./the-gioi/the-gioi.component");
var the_thao_component_1 = require("./the-thao/the-thao.component");
var thoi_su_component_1 = require("./thoi-su/thoi-su.component");
var tuan_vn_component_1 = require("./tuan-vn/tuan-vn.component");
var video_component_1 = require("./video/video.component");
var xe_component_1 = require("./xe/xe.component");
var giao_duc_component_1 = require("./giao-duc/giao-duc.component");
var contact_component_1 = require("./footer/contact/contact.component");
var introduce_component_1 = require("./footer/introduce/introduce.component");
var ban_doc_detail_component_1 = require("./ban-doc/ban-doc-detail/ban-doc-detail.component");
var chinh_tri_detail_component_1 = require("./chinh-tri/chinh-tri-detail/chinh-tri-detail.component");
var bat_dong_san_detail_component_1 = require("./bat-dong-san/bat-dong-san-detail/bat-dong-san-detail.component");
var cong_nghe_detail_component_1 = require("./cong-nghe/cong-nghe-detail/cong-nghe-detail.component");
var doi_song_detail_component_1 = require("./doi-song/doi-song-detail/doi-song-detail.component");
var giai_tri_detail_component_1 = require("./giai-tri/giai-tri-detail/giai-tri-detail.component");
var kinh_doanh_detail_component_1 = require("./kinh-doanh/kinh-doanh-detail/kinh-doanh-detail.component");
var phap_luat_detail_component_1 = require("./phap-luat/phap-luat-detail/phap-luat-detail.component");
var suc_khoe_detail_component_1 = require("./suc-khoe/suc-khoe-detail/suc-khoe-detail.component");
var the_gioi_detail_component_1 = require("./the-gioi/the-gioi-detail/the-gioi-detail.component");
var the_thao_detail_component_1 = require("./the-thao/the-thao-detail/the-thao-detail.component");
var thoi_su_detail_component_1 = require("./thoi-su/thoi-su-detail/thoi-su-detail.component");
var tuan_vn_detail_component_1 = require("./tuan-vn/tuan-vn-detail/tuan-vn-detail.component");
var video_detail_component_1 = require("./video/video-detail/video-detail.component");
var xe_detail_component_1 = require("./xe/xe-detail/xe-detail.component");
var giao_duc_detail_component_1 = require("./giao-duc/giao-duc-detail/giao-duc-detail.component");
var dang_ky_component_1 = require("./dang-ky/dang-ky.component");
var dang_nhap_component_1 = require("./dang-nhap/dang-nhap.component");
var khoi_phuc_mk_component_1 = require("./khoi-phuc-mk/khoi-phuc-mk.component");
var thanh_vien_component_1 = require("./thanh-vien/thanh-vien.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var result_search_component_1 = require("./result-search/result-search.component");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '', component: home_component_1.HomeComponent },
    { path: 'chinh-tri', component: chinh_tri_component_1.ChinhTriComponent },
    { path: 'ban-doc', component: ban_doc_component_1.BanDocComponent },
    { path: 'bat-dong-san', component: bat_dong_san_component_1.BatDongSanComponent },
    { path: 'cong-nghe', component: cong_nghe_component_1.CongNgheComponent },
    { path: 'doi-song', component: doi_song_component_1.DoiSongComponent },
    { path: 'giai-tri', component: giai_tri_component_1.GiaiTriComponent },
    { path: 'kinh-doanh', component: kinh_doanh_component_1.KinhDoanhComponent },
    { path: 'phap-luat', component: phap_luat_component_1.PhapLuatComponent },
    { path: 'suc-khoe', component: suc_khoe_component_1.SucKhoeComponent },
    { path: 'the-gioi', component: the_gioi_component_1.TheGioiComponent },
    { path: 'the-thao', component: the_thao_component_1.TheThaoComponent },
    { path: 'thoi-su', component: thoi_su_component_1.ThoiSuComponent },
    { path: 'tuan-vn', component: tuan_vn_component_1.TuanVnComponent },
    { path: 'video', component: video_component_1.VideoComponent },
    { path: 'xe', component: xe_component_1.XeComponent },
    { path: 'giao-duc', component: giao_duc_component_1.GiaoDucComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'introduce', component: introduce_component_1.IntroduceComponent },
    { path: 'ban-doc-detail', component: ban_doc_detail_component_1.BanDocDetailComponent },
    { path: 'chinh-tri-detail', component: chinh_tri_detail_component_1.ChinhTriDetailComponent },
    { path: 'bat-dong-san-detail', component: bat_dong_san_detail_component_1.BatDongSanDetailComponent },
    { path: 'cong-nghe-detail', component: cong_nghe_detail_component_1.CongNgheDetailComponent },
    { path: 'doi-song-detail', component: doi_song_detail_component_1.DoiSongDetailComponent },
    { path: 'giai-tri-detail', component: giai_tri_detail_component_1.GiaiTriDetailComponent },
    { path: 'kinh-doanh-detail', component: kinh_doanh_detail_component_1.KinhDoanhDetailComponent },
    { path: 'phap-luat-detail', component: phap_luat_detail_component_1.PhapLuatDetailComponent },
    { path: 'suc-khoe-detail', component: suc_khoe_detail_component_1.SucKhoeDetailComponent },
    { path: 'the-gioi-detail', component: the_gioi_detail_component_1.TheGioiDetailComponent },
    { path: 'the-thao-detail', component: the_thao_detail_component_1.TheThaoDetailComponent },
    { path: 'thoi-su-detail', component: thoi_su_detail_component_1.ThoiSuDetailComponent },
    { path: 'tuan-vn-detail', component: tuan_vn_detail_component_1.TuanVnDetailComponent },
    { path: 'video-detail', component: video_detail_component_1.VideoDetailComponent },
    { path: 'xe-detail', component: xe_detail_component_1.XeDetailComponent },
    { path: 'giao-duc-detail', component: giao_duc_detail_component_1.GiaoDucDetailComponent },
    { path: 'dang-nhạp', component: dang_nhap_component_1.DangNhapComponent },
    { path: 'dang-ky', component: dang_ky_component_1.DangKyComponent },
    { path: 'khoi-phuc', component: khoi_phuc_mk_component_1.KhoiPhucMKComponent },
    { path: 'thanh-vien', component: thanh_vien_component_1.ThanhVienComponent },
    { path: 'result-search', component: result_search_component_1.ResultSearchComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

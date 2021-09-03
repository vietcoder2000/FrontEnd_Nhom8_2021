"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var dialog_1 = require("@angular/material/dialog");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var grid_list_1 = require("@angular/material/grid-list");
var home_component_1 = require("./home/home.component");
var chinh_tri_component_1 = require("./chinh-tri/chinh-tri.component");
var thoi_su_component_1 = require("./thoi-su/thoi-su.component");
var kinh_doanh_component_1 = require("./kinh-doanh/kinh-doanh.component");
var giai_tri_component_1 = require("./giai-tri/giai-tri.component");
var the_gioi_component_1 = require("./the-gioi/the-gioi.component");
var giao_duc_component_1 = require("./giao-duc/giao-duc.component");
var doi_song_component_1 = require("./doi-song/doi-song.component");
var phap_luat_component_1 = require("./phap-luat/phap-luat.component");
var the_thao_component_1 = require("./the-thao/the-thao.component");
var cong_nghe_component_1 = require("./cong-nghe/cong-nghe.component");
var suc_khoe_component_1 = require("./suc-khoe/suc-khoe.component");
var bat_dong_san_component_1 = require("./bat-dong-san/bat-dong-san.component");
var ban_doc_component_1 = require("./ban-doc/ban-doc.component");
var tuan_vn_component_1 = require("./tuan-vn/tuan-vn.component");
var xe_component_1 = require("./xe/xe.component");
var video_component_1 = require("./video/video.component");
var contact_component_1 = require("./footer/contact/contact.component");
var introduce_component_1 = require("./footer/introduce/introduce.component");
var more_component_1 = require("./more/more.component");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/common/http");
var ban_doc_detail_component_1 = require("./ban-doc/ban-doc-detail/ban-doc-detail.component");
var bat_dong_san_detail_component_1 = require("./bat-dong-san/bat-dong-san-detail/bat-dong-san-detail.component");
var chinh_tri_detail_component_1 = require("./chinh-tri/chinh-tri-detail/chinh-tri-detail.component");
var cong_nghe_detail_component_1 = require("./cong-nghe/cong-nghe-detail/cong-nghe-detail.component");
var doi_song_detail_component_1 = require("./doi-song/doi-song-detail/doi-song-detail.component");
var giai_tri_detail_component_1 = require("./giai-tri/giai-tri-detail/giai-tri-detail.component");
var giao_duc_detail_component_1 = require("./giao-duc/giao-duc-detail/giao-duc-detail.component");
var kinh_doanh_detail_component_1 = require("./kinh-doanh/kinh-doanh-detail/kinh-doanh-detail.component");
var phap_luat_detail_component_1 = require("./phap-luat/phap-luat-detail/phap-luat-detail.component");
var suc_khoe_detail_component_1 = require("./suc-khoe/suc-khoe-detail/suc-khoe-detail.component");
var the_gioi_detail_component_1 = require("./the-gioi/the-gioi-detail/the-gioi-detail.component");
var the_thao_detail_component_1 = require("./the-thao/the-thao-detail/the-thao-detail.component");
var thoi_su_detail_component_1 = require("./thoi-su/thoi-su-detail/thoi-su-detail.component");
var tuan_vn_detail_component_1 = require("./tuan-vn/tuan-vn-detail/tuan-vn-detail.component");
var video_detail_component_1 = require("./video/video-detail/video-detail.component");
var xe_detail_component_1 = require("./xe/xe-detail/xe-detail.component");
var dang_ky_component_1 = require("./dang-ky/dang-ky.component");
var dang_nhap_component_1 = require("./dang-nhap/dang-nhap.component");
var thanh_vien_component_1 = require("./thanh-vien/thanh-vien.component");
var khoi_phuc_mk_component_1 = require("./khoi-phuc-mk/khoi-phuc-mk.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var forms_1 = require("@angular/forms");
var result_search_component_1 = require("./result-search/result-search.component");
var tin_moi_nong_component_1 = require("./tin-moi-nong/tin-moi-nong.component");
var tin_moi_nong_detail_component_1 = require("./tin-moi-nong/tin-moi-nong-detail/tin-moi-nong-detail.component");
var angular_responsive_carousel_1 = require("angular-responsive-carousel");
var ngx_pagination_1 = require("ngx-pagination");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                home_component_1.HomeComponent,
                chinh_tri_component_1.ChinhTriComponent,
                thoi_su_component_1.ThoiSuComponent,
                kinh_doanh_component_1.KinhDoanhComponent,
                giai_tri_component_1.GiaiTriComponent,
                the_gioi_component_1.TheGioiComponent,
                giao_duc_component_1.GiaoDucComponent,
                doi_song_component_1.DoiSongComponent,
                phap_luat_component_1.PhapLuatComponent,
                the_thao_component_1.TheThaoComponent,
                cong_nghe_component_1.CongNgheComponent,
                suc_khoe_component_1.SucKhoeComponent,
                bat_dong_san_component_1.BatDongSanComponent,
                ban_doc_component_1.BanDocComponent,
                tuan_vn_component_1.TuanVnComponent,
                xe_component_1.XeComponent,
                video_component_1.VideoComponent,
                contact_component_1.ContactComponent,
                introduce_component_1.IntroduceComponent,
                more_component_1.MoreComponent,
                ban_doc_detail_component_1.BanDocDetailComponent,
                bat_dong_san_detail_component_1.BatDongSanDetailComponent,
                chinh_tri_detail_component_1.ChinhTriDetailComponent,
                cong_nghe_detail_component_1.CongNgheDetailComponent,
                doi_song_detail_component_1.DoiSongDetailComponent,
                giai_tri_detail_component_1.GiaiTriDetailComponent,
                giao_duc_detail_component_1.GiaoDucDetailComponent,
                kinh_doanh_detail_component_1.KinhDoanhDetailComponent,
                phap_luat_detail_component_1.PhapLuatDetailComponent,
                suc_khoe_detail_component_1.SucKhoeDetailComponent,
                the_gioi_detail_component_1.TheGioiDetailComponent,
                the_thao_detail_component_1.TheThaoDetailComponent,
                thoi_su_detail_component_1.ThoiSuDetailComponent,
                tuan_vn_detail_component_1.TuanVnDetailComponent,
                video_detail_component_1.VideoDetailComponent,
                xe_detail_component_1.XeDetailComponent,
                dang_nhap_component_1.DangNhapComponent,
                dang_ky_component_1.DangKyComponent,
                thanh_vien_component_1.ThanhVienComponent,
                khoi_phuc_mk_component_1.KhoiPhucMKComponent,
                page_not_found_component_1.PageNotFoundComponent,
                result_search_component_1.ResultSearchComponent,
                tin_moi_nong_component_1.TinMoiNongComponent,
                tin_moi_nong_detail_component_1.TinMoiNongDetailComponent,
            ],
            imports: [
                angular_responsive_carousel_1.IvyCarouselModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                dialog_1.MatDialogModule,
                http_1.HttpClientModule,
                grid_list_1.MatGridListModule,
                forms_1.FormsModule,
                ngx_pagination_1.NgxPaginationModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

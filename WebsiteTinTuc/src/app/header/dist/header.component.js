"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var more_component_1 = require("../more/more.component");
var dang_nhap_component_1 = require("../dang-nhap/dang-nhap.component");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dialog, testsearchservice) {
        this.dialog = dialog;
        this.testsearchservice = testsearchservice;
        this.searchText = '';
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.showMore = function () {
        this.dialog.open(more_component_1.MoreComponent);
    };
    HeaderComponent.prototype.showLogin = function () {
        this.dialog.open(dang_nhap_component_1.DangNhapComponent);
    };
    HeaderComponent.prototype.onInputs = function (event) {
        this.testsearchservice.searchTerm.next(event.target.value);
    };
    HeaderComponent.prototype.onInput = function (text) {
        this.testsearchservice.searchTerm.next(text);
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

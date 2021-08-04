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
var ResultSearchComponent = /** @class */ (function () {
    function ResultSearchComponent(testsearchservice) {
        this.testsearchservice = testsearchservice;
        this.textSearch = '';
    }
    ResultSearchComponent.prototype.ngOnInit = function () {
        this.getTextSearch();
    };
    ResultSearchComponent.prototype.getTextSearch = function () {
        this.textSearch = this.testsearchservice.searchTerm.value;
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

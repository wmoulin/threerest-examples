"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const threerest_1 = require("threerest");
const bdHelper_1 = require("../helpers/bdHelper");
const serie_1 = require("../models/serie");
let ServiceSeries = class ServiceSeries {
    getAll() {
        return bdHelper_1.default.getAllSeries();
    }
    getswitchId(id) {
        var result = bdHelper_1.default.searchParams('series', 'id', id);
        if (result) {
            let titles = bdHelper_1.default.getShortTitles(result['titles']);
            let serie = new serie_1.default(result.id, result["name"], result["number_of_tome"], result["current_series"]);
            serie.titles = titles;
            return serie;
        }
        throw new threerest_1.NotFoundError();
    }
};
__decorate([
    threerest_1.Methods.get(""),
    threerest_1.Hal.halServiceMethod(true)
], ServiceSeries.prototype, "getAll", null);
__decorate([
    threerest_1.Methods.get("/:id"),
    threerest_1.Hal.halServiceMethod(),
    __param(0, threerest_1.Params("id"))
], ServiceSeries.prototype, "getswitchId", null);
ServiceSeries = __decorate([
    threerest_1.Service.path("/series")
], ServiceSeries);
exports.default = ServiceSeries;

//# sourceMappingURL=../../maps/services/serie-service.js.map

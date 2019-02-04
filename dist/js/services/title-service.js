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
let ServiceTitles = class ServiceTitles {
    getAll() {
        return bdHelper_1.default.getTitles();
    }
    getswitchId(id) {
        var result = bdHelper_1.default.searchParams('titles', 'id', id);
        if (result) {
            return bdHelper_1.default.getTitle(result, id);
        }
        throw new threerest_1.NotFoundError();
    }
};
__decorate([
    threerest_1.Methods.get(""),
    threerest_1.Hal.halServiceMethod(true)
], ServiceTitles.prototype, "getAll", null);
__decorate([
    threerest_1.Methods.get("/:id"),
    threerest_1.Hal.halServiceMethod(false),
    __param(0, threerest_1.Params("id"))
], ServiceTitles.prototype, "getswitchId", null);
ServiceTitles = __decorate([
    threerest_1.Service.path("/titles")
], ServiceTitles);
exports.default = ServiceTitles;

//# sourceMappingURL=../../maps/services/title-service.js.map

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
const author_1 = require("../models/author");
//var db = require('../database/database');
let ServiceAuthors = 
/**
 * this is class documentation
 */
class ServiceAuthors {
    //@Hal.halServiceMethod(true)
    /**
     * this is method documentation
     */
    getAll() {
        return bdHelper_1.default.getAllAuthors();
    }
    getswitchId(id) {
        var result = bdHelper_1.default.searchParams('authors', 'id', id);
        if (result) {
            let series = bdHelper_1.default.getShortSerie(result['series']);
            return new author_1.default(result.id, result["first_name"], result["last_name"], series);
        }
        throw new threerest_1.NotFoundError();
    }
};
__decorate([
    threerest_1.Methods.get("")
    //@Hal.halServiceMethod(true)
    /**
     * this is method documentation
     */
], ServiceAuthors.prototype, "getAll", null);
__decorate([
    threerest_1.Methods.get("/:id"),
    threerest_1.Hal.halServiceMethod(),
    __param(0, threerest_1.Params("id"))
], ServiceAuthors.prototype, "getswitchId", null);
ServiceAuthors = __decorate([
    threerest_1.Service.path("/authors")
    /**
     * this is class documentation
     */
], ServiceAuthors);
exports.default = ServiceAuthors;

//# sourceMappingURL=../../maps/services/author-service.js.map

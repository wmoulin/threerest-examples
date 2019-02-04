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
let ServiceTest = class ServiceTest {
    getAll() {
        return { "name": "test" };
    }
    getId(id) {
        return { "name": "test", "id": id };
    }
};
__decorate([
    threerest_1.Methods.get("")
], ServiceTest.prototype, "getAll", null);
__decorate([
    threerest_1.Methods.get("/:id"),
    __param(0, threerest_1.Params("id"))
], ServiceTest.prototype, "getId", null);
ServiceTest = __decorate([
    threerest_1.Service.path("/test")
], ServiceTest);
exports.default = ServiceTest;

//# sourceMappingURL=../../maps/services/service-test.js.map

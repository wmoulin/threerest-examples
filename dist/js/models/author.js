"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const threerest_1 = require("threerest");
let Author = class Author {
    constructor(id, firstName, lastName, series) {
        this.id = 0;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.series = series;
    }
};
__decorate([
    threerest_1.Hal.resourceId()
], Author.prototype, "id", void 0);
Author = __decorate([
    threerest_1.Hal.halEntity("/authors/:id")
], Author);
exports.default = Author;

//# sourceMappingURL=../../maps/models/author.js.map

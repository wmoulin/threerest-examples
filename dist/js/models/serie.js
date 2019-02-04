"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const threerest_1 = require("threerest");
let Serie = class Serie {
    /*constructor(idSerie, name, author, number_of_tome, current_series) {
      this.idSerie = idSerie;
      this.name = name;
      this.author = author;
      this.number_of_tome = number_of_tome;
      this.current_series = current_series;
    }*/
    constructor(id, name, number_of_tome, current_series) {
        this.id = 0;
        this.id = id;
        this.name = name;
        this.number_of_tome = number_of_tome;
        this.current_series = current_series;
    }
};
__decorate([
    threerest_1.Hal.resourceId()
], Serie.prototype, "id", void 0);
Serie = __decorate([
    threerest_1.Hal.halEntity("/series/:id")
], Serie);
exports.default = Serie;

//# sourceMappingURL=../../maps/models/serie.js.map

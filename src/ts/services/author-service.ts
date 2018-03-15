import { Service, Methods, Hal, NotFoundError } from "threerest";

import BdHelper from "../helpers/bdHelper";
import Serie from "../models/serie";
import Author from "../models/author";
//var db = require('../database/database');

@Service.path("/authors")
export default class ServiceAuthors {

  @Methods.get("")
  @Hal.halServiceMethod(true)
  getAll() {
    return BdHelper.getAllAuthors();
  }

  @Methods.get("/:id")
  @Hal.halServiceMethod()
  getswitchId(value) {
    var id = value.id;
    var result = BdHelper.searchParams('authors', 'id', id);
    if (result) {
      let series = BdHelper.getShortSerie(result['series']);
      return new Author(result.id, result["first_name"], result["last_name"], series);
    }
    throw new NotFoundError();
  }
}

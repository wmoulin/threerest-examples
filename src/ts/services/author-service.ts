import { Service, Methods, Hal, NotFoundError, Params } from "threerest";

import BdHelper from "../helpers/bdHelper";
import Author from "../models/author";
//var db = require('../database/database');

@Service.path("/authors")
/**
 * this is class documentation
 */
export default class ServiceAuthors {
  
  /**
   * this is method documentation
   */
  @Methods.get("")
  getAll() : Author[] {
    return BdHelper.getAllAuthors();
  }

  @Methods.get("/:id")
  @Hal.halServiceMethod()
  getswitchId(@Params("id") id: number) {
    var result = BdHelper.searchParams('authors', 'id', id);
    if (result) {
      let series = BdHelper.getShortSerie(result['series']);
      return new Author(result.id, result["first_name"], result["last_name"], series);
    }
    throw new NotFoundError();
  }
}

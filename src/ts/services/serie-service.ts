import { Service, Methods, Hal, NotFoundError } from "threerest";

import BdHelper from "../helpers/bdHelper";
import Serie from "../models/serie";

@Service.path("/series")
export default class ServiceSeries {

  @Methods.get("")
  @Hal.halServiceMethod(true)
  getAll() {
    return BdHelper.getAllSeries();
  }

  @Methods.get("/:id")
  @Hal.halServiceMethod()
  getswitchId(value) {
    var result = BdHelper.searchParams('series', 'id', value.id);
  	if (result) {
      let titles = BdHelper.getShortTitles(result['titles']);
      let serie = new Serie(result.id, result["name"], result["number_of_tome"], result["current_series"]);
      serie.titles = titles;
      return serie;
    }
    throw new NotFoundError();
  }
}

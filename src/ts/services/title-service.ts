import { Service, Methods, Hal, NotFoundError } from "threerest";

import BdHelper from "../helpers/bdHelper";

@Service.path("/titles")
export default class ServiceTitles {

  @Methods.get("")
  @Hal.halServiceMethod(true)
  getAll() {
    return BdHelper.getTitles();
  }

  @Methods.get("/:id")
  @Hal.halServiceMethod(false)
  getswitchId(value) {
    var id = value.id;
   	var result = BdHelper.searchParams('titles', 'id', id);
   	if (result) {
       return BdHelper.getTitle(result, id);
   	}
    throw new NotFoundError();
  }
}

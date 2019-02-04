import { Service, Methods, Params } from "threerest";

@Service.path("/test")
export default class ServiceTest {

  @Methods.get("")
  getAll() {
    return {"name": "test"};
  }

  @Methods.get("/:id")
  getId(@Params("id") id: number) {
    return {"name": "test", "id": id};
  }
}

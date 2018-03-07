import { Hal } from "threerest";
import Serie from "./serie";

@Hal.halEntity("/authors/:id")
export default class Author {

  firstName: string;
  lastName: string;
  series: Array<Serie>;

  @Hal.resourceId()
  id: number = 0;

  constructor(id, firstName, lastName, series) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.series = series;
  }
}

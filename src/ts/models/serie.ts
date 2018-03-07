import { Hal } from "threerest";
import Title from "./title";

@Hal.halEntity("/series/:id")
export default class Serie {

  @Hal.resourceId()
  id: number = 0;
  name: string;
  author: string;
  number_of_tome: number;
  current_series: boolean;
  titles: Array<Title>;

  /*constructor(idSerie, name, author, number_of_tome, current_series) {
    this.idSerie = idSerie;
    this.name = name;
    this.author = author;
    this.number_of_tome = number_of_tome;
    this.current_series = current_series;
  }*/
  constructor(id, name, number_of_tome, current_series) {
    this.id = id;
    this.name = name;
    this.number_of_tome = number_of_tome;
    this.current_series = current_series;
  }
}

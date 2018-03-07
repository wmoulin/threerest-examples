let assert = require("assert");

import Author from "../models/author";
import Serie from "../models/serie";
import Title from "../models/title";
import { DB } from "../app-const";

export default class BdHelper {

  /*
   * Traitement de l'ensemble des données pour transformer les entrées
   * auteur de la base de donnée en suite d'objet Author
   */
  /*static getAuthors() {
    let arr:Array<Author> = [];
    for (var i = 0; i < DB["authors"].length; i++) {
        arr.push(BdHelper.getAuthor(DB["authors"][i], i + 1));
    }
    return arr;
  }*/

  /*
   * A partir des données d'un auteur, on crée un objet Author.
   * Chaque objet Serie est crée et ajouté à l'Author.
   */
  /*static getAuthor(json, id) {
    let series:Array<Serie> = [];
    for (var i=0 ; i < json["series"].length ; i++)
    {
      series.push(BdHelper.getSerie(json["series"][i].id));
    }
    return new Author(id, json["first_name"], json["last_name"], series);
  }*/

  /*
   * Traitement de l'ensemble des données pour transformer les entrées
   * series de la base de donnée en suite d'objet Serie
   */
  /*static getSeries(short = true) {
    let arr:Array<Serie> = [];
    let len = DB["series"].length;
    for (var i = 0; i < len; i++) {
        arr.push(BdHelper.getSerie(DB["series"][i].id, short));
    }
    return arr;
  }*/

  /*
   * A partir des données d'une série, on crée un objet Serie.
   */
  /*static getSerie(id, short = true) {
    let json = DB['series'][id];
    if (short) {
      return new Serie(json["id"], json["name"], json['number_of_tome'], json['current_series']);
    } else {
      let serie = new Serie(json["id"], json["name"], json['number_of_tome'], json['current_series']);
      serie.titles = this.getTitles(json);
      return serie;
    }
    
  }*/

  /*
   * Traitement de l'ensemble des données pour transformer les entrées
   * titres de la base de donnée en suite d'objet Titre
   */
  static getTitles(json = DB) {
    let arr:Array<Title> = [];
    let len = json["titles"].length;
    for (var i = 0; i < len; i++) {
        arr.push(BdHelper.getTitle(json["titles"][i], i));
    }
    return arr;
  }

  /*
   * A partir des données d'un titre, on crée un objet Title.
   */
  static getTitle(json, id) {
    return new Title(id, json["name"], BdHelper.findAuthor(json["author"]).first_name + " " + BdHelper.findAuthor(json["author"]).last_name);
  }

  /*
   * Renvoie l'objet json correspondant à la catégorie, au critère voulue
   */
  static searchParams(categoryField, searchField, searchVal) {
    for (let i=0 ; i < DB[categoryField].length ; i++)
    {
      if (DB[categoryField][i][searchField] == searchVal) {
        return DB[categoryField][i]
      }
    }
  }

/*****************************************
 * 
 * 
 * 
 */

  static getShortSerie(json) {
    let series: Array<Serie> = [];
    for (var i = 0; i < json.length; i++) {
      let currentIdSerie = json[i];
      let currentSerie = BdHelper.findSerie(currentIdSerie.id);
      series.push(new Serie(currentSerie["id"], currentSerie["name"], currentSerie['number_of_tome'], currentSerie['current_series']));
    }
    return series;
  }

  static getShortTitles(json) {
    let titles: Array<Title> = [];
    for (var i = 0; i < json.length; i++) {
      let currentIdTitle = json[i];
      let currentTitle = BdHelper.findTitle(currentIdTitle.id);
      titles.push(new Title(currentTitle["id"], currentTitle["name"], BdHelper.findAuthor(currentTitle['author']).name));
    }
    return titles;
  }

  static findSerie(id) {
    return DB['series'].find(x => x.id === id);
  }

  static findTitle(id) {
    return DB['titles'].find(x => x.id === id);
  }

  static findAuthor(id) {
    return DB['authors'].find(x => x.id === id);
  }

  static getAllSeries() {
    let arr:Array<Serie> = [];
    let len = DB["series"].length;
    for (var i = 0; i < len; i++) {
      let currentSerie = DB["series"][i];
      let serie = new Serie(currentSerie["id"], currentSerie["name"], currentSerie['number_of_tome'], currentSerie['current_series']);
      serie.author = BdHelper.findAuthor(currentSerie['author']).first_name + " " + BdHelper.findAuthor(currentSerie['author']).last_name;
      arr.push(serie);
    }
    return arr;
  }

  static getAllAuthors() {
    let arr:Array<Author> = [];
    let len = DB["authors"].length;
    for (var i = 0; i < len; i++) {
      let currentAuthor = DB["authors"][i];
      let author = new Author(currentAuthor["id"], currentAuthor["first_name"], currentAuthor['last_name'], currentAuthor['series']);
      //serie.author = BdHelper.findAuthor(currentSerie['author']).first_name + " " + BdHelper.findAuthor(currentSerie['author']).last_name;
      author.series = BdHelper.getShortSerie(currentAuthor['series']);
      arr.push(author);
    }
    return arr;
  }

}

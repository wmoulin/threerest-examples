import * as express from "express";
import * as request from "supertest";
import * as assert from "assert";

import "mocha";

import serviceAuthor from "../../../src/ts/services/author-service";
import { ServiceLoader } from "threerest";

describe("Laod simple simple service rest", function () {
  it("should return a result", function (done) {

    let app = express();
    ServiceLoader.loadService(app, new serviceAuthor());

    request(app)
      .get("/authors")
      .expect('{"data":[{"id":0,"firstName":"Art","lastName":"Spiegelman","series":[{"idSerie":0,"name":"Maus","_links":{"self":{"href":"/series/0"}}}],"_links":{"self":{"href":"/authors/0"}}},{"id":1,"firstName":"Christophe","lastName":"Bec","series":[{"idSerie":1,"name":"Carthago","_links":{"self":{"href":"/series/1"}}},{"idSerie":2,"name":"Deepwater Prison","_links":{"self":{"href":"/series/2"}}},{"idSerie":3,"name":"Meilleur Job du monde (le)","_links":{"self":{"href":"/series/3"}}},{"idSerie":4,"name":"Prométhée","_links":{"self":{"href":"/series/4"}}},{"idSerie":5,"name":"Temps des loups (Le)","_links":{"self":{"href":"/series/5"}}}],"_links":{"self":{"href":"/authors/1"}}},{"id":2,"firstName":"Denis","lastName":"Bajram","series":[{"idSerie":6,"name":"Expérience mort","_links":{"self":{"href":"/series/6"}}},{"idSerie":7,"name":"Universal War One","_links":{"self":{"href":"/series/7"}}},{"idSerie":8,"name":"Universal War Two","_links":{"self":{"href":"/series/8"}}}],"_links":{"self":{"href":"/authors/2"}}},{"id":3,"firstName":"Enki","lastName":"Bilal","series":[{"idSerie":9,"name":"La trilogie nikopol","_links":{"self":{"href":"/series/9"}}},{"idSerie":10,"name":"La Tétralogie du Monstre","_links":{"self":{"href":"/series/10"}}}],"_links":{"self":{"href":"/authors/3"}}},{"id":4,"firstName":"Frank","lastName":"Miller","series":[{"idSerie":11,"name":"Sin City","_links":{"self":{"href":"/series/11"}}}],"_links":{"self":{"href":"/authors/4"}}}],"_links":{"self":{"href":"/authors"},"nextLink":{"href":"/authors?pageSize=NaN&pageIdx=NaN"},"previousLink":{"href":"/authors?pageSize=NaN&pageIdx=NaN"},"first":{"href":"/authors?pageSize=NaN&pageIdx=0"},"last":{"href":"/authors?pageSize=NaN&pageIdx=NaN"}}}', done);
  });
    
  it("should return a result", function (done) {

    let app = express();
    ServiceLoader.loadService(app, new serviceAuthor());

    request(app)
      .get("/authors/2")
      //.expect('{"name":"test","id":{"id":"12"}}', done);
      .expect('{"data":{"id":"2","firstName":"Christophe","lastName":"Bec","series":[{"idSerie":1,"name":"Carthago","_links":{"self":{"href":"/series/1"}}},{"idSerie":2,"name":"Deepwater Prison","_links":{"self":{"href":"/series/2"}}},{"idSerie":3,"name":"Meilleur Job du monde (le)","_links":{"self":{"href":"/series/3"}}},{"idSerie":4,"name":"Prométhée","_links":{"self":{"href":"/series/4"}}},{"idSerie":5,"name":"Temps des loups (Le)","_links":{"self":{"href":"/series/5"}}}],"_links":{"self":{"href":"/authors/2"}}},"_links":{"self":{"href":"/authors/2"}}}', done);
      
  });

});

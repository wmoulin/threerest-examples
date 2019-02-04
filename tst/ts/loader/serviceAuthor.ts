import * as express from "express";
import * as request from "supertest";

import "mocha";

import serviceAuthor from "../../../src/ts/services/author-service";
import { ServiceLoader } from "threerest";

const dataTest1 = require("./authors.json");
const dataTest2 = require("./author.json");

describe("Laod Author service rest", function () {
  it("should return all", function (done) {

    let app = express();
    ServiceLoader.loadService(app, new serviceAuthor());

    request(app)
      .get("/authors")
      .expect(dataTest1, done);
  });

  it("should return one", function (done) {

    let app = express();
    ServiceLoader.loadService(app, new serviceAuthor());

    request(app)
      .get("/authors/2")
      .expect(dataTest2, done);

  });

});

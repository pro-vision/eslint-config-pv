/* eslint-disable strict */
"use strict";

const ESLint = require("eslint").ESLint;
const validJS = `
import _ from "underscore";
import SearchInputModel from "search-input-model";

const a = b => b;
const v = b => b;
a();
v();

export default SearchInputModel.extend({

  /**
   * @param  {Object} opt needs app
   */
  initialize(opt = {}) {
    this.app = opt.app;
    this.viewKey = opt.app.viewKeys.directionsPage;
  },

  /**
     * the actual geolocation is in a shared parent's method
     * @param  {Object}  result from server
     * @return {void}
     */
  onBeforeThat(result = {}) {
    const coords = {
      lat: result.coords.latitude,
      lng: result.coords.longitude
    };
    this.set("geoLocation", coords);
    this.set("startPoint", coords);
    this.unset("startPointAddress");
  },

  /**
   * execute when text search submitted
   * @param {string} searchInput user generated string
   * @return {void}
   */
  onSubmitSearch(searchInput = "") {
    this.trigger("route:new-search", searchInput);
    let searchString = "";
    if (_.isString(searchInput)) {
      searchString = searchInput;
    }
    else if (_.isObject(searchInput) && _.isString(searchInput.searchString)) {
      searchString = searchInput.searchString;
    }
    this.set("startPoint", searchString);

    this.unset("lastValidMethod");
    this.unset("googleDirectionResults");

    this.requestRoute(this.app.reqres.request("dtm:get-transit-options") || {});
    this.updateDeepLink();
  },

  /**
   * @return {void}
   */
  onSearchInputEmpty() {
    this.unset("startPoint");
    this.updateDeepLink();
  },

  /**
   * @return {void}
   */
  updateDeepLink() {
    const dealerId = this.get("dealerModel").get("id");
    const dealerName = this.get("dealerModel").get("name");
    const startPoint = this.get("startPoint");
    const viewKey = this.app.viewKeys.directionsPage;

    const deepLinkModel = this.app.reqres.request("deepLinkModel");

    deepLinkModel.set({
      viewKey,
      properties: {
        dealerId,
        dealerName,
        startPoint,
      }
    });
  }
});

`;

const invalidJS = `
let a;
something = 1;
`;

const invalidES5 = `
function test() {
  var a = [
    1,
    2,
  ];
  a.push(arguments.callee);
  var b = {};
  b.__defineGetter__('tom', test);
}
`;

describe("flags no warnings with valid js", () => {
  let eslint, results;

  beforeEach(() => {
    eslint = new ESLint({
      useEslintrc: false,
      overrideConfigFile: "__tests__/.eslintrc-index",
    });
  });

  it("did not error", async () => {
    results = await eslint.lintText(validJS);
    expect(results[0].errorCount).toBe(0);
  });

  it("did not warn", async () => {
    results = await eslint.lintText(validJS);
    expect(results[0].warningCount).toBe(0);
  });
});

describe("handles legacy JS", () => {
  let eslint, results;

  beforeEach(() => {
    eslint = new ESLint({
      useEslintrc: false,
      overrideConfigFile: "__tests__/.eslintrc-legacy",
    });
  });

  it("doesn't parse ES6", async () => {
    results = await eslint.lintText(validJS);
    expect(results[0].errorCount).toBe(1);
  });

  it("follows legacy rules", async () => {
    results = await eslint.lintText(invalidES5);
    expect(results[0].errorCount).toBe(7);
  });
});

describe("flags warnings with invalid js", () => {
  let eslint, results;

  beforeEach(() => {
    eslint = new ESLint({
      useEslintrc: false,
      overrideConfigFile: "__tests__/.eslintrc-index",
    });
  });

  it("did error", async () => {
    results = await eslint.lintText(invalidJS);
    expect(results[0].errorCount).toBe(1);
  });

  it("correct error text", async () => {
    results = await eslint.lintText(invalidJS);
    expect(results[0].messages[0].message).toBe("'a' is defined but never used.");
  });

  it("correct error rule", async () => {
    results = await eslint.lintText(invalidJS);
    expect(results[0].messages[0].ruleId).toBe("no-unused-vars");
  });

  it("correct line number for error", async () => {
    results = await eslint.lintText(invalidJS);
    expect(results[0].messages[0].line).toBe(2);
  });

  it("correct severity for error", async () => {
    results = await eslint.lintText(invalidJS);
    expect(results[0].messages[0].severity).toBe(2);
  });
});

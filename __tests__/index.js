/* eslint-disable strict */
"use strict";

const CLIEngine = require("eslint").CLIEngine;
const validJS = `
import _ from "underscore";
import SearchInputModel from "search-input-model";

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
        startPoint
      }
    });
  }
});

`;

const invalidJS = `
let a;
something = 1;
`;

describe("flags no warnings with valid js", () => {
  let cli, result;

  beforeEach(() => {
    cli = new CLIEngine({
      extends: ["../index.js"],
      env: {
        "es6": true,
        "browser": true
      },
      "parserOptions": {
        "sourceType": "module"
      }
    });
  });

  it("did not error", () => {
    result = cli.executeOnText(validJS).results[0];
    expect(result.errorCount).toBe(0);
  });

  it("did not warn", () => {
    result = cli.executeOnText(validJS).results[0];
    expect(result.warningCount).toBe(0);
  });
});

describe("flags warnings with invalid js", () => {
  let cli, result;

  beforeEach(() => {
    cli = new CLIEngine({
      extends: ["../index.js"],
      env: {
        "es6": true,
        "browser": true
      },
      "parserOptions": {
        "sourceType": "module"
      }
    });
  });

  it("did error", () => {
    result = cli.executeOnText(invalidJS).results[0];
    expect(result.errorCount).toBe(1);
  });

  it("correct error text", () => {
    result = cli.executeOnText(invalidJS).results[0];
    expect(result.messages[0].message).toBe("'a' is defined but never used.");
  });

  it("correct error rule", () => {
    result = cli.executeOnText(invalidJS).results[0];
    expect(result.messages[0].ruleId).toBe("no-unused-vars");
  });

  it("correct line number for error", () => {
    result = cli.executeOnText(invalidJS).results[0];
    expect(result.messages[0].line).toBe(2);
  });

  it("correct severity for error", () => {
    result = cli.executeOnText(invalidJS).results[0];
    expect(result.messages[0].severity).toBe(2);
  });
});

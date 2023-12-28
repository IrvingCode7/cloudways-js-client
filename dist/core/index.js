"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// services/core/index.ts
var core_exports = {};
__export(core_exports, {
  apiCall: () => apiCall,
  initializeCloudwaysApi: () => initializeCloudwaysApi
});
module.exports = __toCommonJS(core_exports);
var import_axios = __toESM(require("axios"));
var config = {
  email: "",
  api_key: ""
};
var authToken = null;
function initializeCloudwaysApi(userConfig) {
  config = userConfig;
}
async function getNewToken() {
  if (!config.email || !config.api_key) {
    throw new Error(
      "Configuration is incomplete. Please initialize with email and api_key."
    );
  }
  try {
    const response = await import_axios.default.post(
      "https://api.cloudways.com/api/v1/oauth/access_token",
      config
    );
    authToken = {
      token: response.data.access_token,
      expiration: Date.now() + (response.data.expires_in - 300) * 1e3
    };
  } catch (error) {
    throw new Error("Error getting new token: " + error);
  }
}
async function apiCall(endpoint, method = "GET" /* GET */, data = null) {
  if (!authToken || Date.now() >= authToken.expiration) {
    await getNewToken();
  }
  if (!authToken) {
    throw new Error("No API token available.");
  }
  try {
    const response = await (0, import_axios.default)({
      url: `https://api.cloudways.com/api/v1${endpoint}`,
      method,
      headers: {
        Authorization: `Bearer ${authToken.token}`
      },
      data
    });
    return response.data;
  } catch (error) {
    throw new Error("API call failed: " + error);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  apiCall,
  initializeCloudwaysApi
});

// services/addonsManagement.ts
import axios, { AxiosResponse } from "axios";
import {
  ActivateAddOnOnServerRequest,
  ActivateAddOnOnServerResponse,
  ActivateAddOnAccountLevelRequest,
  ActivateAddOnAccountLevelResponse,
  AddOnRequestForApplicationRequest,
  AddOnRequestForApplicationResponse,
  DeactivateAddOnOnServerRequest,
  DeactivateAddOnOnServerResponse,
  DeactivateAddonRequest,
  DeactivateAddonResponse,
  GetAddonsListResponse,
  UpgradeAddonPackageParameters,
  UpgradeAddonPackageResponse,
  ListElasticEmailDomainsResponse,
  VerifyElasticEmailDomainParameters,
  VerifyElasticEmailDomainResponse,
  DeleteElasticEmailDomainParameters,
  DeleteElasticEmailDomainResponse,
} from "../types/addonsManagement.js";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";

const addonsManagement = {
  activateAddOnOnServer: async (
    requestData: ActivateAddOnOnServerRequest
  ): Promise<ActivateAddOnOnServerResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/addon/activateOnServer`,
      requestData
    );
    return response.data;
  },

  activateAddOnAccountLevel: async (
    requestData: ActivateAddOnAccountLevelRequest
  ): Promise<ActivateAddOnAccountLevelResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/addon/activate`,
      requestData
    );
    return response.data;
  },

  addOnRequestForApplication: async (
    requestData: AddOnRequestForApplicationRequest
  ): Promise<AddOnRequestForApplicationResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/addon/request`,
      requestData
    );
    return response.data;
  },

  deactivateAddOnOnServer: async (
    requestData: DeactivateAddOnOnServerRequest
  ): Promise<DeactivateAddOnOnServerResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/addon/deactivateOnServer`,
      requestData
    );
    return response.data;
  },

  deactivateAddon: async (
    requestData: DeactivateAddonRequest
  ): Promise<DeactivateAddonResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/addon/deactivate`,
      requestData
    );
    return response.data;
  },

  getAddonsList: async (): Promise<GetAddonsListResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(`${baseURL}/addon`);
    return response.data;
  },

  upgradeAddonPackage: async (
    params: UpgradeAddonPackageParameters
  ): Promise<UpgradeAddonPackageResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/addon/upgrade`,
      params
    );
    return response.data;
  },

  listElasticEmailDomains:
    async (): Promise<ListElasticEmailDomainsResponse> => {
      const accessToken = await getAccessToken();
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      const response: AxiosResponse = await axios.get(
        `${baseURL}/addon/elastic/domains`
      );
      return response.data;
    },

  verifyElasticEmailDomain: async (
    params: VerifyElasticEmailDomainParameters
  ): Promise<VerifyElasticEmailDomainResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/addon/elastic/verify_domain`,
      null,
      { params }
    );
    return response.data;
  },

  deleteElasticEmailDomain: async (
    params: DeleteElasticEmailDomainParameters
  ): Promise<DeleteElasticEmailDomainResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.delete(
      `${baseURL}/addon/elastic/domain`,
      { params }
    );
    return response.data;
  },
};

module.exports = addonsManagement;

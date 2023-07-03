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
} from "../types/addonsManagement";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";

export async function activateAddOnOnServer(
  requestData: ActivateAddOnOnServerRequest
): Promise<ActivateAddOnOnServerResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/addon/activateOnServer`,
    requestData
  );
  return response.data;
}

export async function activateAddOnAccountLevel(
  requestData: ActivateAddOnAccountLevelRequest
): Promise<ActivateAddOnAccountLevelResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/addon/activate`,
    requestData
  );
  return response.data;
}

export async function addOnRequestForApplication(
  requestData: AddOnRequestForApplicationRequest
): Promise<AddOnRequestForApplicationResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/addon/request`,
    requestData
  );
  return response.data;
}

export async function deactivateAddOnOnServer(
  requestData: DeactivateAddOnOnServerRequest
): Promise<DeactivateAddOnOnServerResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/addon/deactivateOnServer`,
    requestData
  );
  return response.data;
}

export async function deactivateAddon(
  requestData: DeactivateAddonRequest
): Promise<DeactivateAddonResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/addon/deactivate`,
    requestData
  );
  return response.data;
}

export async function getAddonsList(): Promise<GetAddonsListResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/addon`);
  return response.data;
}

export async function upgradeAddonPackage(
  params: UpgradeAddonPackageParameters
): Promise<UpgradeAddonPackageResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/addon/upgrade`,
    params
  );
  return response.data;
}

export async function listElasticEmailDomains(): Promise<ListElasticEmailDomainsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/addon/elastic/domains`
  );
  return response.data;
}

export async function verifyElasticEmailDomain(
  params: VerifyElasticEmailDomainParameters
): Promise<VerifyElasticEmailDomainResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/addon/elastic/verify_domain`,
    null,
    { params }
  );
  return response.data;
}

export async function deleteElasticEmailDomain(
  params: DeleteElasticEmailDomainParameters
): Promise<DeleteElasticEmailDomainResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.delete(
    `${baseURL}/addon/elastic/domain`,
    { params }
  );
  return response.data;
}

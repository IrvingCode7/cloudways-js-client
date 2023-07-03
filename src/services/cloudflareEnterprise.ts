import axios, { AxiosResponse } from "axios";
import {
  GetCloudflareDetailsParameters,
  GetCloudflareDetailsResponse,
  SetupCloudflareParameters,
  SetupCloudflareResponse,
  DeleteDomainParameters,
  DeleteDomainResponse,
  TransferDomainParameters,
  TransferDomainResponse,
  PurgeDomainParameters,
  PurgeDomainResponse,
  SetCacheModeParameters,
  SetCacheModeResponse,
  GetDnsQueryParameters,
  GetDnsQueryResponse,
  VerifyTxtRecordsParameters,
  VerifyTxtRecordsResponse,
} from "../types/cloudflareEnterprise";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";

export async function getCloudflareDetails(
  params: GetCloudflareDetailsParameters
): Promise<GetCloudflareDetailsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/cloudflareCdn`,
    { params }
  );
  return response.data;
}

export async function setupCloudflare(
  params: SetupCloudflareParameters
): Promise<SetupCloudflareResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/cloudflareCdn`,
    params
  );
  return response.data;
}

export async function deleteDomain(
  params: DeleteDomainParameters
): Promise<DeleteDomainResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/cloudflareCdn/delete`,
    params
  );
  return response.data;
}

export async function transferDomain(
  params: TransferDomainParameters
): Promise<TransferDomainResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/cloudflareCdn/transferDomain`,
    params
  );
  return response.data;
}

export async function purgeDomain(
  params: PurgeDomainParameters
): Promise<PurgeDomainResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/cloudflareCdn/purgeDomain`,
    params
  );
  return response.data;
}

export async function setCacheMode(
  params: SetCacheModeParameters
): Promise<SetCacheModeResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.put(
    `${baseURL}/app/cloudflareCdn/setCacheMode`,
    params
  );
  return response.data;
}

export async function getDnsQuery(
  params: GetDnsQueryParameters
): Promise<GetDnsQueryResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/cloudflareCdn/getDnsQuery`,
    params
  );
  return response.data;
}

export async function verifyTxtRecords(
  params: VerifyTxtRecordsParameters
): Promise<VerifyTxtRecordsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/cloudflareCdn/verifyTxtRecords`,
    params
  );
  return response.data;
}

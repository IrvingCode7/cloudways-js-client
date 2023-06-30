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
} from "../types/cloudflareEnterprise.js";
const baseURL = "https://api.cloudways.com/api/v1";

const cloudflareEnterprise = {
  getCloudflareDetails: async (
    params: GetCloudflareDetailsParameters
  ): Promise<GetCloudflareDetailsResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/cloudflareCdn`,
      { params }
    );
    return response.data;
  },

  setupCloudflare: async (
    params: SetupCloudflareParameters
  ): Promise<SetupCloudflareResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/cloudflareCdn`,
      params
    );
    return response.data;
  },

  deleteDomain: async (
    params: DeleteDomainParameters
  ): Promise<DeleteDomainResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/cloudflareCdn/delete`,
      params
    );
    return response.data;
  },

  transferDomain: async (
    params: TransferDomainParameters
  ): Promise<TransferDomainResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/cloudflareCdn/transferDomain`,
      params
    );
    return response.data;
  },

  purgeDomain: async (
    params: PurgeDomainParameters
  ): Promise<PurgeDomainResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/cloudflareCdn/purgeDomain`,
      params
    );
    return response.data;
  },

  setCacheMode: async (
    params: SetCacheModeParameters
  ): Promise<SetCacheModeResponse> => {
    const response: AxiosResponse = await axios.put(
      `${baseURL}/app/cloudflareCdn/setCacheMode`,
      params
    );
    return response.data;
  },

  getDnsQuery: async (
    params: GetDnsQueryParameters
  ): Promise<GetDnsQueryResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/cloudflareCdn/getDnsQuery`,
      params
    );
    return response.data;
  },

  verifyTxtRecords: async (
    params: VerifyTxtRecordsParameters
  ): Promise<VerifyTxtRecordsResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/cloudflareCdn/verifyTxtRecords`,
      params
    );
    return response.data;
  },
};

export default cloudflareEnterprise;

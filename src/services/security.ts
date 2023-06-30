import axios, { AxiosResponse } from "axios";

import {
  AllowAdminerParameters,
  AllowAdminerResponse,
  AllowSIABParameters,
  AllowSIABResponse,
  ChangeAutoRenewalPolicyParameters,
  ChangeAutoRenewalPolicyResponse,
  CheckIPBlacklistedParameters,
  CheckIPBlacklistedResponse,
  CreateCSRCertificateParameters,
  CreateCSRCertificateResponse,
  GetCSRCertificateParameters,
  GetCSRCertificateResponse,
  GetWhitelistedIPsMySQLParameters,
  GetWhitelistedIPsMySQLResponse,
  GetWhitelistedIPsSSHParameters,
  GetWhitelistedIPsSSHResponse,
  CreateDNSParameters,
  CreateDNSResponse,
  VerifyDNSParameters,
  VerifyDNSResponse,
  InstallLetsEncryptParameters,
  InstallLetsEncryptResponse,
  RenewLetsEncryptManuallyParameters,
  RenewLetsEncryptManuallyResponse,
  RevokeLetsEncryptParameters,
  RevokeLetsEncryptResponse,
  UpdateSSLCertificateParameters,
  UpdateSSLCertificateResponse,
  OwnSSLCertificateParameters,
  OwnSSLCertificateResponse,
  RemoveOwnSSLCertificateParameters,
  RemoveOwnSSLCertificateResponse,
  UpdateWhitelistedIPsParameters,
  UpdateWhitelistedIPsResponse,
} from "../types/security.js";
const baseURL = "https://api.cloudways.com/api/v1";

const security = {
  allowAdminer: async (
    params: AllowAdminerParameters
  ): Promise<AllowAdminerResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/security/adminer`,
      params
    );
    return response.data;
  },

  allowSIAB: async (
    params: AllowSIABParameters
  ): Promise<AllowSIABResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/security/siab`,
      params
    );
    return response.data;
  },

  changeAutoRenewalPolicy: async (
    params: ChangeAutoRenewalPolicyParameters
  ): Promise<ChangeAutoRenewalPolicyResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/security/lets_encrypt_auto`,
      params
    );
    return response.data;
  },

  checkIPBlacklisted: async (
    params: CheckIPBlacklistedParameters
  ): Promise<CheckIPBlacklistedResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/security/isBlacklisted`,
      { params }
    );
    return response.data;
  },

  createCSRCertificate: async (
    params: CreateCSRCertificateParameters
  ): Promise<CreateCSRCertificateResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/security/csr`,
      params
    );
    return response.data;
  },

  getCSRCertificate: async (
    params: GetCSRCertificateParameters
  ): Promise<GetCSRCertificateResponse> => {
    const response: AxiosResponse = await axios.get(`${baseURL}/security/csr`, {
      params,
    });
    return response.data;
  },

  getWhitelistedIPsMySQL: async (
    params: GetWhitelistedIPsMySQLParameters
  ): Promise<GetWhitelistedIPsMySQLResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/security/whitelistedIpsMysql`,
      { params }
    );
    return response.data;
  },

  getWhitelistedIPsSSH: async (
    params: GetWhitelistedIPsSSHParameters
  ): Promise<GetWhitelistedIPsSSHResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/security/whitelisted`,
      { params }
    );
    return response.data;
  },

  createDNS: async (
    params: CreateDNSParameters
  ): Promise<CreateDNSResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/security/createDNS`,
      params
    );
    return response.data;
  },

  verifyDNS: async (
    params: VerifyDNSParameters
  ): Promise<VerifyDNSResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/security/verifyDNS`,
      params
    );
    return response.data;
  },

  installLetsEncrypt: async (
    params: InstallLetsEncryptParameters
  ): Promise<InstallLetsEncryptResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/security/lets_encrypt_install`,
      params
    );
    return response.data;
  },

  renewLetsEncryptManually: async (
    params: RenewLetsEncryptManuallyParameters
  ): Promise<RenewLetsEncryptManuallyResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/security/lets_encrypt_manual_renew`,
      params
    );
    return response.data;
  },

  revokeLetsEncrypt: async (
    params: RevokeLetsEncryptParameters
  ): Promise<RevokeLetsEncryptResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/security/lets_encrypt_revoke`,
      params
    );
    return response.data;
  },

  updateSSLCertificate: async (
    params: UpdateSSLCertificateParameters
  ): Promise<UpdateSSLCertificateResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/security/crt`,
      params
    );
    return response.data;
  },

  ownSSLCertificate: async (
    params: OwnSSLCertificateParameters
  ): Promise<OwnSSLCertificateResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/security/own_ssl`,
      params
    );
    return response.data;
  },

  removeOwnSSLCertificate: async (
    params: RemoveOwnSSLCertificateParameters
  ): Promise<RemoveOwnSSLCertificateResponse> => {
    const response: AxiosResponse = await axios.delete(
      `${baseURL}/security/removeCustomSSL`,
      { data: params }
    );
    return response.data;
  },

  updateWhitelistedIPs: async (
    params: UpdateWhitelistedIPsParameters
  ): Promise<UpdateWhitelistedIPsResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/security/whitelisted`,
      params
    );
    return response.data;
  },
};

export default security;

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
} from "../types/security";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";

export async function allowAdminer(
  params: AllowAdminerParameters
): Promise<AllowAdminerResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/security/adminer`,
    params
  );
  return response.data;
}

export async function allowSIAB(
  params: AllowSIABParameters
): Promise<AllowSIABResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/security/siab`,
    params
  );
  return response.data;
}

export async function changeAutoRenewalPolicy(
  params: ChangeAutoRenewalPolicyParameters
): Promise<ChangeAutoRenewalPolicyResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/security/lets_encrypt_auto`,
    params
  );
  return response.data;
}

export async function checkIPBlacklisted(
  params: CheckIPBlacklistedParameters
): Promise<CheckIPBlacklistedResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/security/isBlacklisted`,
    { params }
  );
  return response.data;
}

export async function createCSRCertificate(
  params: CreateCSRCertificateParameters
): Promise<CreateCSRCertificateResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/security/csr`,
    params
  );
  return response.data;
}

export async function getCSRCertificate(
  params: GetCSRCertificateParameters
): Promise<GetCSRCertificateResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/security/csr`, {
    params,
  });
  return response.data;
}

export async function getWhitelistedIPsMySQL(
  params: GetWhitelistedIPsMySQLParameters
): Promise<GetWhitelistedIPsMySQLResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/security/whitelistedIpsMysql`,
    { params }
  );
  return response.data;
}

export async function getWhitelistedIPsSSH(
  params: GetWhitelistedIPsSSHParameters
): Promise<GetWhitelistedIPsSSHResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/security/whitelisted`,
    { params }
  );
  return response.data;
}

export async function createDNS(
  params: CreateDNSParameters
): Promise<CreateDNSResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/security/createDNS`,
    params
  );
  return response.data;
}

export async function verifyDNS(
  params: VerifyDNSParameters
): Promise<VerifyDNSResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/security/verifyDNS`,
    params
  );
  return response.data;
}

export async function installLetsEncrypt(
  params: InstallLetsEncryptParameters
): Promise<InstallLetsEncryptResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/security/lets_encrypt_install`,
    params
  );
  return response.data;
}

export async function renewLetsEncryptManually(
  params: RenewLetsEncryptManuallyParameters
): Promise<RenewLetsEncryptManuallyResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/security/lets_encrypt_manual_renew`,
    params
  );
  return response.data;
}

export async function revokeLetsEncrypt(
  params: RevokeLetsEncryptParameters
): Promise<RevokeLetsEncryptResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/security/lets_encrypt_revoke`,
    params
  );
  return response.data;
}

export async function updateSSLCertificate(
  params: UpdateSSLCertificateParameters
): Promise<UpdateSSLCertificateResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/security/crt`,
    params
  );
  return response.data;
}

export async function ownSSLCertificate(
  params: OwnSSLCertificateParameters
): Promise<OwnSSLCertificateResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/security/own_ssl`,
    params
  );
  return response.data;
}

export async function removeOwnSSLCertificate(
  params: RemoveOwnSSLCertificateParameters
): Promise<RemoveOwnSSLCertificateResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.delete(
    `${baseURL}/security/removeCustomSSL`,
    { data: params }
  );
  return response.data;
}

export async function updateWhitelistedIPs(
  params: UpdateWhitelistedIPsParameters
): Promise<UpdateWhitelistedIPsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/security/whitelisted`,
    params
  );
  return response.data;
}

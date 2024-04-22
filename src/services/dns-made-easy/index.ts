import { apiCall } from "../core";
import { HttpMethod } from "../core/types";

import type {
  ListDNSMadeEasyDomainsResponse,
  GetDNSMadeEasyDomainRecordsResponse,
  addRecordToDnsMadeEasyDomainResponse,
  getCurrentMonthDnsUsageResponse,
} from "./types";

/**
 * Retrieves a list of DNS Made Easy domains.
 * @returns {Promise<ListDNSMadeEasyDomainsResponse>} A Promise that resolves to an object containing an array of DNS Made Easy domains.
 * @example 
 * {
  "domains": [
    {
      "uid": "9a9f3e63-ef76-4066-8a65-fcbb71e30bd8",
      "name": "myfirstdomain.com",
      "query_usage": "1.56",
      "status": "Inactive",
      "nameservers": [
        "nameserver1.com"
      ]
    }
  ]
}
 */
export function listDNSMadeEasyDomains(): Promise<ListDNSMadeEasyDomainsResponse> {
  return apiCall("/dme/domains", HttpMethod.GET).then(
    (response) => response as ListDNSMadeEasyDomainsResponse
  );
}

/**
 * Adds DNS Made Easy domains.
 * @param {string[]} names - An array of domain names to add.
 * @returns {Promise<{ message: string }>} A Promise that resolves to an object containing a message indicating the success of the operation.
 * @example
 * {
  "message": "Domains Created Successfully"
}
 */
export function AddDNSMadeEasyDomains(
  names: string[]
): Promise<{ message: string }> {
  const data = {
    names: names,
  };
  return apiCall("/dme/domains", HttpMethod.POST, data).then((response) => ({
    message: response.message,
  }));
}

/**
 * Deletes DNS Made Easy domains.
 * @param {string[]} ids - An array of domain IDs to delete.
 * @returns {Promise<{ deleted: boolean, message: string }>} A Promise that resolves to an object containing a boolean indicating whether the domains were deleted successfully and a message describing the outcome.
 * @example
 * {
  "deleted": true,
  "message": "Domains Deleted Successfully"
}
 */
export function DeleteDNSMadeEasyDomains(
  ids: string[]
): Promise<{ deleted: boolean; message: string }> {
  const data = {
    ids: ids,
  };
  return apiCall("/dme/domains", HttpMethod.DELETE, data).then((response) => ({
    deleted: response.deleted,
    message: response.message,
  }));
}

/**
 * Retrieves the status of a DNS Made Easy domain.
 * @param {string} uid - The unique identifier of the domain.
 * @returns {Promise<{ status: string }>} A Promise that resolves to an object containing the status of the domain.
 * @example 
 * {
  "status": "Inactive"
}
 */
export function getDNSMadeEasyDomainsStatus(
  uid: string
): Promise<{ status: string }> {
  return apiCall(`/dme/domains/${uid}/status`, HttpMethod.GET).then(
    (response) => ({
      status: response.status,
    })
  );
}

/**
 * Retrieves DNS Made Easy domain's records.
 * @param {string} domainId - Domain ID.
 * @returns {Promise<GetDNSMadeEasyDomainRecordsResponse>} The response containing the DNS records.
 * @example
 * {
  "records": [
    {
      "uid": "9aaaae08-57ab-4a63-944f-1ccf15791aa2",
      "type": "MX",
      "attributes": {
        "ttl": 3600,
        "name": "",
        "value": "192.168.1.14",
        "failed": false,
        "source": 1,
        "monitor": false,
        "failover": false,
        "hardLink": false,
        "dynamicDns": false,
        "gtdLocation": "DEFAULT"
      }
    },
  ]
}
 */
export function getDNSMadeEasyDomainsRecords(
  domainId: string
): Promise<GetDNSMadeEasyDomainRecordsResponse> {
  return apiCall(`/dme/domains/${domainId}/records`, HttpMethod.GET).then(
    (response) => response as GetDNSMadeEasyDomainRecordsResponse
  );
}

/**
 * Adds records to a DNS Made Easy domain.
 * @param {string} domainId - The ID of the domain.
 * @param {any[]} records - The records to add to the domain.
 * @returns {Promise<addRecordToDnsMadeEasyDomainResponse>} A promise that resolves with the response indicating the success of the operation.
 * @example
 * {
  "records": [
    {
      "type": "A",
      "attributes": {
      "source": 1,
      "gtdLocation": "DEFAULT",
      "ttl": 3600,
      "failover": false,
      "monitor": false,
      "hardLink": false,
      "dynamicDns": false,
      "failed": false,
      "name": "test",
      "value": "192.168.31.2"
      },
    "uid": "9ad24517-8d56-4ad5-9665-bc4492d25351",
    "updated_at": "2023-12-11T07:15:29.000000Z",
    "created_at": "2023-12-11T07:15:29.000000Z"
    }
  ]
}
 */
export function AddRecordToDnsMadeEasyDomain(
  domainId: string,
  records: any[]
): Promise<addRecordToDnsMadeEasyDomainResponse> {
  const data = {
    records: records,
    domain_id: domainId,
  };
  return apiCall(
    `/dme/domains/${domainId}/records`,
    HttpMethod.POST,
    data
  ).then((response) => response as addRecordToDnsMadeEasyDomainResponse);
}

/**
 * Deletes records from a DNS Made Easy domain.
 * @param {string} domainId - The ID of the domain.
 * @param {string[]} records_id - The IDs of the records to delete.
 * @returns {Promise<{ status: boolean, message: string }>} A promise that resolves with the status and message indicating the success of the operation.
 * @example
 *  {
  "status": true,
  "message": "Record Deleted Successfully."
}
 */
export function DeleteRecordfromDnsMadeEasyDomain(
  domainId: string,
  records_id: string[]
): Promise<{ status: boolean; message: string }> {
  const data = {
    records_id: records_id,
    domain_id: domainId,
  };
  return apiCall(
    `/dme/domains/${domainId}/records`,
    HttpMethod.DELETE,
    data
  ).then((response) => ({
    status: response.status,
    message: response.message,
  }));
}

/**
 * Updates a record of a DNS Made Easy domain.
 * @param {string} domainId - The ID of the domain.
 * @param {string} record_id - The ID of the record to update.
 * @param {object} record - The updated record object.
 * @returns {Promise<{ status: boolean, message: string }>} A promise that resolves with the status and message indicating the success of the operation.
 * @example
 * {
  "status": true,
  "message": "Record Updated Successfully."
}
 */
export function updateRecordOfDnsMadeEasyDomain(
  domainId: string,
  record_id: string,
  record: object
): Promise<{ status: boolean; message: string }> {
  const data = {
    record: record,
  };
  return apiCall(
    `/dme/domains/${domainId}/records/${record_id}`,
    HttpMethod.PUT,
    data
  ).then((response) => ({
    status: response.status,
    message: response.message,
  }));
}

/**
 * Retrieves the current month's DNS Made Easy domain usage.
 * @param {string} domainId - The ID of the domain.
 * @returns {Promise<getCurrentMonthDnsUsageResponse>} A promise that resolves with the current month's DNS usage response.
 * @example
 * {
  usage: [
    {
      date: "2023-12-01",
      query_usage: 20,
    },
    {
      date: "2023-12-02",
      query_usage: 30,
    },
  ],
}
 */
export function GetCurrentMonthDnsMadeEasyDomainUsage(
  domainId: string
): Promise<getCurrentMonthDnsUsageResponse> {
  return apiCall(`/dme/domains/${domainId}/usage`, HttpMethod.GET).then(
    (response) => response as getCurrentMonthDnsUsageResponse
  );
}

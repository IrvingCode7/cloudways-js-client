/**
 * Represents the response from the API endpoint for listing DNS Made Easy domains.
 */
export interface ListDNSMadeEasyDomainsResponse {
  domains: DNSMadeEasyDomain[];
}

/**
 * Represents a DNS Made Easy domain.
 */
export interface DNSMadeEasyDomain {
  uid: string;
  name: string;
  query_usage: string;
  status: string;
  nameservers: string[];
}

/**
 * Represents the response from the API endpoint for retrieving DNS Made Easy domain's records.
 */
export interface GetDNSMadeEasyDomainRecordsResponse {
  records: DNSRecord[];
}

/**
 * Represents a DNS record in the response from the API endpoint for retrieving DNS Made Easy domain's records.
 */
export interface DNSRecord {
  uid: string;
  type: string;
  attributes: {
    ttl: number;
    name: string;
    value: string;
    failed: boolean;
    source: number;
    monitor: boolean;
    failover: boolean;
    hardLink: boolean;
    dynamicDns: boolean;
    gtdLocation: string;
  };
}

export interface addRecordToDnsMadeEasyDomainResponse {
  records: {
    type: string;
    attributes: {
      source: number;
      gtdLocation: string;
      ttl: number;
      failover: boolean;
      monitor: boolean;
      hardLink: boolean;
      dynamicDns: boolean;
      failed: boolean;
      name: string;
      value: string;
    };
    uid: string;
    updated_at: string;
    created_at: string;
  }[];
}

export interface getCurrentMonthDnsUsageResponse {
  usage: {
    date: string;
    query_usage: number;
  }[];
}

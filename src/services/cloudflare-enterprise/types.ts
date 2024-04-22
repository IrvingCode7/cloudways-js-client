/**
 * interface to get cloudflare details
 */

export interface cloudflareDetailsResponse {
  status: boolean;
  dns: {
    app_id: string;
    hostname: string;
    hostname_id: string;
    bandwidth: string;
    status: string;
  }[];
  mode: string | null;
  SP: [];
}

/**
 * interface to setup cloudflare  to you application
 */

export interface setupCloudflareResponse {
  status: boolean;
  operation: {
    id: string;
    type: string;
    server_id: string;
    cluster_id: string;
    estimated_time_remaining: string;
    customer_id: string;
    frontend_step_number: string;
    status: string;
    is_completed: string;
    message: string;
    app_id: string;
    app_label: string;
    data: [];
  };
}

/**
 * interface to fetch Record Response
 */
export interface FetchTxtRecordsResponse {
  status: boolean;
  txt_records: {
    ownership_verification: {
      status: string;
      txt_name: string;
      txt_value: string;
    };
    ownership_verification_http: {
      type: string;
      name: string;
      value: string;
    };
  };
}

/**
 * interface to get smart cache purge
 */
export interface getSmartCachePurgeResponse {
  status: boolean;
  data: {
    deployed: boolean;
  };
}

/**
 * interface to get cloudflare Settings Response
 */
export interface getcloudflareSettingsResponse {
  status: boolean;
  data: {
    setting: {
      min_tls_version: string;
      early_hints: string;
      tls_1_3: string;
    };
    custom_metadata: {
      mirage: boolean;
      polish: string;
      webp: boolean;
      minify_js: boolean;
      minify_css: boolean;
      minify_html: boolean;
      scrapeshield: boolean;
      caching: boolean;
      edgecaching: boolean;
      ua_mode: string;
    };
  };
}

/**
 * Represents the response from the API endpoint for getting Cloudflare cache analytics.
 */
export interface GetCloudflareCacheAnalyticsResponse {
  status: boolean;
  data: {
    cachStatus: CacheStatus[];
    servedByCloudflare: ServedBy[];
    servedByEdge: ServedBy[];
    servedByOrigin: ServedBy[];
    topAsn: Metric[];
    topContentTypes: Metric[];
    topCountries: Metric[];
    topDeviceTypes: Metric[];
    topEdgeStatusCodes: Metric[];
    topHosts: Metric[];
    topHttpMethods: Metric[];
    topIPs: Metric[];
    topQueryStrings: Metric[];
    topUriPaths: Metric[];
    topUserAgent: Metric[];
    total: Metric[];
    totalServedByCloudflare: Metric[];
    totalServedByOrigin: Metric[];
  }[];
}

/**
 * Represents a cache status object in the Cloudflare cache analytics response.
 */
export interface CacheStatus {
  count: number;
  dimensions: {
    cacheStatus: string;
  };
  sum: {
    edgeResponseBytes: number;
  };
}

/**
 * Represents a served by object in the Cloudflare cache analytics response.
 */
export interface ServedBy {
  count: number;
  dimensions: {
    ts: string;
  };
  sum: {
    edgeResponseBytes: number;
  };
}

/**
 * Represents a metric object in the Cloudflare cache analytics response.
 */
export interface Metric {
  count: number;
  dimensions: {
    metric: string;
  };
  sum: {
    edgeResponseBytes: number;
  };
}

/**
 * Represents the response from the API endpoint for getting Cloudflare security analytics.
 */
export interface GetCloudflareSecurityAnalyticsResponse {
  status: boolean;
  data: SecurityAnalyticsData[];
}

/**
 * Represents the data object in the Cloudflare security analytics response.
 */
export interface SecurityAnalyticsData {
  eventByServices: MetricWithAvg[];
  seriesByCloudflare: MetricWithoutAvg[];
  seriesByOrigin: MetricWithoutAvg[];
  topAsn: MetricWithoutAvg[];
  topContentType: MetricWithoutAvg[];
  topCountries: MetricWithoutAvg[];
  topDevice: MetricWithoutAvg[];
  topDeviceType: MetricWithoutAvg[];
  topHosts: MetricWithoutAvg[];
  topHttpMethods: MetricWithoutAvg[];
  topIPs: MetricWithoutAvg[];
  topUriPaths: MetricWithoutAvg[];
  topUserAgent: MetricWithoutAvg[];
  topedgeResponseStatus: MetricWithoutAvg[];
  total: MetricWithAvg[];
  totalAction: MetricWithoutAvg[];
}

/**
 * Represents a metric object in the Cloudflare security analytics response that includes 'avg'.
 */
export interface MetricWithAvg {
  avg: {
    sampleInterval: number;
  };
  count: number;
  dimensions: {
    metric: string;
    source?: string;
    ts?: string;
    clientASNDescription?: string;
  };
}

/**
 * Represents a metric object in the Cloudflare security analytics response that doesn't include 'avg'.
 */
export interface MetricWithoutAvg {
  count: number;
  dimensions: {
    metric: string;
    source?: string;
    ts?: string;
    clientASNDescription?: string;
  };
}

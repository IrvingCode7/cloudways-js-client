export interface ChangeServiceStateParameters {
  server_id: number;
  service: string;
  state: "start" | "stop" | "restart";
}

export interface ChangeServiceStateResponse {
  service_status: {
    status: string;
  };
}

export interface GetServicesStatusParameters {
  server_id: number;
}

export interface GetServicesStatusResponse {
  services: {
    status: {
      apache2: string;
      elasticsearch: string;
      elasticsearch_enabled: number;
      memcached: string;
      mysql: string;
      "newrelic-sysmond": string;
      nginx: string;
      "redis-server": string;
      redis_enabled: number;
      varnish: string;
      varnish_enabled: number;
    };
  };
}

export interface GetAppVarnishStateParameters {
  server_id: number;
  app_id: number;
}

export interface GetAppVarnishStateResponse {}

export interface UpdateServerVarnishStateParameters {
  server_id: number;
  action: "enable" | "disable" | "purge";
}

export interface UpdateServerVarnishStateResponse {}

export interface UpdateAppVarnishStateParameters {
  server_id: number;
  app_id: number;
  action: "enable" | "disable";
}

export interface UpdateAppVarnishStateResponse {}

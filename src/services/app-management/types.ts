
/**
 * Interface for the response of getting application backup status.
 */
export interface AppBackupStatusResponse {
    /**
     * Indicates the status of the backup operation.
     */
    status: boolean;
  
    /**
     * The ID associated with the backup operation.
     */
    operation_id: number;
  
    /**
     * Index signature to handle unknown properties.
     */
    [key: string]: any;
  }

  /**
 * Interface for the response containing information about App Credentials.
 */
export interface AppCredentialsResponse {
  app_creds: {
      id: string;
      sys_password: string;
      sys_user: string;
      ssh_keys: {
          label: string;
          ssh_key_id: string;
      }[];
  }[];
}

/**
 * Interface for the response containing SSH access status.
 */
export interface SSHAccessStatusResponse {
  response: {
    ssh_status: {
      [appId: string]: boolean;
    };
  };
}

/**
 * Interface for the response containing application access status.
 */
export interface ApplicationAccessStateResponse {
  response: {
    app_status: {
      [appId: string]: boolean;
    };
  };
  status: boolean;
}

/**
 * Interface for the response of getting the cron list.
 */
export interface CronListResponse {
  basic: {
    cmd_type: string;
    command: string;
    days: string;
    hours: string;
    minutes: string;
    months: string;
    weekdays: string;
  }[];
  script: string;
}

/**
 * Interface for the response containing FPM settings.
 */
export interface FpmSettingsResponse {
  response: {
    fpm_enabled: boolean;
    settings: string;
  };
}



/**
 * Interface for the response containing Varnish settings.
 */
export interface VarnishSettingsResponse {
  response: {
    varnish_app_enabled: boolean;
    varnish_enabled: boolean;
    vcl_list: {
      method: string;
      type: string;
      value: string;
    }[];
  };
}

/**
 * Interface for the response to get app setting value
 */
export interface getAppSettingResponse{
    status : boolean,
    application_id : string,
    from_address : string | null,
    cors_header : number,
    enforce_https: number
 
}

/**
 * Interface for the response to update app geo Ip Header status.
 */
export interface UpdateGeoIpHeaderResponse {
  response: {
    geo_ip: {
      [key: string]: boolean;
    };
  };
  status: boolean;
}


/**
 * Interface for the response to update App XMLRPC Header status.
 */
export interface UpdateAppXMLRPCHeaderResponse {
  response: {
    xml_rpc: {
      [key: string]: boolean;
    };
  };
  status: boolean;
}




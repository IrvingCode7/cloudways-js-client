/**
 * Represents the response received after activating an addon on account level.
 */
export interface ActivateAddonAccountLevelResponse {
    /**
     * A message indicating the success or result of the activation process.
     */
    message: string;
    
    /**
     * Additional information about the activated addon, if applicable.
     */
    sub: {
      /**
       * The ID of the user addon.
       */
      id_user_addons: string;
      
      /**
       * The status of the addon activation.
       */
      status: string;
      
      /**
       * The ID of the package associated with the addon, if any.
       */
      id_package: number | string | null;
    };
  }



  /**
 * Represents the response received after deactivating an addon.
 */
export interface DeactivateAnAddonResponse {
    /**
     * A message indicating the success or result of the deactivation process.
     */
    message: string;
    
    /**
     * Additional information about the deactivated addon, if applicable.
     */
    sub: {
        /**
         * The ID of the user addon.
         */
        id_user_addons: string;
        
        /**
         * The status of the addon deactivation.
         */
        status: number;
    };
}


interface AddonList {
    id: string;
    label: string;
    custom_field_1: string | null;
    name: string;
    external_link: string;
    vendor: string;
    binding: string;
    form: string;
    incompatible: number[] | null;
    view_type: string;
    sort_order: string;
    packages: {
      [key: string]: {
        id_package: string;
        id_addons: string;
        package_name: string;
        period: string;
        package_price: string;
        addon_limit: string;
        sort_order: string;
      };
    };
  }
  
  export interface AddonsListResponse {
    addons: { [key: string]: AddonList };
  }
  

  /**
 * Interface for the response of upgrading an addon package.
 */
export interface UpgradeAddonResponse {
  message: string;
  sub: {
    id_user_addons: string;
    status: string;
    id_package: string;
  };
}

/**
 * Interface for the response containing domain details.
 */
export interface ElasticEmailDomainsResponse {
  status: boolean;
  data: {
    domains: {
      domain: string;
      spf: boolean;
      mx: boolean;
      dkim: boolean;
      dmarc: boolean;
      tracking: boolean;
    }[];
  };
}

/**
 * Interface for the response to verify elastic email domain
 */
export interface verifyEmailDomainResponse {
  status : boolean,
  data : {
    domain : string,
    spf: boolean;
    mx: boolean;
    dkim: boolean;
    dmarc: boolean;
    tracking: boolean; 
  }
}
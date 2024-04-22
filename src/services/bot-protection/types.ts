/**
 * Represents the response data for Bot Protection Traffic.
 */
export interface BotProtectionTrafficResponse {
    logs: {
      ip: string;
      status: string;
      time: number;
      method: string;
      path: string;
      user_agent: string;
      resp_code: number;
      country_name: string;
      id: string;
    }[];
  }
  
  /**
   * Represents the response data for Bot Protection Traffic sumary.
   */
  export interface BotProtectionTrafficSummaryResponse {
    sinceLastDays: number;
    blocked: number;
    total: number;
    summary: {
      day: string;
      total: number;
      allowed: number;
      blocked: number;
    }[];
  }
  
  /**
   * Represents the response data for Bot Protection Login Traffic.
   */
  export interface BotProtectionLoginTrafficResponse {
    logs: {
      ip: string;
      status: "FAILED" | "BLOCKED";
      time: number;
      message: string;
      username: string;
      country_name: string;
      id: string;
    }[];
  }
  
  export interface BotProtectionLoginTrafficSummaryResponse {
    sinceLastDays: number;
    blocked: number;
    total: number;
    summary: {
      day: string;
      total: number;
      succeeded : number;
      blocked: number;
      failed : number;
    }[];
  }
  
  
  export interface BotProtectionBadBotsListResponse {
    blocked : number,
    logs: {
      botname: string;
      visits : number;
      allowed : number;
      blocked : number
    }[];
  }
  
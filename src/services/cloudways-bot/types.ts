/**
 * Interface representing the response structure for creating an alert channel.
 */
export interface CreateAlertChannelResponse {
  integration: {
    id: number;
    name: string;
    user_id: number;
    events: number[];
    config: {
      to?: string;
      url?: string;
    };
    created_at: string;
    updated_at: string | null;
    channel: number;
    is_active: number;
  };
}

/**
 * Interface for the response of getting all alerts.
 */
export interface GetAllAlertsResponse {
  alerts: {
    id: number;
    server_id: number;
    app_id: number | null;
    details: {
      subject: string;
      desc: string;
      template_slug: string;
      values: {
        SERVER_LABEL: string;
      };
    };
  }[];
}

/**
 * Interface for the response of the Get list of all Alert Channels API.
 */
export interface GetAllAlertChannelsResponse {
  events: AlertEvent[];
  channels: { [key: string]: AlertChannel };
}

/**
 * Represents an alert event.
 */
export interface AlertEvent {
  id: number;
  name: string;
  type: string;
  level: number;
}

/**
 * Represents an alert channel.
 */
export interface AlertChannel {
  name: string;
  call_type: string;
  config?: ChannelConfig;
}

/**
 * Represents the configuration of an alert channel.
 */
export interface ChannelConfig {
  url: string;
  content_type?: string;
}

/**
 * Interface to get user's alert channel
 */
export interface UserAlertChannel {
  integrations: {
    id: number;
    name: string;
    created_at: string;
    events: number[];
    config: {
      to: string;
    };
    is_active: number;
    channel: number;
  }[];
}

/**
 * Interface to update an alert integration
 */

export interface UpdateIntegrationResponse {
  integration: {
    id: number;
    name: string;
    user_id: number;
    events: number[];
    config: {
      to: string;
    };
    created_at: string;
    updated_at: string | null;
    channel: number;
    is_active: number;
  };
}

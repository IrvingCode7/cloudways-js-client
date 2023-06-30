export interface CreateAlertChannelParameters {
  name: string;
  channel: string;
  events: number[];
  is_active: boolean;
  to?: string;
  url?: string;
}

export interface CreateAlertChannelResponse {
  integration: {
    id: number;
    name: string;
    user_id: number;
    events: number[];
    config: {
      to?: string;
    };
    created_at: string;
    updated_at: string | null;
    channel: number;
    is_active: boolean;
  };
}

export interface DeleteAlertChannelParameters {
  channel_id: number;
}

export interface DeleteAlertChannelResponse {}

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
        [key: string]: string;
      };
    };
  }[];
}

export interface GetPaginatedAlertsParameters {
  last_id: number;
}

export interface GetPaginatedAlertsResponse {
  alerts: {
    id: number;
    server_id: number;
    app_id: number | null;
    details: {
      subject: string;
      desc: string;
      template_slug: string;
      values: {
        [key: string]: string;
      };
    };
  }[];
}

export interface GetAllAlertChannelsResponse {
  events: {
    id: number;
    name: string;
    type: string;
    level: number;
  }[];
  channels: {
    [key: string]: {
      name: string;
      call_type: string;
      config?: {
        url: string;
        content_type: string;
      };
    };
  };
}

export interface GetAlertChannelsResponse {
  integrations: {
    id: number;
    name: string;
    created_at: string;
    events: number[];
    config: {
      to?: string;
    };
    is_active: number;
    channel: number;
  }[];
}

export interface MarkAllAlertsAsReadResponse {}

export interface MarkAlertAsReadParameters {
  alert_id: number;
}

export interface MarkAlertAsReadResponse {}

export interface UpdateAlertChannelParameters {
  channel_id: number;
  name: string;
  channel: string;
  events: number[];
  is_active: boolean;
  to?: string;
  url?: string;
}

export interface UpdateAlertChannelResponse {
  integration: {
    id: number;
    name: string;
    user_id: number;
    events: number[];
    config: {
      to?: string;
    };
    created_at: string;
    updated_at: string | null;
    channel: number;
    is_active: boolean;
  };
}

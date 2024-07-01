export interface ProfileResponse {
  google: {
    firstname: string;
    lastname: string;
    gender: string;
    profileUrl: string;
    photos: string;
  };
  _id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  user_type: string;
  status: string;
  skillset: Array<string>;
  equipment: Array<any>;
  tools: Array<any>;
  is_profile_completed: boolean;
  contact_visibility: boolean;
  email_verified: boolean;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
  is_two_factor_auth_enabled: boolean;
  enable_send_robin: boolean;
  __v: number;
  bio: string;
  profile_photo_url: string;
  resume_url: string;
  last_login_at: string;
  is_signup_complete: boolean;
}

export interface RatesRequest {
  data: {
    onsite_hourly_rate: number;
    virtual_hourly_rate: number;
    location: {
      commercial: boolean;
      residential: boolean;
      government: boolean;
      education: boolean;
    };
    max_travel_distance: number;
  };
}

export interface RatesResponse {
  location: {
    commercial: boolean;
    residential: boolean;
    government: boolean;
    education: boolean;
  };
  _id: string;
  user_id: string;
  onsite_hourly_rate: number;
  virtual_hourly_rate: number;
  max_travel_distance: number;
  rates_and_location_id: string;
  timestamp: number;
  created_at: string;
  updated_at: string;
  __v: number;
}

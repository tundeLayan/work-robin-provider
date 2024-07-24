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
  equipment: Array<string>;
  tools: Array<string>;
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
  country: string;
  country_code: string;
  phone_number: string;
  timezone: string;
  business_email: string;
  business_phone_number: string;
  industry: string;
  number_of_employees: number;
  website: string;
  address?: {
    _id: string;
    user_id: string;
    house_number: string;
    street_address: string;
    city: string;
    state: string;
    zip_code: string;
    country: string;
    address_id: string;
    timestamp: number;
    created_at: string;
    updated_at: string;
    __v: number;
  };
}

export type ProfileRequest = {
  data: {
    profile: {
      profile_photo_url: string;
      first_name: string;
      last_name: string;
      country_code: string;
      phone_number: string;
      timezone: string;
      country: string;
      contact_visibility: boolean;
    };
  };
};

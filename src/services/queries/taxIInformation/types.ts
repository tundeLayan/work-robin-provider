export interface TaxInformationOtpRequest {
  email: string;
  phone_number: string;
}

export interface TaxInformationOtpVerifyRequest {
  email: string;
  code: string;
}

export interface TaxInformationRequest {
  data: {
    taxInformation: {
      address: {
        house_number: string;
        street_address: string;
        city: string;
        state: string;
        zip_code: string;
        country: string;
      };
      tax_type: string;
      tax_id_type: string;
      tax_id_number?: string;
      business_tax_id_number?: string;
      full_name: string;
      receive_1099_electronically: boolean;
    };
  };
}

export interface TaxInformationResponse {
  _id: string;
  user_id: string;
  tax_type: string;
  tax_id_number: string;
  title: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  receive_1099_electronically: boolean;
  tax_information_id: string;
  timestamp: number;
  created_at: string;
  updated_at: string;
  __v: number;
  business_tax_id_number: string;
  full_name: string;
  tax_id_type: string;
  address: {
    _id: string;
    user_id: string;
    tax_information_id: string;
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

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
      tax_id_number: string;
      business_tax_id_number: string;
      full_name: string;
      receive_1099_electronically: boolean;
    };
  };
}

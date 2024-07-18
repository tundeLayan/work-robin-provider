export interface RequestServiceRequest {
  data: {
    service_company_name: string;
    service_company_admin_username: string;
    service_company_admin_email: string;
    password: string;
  };
}

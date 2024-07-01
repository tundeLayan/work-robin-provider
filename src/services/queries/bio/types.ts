export interface UpdateBioRequest {
  data: {
    profile: {
      bio: string;
      resume_url: string;
    };
  };
}

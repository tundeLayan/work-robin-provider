export interface ResourceRequest {
  data: {
    profile: {
      skillset: Array<string>;
      equipment: Array<string>;
      tools: Array<string>;
    };
  };
}

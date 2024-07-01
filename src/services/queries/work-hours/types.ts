export type DaysOptions =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export interface WorkingHoursResponse {
  _id: string;
  user_id: string;
  status: "always available" | "custom" | "away";
  working_hours_id: string;
  custom_availability: Array<{
    day: DaysOptions;
    from: string;
    to: string;
    _id: string;
  }>;
  timestamp: number;
  created_at: string;
  updated_at: string;
  __v: number;
}
export interface WorkingHoursRequest {
  data: {
    status: "custom" | "away" | "always available";
    custom_availability: Array<{
      day: string;
      from: string;
      to: string;
    }>;
  };
}

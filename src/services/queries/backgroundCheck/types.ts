export interface BackgroundCheckType {
  author: string;
  dateOrdered: string;
  amount: string;
  status: "active" | "inactive" | "pending";
}

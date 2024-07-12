export interface NotificationResponse {
  workOrders: WorkOrders;
  reminders: Reminders;
  payments: Payments;
  general: General;
  _id: string;
  user_id: string;
  settings_id: string;
  timestamp: number;
  created_at: Date;
  updated_at: Date;
  __v: number;
}

interface General {
  newsletter: boolean;
  marketingMessages: boolean;
}

interface Payments {
  fundsWithdrawn: FundsWithdrawn;
}

interface FundsWithdrawn {
  email: boolean;
  push: boolean;
}

interface Reminders {
  reminderToConfirm: FundsWithdrawn;
  reminderToPublishWorkOrder: FundsWithdrawn;
}

interface WorkOrders {
  workOrderPublished: FundsWithdrawn;
  noProviderAssigned: FundsWithdrawn;
  workOrderCompleted: FundsWithdrawn;
  workOrderPaid: FundsWithdrawn;
  counterOffers: FundsWithdrawn;
  workOrderRejected: FundsWithdrawn;
  approvalOfTimesheet: FundsWithdrawn;
  ratingOfProvider: FundsWithdrawn;
}

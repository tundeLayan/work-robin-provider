import {
  Briefcase,
  Building,
  Chart,
  CreditCard,
  DocumentCheck,
  Elements,
  File,
  FolderUser,
  HelpCircle,
  Home,
  LogOut,
  MessageSmileCicrle,
  Pin,
  Settings,
  UserTick,
  Users,
} from "@/components/shared/svgs";
import routes from "@/lib/routes";

export const dashboardLinks = [
  {
    id: 1,
    label: "Dashboard",
    icon: Elements,
    route: routes.dashboard.entry.path,
  },
  { id: 2, label: "Work Orders", icon: Briefcase, route: "#" },
  { id: 3, label: "Providers", icon: Users, route: "#" },
  { id: 4, label: "Clients", icon: Building, route: "#" },
  { id: 5, label: "Projects", icon: FolderUser, route: "#" },
  { id: 6, label: "Agreements", icon: DocumentCheck, route: "#" },
  { id: 7, label: "Payments", icon: CreditCard, route: "#" },
  { id: 8, label: "Reports", icon: Chart, route: "#" },
  { id: 9, label: "POC", icon: UserTick, route: "#" },
  { id: 10, label: "Support", icon: MessageSmileCicrle, route: "#" },
];

export const profilePopoverData = [
  {
    id: 1,
    icon: Home,
    label: "Contact Information",
    route: routes.dashboard.profile.contactInformation.path,
  },
  {
    id: 2,
    icon: Settings,
    label: "Settings",
    route: routes.dashboard.settings.notifications.path,
  },
  { id: 3, icon: HelpCircle, label: "Help", route: "#" },
  { id: 4, icon: File, label: "Legal", route: "#" },
  { id: 5, icon: Pin, label: "Privacy Policy", route: "#" },
  { id: 6, icon: LogOut, label: "Log out", route: "#" },
];

export const profileDashboardLinks = [
  {
    id: 1,
    title: "Profile Settings",
    children: [
      {
        id: 1,
        label: "Contact Information",
        route: routes.dashboard.profile.contactInformation.path,
      },
      {
        id: 2,
        label: "Tax Information",
        route: routes.dashboard.profile.taxInformation.path,
      },
      {
        id: 4,
        label: "Tax Documents",
        route: routes.dashboard.profile.taxDocumentation.path,
      },
      {
        id: 5,
        label: "Resources",
        route: routes.dashboard.profile.resources.path,
      },
      {
        id: 6,
        label: "Payment Details",
        route: routes.dashboard.profile.paymentDetails.path,
      },
      {
        id: 6,
        label: "Become a Service Company",
        route: routes.dashboard.profile.becomeService.path,
      },
    ],
  },

  {
    id: 2,
    title: "Payment Management",
    children: [
      {
        id: 1,
        label: "Payment Method",
        route: routes.dashboard.profile.paymentDetails.path,
      },
      {
        id: 2,
        label: "Spending Limit",
        route: routes.dashboard.profile.paymentDetails.path,
      },
    ],
  },

  {
    id: 3,
    title: "User Management",
    children: [
      {
        id: 1,
        label: "Manage Members",
        route: "#",
      },
    ],
  },

  {
    id: 4,
    title: "Company Settings",
    children: [
      {
        id: 1,
        label: "Roles and Permissions",
        route: "#",
      },
      {
        id: 2,
        label: "Activity Log",
        route: "#",
      },
      {
        id: 3,
        label: "Integrations",
        route: "#",
      },
    ],
  },
];

export const settingsDashboardLinks = [
  {
    id: 1,
    title: "Account Settings",
    children: [
      {
        id: 1,
        label: "Notifications",
        route: routes.dashboard.settings.notifications.path,
      },
      {
        id: 2,
        label: "Password",
        route: routes.dashboard.settings.password.path,
      },
      {
        id: 3,
        label: "Security",
        route: routes.dashboard.settings.security.path,
      },
    ],
  },
];

const workOrder = {
  id: 1,
  title: "Work Orders",
  children: [
    { id: 1, label: "Work order published" },
    { id: 2, label: "No provider assigned to work order" },
    { id: 3, label: "Work order completed" },
    { id: 4, label: "Work order paid" },
    { id: 5, label: "Counter offers" },
    { id: 6, label: "Work order rejected" },
    { id: 7, label: "Approval of Timesheet" },
    { id: 8, label: "Rating of provider on work done" },
  ],
};

const reminders = {
  id: 2,
  title: "Reminders",
  children: [
    { id: 1, label: "Reminder to confirm" },
    { id: 2, label: "Reminder to publish work order" },
  ],
};

const payments = {
  id: 2,
  title: "Payments",
  children: [{ id: 1, label: "When funds are withdrawn" }],
};

export const notificationsData = [workOrder, reminders, payments];

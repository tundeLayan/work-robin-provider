import {
  Briefcase,
  CreditCard,
  Elements,
  File,
  HelpCircle,
  Home,
  LogOut,
  Pin,
  QuestionCircle,
  Settings,
  SuitCase,
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
  { id: 2, label: "Find Work", icon: Users, route: "#" },
  { id: 3, label: "My Work", icon: Briefcase, route: "#" },
  { id: 4, label: "Payments", icon: CreditCard, route: "#" },
  { id: 5, label: "Calendar", icon: Users, route: "#" },
  { id: 6, label: "My Agreements", icon: SuitCase, route: "#" },
  { id: 7, label: "Support", icon: QuestionCircle, route: "#" },
];

export const profilePopoverData = [
  {
    id: 1,
    icon: Home,
    label: "My Profile",
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
        id: 7,
        label: "Become a Service Company",
        route: routes.dashboard.profile.becomeService.path,
      },
    ],
  },

  {
    id: 2,
    title: "Additional Background",
    children: [
      {
        id: 1,
        label: "Bio & Resume",
        route: routes.dashboard.profile.bio.path,
      },
      {
        id: 2,
        label: "Rates & Location",
        route: "#",
      },

      {
        id: 3,
        label: "Working hours",
        route: "#",
      },
      {
        id: 4,
        label: "Certifications",
        route: "#",
      },

      {
        id: 5,
        label: "Insurance & Licenses",
        route: "#",
      },
      {
        id: 6,
        label: "Languages",
        route: "#",
      },

      {
        id: 7,
        label: "Screenings",
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
        label: "Sync Calendar",
        route: "#",
      },

      {
        id: 4,
        label: "Two-Factor Authentication",
        route: "#",
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

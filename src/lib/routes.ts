const routes = {
  home: {
    path: "/",
  },

  auth: {
    path: "/",

    login: {
      path: "/login",
      confirmIdentity: {
        path: "/login/confirm-identity",
        otp: "/login/confirm-identity/otp",
        thirdParty: "/login/confirm-identity/third-party",
      },
    },
    otp: {
      path: "/otp",
    },
    signup: {
      path: "/signup",
    },
    resetPassword: {
      path: "/reset-password/",
      confirmationEmail: { path: "/reset-password/confirmation-mail" },
      createNewPassword: { path: "/reset-password/create-new-password" },
      forgotPassword: { path: "/reset-password/forgot-password" },
      otp: { path: "/reset-password/otp" },
      passwordSuccess: { path: "/reset-password/password-success" },
    },
    profiling: {
      path: "/profiling",
    },
  },
  dashboard: {
    entry: {
      path: "/dashboard",
    },
    profile: {
      path: "/dashboard/profile",
      contactInformation: {
        path: "/dashboard/profile/contact-information",
      },
      companyProfile: {
        path: "/dashboard/profile/company-profile",
      },
      taxInformation: {
        path: "/dashboard/profile/tax-information",
        verify: {
          path: "/dashboard/profile/tax-information/verify",
        },
        otp: {
          path: "/dashboard/profile/tax-information/otp",
        },
      },
      taxDocumentation: {
        path: "/dashboard/profile/tax-documentation",
      },
      paymentMethod: {
        path: "/dashboard/profile/payment-method",
      },
      spendingLimit: {
        path: "/dashboard/profile/spending-limit",
      },
    },

    settings: {
      path: "/dashboard/settings",
      notifications: {
        path: "/dashboard/settings/notifications",
      },

      password: {
        path: "/dashboard/settings/password",
      },

      security: {
        path: "/dashboard/settings/security",
      },
    },
  },
};

export default routes;

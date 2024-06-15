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
      resources: {
        path: "/dashboard/profile/resources",
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
      bio: {
        path: "/dashboard/profile/bio",
      },
      rates: {
        path: "/dashboard/profile/rates",
      },
      becomeService: {
        path: "/dashboard/profile/become-service",
        faq: {
          path: "/dashboard/profile/become-service/faq",
        },
        terms: {
          path: "/dashboard/profile/become-service/terms",
        },
        info: {
          path: "/dashboard/profile/become-service/info",
        },
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

        recoveryCodes: {
          path: "/dashboard/settings/security/recovery-codes",
        },

        configure: {
          path: "/dashboard/settings/security/configure",
        },

        complete: {
          path: "/dashboard/settings/security/complete",
        },
      },

      syncCalendar: {
        path: "/dashboard/settings/sync-calendar",
      },
    },
  },
};

export default routes;

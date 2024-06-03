const routes = {
  home: {
    path: "/",
  },

  auth: {
    path: "/auth",

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
  },
};

export default routes;

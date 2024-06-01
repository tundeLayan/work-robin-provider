export const ErrorMessages = {
  required: (value: string) => `${value} is required`,
  invalidEmail: `Invalid Email Address`,
  invalidURL: `Invalid URL`,
  passwordMismatch: `Passwords do not match`,
  invalidType: (value: string) => `Please input only ${value}`,
  length: (num: number = 6, label: string) =>
    `Your ${label} must be ${num} characters.`,
};

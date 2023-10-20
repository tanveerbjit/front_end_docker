// formFields.js
export const emailField = {
  name: "email",
  type: "email",
  placeholder: "Email Address",
  rules: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
};

export const passwordField = {
  name: "password",
  type: "password",
  placeholder: "Password",
  rules: {
    required: "Password is required",
    maxLength: {
      value: 100,
      message: "Password must not exceed 10 characters",
    },
  },
};

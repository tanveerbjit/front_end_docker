
export const registrationConfig = (watch) => {
  const isPasswordValid = (value) => {
    // Define your pattern validation here
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numbersRegex = /\d/;
    const symbolsRegex = /[@$!%*?&]/;

    return (
      lowercaseRegex.test(value) &&
      uppercaseRegex.test(value) &&
      numbersRegex.test(value) &&
      symbolsRegex.test(value)
    );
  };

  const msg = () => {
    return "at least one digit, one uppercase letter, one lowercase letter, one special character, minimum 8 characters, and maximum 20 characters";
  };

  return {
    fields: [
      {
        name: "first_name",
        type: "text",
        placeholder: "First Name",
        rules: {
          required: "First name is required",
          minLength: {
            value: 3,
            message: "Minimum length must be 3",
          },
          maxLength: {
            value: 20,
            message: "Maximum length must be 20",
          },
        },
      },
      {
        name: "last_name",
        type: "text",
        placeholder: "Last Name",
        rules: {
          required: "Last name is required",
          minLength: {
            value: 3,
            message: "Minimum length must be 3",
          },
          maxLength: {
            value: 20,
            message: "Maximum length must be 20",
          },
        },
      },
      {
        name: "user_name",
        type: "text",
        placeholder: "User Name",
        rules: {
          required: "User name is required",
          minLength: {
            value: 3,
            message: "Minimum length must be 3",
          },
          maxLength: {
            value: 20,
            message: "Maximum length must be 20",
          },
        },
      },
      {
        name: "email",
        type: "email",
        placeholder: "Email Address",
        rules: {
          required: "Email is required",
          maxLength: {
            value: 50,
            message: "Maximum length must be 50",
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        },
      },
      {
        name: "password",
        type: "password",
        placeholder: "Enter Password",
        rules: {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Minimum length must be 6",
          },
          maxLength: {
            value: 20,
            message: "Maximum length must be 20",
          },
          validate: (value) => isPasswordValid(value) || msg(),
        },
      },
      {
        name: "confirmPassword",
        type: "password",
        placeholder: "Enter Password again",
        rules: {
          validate: (value) => value === watch("password") || "password does not match",
        },
      },
    ],
  };
};

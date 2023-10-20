
export const resetConfig = (watch) => {
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
        name: "resetPassword",
        type: "password",
        placeholder: "Enter Password again",
        rules: {
          validate: (value) => value === watch("password") || "password does not match",
        },
      },
    ],
  };
};

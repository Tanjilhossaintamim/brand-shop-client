import { object, string } from "yup";

const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};

export let userSchema = object({
  name: string().required().min(4),
  email: string().email().required(),
  password: string()
    .required("Please enter a password")
    .min(8, "Password must have at least 8 characters")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
    .matches(
      /[!@#$%^&*()_+{}[\]:;<>,.?~]/,
      getCharacterValidationError("special")
    ),
});

export let signInSchema = object({
  email: string().email().required(),
  password: string()
    .required("Please enter a password")
    .min(8, "Password must have at least 8 characters"),
});

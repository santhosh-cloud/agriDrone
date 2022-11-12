export const initialValues = {
  fullName: {
    value: "",
    error: "",
    required: false,
    validate: "text",
    minLength: 2,
    maxLength: 20,
    helperText: "Custom error message",
  },

  email: {
    value: "",
    error: "",
    validate: "email",
  },
  gender: {
    value: "",
    error: "",
    validate: "select",
  },
  phoneNumber: {
    value: "",
    error: "",
    validate: "phone",
    maxLength: 15,
  },
  birthday: {
    value: "",
    error: "",
  },
  // step 2
  farmName: {
    value: "",
    error: "",
    required: false,
  },
  farmAddress: {
    value: "",
    error: "",
  },
  farmCity: {
    value: "",
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 20,
  },
  farmCountry: {
    value: "",
    error: "",
    required: false,
  },
  farmZipCode: {
    value: "",
    error: "",
    validate: "number",
  },
  farmLandType: {
    value: false,
    error: "",
    required: true,
    validate: "checkbox",
    helperText: "Please accept our terms and conditions",
  },

  agreenemt: {
    value: false,
    error: "",
    required: true,
    validate: "checkbox",
    helperText: "Please accept our terms and conditions",
  },
  somethingElse: {
    value: false,
    error: "",
    validate: "checkbox",
  },
};
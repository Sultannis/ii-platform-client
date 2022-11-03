import {
  required,
  minLength,
  maxLength,
  helpers,
  email,
} from "@vuelidate/validators";

const phoneNumber = helpers.withParams(
  { type: "phoneNumber" },
  (value: string) => value.length === 18
);

const validationRules = {
  required: helpers.withMessage("Поле обязательно для заполнения", required),
  email: helpers.withMessage("Неверный формат почты", email),
  phoneNumber: helpers.withMessage("Неверный формат телефона", phoneNumber),
  minLength: (minLengthNumber: number) =>
    helpers.withMessage(
      ({ $params }) => `Поле должно содержать минимум ${$params.min} символов`,
      minLength(minLengthNumber)
    ),
  maxLength: (maxLengthNumber: number) =>
    helpers.withMessage(
      ({ $params }) => `Поле должно содержать максимум ${$params.max} символов`,
      maxLength(maxLengthNumber)
    ),
};

export { validationRules };

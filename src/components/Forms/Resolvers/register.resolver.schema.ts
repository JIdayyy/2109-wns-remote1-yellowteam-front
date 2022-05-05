import * as yup from 'yup'

const registerSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('This field must be a valid Email address')
      .required('This field is required'),
    password: yup.string().required('This field is required'),
    confirmPassword: yup.string().required('This field is required'),
    first_name: yup.string().required('This field is required'),
    last_name: yup.string().required('This field is required'),
    secret_key: yup.string().required('This field is required'),
  })
  .required()

export default registerSchema

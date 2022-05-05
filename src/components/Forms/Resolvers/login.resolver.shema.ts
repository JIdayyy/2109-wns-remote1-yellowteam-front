import * as yup from 'yup'

const loginSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('This field must be a valid Email address')
      .required('This field is required'),
    password: yup.string().required('This field is required'),
  })
  .required()

export default loginSchema

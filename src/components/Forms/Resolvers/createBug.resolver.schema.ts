import * as yup from 'yup'

const createBugSchema = yup
  .object()
  .shape({
    title: yup.string().required(),
    description: yup.string().required(),
  })
  .required()

export default createBugSchema

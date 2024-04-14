import Joi from 'joi'

export const validateTextToTranslate = Joi.object({
  text: Joi.string().required(),
  from: Joi.string().valid('french', 'spanish', 'english').required().case('lower'),
  to: Joi.string().valid('french', 'spanish', 'english').required().case('lower')
})

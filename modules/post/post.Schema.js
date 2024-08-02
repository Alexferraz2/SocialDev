import Joi from "joi"


export const creatPostSchema = Joi.object({
    text: Joi.string().required().max(256)
})
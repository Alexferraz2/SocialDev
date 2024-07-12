import Joi from "joi";

import creatHandler from "../../../lib/middlewares/nextConnect"
import validate from "../../../lib/middlewares/validation"
import { login } from "../../../modules/user/user.service";

const loginSchema = Joi.object({
    userOrEmail: Joi.string().required(),
    password: Joi.string().required()
})

const handler = creatHandler()

handler.post(validate({body: loginSchema}), async (req, res) => {
    try {
        const user = await login(req.body)
        res.send(user)
    } catch (error) {
        console.log(error)
        throw error
    }
})


export default handler
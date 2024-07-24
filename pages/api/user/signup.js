import creatHandler from '../../../lib/middlewares/nextConnect';
import { withIronSessionApiRoute } from 'iron-session/next';

import validate from '../../../lib/middlewares/validation'
import { signupUser } from "../../../modules/user/user.service";
import { signupSchema } from '../../../modules/user/user.Schema';

import { ironConfig } from '../../../lib/middlewares/ironSession';

const signup = creatHandler()
 
signup.post(validate({ body: signupSchema }), async (req, res) => {

    try{
        const user = await signupUser(req.body)
        req.session.user = {
            id: user._id,
            user: user.user
        }
        await req.session.save()
        res.status(200).json( { ok: true} )
    }catch(error) {
        if (error.code === 11000) {
            return res.status(400).send({
                code: 11000,
                duplicatedKey: Object.keys(error.keyPattern)[0]
            })
            
        }
        throw error
    }
    
 })


export default withIronSessionApiRoute(signup, ironConfig)
import { withIronSessionApiRoute } from "iron-session/next";

import creatHandler from "../../../lib/middlewares/nextConnect"
import validate from "../../../lib/middlewares/validation"
import { ironConfig } from "../../../lib/middlewares/ironSession";

import { creatPostSchema } from "../../../modules/post/post.Schema";
import { createPost, getPosts } from "../../../modules/post/post.service";


const handler = creatHandler()

handler
    .post(validate({ body: creatPostSchema }), async (req, res) => {
        try {
            if(!req.session.user) return res.status(401).send()

            const newPost = await createPost(req.body, req.session.user)
            res.status(201).send(newPost)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    })
    .get(async (req, res) => {
        try {
            if(!req.session.user) return res.status(401).send()

            const posts = await getPosts()
            res.status(200).send(posts)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    })


export default withIronSessionApiRoute(handler, ironConfig)

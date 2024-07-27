import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

import creatHandler from "../../../lib/middlewares/nextConnect";
import { ironConfig } from "../../../lib/middlewares/ironSession";

const logout = creatHandler()

logout.post(async (req, res) => {
    req.session.destroy()
    res.send( {ok: true} )
})


export default withIronSessionApiRoute(logout, ironConfig)
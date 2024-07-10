import connect from "next-connect"

import mongooseMiddleware from "./mongoose"

export default function creatHandler () {
    return connect().use(mongooseMiddleware)
}
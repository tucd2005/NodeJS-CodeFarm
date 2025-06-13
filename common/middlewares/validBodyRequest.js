import { z } from "zod"

const validBodyRequest = (req,res,next) => {
    try {
        const data = z.parse(req.body);
        req.data = data;
        next()
    } catch (err) {
        const error = err.errors[0];
        return res.status(400).json({"valid body request" : `${error.path}: ${error.message}`})
    }
}

export default validBodyRequest
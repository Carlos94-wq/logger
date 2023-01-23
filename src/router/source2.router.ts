import { request, response, Router } from "express";
const SOURCE_2 = Router();

SOURCE_2.get('', ( req = request, resp = response ) => {
    return resp.status(200).json({ok:'true'})
});

export default SOURCE_2;
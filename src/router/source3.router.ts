import { request, response, Router } from "express";
const SOURCE_3 = Router();

SOURCE_3.get('', ( req = request, resp = response ) => {
    return resp.status(200).json({ok:'true'})
});

export default SOURCE_3;
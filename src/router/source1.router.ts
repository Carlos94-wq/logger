import { AppError } from './../error/CustomError';
import { request, response, Router } from "express";
import HTTP_STATUS_CODE from '../error/statusCode';
import Source1 from '../middleware/source';
import dummy from '../httpService/serviceDummy';
const SOURCE_1 = Router();

SOURCE_1.get('', async ( req = request, resp = response ) => {
    return resp.status(200).json({ok:'true'})
});

SOURCE_1.post('', [ Source1 ], async ( req = request, resp = response ) => {

    console.log('logeando logica de programacion');
    const dummyResponse = await dummy();

    return resp.status(200).json({ok:{dummyResponse}})
});

export default SOURCE_1;
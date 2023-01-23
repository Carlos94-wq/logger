import { AppError } from './../error/CustomError';
import { Request, Response, NextFunction } from 'express';
import Source from '../models/Source';
import HTTP_STATUS_CODE from '../error/statusCode';
import chalk from 'chalk';

const Source1 = async ( req: Request, resp: Response, next: NextFunction ) => {

    const model = new Source(req.body);
    const theresErrors = await model.getValidationErrorsAsync();

    if (theresErrors.length != 0) {
        console.log(
            chalk.red.yellow(
            'Field validation for source fail',
            ' fields', JSON.stringify(theresErrors, null, 2)
        ));

        throw new AppError('Field validation fail', HTTP_STATUS_CODE.badRequest,  theresErrors);
    }

    next();

}

export default Source1;
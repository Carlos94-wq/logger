import { AppError } from './CustomError';
import { Request, Response, NextFunction } from 'express';
import chalk from 'chalk';
import HTTP_STATUS_CODE from './statusCode';
	 
	/**
	 * Custom error handler to standardize error objects returned to 
	 * the client
	 * 
	 * @param err Error caught by Express.js
	 * @param req Request object provided by Express
	 * @param res Response object provided by Express
	 * @param next NextFunction function provided by Express
	 */
	function handleError(
	  err: TypeError | AppError,
	  req: Request,
	  res: Response,
	  next: NextFunction
	) {
	  let customError = err;
	 
	  if (!(err instanceof AppError)) {
		console.log(chalk.red.bold('server error', err))
	    customError = new AppError('Oh no, this is embarrasing. We are having troubles my friend' );
	  }
	 
	  // we are not using the next function to prvent from triggering 
	  // the default error-handler. However, make sure you are sending a 
	  // response to client to prevent memory leaks in case you decide to 
	  // NOT use, like in this example, the NextFunction .i.e., next(new Error())
	  return res.status((customError as AppError).status).json(customError);
	};
	 
	export default handleError; 
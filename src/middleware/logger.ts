import { NextFunction, Request, Response } from "express";
import chalk from 'chalk';

const logger = async (req: Request, resp: Response, netx: NextFunction) => {

    const date = new Date();

    //solo para poner un espacio entre el inicio de cada bloque
    console.log('')
    const loggTitle = chalk.blue.bold(`${date.toLocaleDateString()} - ${date.toLocaleTimeString()} - [${req.method}]:[${req.url}]`)

    console.log(chalk.black.bold.bgYellow('REQUEST INPUT','                               '));
    console.log(loggTitle);
    console.log(chalk.green.bold(`request params: ${JSON.stringify(req.params)}`));
    console.log(chalk.green.bold(`request query: ${JSON.stringify(req.query)}`));
    console.log(chalk.green.bold(`request body: ${JSON.stringify(req.body)}`));
    console.log(chalk.black.bold.bgYellow('REQUEST CONTENT------------------------------'));

    //retorna el estatus del controlador
    resp.on('finish', () => {

        switch (resp.statusCode) {
            case 200:
                console.log(chalk.black.bold.bgYellow('Server response whith status code', resp.statusCode, '       '));
                break;

            case 400:
                console.log(chalk.yellow.bold.bgYellow('Server response whith status code', resp.statusCode,'       '));
                break;

            case 500:
                console.log(chalk.black.bold.bgYellow('Server response whith status code', resp.statusCode,'         '));
                break;

            default:
                break;
        }

    })
    netx();

}

export default logger;
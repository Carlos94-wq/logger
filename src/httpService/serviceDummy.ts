import axios from "axios";
import AppError from "../error/CustomError";
import chalk from 'chalk';

const dummy = async () => {
    
    const placeHolder = 'https://jsonplaceholder.typicode.com/todos/1';
    const resp = await axios.get(placeHolder);

    if (resp.status !== 200) {

        console.log(chalk.red.bold('Service error', resp.status, resp.data))
        throw new AppError('Service error', resp.status, resp.data);
    }

    console.log('dummy response', resp.data)

    return resp.data;

}

export default dummy;
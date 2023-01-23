import HTTP_STATUS_CODE from "./statusCode";

export class AppError {
    message!: string;
    status!: number;
    additionalInfo!: any;

    constructor(message: string, status: number = HTTP_STATUS_CODE.internalError, additionalInfo: any = {}) {
        this.message = message;
        this.status = status;
        this.additionalInfo = additionalInfo
    }
}

export default AppError;
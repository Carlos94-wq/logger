import { DataTransferObject, IsNotEmpty } from "data-transfer-object";
class Source extends DataTransferObject{

    @IsNotEmpty()
    name!: string;
    @IsNotEmpty()
    lastName!: string;

    constructor( params: any ){
        super('');

        this.name = params.name;
        this.lastName = params.lastName;
    }
}

export default Source;
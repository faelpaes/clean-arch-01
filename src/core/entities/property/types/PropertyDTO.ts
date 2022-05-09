import { Condominium } from "../Condominium";
import { IAddress } from "../interfaces/AddressInterface";

export abstract class PropertyDTO {
    readonly id?: string;
    address: IAddress;
    area: number;
    value: number;
    iptu: number;
    condominium?: Condominium;

    constructor(props: PropertyDTO) {
        Object.assign(this, props);
    }
}
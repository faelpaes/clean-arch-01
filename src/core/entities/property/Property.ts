import { uuid } from "uuidv4";
import { PropertyProps } from "./types/Property";
import { IAddress } from "./interfaces/AddressInterface";
import { Condominium } from "./Condominium";
import { PropertyDTO } from "./types/PropertyDTO";

export abstract class Property {
    private readonly id?: string;
    protected address: IAddress;
    protected area: number;
    protected value: number;
    protected iptu: number;
    protected type: string;
    protected condominium?: Condominium;

    constructor(type: string, props: PropertyDTO) {
        this.type = type;
        this.address = props.address;
        this.area = props.area;
        this.value = props.value;
        this.iptu = props.iptu;

        if (!props.condominium) {
            this.condominium = props.condominium; 
        }

        if (!props.id) {
            this.id = uuid();
        }
    }

    abstract calculateIptu(regionM2Value: number) : number 

    getId() : string {
        return this.id;
    }

    getAdress() : IAddress {
        return this.address;
    }

    getArea() : number {
        return this.area;
    }

    getValue() : number {
        return this.value;
    }

    isValidZipCode() : boolean {
        return this.address.zipCode !== "";
    }

    isValidArea() : boolean {
        return this.area > 0;
    }
}
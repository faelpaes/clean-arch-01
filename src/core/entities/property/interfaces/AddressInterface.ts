import { IZone } from "./Zone";

export interface IAddress {
    publicPlace: string,
    number: number,
    neighborhood: string,
    city: string,
    state: string,
    complement?: string,
    zipCode: string,
    zone: IZone
}
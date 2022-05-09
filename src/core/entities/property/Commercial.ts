import { IBathroom } from "./interfaces/BathroomInterface";
import { IRoom } from "./interfaces/RoomInterface";
import { Property } from "./Property";
import { CommercialProps } from "./types/Commercial";

export abstract class Comercial extends Property {
    type: string;
    rooms: IRoom[];
    bathrooms: IBathroom[];
    floorAmount: number;

    constructor(props: CommercialProps) {
        super("commercial", props.propertyProps);

        this.rooms = props.rooms;
        this.bathrooms = props.bathrooms;
        this.floorAmount = props.floorAmount;
    }

}
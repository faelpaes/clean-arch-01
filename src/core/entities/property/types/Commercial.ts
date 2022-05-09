import { IBathroom } from "../interfaces/BathroomInterface";
import { IRoom } from "../interfaces/RoomInterface";
import { PropertyProps } from "./Property";

export type CommercialProps = {
    rooms: IRoom[];
    bathrooms: IBathroom[];
    floorAmount: number;
    propertyProps: PropertyProps;
}
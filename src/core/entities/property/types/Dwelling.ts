import { IBathroom } from "../interfaces/BathroomInterface";
import { IGarage } from "../interfaces/GarageInterface";
import { IGourmetArea } from "../interfaces/GourmetAreaInterface";
import { IRoom } from "../interfaces/RoomInterface";
import { PropertyProps } from "./Property";

export type DwellingProps = {
    rooms: IRoom[];
    bathrooms: IBathroom[];
    garage: IGarage;
    gourmetArea?: IGourmetArea;
    floorAmount: number;
    petAllowed: boolean;
    propertyProps: PropertyProps;
}
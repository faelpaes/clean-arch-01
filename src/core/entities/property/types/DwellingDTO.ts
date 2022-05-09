import { IBathroom } from "../interfaces/BathroomInterface";
import { IGarage } from "../interfaces/GarageInterface";
import { IGourmetArea } from "../interfaces/GourmetAreaInterface";
import { IRoom } from "../interfaces/RoomInterface";
import { PropertyProps } from "./Property";
import { PropertyDTO } from "./PropertyDTO";

export abstract class DwellingDTO extends PropertyDTO {
    rooms: IRoom[];
    bathrooms: IBathroom[];
    garage: IGarage;
    gourmetArea?: IGourmetArea;
    floorAmount: number;
    petAllowed: boolean;

    constructor(props: DwellingDTO) {
        super(props);
        Object.assign(this, props);
    }
}
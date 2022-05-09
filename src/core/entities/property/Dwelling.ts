import { DwellingProps } from "./types/Dwelling";
import { IBathroom } from "./interfaces/BathroomInterface";
import { IGarage } from "./interfaces/GarageInterface";
import { IGourmetArea } from "./interfaces/GourmetAreaInterface";
import { IRoom } from "./interfaces/RoomInterface";
import { Property } from "./Property";
import { DwellingDTO } from "./types/DwellingDTO";

export abstract class Dwelling extends Property{
    protected rooms: IRoom[];
    protected bathrooms: IBathroom[];
    protected gourmetArea: IGourmetArea;
    protected floorAmount: number;
    protected petAllowed: boolean;
    protected garage: IGarage;

    constructor(type: string, props: DwellingDTO) {
        super(type, props);

        this.rooms = props.rooms;
        this.bathrooms = props.bathrooms;
        this.gourmetArea = props.gourmetArea;
        this.floorAmount = props.floorAmount;
        this.petAllowed = props.petAllowed;
    }

    getAllRooms() : IRoom[] {
        return this.rooms;
    }

    getAllBathrooms() : IBathroom[] {
        return this.bathrooms;
    }

    isLoft() : boolean {
        return this.floorAmount > 0;
    }

    isPetAllowed() {
        return this.petAllowed;
    }

    hasSuite() {
        return this.rooms.filter(room => room.suite);
    }

    hasGoumetArea() : boolean {
        return this.gourmetArea !== null;
    }

    hasGrill() : boolean {
        return this.gourmetArea.grill;
    }

    hasVacancy() : boolean {
        return this.garage && this.garage.vacancyNumber > 0;
    }

    isVacancyCovered() : boolean {
        return this.garage && this.garage.covered;
    }

    isValidRooms() : boolean {
        return this.getAllRooms().length > 0;
    }

    isValidBathrooms() : boolean {
        return this.getAllBathrooms().length > 0;
    }
}
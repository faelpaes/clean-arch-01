import { Dwelling } from "./Dwelling";
import { ApartmentProps } from "./types/Apartment";
import { ApartmentDTO } from "./types/ApartmentDTO";

export class Apartment extends Dwelling {
    floor: number;
    
    private constructor(props: ApartmentDTO) {
        super('apartment', props);
        this.floor = props.floor;
    }

    static create(props: ApartmentDTO) {
        const apartment = new Apartment(props);
        return apartment;
    }
    
    isFloorValid() : boolean {
        return this.floor > 0;
    }
    
    getFloorNumber() : number {
        return this.floor;
    }

    calculateIptu(): number {
        throw new Error("Method not implemented.");
    }

}
import { Apartment } from "../core/entities/property/Apartment";
import { House } from "../core/entities/property/House";
import { Property } from "../core/entities/property/Property";
import { ApartmentProps } from "../core/entities/property/types/Apartment";
import { HouseProps } from "../core/entities/property/types/House";
import { PropertyDTO } from "../core/entities/property/types/PropertyDTO";
import { ApartmentDTO } from "../core/entities/property/types/ApartmentDTO";
import { HouseDTO } from "../core/entities/property/types/HouseDTO";

export default class PropertyAdapter {
    

    static createHouse (props: HouseDTO) {
        return House.create(props);
    }

    static createApartment (props: ApartmentDTO): Property {
        return Apartment.create(props);
    }

    static createProperty (property: PropertyDTO): Property {

        if (property instanceof ApartmentDTO) {
            return Apartment.create(property);
        } else if (property instanceof HouseDTO) {
            return House.create(property);
        }
    }
}
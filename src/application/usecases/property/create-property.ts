import { Apartment } from "../../../core/entities/property/Apartment";
import { Dwelling } from "../../../core/entities/property/Dwelling";
import { House } from "../../../core/entities/property/House";
import { ApartmentProps } from "../../../core/entities/property/types/Apartment";
import { HouseDTO } from "../../../core/entities/property/types/HouseDTO";
import { PropertyDTO } from "../../../core/entities/property/types/PropertyDTO";
import { IPropertyRepository } from "../../../core/repository/property-repository";

export class CreateProperty {
    propertyRepository: IPropertyRepository;

    constructor (propertyRepository: IPropertyRepository) {
        this.propertyRepository = propertyRepository;
    }
    
    async execute(data: PropertyDTO) {
        const getProperty = await this.propertyRepository.getProperty(data.id);
        if (getProperty !== null) throw new Error("There is already have a property with this code!");

        const property = await this.propertyRepository.createProperty(data);
        if (!property.isValidZipCode()) throw new Error("Property zip code is not valid!");
        if (!property.isValidArea()) throw new Error("Property area is not valid!");

        if (property instanceof Dwelling) {
            if (!property.isValidRooms()) throw new Error("Property should have at least one room!");
            if (!property.isValidBathrooms()) throw new Error("Property should have at least one bathroom!");

            if (property instanceof House) {
                if (!property.isValidArea()) throw new Error("Property area is not valid!");
                if (!property.isValidBuiltArea()) throw new Error("Property built area is not valid!");
            }
        }


        return property;
    }
}
import { Apartment } from "../../../core/entities/property/Apartment";
import { ApartmentProps } from "../../../core/entities/property/types/Apartment";
import { ApartmentDTO } from "../../../core/entities/property/types/ApartmentDTO";
import { IPropertyRepository } from "../../../core/repository/property-repository";

export class CreateApartment {
    propertyRepository: IPropertyRepository;

    constructor (propertyRepository: IPropertyRepository) {
        this.propertyRepository = propertyRepository;
    }
    
    async execute(data: ApartmentDTO) {
        const property = await this.propertyRepository.getProperty(data.dwellingProps.propertyProps.id);
        if (property !== null) throw new Error("There is already have a house with this code!");

        const apartment = await this.propertyRepository.createAppartment(data);
        if (!apartment.isValidZipCode()) throw new Error("Property zip code is not valid!");
        if (!apartment.isValidArea()) throw new Error("Property area is not valid!");

        if (apartment instanceof Apartment) {
            if (!apartment.isValidRooms()) throw new Error("Apartment should have at least one room!");
            if (!apartment.isValidBathrooms()) throw new Error("Apartment should have at least one bathroom!");
        }


        return apartment;
    }
}
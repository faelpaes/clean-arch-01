import { Apartment } from "../entities/property/Apartment";
import { House } from "../entities/property/House";
import { Property } from "../entities/property/Property";
import { ApartmentProps } from "../entities/property/types/Apartment";
import { ApartmentDTO } from "../entities/property/types/ApartmentDTO";
import { HouseProps } from "../entities/property/types/House";
import { HouseDTO } from "../entities/property/types/HouseDTO";
import { PropertyDTO } from "../entities/property/types/PropertyDTO";

export interface IPropertyRepository {
    getAllProperties() : Promise<Property[]>;
    getProperty(code: string) : Promise<Property>;
    createProperty(property: PropertyDTO) : Promise<Property>;
    createHouse(house: HouseDTO) : Promise<House>;
    createAppartment(apartment: ApartmentDTO) : Promise<Property>;
}
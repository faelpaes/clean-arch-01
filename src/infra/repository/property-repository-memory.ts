import PropertyAdapter from "../../adapter/PropertyAdapter";
import { Apartment } from "../../core/entities/property/Apartment";
import { House } from "../../core/entities/property/House";
import { Property } from "../../core/entities/property/Property";
import { ApartmentProps } from "../../core/entities/property/types/Apartment";
import { ApartmentDTO } from "../../core/entities/property/types/ApartmentDTO";
import { HouseProps } from "../../core/entities/property/types/House";
import { HouseDTO } from "../../core/entities/property/types/HouseDTO";
import { PropertyDTO } from "../../core/entities/property/types/PropertyDTO";
import { IPropertyRepository } from "../../core/repository/property-repository";

export class PropertyRepositoryMemory implements IPropertyRepository {
    
    properties = [];
    
    getProperty(code: string): Promise<Property> {
        const property = this.properties.find(property => property.id === code);
        return Promise.resolve(property || null);
    }

    createHouse(houseDTO: HouseDTO): Promise<House> {
        const house = PropertyAdapter.createHouse(houseDTO);
        this.properties.push(house);
        return Promise.resolve(house);
    }
    
    createAppartment(appartmentProps: ApartmentDTO): Promise<Property> {
        const apartment = PropertyAdapter.createApartment(appartmentProps);
        this.properties.push(apartment);
        return Promise.resolve(apartment);
    }
    
    getAllProperties(): Promise<Property[]> {
        return Promise.resolve([...this.properties] || null);
    }
    
    createProperty(property: PropertyDTO): Promise<Property> {
        const data = PropertyAdapter.createProperty(property);

        this.properties.push(data);
        return Promise.resolve(data);
    }
}
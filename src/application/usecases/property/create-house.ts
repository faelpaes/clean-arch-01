import { House } from "../../../core/entities/property/House";
import { Property } from "../../../core/entities/property/Property";
import { HouseProps } from "../../../core/entities/property/types/House";
import { HouseDTO } from "../../../core/entities/property/types/HouseDTO";
import { IPropertyRepository } from "../../../core/repository/property-repository";
import { GetProperty } from "./get-property";

export class CreateHouse {
    propertyRepository: IPropertyRepository;

    constructor (propertyRepository: IPropertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    async execute(data: HouseDTO): Promise<House> {
        const property = await this.propertyRepository.getProperty(data.id);
        if (property !== null) throw new Error("There is already have a house with this code!");

        const house = await this.propertyRepository.createHouse(data);
        if (!house.isValidZipCode()) throw new Error("Property zip code is not valid!");
        if (!house.isValidArea()) throw new Error("Property area is not valid!");
        if (!house.isValidBuiltArea()) throw new Error("House built area is not valid!");
        if (!house.isValidRooms()) throw new Error("House should have at least one room!");
        if (!house.isValidBathrooms()) throw new Error("House should have at least one bathroom!");

        return house;

    }
}
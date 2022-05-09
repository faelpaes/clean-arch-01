import { IPropertyRepository } from "../../../core/repository/property-repository";

export class GetAllProperty {
    propertyRepository: IPropertyRepository;

    constructor (propertyRepository: IPropertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    async execute() {
        const properties = await this.propertyRepository.getAllProperties();
        if (properties === null) throw new Error("There is no properties on the database!");
        return properties;
    }
}
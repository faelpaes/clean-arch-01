import { IPropertyRepository } from "../../../core/repository/property-repository";

export class GetProperty {
    propertyRepository: IPropertyRepository;

    constructor (propertyRepository: IPropertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    async execute(code: string) {
        const property = await this.propertyRepository.getProperty(code);
        return property;
    }
}
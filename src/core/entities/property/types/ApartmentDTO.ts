import { Condominium } from "../Condominium";
import { DwellingProps } from "./Dwelling";
import { DwellingDTO } from "./DwellingDTO";

export class ApartmentDTO extends DwellingDTO{
    floor: number;
    dwellingProps: DwellingProps
    
    constructor(props: ApartmentDTO) {
        super(props);
        Object.assign(this, props);
    }
}
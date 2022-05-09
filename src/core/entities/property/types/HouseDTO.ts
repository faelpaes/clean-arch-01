import { IYard } from "../interfaces/YardInterface";
import { DwellingProps } from "./Dwelling";
import { DwellingDTO } from "./DwellingDTO";

export class HouseDTO extends DwellingDTO{
    yard: IYard;
    builtArea: number;

    constructor(props: HouseDTO) {
        super(props);
        Object.assign(this, props);
    }
}
import { IYard } from "../interfaces/YardInterface";
import { DwellingProps } from "./Dwelling";

export type HouseProps = {
    yard: IYard;
    builtArea: number;
    dwellingProps: DwellingProps
}
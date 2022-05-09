import { ISpace } from "./SpaceInterface";

export interface IGarage extends ISpace {
    vacancyNumber: number;
    covered: boolean;
}
import { ISpace } from "./SpaceInterface";

export interface IBathroom extends ISpace {
    box: boolean,
    closet: boolean
}
import { ISpace } from "./SpaceInterface";

export interface IRoom extends ISpace {
    suite: boolean,
    closet: boolean
}
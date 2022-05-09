import { Property } from "./Property";
import { PropertyProps } from "./types/Property";

export class Land extends Property {
    constructor(props: PropertyProps) {
        super(PropertyTypeEnum.LAND, props);
    }
    
    calculateIptu(): number {
        throw new Error("Method not implemented.");
    }
}
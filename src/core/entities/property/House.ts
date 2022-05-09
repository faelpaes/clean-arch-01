import { Dwelling } from "./Dwelling";
import { IYard } from "./interfaces/YardInterface";
import { HouseProps } from "./types/House";
import { HouseDTO } from "./types/HouseDTO";

export class House extends Dwelling {
    yard: IYard;
    builtArea: number;
    
    private constructor(props: HouseDTO) {
        super('house', props);
        this.yard = props.yard;
        this.builtArea = props.builtArea;
    }

    static create(props: HouseDTO) {
        const house = new House(props);
        return house;
    }

    getBuiltArea(): number {
        return this.builtArea;
    }
    
    hasPoo() : boolean {
        return this.yard && this.yard.pool;
    }

    hasYard() : boolean {
        return this.yard !== null;
    }
    
    isValidBuiltArea() : boolean {
        return this.builtArea > 0 && this.area > this.builtArea;
    }

    calculateIptu(regionM2Value: number): number {
        return this.builtArea * regionM2Value;
    }
    
}
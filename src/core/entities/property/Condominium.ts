import { CondominiumProps } from "./types/Condominium";

export class Condominium{
    private value: number;
    private elevator: boolean;
    private playground: boolean;
    private pool: boolean;
    private gym: boolean;

    private constructor(props: CondominiumProps) {
        this.value = props.value;
        this.elevator = props.elevator;
        this.playground = props.playground;
        this.pool = props.pool;
        this.gym = props.gym;
    }

    static create(props: CondominiumProps) {
        const condominium = new Condominium(props);
        return condominium;
    }

    hasElevator() : boolean {
        return this.elevator;
    }

    hasPlayground() : boolean {
        return this.playground;
    }

    hasPool() : boolean {
        return this.pool;
    }

    hasGym() : boolean {
        return this.gym;
    }
}
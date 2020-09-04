// Common types


export type TState = 'initial' | 'loading' | 'error' | 'ready';


// Redux types


export interface IAction {
    type: string;
}

export const isOfType = <T extends IAction>(
    varToBeChecked: any,
    valueToCheckFor: string
): varToBeChecked is T =>
    (varToBeChecked as T)['type'] === valueToCheckFor;



export interface IManufacturer {
    //
}


export namespace IGetManufacturerInfo {
    export interface Request extends IAction {
        id: string;
    }
    export interface Commit extends IAction {
        state: TState;
        manufacturer: IManufacturer;
    }
}


export namespace IListManufacturers {
    export interface Request extends IAction {
        page: number;
    }
    export interface Commit extends IAction {
        state: TState;
        manufacturers: IManufacturer[];
    }
}

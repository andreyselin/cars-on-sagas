// Common types


import {states} from "./const";

export type TComponentState = 'initial' | 'loading' | 'error' | 'ready';


// Redux types


export interface IAction {
    type: string;
}

export const isOfType = <T extends IAction>(
    varToBeChecked: any,
    valueToCheckFor: string
): varToBeChecked is T =>
    (varToBeChecked as T)['type'] === valueToCheckFor;



export type IManufacturer = number;



    /////////////////
    //             //
    //   Actions   //
    //             //
    /////////////////



export interface IGetManufacturerRequest extends IAction {
    id: number;
}
export interface IListManufacturersRequest extends IAction {
    page: number;
}


export interface IListManufacturersCommit extends IAction {
    state: TComponentState;
    items: IManufacturer[];
}
export interface IGetManufacturerCommit extends IAction {
    state: TComponentState;
    manufacturer: IManufacturer;
}



    ///////////////
    //           //
    //   State   //
    //           //
    ///////////////



export interface IState {
    manufacturer: {
        state: TComponentState,
        manufacturer: null | IManufacturer
    },
    manufacturersList: {
        state: TComponentState,
        items: IManufacturer[]
    }
}

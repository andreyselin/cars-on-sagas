import { actionTypes, states } from "./const";
import {
    IGetManufacturerRequest,   IGetManufacturerCommit,
    IListManufacturersRequest, IListManufacturersCommit,

    isOfType, IState } from "./types";


export const defaultState: IState = {
    manufacturer: {
        state: states.initial,
        manufacturer: null
    },
    manufacturersList: {
        state: states.initial,
        items: [ ]
    }
};


export const rootReducer = (previousState = defaultState, action: any) => {



    ///////////////////////////
    //                       //
    //  Manufacturer's page  //
    //                       //
    ///////////////////////////



    if (isOfType<IGetManufacturerRequest>(action, actionTypes.request.getManufacturer)) {
        return {
            ...previousState,
            manufacturer: {
                ...previousState.manufacturer,
                state: states.loading
            }
        }
    }
    else if (isOfType<IGetManufacturerCommit>(action, actionTypes.commit.getManufacturer)) {
        return {
            ...previousState,
            manufacturer: {
                manufacturer: action.manufacturer,
                state: states.ready
            }
        }
    }



    /////////////////////////////
    //                         //
    //  List of manufacturers  //
    //                         //
    /////////////////////////////



    else if (isOfType<IListManufacturersRequest>(action, actionTypes.request.listManufacturers)) {
    // if (action.type === actionTypes.request.listManufacturers) {
        return {
            ...previousState
        }
    }
    else if (isOfType<IListManufacturersCommit>(action, actionTypes.commit.listManufacturers)) {
        return {
            ...previousState
        }
    }




    return previousState;
};

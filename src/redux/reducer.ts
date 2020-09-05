import { actionTypes, states } from "./const";
import {
    IGetManufacturerRequest,   IGetManufacturerCommit,
    IListManufacturersRequest, IListManufacturersCommit,

    isOfType, IState
} from "./types";


export const defaultState: IState = {
    manufacturer: {
        state: states.initial,
        manufacturer: null
    },
    manufacturersList: {
        state: states.initial,
        manufacturers: [ ]
    }
};


export const rootReducer = (previousState = defaultState, action: any) => {



    /////////////////////////////
    //                         //
    //  List of manufacturers  //
    //                         //
    /////////////////////////////



    if (isOfType<IListManufacturersRequest>(action, actionTypes.request.listManufacturers)) {
        return {
            ...previousState

        }
    }
    if (isOfType<IListManufacturersCommit>(action, actionTypes.commit.listManufacturers)) {

        return {
            ...previousState,
            manufacturersList: {
                ...previousState.manufacturersList,
                manufacturers: action.manufacturers
            }
        }
    }




    ///////////////////////////
    //                       //
    //  Manufacturer's page  //
    //                       //
    ///////////////////////////



/*
    if (isOfType<IGetManufacturerRequest>(action, actionTypes.request.getManufacturer)) {
        return {
            ...previousState,
            manufacturer: {
                ...previousState.manufacturer,
                state: states.loading
            }
        }
    }
    if (isOfType<IGetManufacturerCommit>(action, actionTypes.commit.getManufacturer)) {
        return {
            ...previousState,
            manufacturer: {
                manufacturer: action.manufacturer,
                state: states.ready
            }
        }
    }
*/




    return previousState;
};

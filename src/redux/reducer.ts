import { actionTypes, states } from "./const";
import {IAction, IGetManufacturerInfo, IListManufacturers, isOfType} from "./types";


const defaultState = {
    manufacturer: {
        state: states.initial,
        manufacturer: null
    },
    manufacturersList: {
        state: states.initial,
        items: []
    }
};

type A = { type: string } & any;
var a:A = { type: 1, s: 2 };

export const commonReducer = (previousState = defaultState, action: any) => {



    ///////////////////////////
    //                       //
    //  Manufacturer's page  //
    //                       //
    ///////////////////////////



    if (isOfType<IGetManufacturerInfo.Request>(action, actionTypes.request.getManufacturerInfo)) {
        return {
            ...previousState,
            manufacturer: {
                ...previousState.manufacturer,
                state: states.loading
            }
        }
    }
    else if (isOfType<IGetManufacturerInfo.Commit>(action, actionTypes.commit.getManufacturerInfo)) {
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



    else if (isOfType<IListManufacturers.Request>(action, actionTypes.request.listManufacturers)) {
    // if (action.type === actionTypes.request.listManufacturers) {
        return {
            ...previousState
        }
    }
    else if (isOfType<IListManufacturers.Commit>(action, actionTypes.commit.listManufacturers)) {
        return {
            ...previousState
        }
    }




    return previousState;
};

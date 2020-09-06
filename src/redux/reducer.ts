import { actionTypes } from "./const";
import {
    IGetManufacturerCommit,
    IListManufacturersCommit,
    isOfType, IState
} from "./types";


export const defaultState: IState = {
    manufacturer: {
        manufacturer: null
    },
    manufacturersList: {
        manufacturers: [ ]
    }
};


export const rootReducer = (previousState = defaultState, action: any) => {



    /////////////////////////////
    //                         //
    //  List of manufacturers  //
    //                         //
    /////////////////////////////



    if (isOfType<IListManufacturersCommit>(action, actionTypes.commit.listManufacturers)) {
        return {
            ...previousState,
            manufacturersList: {
                ...previousState.manufacturersList,
                manufacturers: [
                    ...previousState.manufacturersList.manufacturers,
                    ...action.manufacturers
                ]
            }
        }
    }




    ///////////////////////////
    //                       //
    //  Manufacturer's page  //
    //                       //
    ///////////////////////////



    if (isOfType<IGetManufacturerCommit>(action, actionTypes.commit.getManufacturer)) {
        return {
            ...previousState,
            manufacturer: {
                manufacturer: action.manufacturer
            }
        }
    }




    return previousState;
};

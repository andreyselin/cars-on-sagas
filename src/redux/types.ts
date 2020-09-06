
    ////////////////////
    //                //
    //  Common types  //
    //                //
    ////////////////////


// No any yet


    ///////////////////
    //               //
    //  Redux types  //
    //               //
    ///////////////////


export interface IAction {
    type: string;
}

export const isOfType = <T extends IAction>(
    varToBeChecked: any,
    valueToCheckFor: string
): varToBeChecked is T =>
    (varToBeChecked as T)['type'] === valueToCheckFor;



export interface IManufacturer {
    Mfr_ID:   number;
    Mfr_Name: string;
    Country:  string;
}


export interface IManufacturerWithMakes extends IManufacturer {
    makesWithModels: IMakeWithModel[]
}

export interface IMake {
    Make_ID    : number;
}

export interface IMakeWithModel extends IMake {
}



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
    manufacturers: IManufacturer[];
}
export interface IGetManufacturerCommit extends IAction {
    manufacturer: IManufacturerWithMakes
}



    ///////////////
    //           //
    //   State   //
    //           //
    ///////////////



export interface IState {
    manufacturer: {
        manufacturer: null | IManufacturerWithMakes
    },
    manufacturersList: {
        manufacturers: IManufacturer[]
    }
}

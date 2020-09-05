import {
    IGetManufacturerCommit,
    IGetManufacturerRequest, IListManufacturersCommit, IListManufacturersRequest,
    IManufacturer, TComponentState
} from "./types";

import { actionTypes } from "./const";


const request: {
    listManufacturers: (page: number) => IListManufacturersRequest,
    getManufacturer:   (id: number)   => IGetManufacturerRequest,
} = {
    listManufacturers: page => ({
        type: actionTypes.request.listManufacturers,
        page
    }),
    getManufacturer: id => ({
        type: actionTypes.request.getManufacturer,
        id
    })
};

const commit: {
    listManufacturers: (state: TComponentState, items: IManufacturer[]) => IListManufacturersCommit,
    getManufacturer:   (state: TComponentState, manufacturer: IManufacturer) => IGetManufacturerCommit,
} = {
    listManufacturers: (state, items) => ({
        type: actionTypes.commit.listManufacturers,
        state,
        items
    }),
    getManufacturer: (state, manufacturer) => ({
        type: actionTypes.commit.getManufacturer,
        state,
        manufacturer
    })
};

export const actions = {
    request,
    commit,
};

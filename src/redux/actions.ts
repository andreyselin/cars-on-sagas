import {
    IGetManufacturerCommit,
    IGetManufacturerRequest, IListManufacturersCommit, IListManufacturersRequest,
    IManufacturer, IManufacturerWithMakes
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
    listManufacturers: (items: IManufacturer[]) => IListManufacturersCommit,
    getManufacturer:   (manufacturer: IManufacturerWithMakes) => IGetManufacturerCommit,
} = {
    listManufacturers: (manufacturers) => ({
        type: actionTypes.commit.listManufacturers,
        manufacturers
    }),
    getManufacturer: (manufacturer) => ({
        type: actionTypes.commit.getManufacturer,
        manufacturer
    })
};

export const actions = {
    request,
    commit,
};

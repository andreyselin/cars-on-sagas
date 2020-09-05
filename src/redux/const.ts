import { TComponentState } from "./types";


export const actionTypes = {
    request: {
        listManufacturers: 'request.listManufacturers',
        getManufacturer:   'request.getManufacturerInfo',
    },
    commit: {
        listManufacturers: 'commit.listManufacturers',
        getManufacturer:   'commit.getManufacturerInfo',
    }
};


export const states: { [key in TComponentState]: key } = {
    initial: 'initial',
    loading: 'loading',
    error:   'error',
    ready:   'ready',
};

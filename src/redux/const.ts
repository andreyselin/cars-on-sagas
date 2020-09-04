import { TState } from "./types";

export const actionTypes = {
    request: {
        listManufacturers:   'request.listManufacturers',
        getManufacturerInfo: 'request.getManufacturerInfo',
    },
    commit: {
        listManufacturers:   'commit.listManufacturers',
        getManufacturerInfo: 'commit.getManufacturerInfo',
    }

};


export const states: { [key in TState]: key } = {
    initial: 'initial',
    loading: 'loading',
    error:   'error',
    ready:   'ready',
};

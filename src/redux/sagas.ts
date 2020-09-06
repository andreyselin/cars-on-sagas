import { takeLatest, call, put, all } from 'redux-saga/effects';
import { actionTypes } from "./const";
import { api } from "./api";
import {
    IGetManufacturerRequest,
    IListManufacturersRequest,
    IMake,
    IManufacturerWithMakes
} from "./types";



    ////////////////////////////
    //                        //
    //   List manufacturers   //
    //                        //
    ////////////////////////////


function *requestManufacturersList ({ page }: IListManufacturersRequest) {

    const result = yield call(api.listManufacturers, { page });
    yield put({
        type: actionTypes.commit.listManufacturers,
        manufacturers: result.data.Results
    });
}



    ////////////////////////////
    //                        //
    //   View manufacturers   //
    //                        //
    ////////////////////////////



function *requestManufacturer ({ id }: IGetManufacturerRequest) {

    const rawManufacturer = yield call(api.getManufacturerDetails, id);
    const rawMakes = yield call(api.getMakeForManufacturer, id);
    const makesWithModels: IManufacturerWithMakes = yield all (
        rawMakes.data.Results
            .map(async(make: IMake) => ({
                ...make,
                models: (await api.getModelsForMakeId(make.Make_ID)).data.Results
            }))
    );

    yield put({
        type: actionTypes.commit.getManufacturer,
        manufacturer: {
            ...rawManufacturer.data.Results[0],
            makesWithModels,
        },
    });
}



    ///////////////////
    //               //
    //   Root saga   //
    //               //
    ///////////////////



export function *rootSaga () {
    yield takeLatest(actionTypes.request.listManufacturers, requestManufacturersList);
    yield takeLatest(actionTypes.request.getManufacturer,   requestManufacturer);
}

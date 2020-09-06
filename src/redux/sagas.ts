import { takeLatest, call, put } from 'redux-saga/effects';
import { actionTypes } from "./const";
import { api } from "./api";
import { IListManufacturersRequest } from "./types";



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


export function *rootSaga () {
    yield takeLatest(actionTypes.request.listManufacturers, requestManufacturersList);
}

/*


    ////////////////////////////
    //                        //
    //   View manufacturers   //
    //                        //
    ////////////////////////////





function *requestManufacturerInfo () {
    const result = yield call(api.getMakeForManufacturer, { id });
    yield put({
        type: actionTypes.commit.getManufacturerInfo,
        payload: result
    });
}

export function *watchManufacturerInfo () {
    yield takeLatest(actionTypes.request.listManufacturers, requestManufacturerInfo);
}
*/

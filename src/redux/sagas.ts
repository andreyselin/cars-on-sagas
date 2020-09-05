import { takeLatest, call, put, take } from 'redux-saga/effects';
import { actionTypes } from "./const";
import { api } from "./api";
import {IListManufacturersRequest} from "./types";
import {delay} from "q";



    ////////////////////////////
    //                        //
    //   List manufacturers   //
    //                        //
    ////////////////////////////


function *requestManufacturersList ({ page }: IListManufacturersRequest) {

    // const result = yield call(api.listManufacturers, { page });
    yield delay(2000);
    yield put({
        type: actionTypes.commit.listManufacturers,
        manufacturers: [ 1,2,3,4,90 ]
    });

    /*
    let page = 0;
    let finished = false;

    while (!finished) {
        page++;
        const result = yield call(api.listManufacturers, { page });
        yield put({
            type: actionTypes.commit.getManufacturer,
            payload: result
        });
    }
    */
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

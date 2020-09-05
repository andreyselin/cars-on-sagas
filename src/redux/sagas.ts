import { takeLatest, call, put } from 'redux-saga/effects';
import { actionTypes } from "./const";
import { api } from "./api";



    ////////////////////////////
    //                        //
    //   List manufacturers   //
    //                        //
    ////////////////////////////


function *requestManufacturersList () {
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
}


export function *watchManufacturersList () {
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

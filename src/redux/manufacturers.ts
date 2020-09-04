import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { actionTypes } from "./const";


const listNext = ({ page }: { page: number }) =>
    axios.get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers`,
        { params: { format: 'json', page } });


function *requestManufacturersList () {
    let page = 0;
    let finished = false;

    while (!finished) {
        page++;
        const result = yield call(listNext, { page });
        yield put({
            type: actionTypes.commit.getManufacturerInfo,
            payload: result
        });
        console.log('--44--', result);
    }
}


export function *watchManufacturersList () {
    yield takeLatest(actionTypes.request.listManufacturers, requestManufacturersList);
}

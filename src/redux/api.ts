import axios from "axios";

export const api = {

    listManufacturers: ({ page }: { page: number }) => axios.get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers`,
        { params: { format: 'json', page } }),

    getManufacturerDetails: (Mfr_ID: number) => axios.get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/${ Mfr_ID }`,
        { params: { format: 'json' } }),

    getMakeForManufacturer: (Mfr_ID: number) => axios.get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/${ Mfr_ID }`,
        { params: { format: 'json' } }),

    getModelsForMakeId: (Make_ID: number) => axios.get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${ Make_ID }`,
        { params: { format: 'json' } }),

};


import axios from "axios";

export const api = {

    listManufacturers: ({ page }: { page: number }) => axios.get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers`,
        { params: { format: 'json', page } }),

    // getMakeForManufacturer: ({ id }: { id: number }) => axios.get(
    //     `https://vpic.nhtsa.dot.gov/vehicles/GetMakeForManufacturer/${ id }`,
    //     { params: { format: 'json' } })

};


import React from 'react';
import {Link, RouteComponentProps} from "@reach/router";

export const ListManufacturers = (props: RouteComponentProps) => {

    return (<>
        List
        <div><Link to={'/manufacturer/1'}>-1-</Link></div>
        <div><Link to={'/manufacturer/2'}>-2-</Link></div>
    </>);
};

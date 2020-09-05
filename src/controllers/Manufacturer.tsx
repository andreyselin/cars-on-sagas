import React from 'react';
import { RouteComponentProps } from "@reach/router";

interface ManufacturerProps extends RouteComponentProps {
    mId?: string;
}

export const Manufacturer = (props: ManufacturerProps) => {
    return (<>
        Manufacturer: { props.mId }
    </>);
};

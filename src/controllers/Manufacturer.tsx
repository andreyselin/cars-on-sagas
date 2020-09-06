import React, {useEffect} from 'react';
import { RouteComponentProps } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../redux/types";
import { actions } from "../redux/actions";

interface ManufacturerProps extends RouteComponentProps {
    mId?: number;
}

export const Manufacturer = (props: ManufacturerProps) => {

    const { manufacturer } = useSelector((state: IState) => state.manufacturer);
    const dispatch = useDispatch();

    useEffect(() => {
        props.mId && dispatch(actions.request.getManufacturer(props.mId));
    }, [ props.mId ]);

    console.log('==>', manufacturer);

    return (<>
        {
            manufacturer && (
                <div>
                    ID:      { manufacturer.Mfr_ID }
                    Name:    { manufacturer.Mfr_Name }
                    Country: { manufacturer.Country }
                    Makes:
                    <div>
                        { manufacturer.makesWithModels.map((make, index)=>(
                            <div key={ index }>
                                { make.Make_ID }
                            </div>
                        )) }
                    </div>
                </div>
            )
        }

    </>);
};

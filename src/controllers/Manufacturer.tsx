import React, { useEffect } from 'react';
import styled from "styled-components";
import { RouteComponentProps } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../redux/types";
import { actions } from "../redux/actions";




const ListBlock = styled.div`
    padding: 5px;
    border: 1px solid #00000020;
    border-radius: 8px;
    margin-bottom: 5px;
`;

const ListBlockHeader = styled.div`   
    padding: 10px 0;
    font-size: 1.3em;
`;

const ListItem = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 0;
    border-top: 1px solid #00000020;
    cursor: pointer;
    &:hover {
        background: #00000010;
    }
`;


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

                    <ListBlock>
                        <ListBlockHeader>Manufacturer details:</ListBlockHeader>
                        <ListItem>ID:      { manufacturer.Mfr_ID }</ListItem>
                        <ListItem>Name:    { manufacturer.Mfr_Name }</ListItem>
                        <ListItem>Country: { manufacturer.Country }</ListItem>
                    </ListBlock>
                    <ListBlock>
                        <ListBlockHeader>Makes:</ListBlockHeader>
                        { manufacturer.makesWithModels.map((make, index)=>(
                            <ListBlock key={ index }>
                                <ListBlockHeader>{ make.Make_Name }:</ListBlockHeader>
                                { make.models.map((model, index2)=>(
                                    <ListItem key={ index }>{ model.Model_Name }</ListItem>
                                )) }

                            </ListBlock>
                        )) }
                    </ListBlock>
                </div>
            )
        }

    </>);
};

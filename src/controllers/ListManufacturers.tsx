import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';
import {Link, RouteComponentProps} from "@reach/router";
import { useDispatch } from "react-redux";
import { IState } from "../redux/types";
import { useSelector } from 'react-redux';
import { actions } from "../redux/actions";

interface _IOwnProps extends RouteComponentProps {
    path: string
}

const ListItem = styled(Link)`
    display: flex;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid #00000020;
    cursor: pointer;
    &:hover {
        background: #00000010;
    }
`;
const ListItemID = styled.div`
    width: 10%;
    text-align: right;
    padding-right: 20px;
    box-sizing: border-box;
`;
const ListItemName = styled.div`
    width: 60%;
`;
const ListItemCountry = styled.div`
    width: 30%;
`;

export const ListManufacturers = (props: _IOwnProps) => {

    const { manufacturers } = useSelector((state: IState) => state.manufacturersList);
    const dispatch = useDispatch();

    const loadFunc = (page: number) => dispatch(actions.request.listManufacturers(page));

    return (<>
        <div style={{ height: '100%', overflow: 'auto' }}>
            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={true || false}
                loader={<div className="loader" key={0}>Loading ...</div>}
                useWindow={true}
            >
                { manufacturers.map((el, index)=>(<ListItem to={`/manufacturer/${ el.Mfr_ID }`} key={ index }>
                    <ListItemID>{ el.Mfr_ID }</ListItemID>
                    <ListItemName>{ el.Mfr_Name }</ListItemName>
                    <ListItemCountry>{ el.Country }</ListItemCountry>
                </ListItem>)) }
            </InfiniteScroll>
        </div>
    </>);
};

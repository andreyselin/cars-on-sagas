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

const ListItem = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid #00000020;
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
    width: 20%;
`;
const ListItemButtonContainer = styled.div`
    width: 10%;
    padding: 5px;
`;
const ListItemButton = styled(Link)`
    padding: 5px 8px;
    color: white;
    cursor: pointer;
    background: green;
    text-decoration: none;
    border-radius: 8px;
    &:hover {
        background: #50b550;
    }
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
                { manufacturers.map((el, index)=>(<ListItem key={ index }>
                    <ListItemID>{ el.Mfr_ID }</ListItemID>
                    <ListItemName>{ el.Mfr_Name }</ListItemName>
                    <ListItemCountry>{ el.Country }</ListItemCountry>
                    <ListItemButtonContainer>
                        <ListItemButton to={`/manufacturer/${ el.Mfr_ID }`} >View details &rarr;</ListItemButton>
                    </ListItemButtonContainer>
                </ListItem>)) }
            </InfiniteScroll>
        </div>
    </>);
};

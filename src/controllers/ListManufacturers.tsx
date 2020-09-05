import React from 'react';
import { Link, RouteComponentProps } from "@reach/router";
import InfiniteScroll from 'react-infinite-scroller';
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { IManufacturer, IState } from "../redux/types";
import { useSelector } from 'react-redux';
import { actions } from "../redux/actions";

interface _IOwnProps extends RouteComponentProps {
    path: string
}


export const ListManufacturers = (props: _IOwnProps) => {

    const { manufacturers } = useSelector((state: IState) => state.manufacturersList);
    const dispatch = useDispatch();

    const loadFunc = (page: number) => {
        dispatch(actions.request.listManufacturers(page))
    };

    return (<>
        <div style={{ height: '100%', overflow: 'auto' }}>
            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={true || false}
                loader={<div className="loader" key={0}>Loading ...</div>}
                useWindow={false}
            >
                { manufacturers.map(el=>(<div key={ el }>{ el }</div>)) }
            </InfiniteScroll>
        </div>
    </>);

    // return (<>
    //     List
    //     <div><Link to={'/manufacturer/1'}>-1-</Link></div>
    //     <div><Link to={'/manufacturer/2'}>-2-</Link></div>
    // </>);
};

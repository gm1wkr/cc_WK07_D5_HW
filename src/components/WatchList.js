import React from "react";

const WatchList = ({watchList}) => {

    if(!watchList) return;

    const watchListNodes = watchList.map( (film) => {
        return(
            <li key={film.id}>{film.title}</li>
        )
    });

    if(watchListNodes.length === 0){
        watchListNodes.push(<li key="1">Your watch list is empty.</li>);
    }

    return(
        <div className="watch-list">
            <h2>My Watch List</h2>
            <ul>
                {watchListNodes}
            </ul>
        </div>
    )
}

export default WatchList;
import React from "react";
import './index.css';

const HorizontalList = ({categories, filterByCategory }) => {
    return(
        <div className="d-flex gap-4 horizontal-list">
            {categories.map(item => <p onClick={filterByCategory} className="list__item align-self-center">{item.name}</p>)}
        </div>
    );
}

export { HorizontalList }
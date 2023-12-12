import React from "react";
import './index.css';

const HorizontalList = ({categories, getCategory }) => {
    return(
        <div className="d-flex gap-4 horizontal-list">
            <p onClick={() => getCategory('')} className="list__item align-self-center">Todas las categorías</p>
            {categories.map(item => <p onClick={getCategory} className="list__item align-self-center">{item.name}</p>)}
        </div>
    );
}

export { HorizontalList }
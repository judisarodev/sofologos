import React from "react";
import { categories } from '../../data/index.js';
import './index.css';

const HorizontalList = () => {
    return(
        <div className="d-flex gap-4 horizontal-list">
            {categories.map(item => <p className="list__item align-self-center">{item.name}</p>)}
        </div>
    );
}

export { HorizontalList }
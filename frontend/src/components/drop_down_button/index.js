import React, { useState } from "react";
import './index.css';

const DropDownButton = ({categories, getCategory}) => {

    const [currentCategory, setCurrentCategory] = useState('Categorías');

    const setCategory = (e) => {
        setCurrentCategory(e.target.textContent);
        getCategory(e);
    }

    return(
        <div className="dropdown">
            <div className="btn btn-light dropdown-toggle dropdown__button" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                
                {<p className="dropdown__textbutton">{currentCategory}</p>}
            </div>
            <ul className="dropdown-menu dropdown__options" aria-labelledby="dropdownMenuLink">
                {categories.map(item => <li onClick={setCategory} key={item.categoryId} className="dropdown-item">
                    {item.name}
                </li>)}
            </ul>
        </div>
    );
}

export { DropDownButton };
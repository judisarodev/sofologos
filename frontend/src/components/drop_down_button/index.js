import React, { useState } from "react";
import './index.css';

const DropDownButton = ({categories, getCategory}) => {

    const [currentCategory, setCurrentCategory] = useState('Todas las categorías');

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
                <li onClick={() => {getCategory(''); setCurrentCategory('Todas las categorías')}} key={-1} className="dropdown-item">
                    Todas las categorías
                </li>
                {categories.map(item => <li onClick={setCategory} key={item.categoryId} className="dropdown-item">
                    {item.name}
                </li>)}
            </ul>
        </div>
    );
}

export { DropDownButton };
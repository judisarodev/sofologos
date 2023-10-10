import React, { useState } from "react";
import './index.css';

const DropDownButton = () => {

    const categories = [
        {id: 0, name: "Todas las categorías"},
        {id: 1, name: "Filosofía"},
        {id: 2, name: "Literatura"},
        {id: 3, name: "Teología"}
    ]

    const [selection, setSelection] = useState(categories[0].name);

    const onChangeSelection = (key) => {
        setSelection(categories.find((item) => item.id === key).name);
    }

    return(
        <div className="dropdown">
            <p className="btn btn-light dropdown-toggle dropdown__button" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                
                {<p className="dropdown__textbutton">{selection}</p>}
            </p>
            <ul className="dropdown-menu dropdown__options" aria-labelledby="dropdownMenuLink">
                {categories.map(item => <li key={item.id} onClick={() => onChangeSelection(item.id)} className="dropdown-item">{item.name}</li>)}
            </ul>
        </div>
    );
}

export { DropDownButton };
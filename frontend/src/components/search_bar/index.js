import React, { useState } from "react";
import './index.css';

const SearchBar = () => {

    const [input, setInput] = useState("");

    const onChangeInput = (e) => {
        setInput(e.target.value);
    }

    return(
        <form className="d-flex serach-bar gap-1 form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar publicaciones" onChange={onChangeInput}/>
        </form>
    );
}

export { SearchBar };
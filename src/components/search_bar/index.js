import React from "react";
import './index.css';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
    return(
        <div className="d-flex serach-bar justify-content-between p-2">
            <p className="align-self-center m-0">Buscar publicaciones</p>
            <AiOutlineSearch className="align-self-center m-0" size={20} color={"#C5CAE9"}/>
        </div>
    );
}

export { SearchBar };
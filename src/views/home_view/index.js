import React from "react";
import { SearchBar } from "../../components/search_bar";
import { DropDownButton } from "../../components/drop_down_button";
import './index.css';

const HomeView = () => {
    return(
        <div className="container">
            <SearchBar />
            <DropDownButton />
        </div>
    );
}

export { HomeView }; 
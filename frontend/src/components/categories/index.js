import React, { useEffect, useState } from "react";
import { HorizontalList } from "../horizontal_list";
import { DropDownButton } from "../drop_down_button";
import { SearchBar } from "../search_bar";

const Categories = ({ categories, setCategory, setTitle }) => {

    const [isSmall, setIsSmall] = useState();
    
    const getTitle = (e) => {
        setTitle(e.target.value);
    }
    const getCategory = (e) => {
        typeof(e) === 'string' ? setCategory(e) : setCategory(e.target.textContent); 
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 992) {
                setIsSmall(true);
            } else {
                setIsSmall(false);
            }
          }
          window.addEventListener('resize', handleResize);
          handleResize();
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, []);

    return(
        <div className="row container--serching-bar">
                <div className="col-lg-8 col-md-12">
                    {!isSmall && <HorizontalList getCategory={getCategory} categories={categories}/> }
                </div>
                <div className="col-lg-4 col-md-12">
                    <SearchBar getTitle={getTitle}/>
                    {isSmall && <DropDownButton getCategory={getCategory} categories={categories}/>}
                </div>
            </div>
    );
}

export { Categories }; 
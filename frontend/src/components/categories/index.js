import React, { useContext, useEffect, useState } from "react";
import { HorizontalList } from "../horizontal_list";
import { DropDownButton } from "../drop_down_button";
import { SearchBar } from "../search_bar";
import { PostsCategoriesContext } from "../../context/PostsCategoriesProvider";

const Categories = ({ showSearchBar = true, setCategory, setTitle, defaultCategory, forceDropDown = false }) => {

    const [isSmall, setIsSmall] = useState();
    const { allCategories, setAllCategories } = useContext(PostsCategoriesContext);
    
    const getTitle = (e) => {
        setTitle(e.target.value);
    }

    const getCategory = (e) => {
        typeof(e) === 'string' ? setCategory(e) : setCategory(e.target.textContent); 
    }

    useEffect(() => {
        fetch('http://localhost:9090/category/get-all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if(response.ok){
                return response.json();
            }
        })
        .then(data => {
            setAllCategories(data);
        })
        .catch((e) => {
            console.log(e);
            setAllCategories(null); 
        });
    }, [setAllCategories]);

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
                <div className="col-lg-8">
                    {(!isSmall && !forceDropDown )&& <HorizontalList getCategory={getCategory} categories={allCategories ? allCategories : []}/> }
                </div>
                <div className="col-lg-4">
                    {showSearchBar && <SearchBar getTitle={getTitle} />}
                </div>
                <div className="col-12">
                    {(isSmall || forceDropDown) && <DropDownButton getCategory={getCategory} categories={allCategories ? allCategories : []} defaultCategory={defaultCategory}/>}
                </div>
            </div>
    );
}

export { Categories }; 
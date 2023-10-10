import React, { useEffect, useState } from "react";
import { SearchBar } from "../../components/search_bar";
import { DropDownButton } from "../../components/drop_down_button";
import './index.css';
import { HorizontalList } from "../../components/horizontal_list";

const HomeView = () => {

    const [isSmall, setIsSmall] = useState();

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
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
        <div className="container">
            <div className="d-flex justify-content-between">
                {!isSmall && <HorizontalList /> }
                <div className="d-flex flex-column">
                    <SearchBar/>
                    {isSmall && <DropDownButton/>}
                </div>
            </div>
        </div>
    );
}

export { HomeView }; 
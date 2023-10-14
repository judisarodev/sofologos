import React, { useEffect, useState } from "react";
import { SearchBar } from "../../components/search_bar";
import { DropDownButton } from "../../components/drop_down_button";
import './index.css';
import { HorizontalList } from "../../components/horizontal_list";
import { PostCard } from "../../components/post_card";
import { posts } from "../../data";

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
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    {!isSmall && <HorizontalList /> }
                </div>
                <div className="col-md-4 col-sm-12">
                    <SearchBar/>
                    {isSmall && <DropDownButton/>}
                </div>
            </div>

            <div>
                {posts.map((info) => 
                    <PostCard info={info} />
                )}
            </div>
        </div>
    );
}

export { HomeView }; 
import React, { useContext, useEffect, useState } from "react";
import { SearchBar } from "../../components/search_bar";
import { DropDownButton } from "../../components/drop_down_button";
import { HorizontalList } from "../../components/horizontal_list";
import { PostCard } from "../../components/post_card";
import { posts } from "../../data";
import './index.css';
import { SingUpForm } from "../../components/sing-up-form";

const HomeView = () => {

    const [isSmall, setIsSmall] = useState();

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
        <div className="container">
            <div className="row container--serching-bar">
                <div className="col-lg-8 col-md-12">
                    {!isSmall && <HorizontalList /> }
                </div>
                <div className="col-lg-4 col-md-12">
                    <SearchBar/>
                    {isSmall && <DropDownButton/>}
                </div>
            </div>
        
            <div className="row m-2">
                {posts.map((info) => 
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                        <PostCard info={info} />
                    </div>
                )}
            </div>
            <p className="view-more">{'Ver más'}</p>

            <SingUpForm /> 
        </div>
    );
}

export { HomeView }; 
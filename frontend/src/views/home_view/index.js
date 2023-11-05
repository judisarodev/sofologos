import React, { useContext, useEffect, useState } from "react";
import { SearchBar } from "../../components/search_bar";
import { DropDownButton } from "../../components/drop_down_button";
import { HorizontalList } from "../../components/horizontal_list";
import { PostCard } from "../../components/post_card";
import './index.css';
import { SingUpForm } from "../../components/sing-up-form";
import { ErrorMessage } from "../../components/error_message";

const HomeView = () => {

    const [isSmall, setIsSmall] = useState();
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(true);

    useEffect(() => {
        fetch(
            'http://localhost:9090/posts/get-all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.ok){
                setError(false);
                return response.json();
            }
        })
        .then((data) => {
            setPosts(data);
        })
        .catch(error => {
            setError(true);
        });

    }, []);

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

            {error ? <ErrorMessage /> : 
            <div className="row m-2">
                {posts.map((info) => 
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center gap-2">
                        <PostCard info={info} />
                    </div>
                )}
                <p className="view-more">{'Ver más'}</p>
            </div>
            }

            <SingUpForm /> 
        </div>
    );
}

export { HomeView }; 
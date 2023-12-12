import React, { useContext, useEffect, useState } from "react";
import { PostCard } from "../../components/post_card";
import { SingUpForm } from "../../components/sing-up-form";
import { ErrorMessage } from "../../components/error_message";
import { ViewContainer } from "../../components/view_container";
import './index.css';
import { Categories } from "../../components/categories";
import { PostsCategoriesContext } from "../../context/PostsCategoriesProvider";

const HomeView = () => {
    const { allPosts, categories } = useContext(PostsCategoriesContext);
    const [category, setCategory] = useState();
    const [title, setTitle] = useState('');

    function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    return(
        <ViewContainer>
        <div className="container">
            {!allPosts ? <ErrorMessage text={ 'Un momento' } /> : 

                <div>
                    <Categories categories={categories} setCategory={setCategory} setTitle={setTitle}/>

                    <div className="row m-2">
                        {allPosts.filter((item) => {
                            return (category && item.category === category) || (!category)
                        })
                        .filter((item) => {
                            return (title && removeAccents(item.title).includes(removeAccents(title))) || (!title)
                        })
                        .map((item) => 
                            <div className="col-lg-6 col-md-12 d-flex justify-content-center gap-2">
                                <PostCard info={item} />
                            </div> 
                        )}
                    </div>
                </div>
            }

            <SingUpForm /> 
        </div>
        </ViewContainer>
    );
}

export { HomeView }; 
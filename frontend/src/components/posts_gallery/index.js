import React, { useContext, useState } from "react";
import { ErrorMessage } from "../error_message";
import { Categories } from "../categories";
import { LuPencil } from "react-icons/lu";
import { PostsCategoriesContext } from "../../context/PostsCategoriesProvider";
import { AdminPostCard, PostCard } from "../post_card";

const PostsGallery = ( { adminPost = false } ) => {

    const { allPosts, categories } = useContext(PostsCategoriesContext);
    const [category, setCategory] = useState();
    const [title, setTitle] = useState('');

    function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    function getPosts(){
        const posts =  allPosts.filter((item) => {
            return (category && item.category === category) || (!category)
        })
        .filter((item) => {
            return (title && removeAccents(item.title).includes(removeAccents(title))) || (!title)
        })
        .map((item) => 
            <div className="col-lg-6 col-md-12 d-flex justify-content-center gap-2">
                {adminPost? <AdminPostCard info={item}/> : <PostCard info={item}/>}
            </div> 
        );
        return posts; 
    }


    return(
        <div className="container">
            {!allPosts ? <ErrorMessage text={ 'Un momento' } /> : 
                <div>
                    <Categories categories={categories} setCategory={setCategory} setTitle={setTitle}/>
                    <div className="row m-2">
                        { getPosts() }
                        { getPosts().length < 1 && 
                            <div className="d-flex align-items-center p-5 flex-column">
                                <LuPencil className="m-3" size={50}/>
                                <h4>No hay posts para tu búsqueda</h4> 
                                <p>Pronto habrá más publicaciones disponibles</p> 
                            </div>
                        }      
                    </div>
                </div>
            }
        </div>
    );
}

export { PostsGallery }; 
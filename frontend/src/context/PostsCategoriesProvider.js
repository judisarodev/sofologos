import React, { createContext, useEffect, useState } from "react";

const  PostsCategoriesContext = createContext();

const PostsCategoriesProvider = ({ children }) => {
    
    const [allPosts, setAllPosts] = useState(null);
    const [categories, setCategories] = useState([]);
    const [postId, setPostId] = useState({});

    useEffect(()=>{
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
            setCategories(data);
        })
        .catch((e) => {
            console.log(e);
            setAllPosts(null); 
            setCategories(null); 
        });
    }, [categories]);


    useEffect(() => {
        fetch(
            'http://localhost:9090/posts/get-all' , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.ok){
                return response.json();
            }
        })
        .then((data) => {
            setAllPosts(data);
        })
        .catch(e => {
            console.log(e);
            setAllPosts(null); 
        });
    }, [allPosts]);
    
    return(
        <PostsCategoriesContext.Provider value={{ allPosts, setAllPosts, categories, setCategories, postId, setPostId }}>
            { children }
        </PostsCategoriesContext.Provider>
    );
}

export { PostsCategoriesContext, PostsCategoriesProvider };
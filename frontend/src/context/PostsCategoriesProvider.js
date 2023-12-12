import React, { createContext, useEffect, useState } from "react";

const PostsCategoriesContext = createContext();

const PostsCategoriesProvider = ({ children }) => {
    
    const [allPosts, setAllPosts] = useState(null);
    const [categories, setCategories] = useState([]);

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
    }, []);

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
    }, []);


    return(
        <PostsCategoriesContext.Provider value={{ allPosts, categories }}>
            { children }
        </PostsCategoriesContext.Provider>
    );
}

export { PostsCategoriesContext, PostsCategoriesProvider };
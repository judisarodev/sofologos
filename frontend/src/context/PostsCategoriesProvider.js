import React, { createContext, useEffect, useState } from "react";

const  PostsCategoriesContext = createContext();

const PostsCategoriesProvider = ({ children }) => {
    
    const [allCategories, setAllCategories] = useState(null);
    const [allPosts, setAllPosts] = useState(null);
    const [focusedPost, setFocusedPost] = useState({}); 

    return(
        <PostsCategoriesContext.Provider value={{ allPosts, allCategories, setAllCategories, setAllPosts, focusedPost, setFocusedPost }}>
            { children }
        </PostsCategoriesContext.Provider>
    );
}

export { PostsCategoriesContext, PostsCategoriesProvider };
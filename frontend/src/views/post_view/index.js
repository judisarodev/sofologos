import React from "react";
import { post } from "../../data";

const PostView = () => {
    return(
        <div className="row justify-content-center m-3">
            <div className="col-6 content">
                <p>Holas</p>
                <p>{post.date}</p>
                <p>{post.title}</p>
                <p>{post.summary}</p>
                <p>{post.content}</p>
            </div>
        </div>
    );
}

export { PostView }; 
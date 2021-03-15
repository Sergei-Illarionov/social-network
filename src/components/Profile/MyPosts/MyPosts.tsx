import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css"


const MyPosts = () => {
    return (
        <div className={style.postsBlock} >
            <h3> My posts</h3>
            <div className={style.posts}>
                 post 1
            </div>
           <Post />
        </div>
    )
}

export default MyPosts;
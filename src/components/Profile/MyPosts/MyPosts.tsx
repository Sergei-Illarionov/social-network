import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css"
import {PostType} from "../../../redux/state";

type myPostsPropsType = {
    posts: Array<PostType>
}


const MyPosts = (props:myPostsPropsType) => {
    let postsElements = props.posts.map(post => <Post message={post.message} name={post.message} />)

    return (
        <div className={style.postsBlock}>
            <div>
                <h3> My posts</h3>
                <textarea>текст</textarea>

                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>

        </div>
    )
}

export default MyPosts;
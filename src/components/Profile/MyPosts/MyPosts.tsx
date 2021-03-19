import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css"
import {PostType} from "../../../redux/state";

type myPostsPropsType = {
    posts: Array<PostType>

}


const MyPosts = (props:myPostsPropsType) => {
    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}   />)


   let addPost = () => {
        alert("Hi")
  }

    return (
        <div className={style.postsBlock}>
            <div>
                <h3> My posts</h3>
                <textarea>text</textarea>

                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>

        </div>
    )
}

export default MyPosts;
import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css"


const MyPosts = () => {


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
                <Post name="Sergei" message="Hi, how are you?" />
                <Post name="Maria" message="It's my first post" />
            </div>

        </div>
    )
}

export default MyPosts;
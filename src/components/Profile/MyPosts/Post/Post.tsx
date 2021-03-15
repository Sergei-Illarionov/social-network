import React from "react";
import style from "./Post.module.css"

const Post = () => {
    return (
        <div className={style.item}>
            <img
                src="https://w7.pngwing.com/pngs/701/23/png-transparent-black-and-brown-gorilla-illustration-discord-avatar-twitch-youtube-profile-mammal-face-heroes.png"
                alt="Avatar"/>

            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;
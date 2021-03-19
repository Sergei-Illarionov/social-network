import React from "react";
import style from "./Post.module.css"


export type PostPropsType = {

    message: string
likesCount: number

}


const Post = (props: PostPropsType) => {

    return (

        <div className={style.item_myText}>

            <div className={style.image}>
                <img
                    src="https://w7.pngwing.com/pngs/701/23/png-transparent-black-and-brown-gorilla-illustration-discord-avatar-twitch-youtube-profile-mammal-face-heroes.png"
                    alt="Avatar"/>
            </div>
            <div className={style.speech_bubble}>

                <div className={style.text}>{props.message}</div>
                <button className={style.like}>like {props.likesCount} </button>

            </div>

        </div>

    )
}

export default Post;
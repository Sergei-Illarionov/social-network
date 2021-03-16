import React, {useState} from "react";
import style from "./Post.module.css"


type PostPropsType = {
    name: string
    message: string


}


const Post = (props: PostPropsType) => {
    const [count, setCount] = useState(0)
    const onLikeClickHandler = () => setCount(count + 1)
    return (

        <div className={style.item_myText}>

            <div className={style.image}>
                <img
                    src="https://w7.pngwing.com/pngs/701/23/png-transparent-black-and-brown-gorilla-illustration-discord-avatar-twitch-youtube-profile-mammal-face-heroes.png"
                    alt="Avatar"/>
            </div>
            <div className={style.speech_bubble}>
                <div className={style.message_name}>{props.name}</div>
                <div className={style.text}>{props.message}</div>
                <button className={style.like} onClick={onLikeClickHandler}>like {count}</button>

            </div>

        </div>

    )
}

export default Post;
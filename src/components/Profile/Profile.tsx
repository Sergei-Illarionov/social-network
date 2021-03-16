import React from "react";
import MyPosts from "./MyPosts/MyPosts";




const Profile = () => {

    return (
        <div>
            <div>
                <img
                    src="https://d9me64que7cqs.cloudfront.net/images/common/background-generic-landscape-short.31b43a7823e13c6383e5e613b04b5b58.jpg"
                    alt="logo"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>

        </div>
    )
}

export default Profile;
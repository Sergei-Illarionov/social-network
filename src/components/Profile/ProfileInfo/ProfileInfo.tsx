import React from "react";
import style from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://d9me64que7cqs.cloudfront.net/images/common/background-generic-landscape-short.31b43a7823e13c6383e5e613b04b5b58.jpg"
                    alt="logo"/>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;
import React from 'react'
import imgchat from '../../img/icon-chat.png'
import imgmoney from '../../img/icon-money.png'
import imgsecurity from '../../img/icon-security.png'

export default function FeatureItems({ icon, title, text }) {

    let arr = [imgchat, imgmoney, imgsecurity];
    let iconActive;

    arr.map((str) => {
        let iconPathArr = str.split('/')
        let iconPath = iconPathArr[iconPathArr.length - 1]
        let iconNameArr = iconPath.split('.')
        let iconName = iconNameArr[0]

        if (icon.includes(iconName)) iconActive = str
    })

    return (
        <div className="feature-item">
            <img src={iconActive} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {text}
            </p>
        </div>
    )
}

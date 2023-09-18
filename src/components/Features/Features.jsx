import React from 'react'
import FeatureItems from '../FeatureItems/FeatureItems'

export default function Features() {

    let feat = [
        {
            icon: "../../img/icon-chat.png",
            title: "You are our #1 priority",
            text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        },
        {
            icon: "./img/icon-money.png",
            title: "More savings means higher rates",
            text: "The more you save with us, the higher your interest rate will be!"
        },
        {
            icon: "./img/icon-security.png",
            title: "You are our #1 priority",
            text: "We use top of the line encryption to make sure your data and moneyis always safe."
        },
    ]

    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>

            {feat.map((f, k) => <FeatureItems key={k} icon={f.icon} title={f.title} text={f.text} />)}

        </section>
    )
}

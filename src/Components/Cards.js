import React from 'react'
import Card from './Card'

import image from './img'


const cards = [
    {
        id: 1,
        title: "Hermosura",
        image: image1
    },
    {
        id: 1,
        title: "Hermosura",
        image: image2
    },
    {
        id: 1,
        title: "Hermosura",
        image: image3
    },


]

function Cards() {
    return (
        <div className="container d-flex justify-content-center aling-items-center">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <card title={card.title}/>

                        </div>

                    ))
                }

            </div>

        </div>
    )
}
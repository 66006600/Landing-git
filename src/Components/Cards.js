import React from 'react'
import Card from './Card'

import image from './img'


const cards = [
    {
        id: 1,
        title: "Hermosura",
        image: image1,
        url: 'https://getbootstrap.com/',
        Text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
    },
    {
        id: 2,
        title: "Hermosura",
        image: image2,
        url: 'https://cssgradient.io/',
        Text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
        

    },
    {
        id: 3,
        title: "Hermosura",
        image: image3,
        url: "https://www.youtube.com/",
        Text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'

    },
    {
        id: 4,
        title: "Hermosura",
        image: image4,
        url: "https://www.youtube.com/",
        Text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
        
    },


]

function Cards() {
    return (
        <div className="container d-flex justify-content-center aling-items-center">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>

                        </div>

                    ))
                }

            </div>

        </div>
    )
}
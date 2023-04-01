import React from 'react'
import Card from './Card'

import imagen1 from './img'
import imagen2 from './img'
import imagen3 from './img'
import imagen4 from './img'


const cards = [
    {
        id: 1,
        title: "Cualquier Cosa",
        image: imagen1,
        url: 'https://getbootstrap.com/',
        Text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
    },
    {
        id: 2,
        title: "Visitando",
        image: imagen2,
        url: 'https://cssgradient.io/',
        Text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
        

    },
    {
        id: 3,
        title: "Viajando",
        image: imagen3,
        url: "https://www.youtube.com/",
        Text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'

    },
    {
        id: 4,
        title: "Hermosura",
        image: imagen4,
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
                            <card title={card.title} image={card.image} url={card.url} text={card.text}/>

                        </div>

                    ))
                }

            </div>

        </div>
    )
}
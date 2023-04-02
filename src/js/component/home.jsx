import React from "react";
import Card from "../../Components/Card.js";
import imagen1 from "../../img/imagen1.jpg";
import imagen2 from "../../img/imagen2.jpg";
import imagen3 from "../../img/imagen3.jpg";
import imagen4 from "../../img/imagen4.jpg";
import Jumbo from "../../Components/Jumbotron.js";
import Navbar from "../../Components/Navbar.js";





//include images into your bundle


//create your first component


const cards = [
    {
        id: 1,
        title: "Cualquier Cosa",
        image: "imagen1.jpg",
        url: 'https://getbootstrap.com/',
        text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
    },
    {
        id: 2,
        title: "Visitando",
        image: "imagen2.jpg",
        url: 'https://cssgradient.io/',
        text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
        

    },
    {
        id: 3,
        title: "Viajando",
        image: "imagen3.jpg",
        url: "https://www.youtube.com/",
        text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'

    },
    {
        id: 4,
        title: "Hermosura",
        image: "imagen4.jpg",
        url: "https://www.youtube.com/",
        text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
        
    },


]


const Home = () => {
	return (
		<div className="text-center">
			<div className="container d-flex justify-content-center aling-items-center">
            <div className="row"> 
			
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imagen={card.image}  url={card.url} text={card.text}/>

                        </div>

                    ))
                }

            </div>

        </div>
		</div>
	);
};

export default Home;

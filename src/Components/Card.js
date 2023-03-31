import React from "react";



function Card({title, imageSource}) {
    console.log(props)
    return (
        <div className="card text-center">
            <div className="card-body">
                <img src="..." class="card-img-top" alt="...">
                    <h4 className="card.title">{title}</h4>
                    <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary rounded-0">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card
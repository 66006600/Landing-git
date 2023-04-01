import React from "react";



function Card({title, text, url}) {
    console.log(props)
    return (
        <div className="card text-center">
            <div className="card-body">
                <img src="..." class="card-img-top" alt="..."/>
                    <h4 className="card.title">{title}</h4>
                    <p className="card-text text-secondary">{text}.</p>
                    <a href={url} class="btn btn-primary rounded-0" target="_blank">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card
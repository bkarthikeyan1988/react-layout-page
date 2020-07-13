import React from 'react';
import './Card.css';

const Card = ({
    imgSrc="https://cdn.pixabay.com/photo/2020/06/02/07/51/luka-5249892_1280.jpg",
    cardTitle="Card Title",
    cardDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
}) => {
    return(
        <div className="cardBlock">
            <div className="imageBlock">
                <img src={imgSrc} alt="card"/>
            </div>
            <div className="cardInfo">
                <h3>{cardTitle}</h3>
                <p>{cardDesc}</p>
            </div>
        </div>
    )
};

export default Card;
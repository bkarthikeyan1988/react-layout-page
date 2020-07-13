import React from 'react';
import Card from '../Card/Card';
import './ImageBlock.css';

const ImageBlock = () => {
    return(
        <section className="imageBlogBlock">
            <article className="info">
                Aperiam culpa labore explicabo iste. Suscipit, magni fugiat quisquam mollitia blanditiis nulla! Cum quiam.
            </article>
            <article className="cardMainBlock">
                <ul>
                    <li><Card /></li>
                    <li>
                        <Card
                            imgSrc="https://cdn.pixabay.com/photo/2020/06/25/02/22/the-night-5338228__480.jpg"
                            cardTitle="Card1"
                            cardDesc="lorem ipsum description text for the data as an object"
                        />
                    </li>
                    <li>
                        <Card
                            imgSrc="https://cdn.pixabay.com/photo/2020/06/24/20/42/mountains-5337650_1280.jpg"
                            cardTitle="Card2"
                            cardDesc="Laboriosam recusandae veniam facere dolor eveniet."
                        />
                    </li>
                </ul>
            </article>
        </section>
    )
}

export default ImageBlock;

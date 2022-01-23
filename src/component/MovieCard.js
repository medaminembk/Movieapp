import React from 'react'
import { Card } from 'antd';
import { Route, Routes, useNavigate } from 'react-router-dom';
const { Meta } = Card;

const MovieCard = ({title, description, posterURL, rating, link}) => {
    
    const navigate = useNavigate();

    return (
        <div>
            <Card
                hoverable
                style={{ width: 300 , margin:"2px", height:600}}
                cover={<img alt="example" src={posterURL}
                onClick={() => navigate(`/card/${title}`,{state:{link:link, description:description}})}
               style={{ width: 300 , height:240}}
                />}
            >
                <Meta title={title} description={description} style={{   height:230}}/>
                <span>{rating}</span>
            </Card>,
        </div>
    )
}

export default MovieCard

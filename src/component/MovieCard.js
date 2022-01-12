import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

const MovieCard = ({title, description, posterURL, rating}) => {
    


    return (
        <div>
            <Card
                hoverable
                style={{ width: 240 , margin:"2px"}}
                cover={<img alt="example" src={posterURL}
               // "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" 
                />}
            >
                <Meta title={title} description={description} />
                <span>{rating}</span>
            </Card>,
        </div>
    )
}

export default MovieCard

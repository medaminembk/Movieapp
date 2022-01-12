import { Button, Input, Row, } from 'antd'
import React, { useState } from 'react'
import MovieCard from './MovieCard'

const MovieList = () => {
    const initialState = [
        {
            title: "Europe Street beat",
            description: 'www.instagram.com',
            posterURL: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
            rating: 10
        },
        {
            title: "Europe Street beat",
            description: 'www.instagram.com',
            posterURL: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
            rating: 10
        },
        {
            title: "Europe Street beat",
            description: 'www.instagram.com',
            posterURL: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
            rating: 10
        }
    ]
    const [data, setData] = useState(initialState)
    const [title, setTitle] = useState(initialState)
    const [description, setDescription] = useState(initialState)
    const [posterURL, setPosterURL] = useState(initialState)
    const [rating, setRating] = useState(initialState)
   
    function onChange (e){
        setTitle( e.target.value)
    }

    const styletitle = {
        fontSize: "28px",
        fontWeight: "700",
        color: "#000B49",
        fontFamilly: "Arial"
    }
    const styletitle2 = {
        fontSize: "20px",
        fontWeight: "400",
        color: "#000B49",
        fontFamilly: "Arial"
    }
    const displaystyle = {
        display: 'flex', flexDirection: 'column', justifyContent: 'start'
    }
    return (
        <div>
            <Row >
                <label style={styletitle}>Add Movie</label>
            </Row>
            <Row justify='start'>
                <div style={displaystyle}>
                    <label style={styletitle2}>Title :</label>
                    <Input placeholder="Basic usage" onChange={onChange} />
                </div>

            </Row>
            <Row>
                <div style={displaystyle}>
                    <label style={styletitle2}>Description :</label>
                    <Input placeholder="Basic usage"  onChange={onChange}/>
                </div>

            </Row>
            <Row>
                <div style={displaystyle}>
                    <label style={styletitle2}>Poste url :</label>
                    <Input placeholder="Basic usage" onChange={onChange} />
                </div>

            </Row>
            <Row>
                <div style={displaystyle}>
                    <label style={styletitle2}>Rating :</label>
                    <Input placeholder="Basic usage" onChange={onChange} />
                </div>

            </Row>
            <Row justify='center'>
                <Button style={{ color: "white", backgroundColor: "#000B49", fontSize: "18px", margin: "4px" }}>
                    Ajouter
                </Button>
            </Row>

            <Row>
                <label style={styletitle}>List Movie</label>
            </Row>
            <Row>
                {data.map((item, key) => {
                    return <MovieCard title={item.title} description={item.description}
                        posterURL={item.posterURL} rating={item.rating} key={key} />
                })}
            </Row>



        </div>
    )
}

export default MovieList

import { Button, Input, Row, Col } from 'antd'
import React, { useState } from 'react'
import Filter from './Filter'
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
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [posterURL, setPosterURL] = useState("")
    const [rating, setRating] = useState("")

    function onChange(e) {
        setTitle(e.target.value)
    }
    function addmovie() {
        //setData()

        setData([...data, {
            title: title,
            description: description,
            posterURL: posterURL,
            rating: rating
        }]);
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
            <Row>
                <Col span={12} >
                    <Row justify='center'>
                        <div style={displaystyle}>
                            <label style={styletitle2}>Title :</label>
                            <Input placeholder="Basic usage" onChange={onChange} />
                        </div>

                    </Row>
                    <Row justify='center'>
                        <div style={displaystyle}>
                            <label style={styletitle2}>Description :</label>
                            <Input placeholder="Basic usage" onChange={(e) => setDescription(e.target.value)} />
                        </div>

                    </Row>
                </Col>

                <Col span={12}>
                    <Row justify='center'>
                        <div style={displaystyle}>
                            <label style={styletitle2}>Poste url :</label>
                            <Input placeholder="Basic usage" onChange={(e) => setPosterURL(e.target.value)} />
                        </div>

                    </Row>
                    <Row justify='center'>
                        <div style={displaystyle}>
                            <label style={styletitle2}>Rating :</label>
                            <Input placeholder="Basic usage" onChange={(e) => setRating(e.target.value)} />
                        </div>

                    </Row>
                </Col>
            </Row>


            <Row justify='center'>
                <Button style={{ color: "white", backgroundColor: "#000B49", fontSize: "18px", margin: "4px" }}
                    onClick={addmovie}>
                    Ajouter
                </Button>
            </Row>

            <Row>
                <label style={styletitle}>List Movie</label>
            </Row>
            <Row style={{ margin: "20px" }}>
                <Filter title='title' rate='rate'/>
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

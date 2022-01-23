import { Button, Input, Row, Col } from 'antd'
import React, { useState } from 'react'
import Filter from './Filter'
import MovieCard from './MovieCard'

const MovieList = () => {
    const initialState = [
        {
            title: "Avatar 2",
            description: "Jake Sully et Ney tiri ont formé une famille et font tout pour rester aussi soudés que possible. Ils sont cependant contraints de quitter leur foyer et d explorer les différentes régions encore mystérieuses de Pandora. Lorsqu une ancienne menace refait surface Jake va devoir mener une guerre difficile contre les humains.",
            posterURL: 'avatar.jpg',
            rating: 2,
            trailerLink: 'https://www.youtube.com/embed/EWXb-Twcbi4'
           
        },
        {
            title: "Morbius",
            description: 'L ancien biochimiste primé Michael Morbius, souffre d une maladie rare du sang et veut l arrêter par des expériences biochimiques, mais au lieu de cela, il entre en possession d une sorte de vampire surhumain.',
            posterURL: 'mm.jpg',
            rating: 9,
            trailerLink: 'https://www.youtube.com/embed/oZ6iiRrz1SY'
        },
        {
            title: "Uncharted",
            description: 'Uncharted est un film américain réalisé par Ruben Fleischer et dont la sortie est prévue en 2022. Il s agit d une adaptation cinématographique de la série de jeux vidéo Uncharted développés par Naughty Dog et édités par Sony Interactive Entertainment.',
            posterURL: 'uncharted.jpg',
            rating: 10,
            trailerLink: 'https://www.youtube.com/embed/4wCH1K-ckZw'
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

    function filterrating(e) {
        console.log(e.target.value);
        let newarray=[]
        initialState.map((item, key)=>{
            console.log(item.rating);
            console.log(e.target.value);
            if(e.target.value == "All"){
              
                newarray.push(item)
            }
            else if(item.rating == e.target.value){
                console.log('equal');
                newarray.push(item)
            }
        })
        setData(newarray)
    }
    function filtertitle(e) {
        console.log(e.target.value);
        let newarray=[]
        initialState.map((item, key)=>{
            console.log(item.rating);
            console.log(e.target.value);
            if(e.target.value == "All"){
              
                newarray.push(item)
            }
            else if(item.title == e.target.value){
                console.log('equal');
                newarray.push(item)
            }
        })
        setData(newarray)
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
                <Filter title='title' rate='rate' filterrating={filterrating} filtertitle={filtertitle}/>
            </Row>
            <Row>
                {data.map((item, key) => {
                    return <MovieCard title={item.title} description={item.description}
                        posterURL={item.posterURL} rating={item.rating} key={key} link={item.trailerLink} />
                })}
            </Row>



        </div>
    )
}

export default MovieList

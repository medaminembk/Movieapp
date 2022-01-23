import { Button, Input, Row, Col } from 'antd'
import {
    HomeOutlined,
    
  } from '@ant-design/icons';
import { useEffect } from 'react';
import { Route, Routes, useMatch, useNavigate, useLocation } from 'react-router-dom';
const DescriptionMovie = () => {
    const navigate = useNavigate();
    const match = useMatch('/card/:title');
    const location = useLocation();
    useEffect(() => {
        console.log("🚀 ~ file: App.js ~ line 23 ~ Profile ~ params", match)
        console.log(location);
    })
    function handleClick() {
        navigate(-1)
    }
    const styletitle = {
        fontSize: "28px",
        fontWeight: "700",
        color: "#000B49",
        fontFamilly: "Arial"
    }
    const stylebutton = {
        fontSize: "20px",
        fontWeight: "500",
        color: "#000B49",
        fontFamilly: "Arial"
    }
    const styledescription = {
        fontSize: "20px",
        fontWeight: "400",
        color: "#000B49",
        fontFamilly: "Arial"
    }
    return <div>
        <Button onClick={handleClick}
        icon={<HomeOutlined />}
        size='large'
        ><span style={stylebutton}>Go home</span></Button>
        <Row justify='center'>
            <label style={styletitle}>{match.params.title}</label>
        </Row>
        <Row justify='center'>
            <label style={styledescription}>{location.state.description}</label>

        </Row>
        <Row justify='center' style={{marginTop:"10px"}}>
          
            <iframe width="727" height="409" src={location.state.link}
             title="YouTube video player" 
             frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowfullscreen></iframe>
        </Row>



    </div>;
};

export default DescriptionMovie;

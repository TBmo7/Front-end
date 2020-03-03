import React from "react";
import MarketPrice from "./MarketPrice";
import styled from "styled-components";
import {Link,Route} from "react-router-dom";


const DivHolder = styled.div `
    width:95%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    margin:3%;
`;



function Dashboard() {


    return(

    <DivHolder>
        
        <Link to = "/">Home</Link>
        <Link to = "/MarketPrice">Market Price</Link>
        <Link>Dummy Data</Link>
        

    </DivHolder>

    )

}

export default Dashboard;
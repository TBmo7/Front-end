import React from "react";
import MarketPrice from "./MarketPrice";
import "./Dashboard.css"
import styled from "styled-components";
import {Link,Route} from "react-router-dom";

import listingsicon from '../Icons/ListingsIcon.png';
import marketpriceicon from '../Icons/MarketPriceIcon.png';
import producticon from '../Icons/ProductIcon.png';
import profileicon from '../Icons/ProfileIcon.png';




const TopBar = styled.div ` 
    width:100%;
    display:flex;
    flex-direction:row;
    background-color: #142051;
    color: #FE7A7C;
    justify-content:space-around;

`;


const WelcomeBackMessage = styled.p `
    color:#142051;
    font-size: 24px;


`;

const DivHolder = styled.div `
    width:95%;
    height:600px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    margin:3%;
`;
const LeftLinks = styled.div `
    display:flex;
    flex-direction:column;
    height:80%;
    width:50%;
    
    align-items:center;
`;

const RightLinks = styled.div `
    display:flex;
    flex-direction:column;
    height:80%;
    width:50%;
    align-items:center;
`;



const BotBar = styled.div `
    
    display:flex;
    background-color:#142051;
    color:white;
    width:100%;
    flex-direction:row;
    justify-content:space-around;

`;



function Dashboard() {


    return(
        <div>

        <TopBar>
            <h1>Sauti.</h1>
            <h2>My Dashboard</h2>
            <p>Sign Out</p> 

        </TopBar>

        <div>
           <WelcomeBackMessage>Welcome Back Name!</WelcomeBackMessage>
        </div>

    <DivHolder>
        
        <LeftLinks>
        <Link to = "/" 
            className = "link-box">
            <h3>Add Product</h3>
            <p>Add product to your listings</p>
            <img src = {listingsicon} />

            </Link>
        <Link to = "/" 
            className = "link-box">
            <h3>Listings</h3>      
            <p>All of your listings in one place</p>      
            <img src = {producticon}/>
         </Link>
        </LeftLinks>
        <RightLinks>
        <Link to = "/MarketPrice"
             className = "link-box">
             <h3>Market Prices</h3>
             
             <p>Compare current market prices</p>
             <img src = {marketpriceicon} />
             </Link>
        <Link to = "/" 
            className = "link-box">
            <h3>Profile</h3>
            <p>Edit and update your profile</p>
            <img src = {profileicon}/>
            </Link>
        </RightLinks>
        
    </DivHolder>

    <BotBar> 
        <p>Contact</p> 
        <p>About</p>
    </BotBar>

    </div>

    )

}

export default Dashboard;
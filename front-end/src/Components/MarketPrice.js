import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import "./MarketPrice.css"
import axios from "axios";

import ItemCard from "./ItemCard"





function MarketPrice()  {

    const [marketItems, setMarketItems] = useState([]);
    useEffect(()=>{
        const getItems = () =>{
            
            // axiosWithAuth()
            // .get('/inputs')
             axios.get('https://african-marketplace-bw-1.herokuapp.com/api/inputs',{
            //     headers:{
            //         'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODI3NzI3MTksImV4cCI6MTU4Mjg1OTExOX0.Cwg6QakjQKNkRuZ-3fjThgW51DoFOmOvPiBlQ2czsAU'
            //     }
             })
            .then(response =>{
                console.log("Response Data", response);
                setMarketItems(response.data);
                
            })
            .catch(error=>console.log(error));
        }
        getItems();
    }, [])
    console.log("Market Items ", marketItems)
     //<<this is the issue, an array that says objectx14
    const [searchCat, setSearchCat] = useState('');
    const [searchItem, setSearchItem] = useState('');
    const [searchLoc, setSearchLoc] = useState('');
    const [searchResults, setSearchResults] = useState(marketItems);

 


    const itemChange = event =>{
        setSearchItem(event.target.value);
        console.log("Search Item ", searchItem);
    };
    const catChange = event =>{
        setSearchCat(event.target.value);
        
    };
    const locChange = event =>{
        setSearchLoc(event.target.value);
        
    };

    useEffect(()=>{
        const results = marketItems.filter(items =>{
           let itemData = items.item.toString().toLowerCase();
           let locData = items.location.toString().toLowerCase();
           let catData = items.category.toString().toLowerCase();
            
          return itemData.includes(searchItem.toLowerCase()) && locData.includes(searchLoc.toLowerCase()) && catData.includes(searchCat.toLowerCase()) ;
        });
        setSearchResults(results);
        
    }, [searchItem,searchLoc,searchCat]);

    

    //^^^This doesn't work

    // useEffect(()=>{
    //     const results = marketItems.filter(items =>{
    //          items.toString().toLowerCase().includes(searchItem.toLowerCase());
    //     });
    //     setSearchResults(results);
    //     console.log("Results ",searchResults);
    // }, [searchItem]);

  

    return(
// creating basic form
    
       <div className = "MarketPrice">

           <div className = "topBar">
             <p>Sauti</p>  
           <div>
            <Link to = "/">Home</Link>
             </div>
             </div>

        <div className = "siteContainer">
            <div className = "sideBar">
                <p>Sauti</p>
                
                <p>---------------</p>
                
                <p>Market Price Check</p>
                </div>
             <div className = "formDiv">
              <form >
                  <label className = "dropDown">
                      <p>Category:</p> 
                      <select value = {searchCat} onChange = {catChange}>
                          <option value = "" >-----</option>
                          <option value = "animal products" >Animal Products</option>
                          <option value = "beans" >Beans</option>
                          <option value = "cereals" >Cereals</option>
                          <option value = "fruits" >Fruits</option>
                          <option value = "vegetables" >Vegetables</option>
                          <option value = "seeds and nuts" >Seeds and Nuts</option>
                          <option value = "other" >Other</option>
                          <option value = "peas" >Peas</option>
                          <option value = "roots and tubers" >Roots and Tubers</option>
                          
                      </select>
                  </label>
                  <br/>
                  <label>
                <p>Item: </p>
                <input
                id = "item"
                name = "item"
                type = "text"
                placeholder = "Search by item"
                value = {searchItem}
                onChange = {itemChange}
                />
                 </label>
                 <br/>
                 <label>
                     <p>Location:</p> 
                     <input
                     id = "location"
                     name = "location"
                     type = "text"
                     placeholder = "Search by location"
                     value = {searchLoc}
                     onChange = {locChange}
                     />
                 </label>
              </form>

              <br/>

              <div className = "itemCardHolder">
                {searchResults.map(item=>(
                        <ItemCard key = {item.id} idata = {item}/>
                ))}
                

              </div>
              </div>
              
              </div>

              
           

        </div>


    )
}

export default MarketPrice;
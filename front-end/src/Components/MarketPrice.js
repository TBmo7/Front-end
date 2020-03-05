import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import "./MarketPrice.css"
import axios from "axios";

import ItemCard from "./ItemCard"





function MarketPrice()  {

    const [marketItems, setMarketItems] = useState([]);
    useEffect(()=>{
        const getItems = () =>{
            
            
             axios.get('https://african-marketplace-bw-1.herokuapp.com/api/inputs',{
            
            
            
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

    const buttonHandler = (results) =>{
        console.log(results)
        results.map(item=>(
            <div>
            <ItemCard key = {item.id} idata = {item}/>
            </div>
    ))

    }

    



  

    return(

    
       <div className = "MarketPrice">

           <div className = "topBar">
             <h2>Sauti.</h2>  
          
            <Link to = "/">Home</Link>
             
             </div>

        <div className = "siteContainer">
            <div className = "sideBar">
                <div className = "text-box">
                <h2>Sauti.</h2>
                <p>______________</p>
                <p>Market Price Check</p>
                <br/>
                <p>Here you can check local prices for goods,
                and use the information to make informed decisions
                on where to post your goods.</p>
                </div>
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
                          <option value = "seeds & nuts" >Seeds and Nuts</option>
                          <option value = "other" >Other</option>
                          <option value = "peas" >Peas</option>
                          <option value = "roots & tubers" >Roots and Tubers</option>
                          
                      </select>
                  </label>
                  <br/>
                  <label>
                <p >Item: </p>
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
                 <label >
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
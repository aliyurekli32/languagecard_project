
import { useState } from "react";
import "./Main.css";

const Main =({data})=>{
    
    
    
    
    
    const cardHandler = (e) => {
    
        e.target.classList.toggle("is-flipped")
     };  
     const divHandler = (e) => {
        e.stopPropagation();
        
        e.target.parentElement.classList.toggle("is-flipped");
     };
     const imageHandler = (e) => {
        
        e.stopPropagation();
       
       e.target.parentElement.parentElement.classList.toggle("is-flipped"); 
        
     };  
     const spanHandler = (e) => {
        e.stopPropagation();
        
        e.target.parentElement.parentElement.parentElement.classList.toggle("is-flipped");
        
     };

    
    return(
    <>
        <div className="container">
        {data.map((item,index)=>{
            index=Number(index)+1;
            
            const {name, img, options}=item;
            return(
                <>
                <div className="scene scene--card">
                    <div id={index} onClick={cardHandler}  className="card">
                    
                            <div id={index} onClick={divHandler} className="card__face card__face--front">
                                <img id={index} onClick={imageHandler} src={img} alt="resim" />
                                <span id={index} onClick={imageHandler} >{name}</span>
                            </div>
                            
                            <div  className="card__face card__face--back">
                                <ul onClick={imageHandler}>
                                    <li onClick={spanHandler}  className="list">{options[0]}</li>
                                    <li onClick={spanHandler} className="list">{options[1]}</li>
                                    <li onClick={spanHandler} className="list">{options[2]}</li>
                                </ul>
                               
                            </div>
                    </div>
                </div>
                    
                </>
            )
        })}
        </div>
    </>
    )
    
}

export default Main;




    
        
 
    

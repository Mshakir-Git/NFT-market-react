import React from 'react'
import { Card } from './Card'
import { useNavigate } from 'react-router-dom'


export const Cart = ({seletedItems}) => {
    let navigate=useNavigate()
    return (
        <div>
            <header className="header">
            <span>
                <button className='btn-circle' onClick={()=>navigate("/")}>{"<"}</button>
                <h1 style={{display:"inline"}}>Cart</h1>
            </span>
            <h2>${seletedItems.reduce((acc,i)=>acc+i.price,0)}</h2>
        </header>
        <div className="cards-container">
        {
          seletedItems.map(({id,name,price})=>{
            return <div key={id} className="card">
            <div>
                <img src={require("../test.png")}/>
                <div>
                    <h3>{name}</h3>
                    <p>${price}</p>
                    
                </div>
            </div>
            
        </div>}
        )  
        }
      </div>
        </div>
    )
}

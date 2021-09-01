import React from 'react'

const StarRating = ({rate,handlrate}) => {
    const Stars =(n)=>{
        let star=[]
        for (let i=0;i<=5;i++) {
        if(i<=n){
            star.push (<span key={i} style={{color:"gold",fontSize:"20px"}} onClick={()=>handlrate(i)} >★</span>)
        }
        else star.push (<span key={i} style={{color:"black"}} onClick={ ()=> handlrate(i)}  >★</span>)
        
        }
        return (star)
    }
    return (
        <div>
           {Stars(rate)} 
        </div>
    )
}

export default StarRating

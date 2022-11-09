import React, {useState, useReducer} from 'react'

const Input = props  => {
   useReducer()


    const nandleOnChange = event =>{
        
         
    }


    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id}
             type={props.type}
              placeholder={props.placeholder}
              onChange={nandleOnChange}
              >
               
              </input>
        </div>
    )
}

export default Input

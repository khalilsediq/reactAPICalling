// import Btn from './components/btn'
// import { useState, useEffect } from 'react'

// const App = () => {
//     const [theUser, setUser] = useState(null)
//     const [theLoading, setMyLoading] = useState(true)
//     const [theError, setMyError] = useState(false)

//     useEffect(()=>{
//         fetch('https://fakestoreapi.com/products')
//         .then(res => res.json())
//         .then(res => {
//             console.log(res)
//             setUser(res)
//         })
//         .catch((err)=>{
//             console.log(err);
//             setMyError(true)
//         })
//         .finally(()=>{
//             setMyLoading(false)
//         })
//     }, [])

//     return (
//         <>
//         <h1>Hello</h1>
//         {theLoading && <h1>Loading Please Wait...........</h1>}
//         {theError && <h1>We Appologize, for the Error Occurence</h1>}
//         {theUser && theUser.map((item) => { 
//             return <h4 key={item.id} > {item.title} </h4>         
//         })}

//         </>
//     )
// }

// export default App



////////////////////////////////////////Re Creating/////////////////////////////////////////////
///////////////////////// Product Rendering APP /////////////////////////////////////////





import React from 'react'
import {useEffect, useState} from  'react'

const App = () => {
    const [products, setProducts] = useState(null)
    const [loading, setMyloading] = useState(true)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((response)=>  response.json())
        .then((response) => {
            console.log(response);        
            setProducts(response)
        } )
        .catch((err) => {
            console.log(err);            
        })
        .finally(()=>{
            setMyloading(false)
        })
    }, [])

  return (
    <>
    <h1 style={{
        textAlign: 'center'
    }} >
        My shop
    </h1>
    
    {loading && <h2>Loading..... we value your patience-</h2>}

    <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflow: 'hidden',
        justifyContent: 'center',
        gap: '20px',
        borderRadius: '30px',
        border: '1px solid black',
        padding: '3px',
    }}>
       
    {products && products.map((item)=>{
        return (
             <div style={{
                display: 'flex', 
                flexDirection: 'column',
                padding: '5px, 0px, 5px, 0px',
            border: '2px solid yellow',
            width: '350px',
        height: '390px'
        }}>
            <img style={{
                width: '150px',
                height: '160px',
                alignItems: 'center',
                textAlign: 'center',
                alignContent: 'center',
            }} src={item.image} alt={item.description} />
            <h2 key={item.id} >{item.title}</h2>
            <h3>{item.price}</h3>
            <h4>{item.description} </h4>
           </div> 
        ) 
    })}
  

    </div>
    </>
  )
}

export default App



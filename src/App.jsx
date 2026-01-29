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






















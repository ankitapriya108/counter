import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Fetch() {

    const [name ,setName]=useState("")
    const [photo,setPhoto]=useState("")
    const [email,setEmail]=useState("")

   useEffect(()=>{
    axios.get("https://randomuser.me/api")
    // .then((response)=>{
    //     return response.json();
    // })
    .then((result)=>{
        console.log(result.data.results)

        setPhoto(result.data.results[0].picture.large);
        setName(result.data.results[0].name.first + " " + result.data.results[0].name.last);
        setEmail(result.data.results[0].email);
    })
   },[])
  return (
  <>
  <img src={photo} alt="" />
  <h1>{name}</h1>
  <p>{email}</p>
  </>
  )
}

export default Fetch
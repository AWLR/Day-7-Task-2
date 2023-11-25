import { useEffect, useState } from "react";
import './App.css'


function App() {
  //hook for getting the api

  const [data, setData]= useState([]);

  //hook for running the api

  useEffect (() => {
    //now getting the api, fetch data put in to var response n change to json format
    fetch("https://fakestoreapi.com/users").then((response)=>response.json()).then((data)=>{
      setData(data);
    }).catch((e)=>{
      console.log("These is something wrong")
    })
  }, [])

  return (
    <>
    <table>
      <tr>
      <th colSpan={6}>Address</th>
        <th>Id</th>
        <th>Email</th>
        <th>Username</th>
        <th>password</th>  
        <th colspan={2}>name</th> 
        <th>phone</th>   
    
      </tr>
      <tr>
        <th>Geo lat</th>
        <th>Long</th>
        <th>city</th>
        <th>street</th>  
        <th> number</th> 
        <th>zipcode</th>   
        <th></th>
        <th></th>
        <th></th>
        <th></th>  
        <th>Firstname</th> 
        <th>Lastname</th>
        <th></th>    
    
      </tr>
      
      {
        data.map((ecom)=>(
          <tr>
            <td>{ecom.address.geolocation.lat}</td>
            <td>{ecom.address.geolocation.long}</td>
            <td>{ecom.address.city}</td>
            <td>{ecom.address.street}</td>
            <td>{ecom.address.number}</td>
            <td>{ecom.address.zipcode}</td>
            <td>{ecom.id}</td>
            <td>{ecom.email}</td>
            <td>{ecom.username}</td>
            <td>{ecom.password}</td>
            <td>{ecom.name.firstname}</td>
            <td>{ecom.name.lastname}</td>
            <td>{ecom.phone}</td>
          </tr>
        ))
      }
    </table>
    </>
  )
}

export default App
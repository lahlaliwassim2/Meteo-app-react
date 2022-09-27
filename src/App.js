import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
      const  [Data, setData] = useState("");
  const fetchData = async() => {
      await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Safi&appid=267e5fef0d87a3de88fae3ffa91265ca"
      )
      .then((res)=> setData(res.data))    
  };
  
  useEffect(()=>{
    fetchData();
  },[]);
  console.log(Data)
  return (
    <>
    <div className='container app'>
      <div className='app_title'>
      <h2>Méteo de votre ville </h2>
      <input type="shearch" placeholder='entrer la ville '/>
     <div className='btn-shear d-flex justify-content-end my-3'> <button className='btn btn-primary'> rechercher </button></div>
     <hr />
     <div className='d-flex justify-content-center aligh-items-center'>
      {Data ? <><h1>
        {Math.round( Data.main.temp - 273.15)}
        
        <sup>°</sup>
        C</h1> 
        </> 
        : "entrer une autre ville"}
     </div>
      </div>
    </div>
    
 </> )
}

export default App
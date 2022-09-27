import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { WiHumidity } from "react-icons/wi"
import {FiWind} from "react-icons/fi"
import {BsFillSunFill} from "react-icons/bs"



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
     <div className='d-flex justify-content-center aligh-items-center flex-column'>
      {Data ? <><h1>
        {Math.round( Data.main.temp - 273.15)}
        
        <sup>°</sup>
        C</h1>
        <div className='row'>
          <div className='d-flex col-lg-4 col-4'>Prossure <BsFillSunFill /> :{ Data.main.pressure
}</div>
          <div className='col-lg-4 d-flex col-4'>Humiditée <WiHumidity />:<br></br>{Data.main.humidity}</div>
          <div className='col-lg-4 col-4 d-flex'>Vent: <FiWind />{Data.wind.speed}KM/h </div>
          </div> 
        </>  
        : "entrer une autre ville"}
     </div>
      </div>
    </div>
    
 </> )
}

export default App
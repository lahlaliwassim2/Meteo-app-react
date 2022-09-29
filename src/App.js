import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { WiHumidity } from "react-icons/wi"
import { FiWind } from "react-icons/fi"
import { BsFillSunFill } from "react-icons/bs"





const App = () => {
  const [Data, setData] = useState("");
  const [Input, setInput] = useState("  ")
  const shear = async () => {
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${Input}&appid=267e5fef0d87a3de88fae3ffa91265ca
    `)
      .then((res) => setData(res.data))

  };
  const change = (e) => {
    const value = e.target.value
    setInput(value)
  }

  useEffect(() => {
    shear();
  }, [] );
  console.log(Data)
  return (
    <>
       
<div className='cont'>
        
      
     
      <h3 className='  d-flex justify-content-end p-3 youc'><span className='w1'>C</span><span className='w2'>i</span><span className='w3'>t</span><span className='w4'>y</span><span className='w5'>'s W</span><span className='w6'></span><hr></hr><span className='w7'></span><span className='w8'>e</span><span className='w9'>a</span><span className='w9'>t</span><span className='w10'>h</span><span className='w7'>er</span></h3>
      <div className='container app d-flex flex-colomn'>
     
        <div className='app_title'>
          <h2>Méteo de votre ville </h2>
          <input type="shearch" placeholder='entrer la ville '
            onChange={change}
            value={Input}
            
            
          />
          <div className='btn-shear d-flex justify-content-end my-3'>
             <button className='btn btn-primary' onClick={shear}> rechercher 
             </button>
             </div>
          <hr />
          <div className='d-flex justify-content-center aligh-items-center flex-column'>
            {Data ? <><h1 className='d-flex justify-content-center'>
              {Math.round(Data.main.temp - 273.15)} <sup className='my-4'>°</sup>
              C
              </h1>
              <div className='row'>
                <div className='d-flex col-lg-4 col-4 flex-column'>Prossure :<BsFillSunFill /> {Data.main.pressure}
                </div>
                <div className='col-lg-4 d-flex col-4 flex-column'>Humiditée:<WiHumidity />{Data.main.humidity}</div>
                <div className='col-lg-4 col-4 d-flex flex-column'>Vent: <FiWind />{Data.wind.speed}KM/h </div>
              </div>
              <div className='d-flex justify-content-center h1'>{Data.name}</div>
            </>
              :"entrer une autre ville"}
          </div>
        </div>
      </div>
</div>
    </>)
}

export default App
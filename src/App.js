import React from 'react'
import axios from 'axios'
const App = () => {
  const fetchData = async()=>{
      axios.get("api.openweathermap.org/data/2.5/weather?q=Safi&appid=267e5fef0d87a3de88fae3ffa91265ca"
      )
      .then((res)=>console.log(res.data))
      
      
  }
  return (
    <>
    <div className='container app'>
      <div className='app_title'>
      <h2>Méteo de votre ville </h2>
      </div>
    </div>
 </> )
}

export default App
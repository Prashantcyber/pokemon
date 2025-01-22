import './style.css';
import axios from 'axios';
import { useState } from "react";

const App=()=>{
    const[records,setRecords]=useState([]);
    const[city,setCity]=useState("")
    const handleClick=()=>{
        async function getUsers() {
            try {
              const API='645cc543b58f155f355dd791a20c9f68';
              const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`);

              //Spred Oprator previous records and new data Enter//
              const newRecord = response.data;
              setRecords(prevRecords => [...prevRecords , newRecord]);

            } catch (error) {
              console.error(error);
            }
          }
          getUsers();
    }

    const handleInput=(e)=>{
      setCity(e.target.value)
      console.log("record insert")
    }


    const handleDel=(ind)=>{
      const arr=[...records];
      arr.splice(ind,1);
      setRecords(arr);
      console.log("Record Delete",arr)

    }

    return(
        <>
          <h1>Weather App </h1>
          <input type="text" value={city} onChange={handleInput} />
          <input type="button" value="Get Data" onClick={handleClick} /> <br />
         {
            records.map((user,i)=>{return(
                <div key={i} className="box">
                    <h3>{user.name}</h3>
                    <h3>{user.sys.country}</h3>
                    <h3>{parseInt(user.main.temp)} °C</h3>
                    <p>
                      <input type="button" value="X" onClick={()=>handleDel(i)} />
                      {i}
                    </p>
                </div>
            )})
         }
         

        </>
    )
}
export default App;
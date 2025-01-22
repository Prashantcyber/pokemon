import { useState } from "react";
import axios from "axios";
const Input=()=>{
    const [data,setData]=useState({name:"",age:"",email:""});

        const handleChange=(e)=>{
            setData({...data,[e.target.name]:e.target.value});
            console.log(e.target.name);
            console.log(e.target.value)
        }

        const handleSave=()=>{
            axios.post("https://66d081b9181d059277dee00e.mockapi.io/student",data);

            console.log("handle save",Response);
            setData({name:"",age:"",email:""})

        }
    
    return(
        <> 
           <h2>Input Component</h2>
           Name: <input type="text" name="name" value={data.name} onChange={handleChange} /> <br />
           Age: <input type="number" name="age" value={data.age} onChange={handleChange} /> <br />
           Email : <input type="email" name="email" value={data.email} onChange={handleChange} /> <br />

           <input type="button" value="going" onClick={handleSave} />


        </>
    );
}
export default Input;
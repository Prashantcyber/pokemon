import './style.css';
import axios from "axios";
import { useState, useEffect } from "react";
const Show=()=>{
    const[students,setStudents]=useState([]);
    useEffect(()=>{
        axios.get("https://66d081b9181d059277dee00e.mockapi.io/student")
        .then(Response =>{
            console.log(Response.data);
            setStudents(Response.data);
        })
    },[])

    const handleDel=(id,ind) =>{
        axios.delete('https://66d081b9181d059277dee00e.mockapi.io/student/'+id)
        .then(Response =>{
            const arr=[...students];
            arr.splice(ind,1);
            setStudents(arr)
            console.log("data has been deleted");
        })
        .catch(error => {
            console.log(error);
      });

    }
    return(
        <> 
           <h2> Show Component</h2>
           {
            students.map((student,i)=>{return(
                <div key={student.id} className="box">
                        <h3>{student.name}</h3>
                    <p>
                        {student.age} <br />
                        {student.email}
                    </p>
                    <p>
                    <input type="button" value="delete" onClick={()=>handleDel(student.id,i)} />
                    </p>
                </div>

            )})
           }
        </>
    );
}
export default Show;
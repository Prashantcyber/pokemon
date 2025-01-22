import { useEffect, useState } from "react";
import axios from "axios";
import './style.css';
import Product from "./Product";
const Home=()=>{
    const[users,setUsers]=useState([]);
   
    useEffect(() => {
        async function getUsers() {
            try {
              const response = await axios.get('https://fakestoreapi.com/products');
              console.log(response.data);
              setUsers(response.data);
            } catch (error) {
              console.error(error);
            }
          }
          getUsers();
    },[])
    return(
        <> 
            <h1>Home Component</h1>
            {
                users.map((user,i)=>{return(
                    <div key={i} className="box">
                        <h3>Category: {user.category}</h3>
                       <p><img src={user.image} alt="img" height="200px" width="150px" /></p>
                       Price: ${user.price} <br />
                       <Product   />
                    </div>
                )})
            }
        </>
    );
}
export default Home;
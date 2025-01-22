import Home from "./Home";
import Product from "./Product";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
const App=()=>{  
  
    return(
        <>
        <Router>
             <h1>Simple App </h1>
             <hr />
             <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
             <Link to="/product">Product</Link>
             <hr />


             <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
             </Routes>


        </Router>
            
        </>               
    );    
}
export default App;
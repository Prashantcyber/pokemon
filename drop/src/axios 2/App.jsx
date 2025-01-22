import Home from "./Home";
import Input from "./Input";
import Show from "./Show";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
const App=()=>{
    return(
        <Router>
           <h1>App Component</h1>

           <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
           <Link to="/input">Input</Link>&nbsp;&nbsp;&nbsp;&nbsp;
           <Link to="/show">Show</Link>&nbsp;&nbsp;&nbsp;&nbsp;
           <hr />
           < Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/input" element={<Input />} />
                  <Route path="/show" element={<Show />} />
           </Routes>
        </ Router>
    )
}
export default App;
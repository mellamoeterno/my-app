import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import home from "./pages/home";

//to route the specific components created //

function App () {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<home />}/>
      </Routes>
    </Router>
  );

}

export default App;
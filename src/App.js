import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";




//to route the specific components created //

function App () {
  return (
    <Router> 
      <nav>
      <Link to="/"> home </Link>
      <Link to="/create"> create post </Link>
      <Link to="/login"> login </Link>

    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );

}

export default App;
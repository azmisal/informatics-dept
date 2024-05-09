import './App.css';
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Announcement from './Components/Carousal';
function App() {
  return (
    <div className="App w-screen h-screen ">
      <Navbar />
      <Announcement />
     {/* <Home /> */}
    </div>
  );
}

export default App;

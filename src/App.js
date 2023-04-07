import './App.css';
import Navbar from './components/Navbar';
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom"


function App() {
 

  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <AppRouter/>
    </BrowserRouter>
    </div>
  );
}

export default App;

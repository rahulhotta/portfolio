import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import AnimatedRoutes from './Components/AnimatedRoutes';
import NavBar from './Components/NavBar';


function App() {
 
  return (
    <div className="App">
      <NavBar />
      <AnimatedRoutes />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './screens/Home'; 
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
import Login from './screens/Login';
import NavBar from './router/NavBar';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    
    <div className="App">
      <NavBar activeBtnId={0}/>
      <AppRoutes/>
    </div>
    </BrowserRouter>
  );
}

export default App;

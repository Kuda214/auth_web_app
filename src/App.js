import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
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

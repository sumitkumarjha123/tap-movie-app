import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap"
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { Container } from 'react-bootstrap';
import Body from './Body';
//import Searching from './Searching';
//import Search from './Search';
//import Searching from './Searching';
function App() {
  return (
     <>
       <BrowserRouter>
      <Header />
      <Container className="mt-5">
        <Router />
      </Container>
    </BrowserRouter>
     </> 
  );
}

export default App;

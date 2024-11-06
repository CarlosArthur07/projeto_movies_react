import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Listing from '../src/pages/Listing';
import Form from '../src/pages/Form';


function App() {
  return ( 
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Listing/>}/>
      <Route path='/form'>
      <Route path=":moviesId" element={<Form/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
);
}

export default App;

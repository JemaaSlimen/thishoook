import './App.css';
import { Data } from './movieData';
import {useState} from 'react'
import Movielist from './component/Movielist';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './component/Search';
import Addmovie from './component/Addmovie';
import {BrowserRouter,Route,Link } from 'react-router-dom'


function App() {

  const [movies, setMovies] = useState(Data)
  const handelAdd=(newMovie) => {
    setMovies([...movies,newMovie])
  }
  return (
    <BrowserRouter> 
    <div className="App">
      <Search/>
<switch> 
<Route path="/">  
      <Movielist   films={movies} />
</Route>
 </switch>
      <Addmovie handelAdd={handelAdd}/>
    </div>
   </BrowserRouter>

  );
}

export default App;

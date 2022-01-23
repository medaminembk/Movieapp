import logo from './logo.svg';
import './App.css';
import MovieList from './component/MovieList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import DescriptionMovie from './component/DescriptionMovie';
function App() {
  return (
    <div style={{padding:'10px'}}>
     
      <Routes>
         <Route path="/" element={<MovieList />} />
         <Route path="/card/:title" element={<DescriptionMovie/>} />
        
       </Routes>
    </div>
  );
}

export default App;

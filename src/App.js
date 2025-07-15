import logo from './logo.svg';
import './App.css';
import AddGit from './Components/AddGit';
import SearchGit from './Components/SearchGit';
import DeleteGit from './Components/DeleteGit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewGit from './Components/ViewGit';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddGit/>}/>
      <Route path="/View" element={<ViewGit/>}/>
      <Route path="/Search" element={<SearchGit/>}/>
      <Route path="/Delete" element={<DeleteGit/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

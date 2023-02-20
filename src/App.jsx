import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './Layouts/Layout';
import Movies123 from './Pages/Movies123/Movies123';
import TVSeries from './Pages/TV Series/TVSeries'
import Genre from './Pages/Genre/Genre'
import Country from './Pages/Country/Country'
import TopIMDb from './Pages/Top IMDb/TopIMDb'
import Home from './Pages/Home/Home'
import Search from './Pages/Search/Search';
import Login from './components/Log in/Login';
function App() {
  return (
   <Routes>
    <Route path="/" element={<Layout></Layout>}>
      <Route index element={<Movies123></Movies123>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/genre" element={<Genre></Genre>}></Route>
      <Route path="/country" element={<Country></Country>}></Route>
      <Route path="/tv-series" element={<TVSeries></TVSeries>}></Route>
      <Route path="/top-imdb" element={<TopIMDb></TopIMDb>}></Route>
      <Route path='/search' element={<Search></Search>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
    </Route>
   </Routes>
  );
}
export default App;

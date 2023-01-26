import './App.css'
// import Card from './components/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import About from './components/About/About.jsx'
// import SearchBar from './components/SearchBar.jsx'
import { useState, useEffect } from "react";
import Nav from "./components/NavBar/Nav";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Login/Form";
import Favorites from "./components/Favorites/Favorites";
import Portfolio from "./components/Portfolio/Portfolio";

function App () {
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '1password';
  const navigate = useNavigate();
  const location = useLocation();

  const login = (userData) => {
        if (userData.password === password && userData.username === username) {
            setAccess(true);
            navigate('/home');
        }
  }


  const logout = () => {
      setAccess(false);
      navigate("/");
  }

  useEffect(() => {
        !access && navigate('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [access]);

  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((data) => {
              if (data.name) {
                  let duplicado = characters.find((e) => e.id === data.id);
                  if (duplicado){
                      alert("El personaje ya existe");
                  } else {
                      setCharacters((oldChars) => [...oldChars, data]);
                  }
              } else {
                  window.alert('No hay personajes con ese ID');
              }
          });
  }

  const onClose = (id) => {
    setCharacters((data)=>{
        return data.filter((e)=> e.id !== id)
    })
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
        {/*<div className='container'>*/}
        {/*    */}
        {/*</div>*/}
        <div>
            {location.pathname === '/' ? null : <Nav logout={logout} onSearch={onSearch}/>}
        </div>
        <Routes>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/detail/:detailId" element={<Detail/>} />
            <Route path="/favorites" element={<Favorites characters={characters} onClose={onClose}/>} />
        </Routes>
    </div>
  )
}

export default App


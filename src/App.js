import './App.css'
// import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import About from './components/About.jsx'
// import SearchBar from './components/SearchBar.jsx'
import {useState} from "react";
import Nav from "./components/Nav";
import {Routes, Route} from "react-router-dom";
import Detail from "./components/Detail.jsx";

function App () {
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
        <div>
          <Nav onSearch={onSearch}/>
            <Routes>
                <Route path="/home" element={<Cards/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/detail/:detailId" element={<Detail/>} />
            </Routes>
        </div>
        <hr />
      <div>
        <Cards
          characters={characters} onClose={onClose}
        />
      </div>
    </div>
  )
}

export default App


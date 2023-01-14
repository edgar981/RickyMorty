import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import './Detail.css'

export default function Detail (){

    const {detailId} = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);

    return (
        <div className='detail'>
            <div>
                <h1>NOMBRE: {character?.name}</h1>
                <h2>STATUS: {character?.status}</h2>
                <h2>ESPECIE: {character?.species}</h2>
                <h2>GENERO: {character?.gender}</h2>
                <h2>ORIGEN: {character.origin?.name}</h2>
            </div>
            <div>
                <img src={character.image} alt={character.name}/>
            </div>
        </div>
    );
}
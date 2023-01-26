import React from 'react';
import Card from "../Card/Card";
import {useSelector} from "react-redux";


export default function Favorites (props) {
    const myFavorites = useSelector(s => s.myFavorites);
    const characters = props.characters.filter(e => {
        return myFavorites.includes(e.id)
    })
        return (
            <div>
                {characters.map((c, index)=>{
                        return (
                            <Card
                                id={c.id}
                                key={index}
                                name={c.name}
                                species={c.species}
                                gender={c.gender}
                                image={c.image}
                                onClose={()=>props.onClose(c.id)}
                            />
                        )
                    })
                }
            </div>
        );
}

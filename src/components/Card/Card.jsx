import "./Card.css"
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addFavorites, deleteFavorites} from "../../redux/actions";

export default function Card(props) {

   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const myFavorites = useSelector(s => s.myFavorites);

   const handleFavorite = (id) => {
       if(isFav){
           setIsFav(false);
           dispatch(deleteFavorites(id))
       } else {
           setIsFav(true);
           dispatch(addFavorites(id))
       }
   }

    useEffect(() => {
        myFavorites.forEach((id) => {
            if (id === props.id) {
                setIsFav(true);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [myFavorites]);

   return (
      <div className="card">
          {isFav ? <button onClick={()=>handleFavorite(props.id)}>️️❤️</button>
                 : <button onClick={()=>handleFavorite(props.id)}>🤍</button>
          }
         <button onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
             <img  src={props.image} alt={props.name} />
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>

      </div>
   );
}

/*
Para este ejercicio:

En el componente <Card /> importa y envuelve el nombre del personaje con el elemento "Link". Tiene que redirigirnos a la ruta de cada personaje.
A este componente deberás pasarle por props el "id" del personaje para usarlo en el Link.
// Card.js
...
<Link to={`/detail/${props.id}`} >
  <h5 className="card-title">{props.name}</h5>
</Link>
...
 */
import "./Card.css"
import {Link} from "react-router-dom";

export default function Card(props) {
   return (
      <div className="card">
         <button onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt={props.name} />
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
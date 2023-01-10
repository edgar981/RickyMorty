import Card from './Card';
import "./Cards.css"

export default function Cards(props) {
   const { characters } = props;
   return (
       <div className="cards">
           {
             characters.map((c, index)=>{
                return (
                    <Card
                        key={index}
                        name={c.name}
                        species={c.species}
                        gender={c.gender}
                        image={c.image}
                        onClose={() => window.alert('Emulamos que se cierra la card')}
                    />
                )
             })
           }
       </div>
   );
}

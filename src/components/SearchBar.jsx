export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={() => props.onSearch("tukis")}>Agregar</button>
      </div>
   );
}

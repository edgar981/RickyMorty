import useState from 'react';
import {useParams} from "react-router-dom";

export default function Detail (){

    const {id} = useParams();
    const [character, setCharacter] = useState();

    return (
        <div>

        </div>
    );
}
import Type from "./Type";
import axios from "axios";
import { useState, useEffect } from "react";

const TypeList = () => {

    const [types, setTypes] = useState([]);

    useEffect(() => {
      axios.get("https://pokeapi.co/api/v2/type")
        .then(response => {
            console.log(response.data.results);
          setTypes(response.data.results);
        })
        .catch(error => console.log(error));
    });

    return (
        <div className="cards">
            { types.map((type) => (
                <Type type={type} />
            )) }
        </div>
    )
}

export default TypeList
import React, {useState, useEffect} from 'react';
import { BASE_URL } from '../constants/key';
import axios from 'axios';

const Character2 = () => {

    const [names, setNames] = useState({});

    useEffect(() => {
        axios
          .get(`${BASE_URL}`)
          .then((res) => {
            setNames(res.data.results[4]);
          })
          .catch(err => {
            console.log(err);
          })
      }, []);

    return (
        <div className="Leia">
            <h2>{names.name}</h2>
    
            <div>
              <h4>Description</h4>
              <p>Birth Year: {names.birth_year}</p>
              <p>Eye Color: {names.eye_color}</p>
              <p>Hair Color: {names.hair_color}</p>
              <p>Height: {names.height}</p>
              <p>Mass: {names.mass}</p>
            </div>
    
        </div>
     );
}

export default Character2;
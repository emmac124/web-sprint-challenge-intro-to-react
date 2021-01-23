import React, {useState, useEffect} from 'react';
import { BASE_URL } from './constants/key';
import axios from 'axios';
import Character from './components/Character';
import styled from "styled-components";
import './App.css';

const App = () => {

  const [names, setNames] = useState([]);

  useEffect(() => {
      axios
        .get(`${BASE_URL}`)
        .then((res) => {
          setNames(res.data.results);
          console.log(res.data.results);
          })
        .catch(err => {
          console.log(err);
        })
    }, []);

  return (
      <section>
        <div className="App">
          <Header>On The Look Out!</Header>
        </div>
        <div>
          <Character info={names} /> 
        </div>
      </section>
  );
}

const Header = styled.h1`
  color: ${pr => pr.theme.thirdColor};
  text-shadow: 1px 1px 5px ${pr => pr.theme.white};
  font-weight: ${pr => pr.theme.fontWeight};
  font-size:2rem;
`;

export default App;


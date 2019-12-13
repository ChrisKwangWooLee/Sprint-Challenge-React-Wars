import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import PeopleCard from './components/PeopleCard';
import {Spinner, Form, FormGroup, Label, Input} from 'reactstrap';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [peopleData, setPeopleData] = useState(null);
  const [inputValue, setInputValue] = useState("");

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=> {
      axios
        .get('https://swapi.co/api/people')
        .then(response => {
          setPeopleData(response.data.results)
        })
        .catch(error => {
          console.log(`Error: ${error}`);
        })
  }, [])

  // Diplay loading
  if (peopleData === null) {
    return (
      <div style={{margin: "0 auto"}}>
        <Spinner type="grow" color="dark" />
        <Spinner type="grow" color="dark" />
        <Spinner type="grow" color="dark" />
      </div>
    )
  }
  console.log(peopleData);

  const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  `

  // STRETCH
  const changeHandler = event => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  }

  return (
    <div className="App" style={{maxWidth: "1280px", margin: "0 auto"}}>
      <h1 className="Header">React Wars</h1>
      <div className="Search_Form">
        <Form onSubmit={event => handleSubmit(event)}>
          <FormGroup>
            <Label for="SearchValue">Search Your Favorite Character:</Label>
            <Input
              type="search"
              name="search"
              id="SearchValue"
              placeholder="ex. Luke Skywalker"
              onChange={event => changeHandler(event)}
            />
          </FormGroup>
        </Form>
      </div>
      <CardsContainer style={{}}>
        {peopleData.map( (personData, index) => {
          return <PeopleCard key={index} 
                             personData = {personData}
                             displayTF={personData.name.includes(inputValue)}/>
        })}
      </CardsContainer>
    </div>
  );
}

export default App;

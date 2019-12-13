// General Imports
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Style Imports
import './App.css';
import {Spinner, Form, FormGroup, Label, Input} from 'reactstrap';

// Components Imports
import PeopleCard from './components/PeopleCard';
import MyPagination from './components/MyPagination'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [peopleData, setPeopleData] = useState(null);
  const [currentURL, setCurrentURL] = useState('https://swapi.co/api/people')
  const [inputValue, setInputValue] = useState("");

  function changeURL(urlInput) {
    setCurrentURL(urlInput);
  }
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=> {
      axios
        .get(currentURL)
        .then(response => {
          setPeopleData(response.data.results)
          console.log(response.data);
          return response;
        })
        .catch(error => {
          console.log(`Error: ${error}`);
        })
  }, [currentURL])

  const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  `

  // STRETCH
  const changeHandler = event => {
    setInputValue(event.target.value.toLowerCase());
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  }

  // Diplay loading
  const LoadingContainer = styled.div`
    text-align: center;
  `

  if (peopleData === null) {
    return (
      <LoadingContainer>
        <h1>Loading...</h1>
        <Spinner type="grow" color="dark" />
        <Spinner type="grow" color="dark" />
        <Spinner type="grow" color="dark" />
      </LoadingContainer>
    )
  }

  return (
    <div className="App" style={{maxWidth: "1280px", margin: "0 auto"}}>
      <h1 className="Header">React Wars</h1>
      <div className="Search_Form">
        <Form onSubmit={event => handleSubmit(event)} style={{width: "40%", margin: "0 auto"}}>
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
        <MyPagination changeURL={changeURL}/>

      </div>
      <CardsContainer style={{}}>
        {peopleData.map( (personData, index) => {
          return <PeopleCard key={index} 
                             personData = {personData}
                             displayTF={personData.name.toLowerCase().includes(inputValue)}/>
        })}
      </CardsContainer>
    </div>
  );
}

export default App;

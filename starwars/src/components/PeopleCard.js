import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';
import styled from 'styled-components';

function PeopleCard(props) {
    const {personData, displayTF} = props;
    console.log(displayTF);

    const CardContainer = styled.div`
        width: 300px;
        border: 1px solid #FFE81F;
        margin: 10px;
        box-shadow: 0px 0px 8px 2px #000000;
    `

    return(
        <CardContainer style={displayTF ? {display: "block"} : {display: "none"}}>
            <Card>
                <CardImg top width="100%" src="https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200" alt="Card image cap" style={{width: "100%"}}/>
                <CardBody>
                    <CardTitle>Name: {personData.name}</CardTitle>
                    <CardText>Height: {personData.height}</CardText>
                    <CardText>Gender: {personData.gender}</CardText>
                    <CardText>Eye Color: {personData.eye_color}</CardText>
                    <Button>Fake Button</Button>
                </CardBody>
            </Card>
        </CardContainer>
    )
}

export default PeopleCard;
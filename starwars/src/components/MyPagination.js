import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import styled from 'styled-components';

function MyPagination(props) {
    const {changeURL} = props;

    const PaginationContainer = styled.div`
        border: 1px soild red;
        text-align: center;
    `
    
    return(
        <PaginationContainer>
            <Pagination aria-label="Page navigation example" style={{justifyContent: "center"}}>
                <PaginationItem>
                    <PaginationLink first href="#" onClick={()=>changeURL("https://swapi.co/api/people/?page=1")}/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" onClick={()=>changeURL("https://swapi.co/api/people/?page=1")}>
                    1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" onClick={()=>changeURL("https://swapi.co/api/people/?page=2")}>
                    2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" onClick={()=>changeURL("https://swapi.co/api/people/?page=3")}>
                    3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" onClick={()=>changeURL("https://swapi.co/api/people/?page=4")}>
                    4
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" onClick={()=>changeURL("https://swapi.co/api/people/?page=5")}>
                    5
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" onClick={()=>changeURL("https://swapi.co/api/people/?page=6")}>
                    6
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" onClick={()=>changeURL("https://swapi.co/api/people/?page=7")}>
                    7
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" onClick={()=>changeURL("https://swapi.co/api/people/?page=8")}>
                    8
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last href="#" onClick={()=>changeURL("https://swapi.co/api/people/?page=8")}/>
                </PaginationItem>
            </Pagination>
        </PaginationContainer>
    )
}

export default MyPagination;
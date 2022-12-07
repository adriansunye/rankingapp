import { useState, useEffect, createContext } from "react";
import SearchBar from "@components/layout/navigation/SearchBar/SearchBar";
import Grid from "@components/layout/organization/Grid/Grid";
import NavBar from "@components/layout/navigation/NavBar/NavBar";
import Footer from "@components/layout/navigation/Footer/Footer";
import BackgroundLogoPicture from "@assets/arcofondo.png";
import {BackgroundLogo} from "@components/layout/organization/backgroundLogo/backgroundLogo.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Comparar = () => {





    return (
        <> 
        <NavBar />

        <BackgroundLogo className="d-none d-xxl-block"src={BackgroundLogoPicture}/>
          <Container> 
                    <Row>
                       <Col  xs={12} md ={5} >
                           <SearchBar handleChange={handleChange} />
                        </Col>
                      <Col  xs={12} md ={2} >
                           <ButtonCompare/>
                        </Col>
                     <Col  xs={12} md ={5} > 
                     <SearchBar handleChange={handleChange} />
                     </Col>
                  </Row>
                   
                   <Row>  
                     <Col  xs={12} md ={6} >
                          <SearchedObjectContext.Provider value={searchedObject}>
                          <Grid/>
                          </SearchedObjectContext.Provider>
                    </Col>
                    <Col  xs={12} md ={6} >
                          <SearchedObjectContext.Provider value={searchedObject}>
                          <Grid/>
                          </SearchedObjectContext.Provider>
                    </Col>
                    </Row>
           </Container>
        
        <Footer/>
        </>
      );
    }

export default Comparar;
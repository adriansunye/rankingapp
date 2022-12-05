import { useState, useEffect, createContext } from "react";
import SearchBar from "@components/layout/navigation/SearchBar/SearchBar";
import Grid from "@components/layout/organization/Grid/Grid";
import NavBar from "@components/layout/navigation/NavBar/NavBar";
import Footer from "@components/layout/navigation/Footer/Footer";
import BackgroundLogoPicture from "@assets/arcofondo.png";
import {BackgroundLogo} from "@components/layout/organization/backgroundLogo/backgroundLogo.js"


const Comparar = () => {







    return (
        <>
        <NavBar />
        <BackgroundLogo className="d-none d-xxl-block"src={BackgroundLogoPicture}/>
         
          <div className="comparar"> 
                    <div className="izquerdo"> 
                       <div  className=" 5">
                           <SearchBar handleChange={handleChange} />
                        </div>
                        <SearchedObjectContext.Provider value={searchedObject}>
                        <Grid/>
                         </SearchedObjectContext.Provider>
                    </div>

                    <div className="btnComparar"> 
                  {/*   <button type = button onClick={....}></button> */}
                    <Compare/>
                    </div>
                     <div className="derecho">
                          <div className="5">
                              <SearchBar handleChange={handleChange} />
                          </div>
                          <SearchedObjectContext.Provider value={searchedObject}>
                          <Grid/>
                          </SearchedObjectContext.Provider>
                    </div>
           </div>
          
        <Footer />
        </>
      );
    }

export default Comparar;
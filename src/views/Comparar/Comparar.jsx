

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
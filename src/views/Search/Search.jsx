
import { useState, useEffect, createContext } from "react";
import SearchBar from "@components/layout/navigation/SearchBar/SearchBar";
import Grid from "@components/layout/organization/Grid/Grid";
import FilterButtons from '@components/layout/organization/filterButtons/FilterButtons';
import Footer from '@components/layout/navigation/Footer/Footer';
import NavBar from '@components/layout/navigation/NavBar/NavBar';

export const SearchedObjectContext = createContext(null);


function Search() {
    const [searchedObject, setSearchedObject] = useState([]);
    const [searchString, setSearchString] = useState("");
    useEffect(() => {
        localStorage.setItem("userSearch", JSON.stringify(searchString));
        if (searchString.length === 0) {
            setSearchedObject(JSON.parse(localStorage.getItem("data")).sort((a, b) => (a.app_name > b.app_name) ? 1 : -1));
            localStorage.setItem("lastSearch", JSON.stringify(searchedObject))
        } else {
            const searchedObjects = []

            /* Filtering the data and pushing the filtered data to searchedObjects. */
            JSON.parse(localStorage.getItem("data")).filter(obj => {
                if (obj.app_name.toLowerCase().includes(searchString.toLowerCase()) ||
                    obj.app_description.toLowerCase().includes(searchString.toLowerCase()) ||
                    obj.app_category.toLowerCase().includes(searchString.toLowerCase())) {
                    if (obj.app_icon) {
                        searchedObjects.push(obj)
                    }
                }
            })
            setSearchedObject(searchedObjects.sort((a, b) => (a.rating > b.rating) ? 1 : -1))
            
            searchedObjects.length === 0
                ? localStorage.setItem("lastSearch", "No matches found")
                : localStorage.setItem("lastSearch", JSON.stringify(searchedObject));
        }
    }, [searchString])

    const handleChange = (event) => {
        setSearchString(event.target.value)
    };

    const filtro = (id) => {
        let arrayFiltro = [];
        let device = [];
        JSON.parse(localStorage.getItem("data")).filter(obj => {
            if(obj.app_name.toLowerCase().includes(searchString.toLowerCase())||
            obj.app_description.toLowerCase().includes(searchString.toLowerCase()) ||
            obj.app_category.toLowerCase().includes(searchString.toLowerCase())){
                
                arrayFiltro.push(obj)
            }
        })
        switch(id){
            case "mejores": 
                arrayFiltro.sort((a, b) => (a.rating > b.rating) ? 1 : -1).splice(10);
                return arrayFiltro;
            case "peores": 
                arrayFiltro.sort((a, b) => (a.rating < b.rating) ? 1 : -1).splice(10);
                return arrayFiltro;
            case "web": 
            device = [];
                Object.entries(arrayFiltro).map(([key])  =>
                    arrayFiltro[key].type === 0 ? device.push(arrayFiltro[key]) : null)

                    device.sort((a, b) => (a.rating > b.rating) ? 1 : -1).splice(10);
                return device;
            case "desktop": 
            device = [];
                Object.entries(arrayFiltro).map(([key])  =>
                    arrayFiltro[key].type === 1 ? device.push(arrayFiltro[key]) : null)

                    device.sort((a, b) => (a.rating > b.rating) ? 1 : -1).splice(10);
                return device;
            default:
        }
        
        
    }
    const handleClick = (event) => {
        
        setSearchedObject(filtro(event.target.id));
    }
    //try for of function
    return (
        <>
            <NavBar />
            <SearchBar handleChange={handleChange} />

            <FilterButtons handleClick={handleClick}/>

            <SearchedObjectContext.Provider value={searchedObject}>
                <Grid />
            </SearchedObjectContext.Provider>

            <Footer />
        </>
    );
};

export default Search;
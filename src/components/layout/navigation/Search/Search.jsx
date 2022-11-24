
import { useState, useEffect } from "react";
import Apps from "@store/objects/appsEs"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"


function Search() {
    const [searchedObject, setSearchedObject] = useState([]);
    const [searchString, setSearchString] = useState("");
    useEffect(() => {
        localStorage.setItem("userSearch", JSON.stringify(searchString));
        if (searchString.length === 0) {
            setSearchedObject(Apps.data.apps.sort((a, b) => (a.app_name > b.app_name) ? 1 : -1))
        } else {
            const searchedObjects = []
            /*Apps.data.apps.forEach((item) => {
                Object.values(item).every((onlyValues) => {
                    if (onlyValues.toLowerCase().includes(searchString.toLowerCase())) {
                        searchedObjects.push(item)
                    }
                })
            })*/
            
            /* Filtering the data and pushing the filtered data to searchedObjects. */
            Apps.data.apps.filter(obj => {
                if (obj.app_name.toLowerCase().includes(searchString.toLowerCase()) || 
                    obj.app_description.toLowerCase().includes(searchString.toLowerCase()) || 
                        obj.app_category.toLowerCase().includes(searchString.toLowerCase())) {
                    if (obj.app_icon) {
                        searchedObjects.push(obj)
                    }
                }
            })
            setSearchedObject(searchedObjects.sort((a, b) => (a.app_name > b.app_name) ? 1 : -1))
            localStorage.setItem("lastSearch", JSON.stringify(searchedObject));
        }
    }, [searchString])
    const placeholderImage =
        'https://images.unsplash.com/photo-1511285605577-4d62fb50d2f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'

    const onImageError = (e) => {
        e.target.src = placeholderImage
    }
    //try for of function
    return (
        <>
            <div className="fixed-top">
                <input
                    className="form-control"
                    placeholder='Search...'
                    onChange={(e) => setSearchString(e.target.value)}
                />
            </div>
            <pre>
                <div className="container mt-5 overflow-auto">
                    <div className="row g-2" >
                        {Object.entries(searchedObject).map(([key]) =>
                        <Link to={{
                            pathname: "/detail:" + searchedObject[key].app_id,
                        }}
                        onClick={(e) => localStorage.setItem("clikedItem", JSON.stringify(searchedObject[key]))}
                        >
                            <Card key={searchedObject[key].app_id}>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <img
                                            src={searchedObject[key].app_icon ? searchedObject[key].app_icon : placeholderImage}
                                            alt="logo"
                                            onError={onImageError}
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-10">
                                        <Card.Body>
                                        <h6>{searchedObject[key].app_name}</h6>
                                            <Card.Text>{searchedObject[key].app_category}</Card.Text>
                                            <Card.Text>{searchedObject[key].app_rating}</Card.Text>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>
                            </Link>
                        )}
                    </div>
                </div>
            </pre>

        </>
    );
};

export default Search;
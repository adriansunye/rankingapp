import React from "react";
import { Link } from "react-router-dom"

function Compare() {
    const lastSearch = useContext(SearchedObjectContext);

    const placeholderImage =
    'https://images.unsplash.com/photo-1511285605577-4d62fb50d2f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'

const onImageError = (e) => {
    e.target.src = placeholderImage
}
    return (
        <>
            <pre>
                <div className="container mt-5 overflow-auto">
                    <div className="row g-2" >
                        {lastSearch.length !== 0
                            ? Object.entries(lastSearch).map(([key]) =>
                            <div className="col-md-4">
                                <Link to={{
                                    pathname: "/detail:" + lastSearch[key].app_id,
                                }}
                                    onClick={() => localStorage.setItem("clickedItem", JSON.stringify(lastSearch[key]))}
                                >
                                    <CardStyled key={lastSearch[key].app_id}>
                                        <div className="d-flex h-100 align-content-center">
                                            <div className="col-4">
                                                <img
                                                    src={lastSearch[key].app_icon ? lastSearch[key].app_icon : placeholderImage}
                                                    alt="logo"
                                                    onError={onImageError}
                                                    style={{height: "101px"}}
                                                    className="img-fluid p-3 rounded-circle"
                                                />
                                            </div>
                                            <div className="col-8">
                                                <CardStyled.Body className="row">
                                                    <div>
                                                        <CardStyled.Title>{lastSearch[key].app_name}</CardStyled.Title>
                                                        
                                                    </div>
                                                    
                                                    <div>
                                                        <span style={{color: "black"}}>{lastSearch[key].rating}</span>
                                                        <EstrellasPuntos mode="on"></EstrellasPuntos>
                                                    </div>
                                                </CardStyled.Body>
                                            </div>
                                        </div>
                                    </CardStyled>
                                </Link>
                                </div>
                            )
                            : <div className="d-flex align-items-center justify-content-center mt-5">No coincedences found</div>}
                    </div>
                </div>
            </pre>
        </>
    );
};

export default Compare;
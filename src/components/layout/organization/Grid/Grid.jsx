
import { useContext } from "react";
import { SearchedObjectContext } from "@views/Search/Search";
import { CardStyled } from "@components/layout/organization/Grid/Card/Card"
import { Link } from "react-router-dom"
import { EstrellasPuntos } from '@components/layout/organization/estrellas/estrellasStyles.js'

function Grid() {
    const lastSearch = useContext(SearchedObjectContext);

    const placeholderImage =
    'https://images.unsplash.com/photo-1511285605577-4d62fb50d2f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'

const onImageError = (e) => {
    e.target.src = placeholderImage
}
    return (
        <>
            <pre>

                <div className="container mt-5 overflow-hidden pb-5">
                    <div className="row g-3" >

                        {lastSearch.length !== 0
                            ? Object.entries(lastSearch).map(([key]) =>
                            <div className="col-md-6 col-lg-4 ">
                                <Link to={{
                                    pathname: "/detail:" + lastSearch[key].app_id,
                                }}
                                    onClick={() => localStorage.setItem("clickedItem", JSON.stringify(lastSearch[key]))}
                                >
                                    <CardStyled key={lastSearch[key].app_id}>
                                        <div className="row h-100 align-content-between">
                                            <div className="col col-sm-auto">
                                                <img
                                                    src={lastSearch[key].app_icon ? lastSearch[key].app_icon : placeholderImage}
                                                    alt="logo"
                                                    onError={onImageError}
                                                    style={{height: "101px"}}
                                                    className="img-fluid p-3 rounded-circle card-img-fix"
                                                />
                                            </div>
                                            <div className="col-8 col-sm col-md-7 col-lg">
                                                <CardStyled.Body className="row h-100 align-items-center justify-content-between">
                                                    <div className="col-9 px-0">
                                                        <CardStyled.Title>{lastSearch[key].app_name}</CardStyled.Title>
                                                        <CardStyled.Text>{lastSearch[key].app_category}</CardStyled.Text>
                                                    </div>
                                                    

                                                    <div className="col justify-content-end d-flex h-100">

                                                        <span style={{color: "black"}}>{lastSearch[key].rating}</span>
                                                        <EstrellasPuntos mode="on" ></EstrellasPuntos>
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

export default Grid;
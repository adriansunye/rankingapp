
import { useContext } from "react";
import { SearchedObjectContext } from "@views/Search/Search";
import { CardStyled} from "@components/layout/organization/Grid/Card/Card"
import { Link } from "react-router-dom"

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
                <div className="container mt-5 overflow-auto">
                    <div className="row g-2" >
                        {lastSearch.length !== 0
                            ? Object.entries(lastSearch).map(([key]) =>
                            <div className="col-md-4">
                                <Link to={{
                                    pathname: "/detail:" + lastSearch[key].app_id,
                                }}
                                    onClick={(e) => localStorage.setItem("clickedItem", JSON.stringify(lastSearch[key]))}
                                >
                                    <CardStyled key={lastSearch[key].app_id}>
                                        <div className="row g-0">
                                            <div className="col-2">
                                                <img
                                                    src={lastSearch[key].app_icon ? lastSearch[key].app_icon : placeholderImage}
                                                    alt="logo"
                                                    onError={onImageError}
                                                    className="img-fluid rounded-start"
                                                />
                                            </div>
                                            <div className="col-10">
                                                <CardStyled.Body>
                                                    <h6>{lastSearch[key].app_name}</h6>
                                                    <CardStyled.Text>{lastSearch[key].app_category}</CardStyled.Text>
                                                    <CardStyled.Text>{lastSearch[key].app_rating}</CardStyled.Text>
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
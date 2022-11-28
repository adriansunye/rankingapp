import  {useParams} from "react-router-dom";

function Detail() {
    let {app} = useParams();
    return (
        <>
            <h1>Detail {app}</h1>
            
        </>
    );
};

export default Detail;
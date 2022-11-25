import { Card } from "react-bootstrap";

function Application ({Apps})
{
    return (
        <div>
            <h2> {Apps.app_name}</h2>
            <Card/>
        </div>
    )
}
export default Application;

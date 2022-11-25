import Search from "@components/layout/navigation/Search/Search";
import Apps from "@store/objects/appsEs"
import { useState } from "react";

function Index() {
    const [data, setData] = useState(Apps.data.apps);
    for(const obj of data) {
        obj.opinions = ["me sirve", "una mierda"];
        obj.type = Math.floor(Math.random() * 3)
        ;
    }
    localStorage.setItem("data", JSON.stringify(data))
    return (
        <>
            <Search />
        </>
    );
};

export default Index;

import { useState, useEffect } from "react";
import Apps from "@store/objects/apps"

export function Search() {
    const [searchedObject, setSearchedObject] = useState([]);
    const [searchString, setSearchString] = useState("");
    useEffect(() => {
        if (searchString.length === 0) {
            setSearchedObject(Apps.data.apps)
        } else {
            const searchedObjects = []
            Apps.data.apps.forEach((item, index) => {
                Object.values(item).every((onlyValues, valIndex) => {
                    if (onlyValues.toLowerCase().includes(searchString.toLowerCase())) {
                        return searchedObjects.push(item)
                    }
                })
            })
            setSearchedObject(searchedObjects)
        }
    }, [searchString])
    return (
        <>
            <input
                placeholder='Search...'
                onChange={(e) => setSearchString(e.target.value)}
            />
            <pre>
                {Object.entries(searchedObject).map(([key, value]) =>
                    <div>{searchedObject[key].app_name}</div>
                )}
            </pre>
        </>
    );
};
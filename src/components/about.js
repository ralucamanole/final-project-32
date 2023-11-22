import { useContext, useState } from "react";
import { AppContext } from "../App";

export function About() {
    const { userName, setUserName } = useContext(AppContext);

const changeName = (event) =>{
    setUserName(event.target.value);
}


    

    return (
        <div>
            <p>{userName}</p>
            <input type="text" onChange={changeName} />
        </div>
    );
}
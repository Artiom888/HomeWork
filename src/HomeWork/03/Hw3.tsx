import React, {useState, KeyboardEvent} from "react";
import {v1} from "uuid";


type HomeWork3Type = {
    title: string

}
type NamesType = {
    id: string
    name: string
}

function HomeWork3(props: HomeWork3Type) {

    let [hz, setHz] = useState("")
    let [names, setNames] = useState ([
        {id: v1(), name: "Artiom"},
        {id: v1(), name: "Tania"}
    ]);



    function greetingEnterPressed(e: KeyboardEvent) {
        if (e.key === "Enter") {
            greeting()
        }

    }

    function greeting() {

        if (hz === "") {
            alert("Error");
        } else {
            alert(`Hello!!! ${hz}`);
            addName(hz)
        }

        setHz("");
    }



    function addName(name: string) {
        let newName = {id: v1(), name: name};
        let newNames = [newName, ...names];
        setNames(newNames);

    }



    return (

        <div>
            <div><h2>{props.title}</h2></div>
            <input
                type="text"
                value={hz}
                onChange={(event) => {
                    setHz(event.currentTarget.value)
                }}
                onKeyPress={greetingEnterPressed}

            />
            <button onClick={greeting} >Send
            </button>
            <span>
                count name: {names.length}
            </span>
        </div>
    )

}




export default HomeWork3;
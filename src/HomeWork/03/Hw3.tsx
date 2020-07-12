import React, {useState, KeyboardEvent} from "react";
import {v1} from "uuid";


type HomeWork3Type = {
    title: string

}

function HomeWork3(props: HomeWork3Type) {

    let [hz, setHz] = useState("")
    let [names, setNames] = useState ([
        {id: v1(), name: "Artiom"},
        {id: v1(), name: "Tania"}
    ]);



    function greetingEnterPressed(e: KeyboardEvent) {
        if (e.key === "Enter") {
            alert(`Hello!!! ${hz}`)
            setHz("");
        }

    }

    function reguired() {
        const empt = hz;
        if (empt === "") {
            alert("Error");
        } else {
            alert(`Hello!!! ${hz}`);
        }

        setHz("");
    }



    function addName() {

        let newName = {id: v1(), name: hz};
        let newNames = [newName, ...names];
        setNames(newNames);
        console.log(names.length + 1)
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
            <button onClick={reguired} >l
            </button>
            <span>
                count name: {names.length}
            </span>
        </div>
    )

}




export default HomeWork3;
import React from "react";
import {FilterValuesType, ListsType} from "../../App";


type HomeWork2Type = {
    title: string
    lists: Array<ListsType>
    removeList: (listId: number) => void
    changeFilter: (newFilterValue: FilterValuesType) => void
}

function HomeWork2(props: HomeWork2Type) {


    // const listElements = list.map(list => <div key={list.id}>{list.n} - {list.p}</div>)
    return (
        <div>
            <div><h2>{props.title}</h2></div>
            {props.lists.map((l) => {
                return <li key={l.id}>
                    {l.n} - {l.p}
                    <button onClick={() => { props.removeList(l.id)  }}>x</button>
                </li>
            })}
            <div>
                <button onClick={() => { props.changeFilter("all") }}>All</button>
                <button onClick={() => { props.changeFilter("high") }}>High</button>
                <button onClick={() => { props.changeFilter("middle") }}>Middle</button>
                <button onClick={() => { props.changeFilter("low") }}>Low</button>
            </div>
        </div>
    )
}

export default HomeWork2;
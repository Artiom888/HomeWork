import React, {useState} from 'react';
import "./App.css";
import HomeWork from "./HomeWork/01/Hw";
import HomeWork2 from "./HomeWork/02/Hw2";
import HomeWork3 from "./HomeWork/03/Hw3";



export type ListsType = {
    id: number
    n: string
    p: string
}

export type FilterValuesType = "all" | "low" | "middle" | "high";

function App() {

    let [lists, setLists] = useState <Array<ListsType>>([
        {id: 1, n: "работа", p: "low"},
        {id: 2, n: "аниме", p: "low"},
        {id: 3, n: "игры", p: "middle"},
        {id: 4, n: "реакт", p: "high"},
        {id: 5, n: "хтмл", p: "low"}
    ]);

    let [filter, setFilter] = useState <FilterValuesType>("all")

    function removeList(listId: number) {
        let Filteredlists = lists.filter((l) => l.id !== listId)
        setLists(Filteredlists);
    }

    function changeFilter(newFilterValue: FilterValuesType) {
        setFilter(newFilterValue)
    }

    let listsForHomework2 = lists;
    if(filter === "high") {
        listsForHomework2 = lists.filter(l => l.p === "high")
    }
    if(filter === "middle") {
        listsForHomework2 = lists.filter(l => l.p === "middle")
    }
    if(filter === "low") {
        listsForHomework2 = lists.filter(l => l.p === "low")
    }





    return (
        <div className={"wrapper"}>
            <header>
                <h1>Homework1</h1>
            </header>
            <img src={"https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg"}/>
            <div className={'content'}>
                <HomeWork message={"npm start нажимал?"} name={"Артём"} time={"20:00"}/>
            </div>

            <div className={'list'}>
                <HomeWork2
                    title={"HomeWork2"}
                    lists={listsForHomework2}
                    removeList={removeList}
                    changeFilter={changeFilter}/>
            </div>
            <div>
                <HomeWork3
                    title={"HomeWork3"}

                    />
            </div>
        </div>
    );
}

export default App;
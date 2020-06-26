import React from 'react';
import "./App.css";
import HomeWork from "./HomeWork/Hw";


function App() {

    return (
        <div className={"wrapper"}>
            <header>
                <h1>Homework</h1>
            </header>
            <img src={"https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg"} />
            <div className={'content'}>
                <HomeWork message={"npm start нажимал?"} name={"Артём"} time={"20:00"}/>
            </div>
        </div>
    );
}

export default App;

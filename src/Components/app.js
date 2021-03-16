import React from "react";
import AppTitle from "./Heading/app-title";
import CopyRight from "./Footer/copyright";
import Input from "./Form/input";
import ShowNotes from "./Main-area/show-notes";

function App() {

    var [notes, setNotes] = React.useState([]);
    var [eachNote, setEachNote] = React.useState({
        title: "",
        content: ""
    });

    function handleInput(event) {
        var {value, name} = event.target;
        setEachNote(prevValue => {
            return ({
                ...prevValue,
                [name]: value
            })
        })
    }

    function addNote() {
        setNotes(prevValue => {
            return ([...prevValue, eachNote])
        })
        setEachNote({
            title: "",
            content: ""
        })
    }

    function deleteItem(id) {
        setNotes((prevValue,index) =>{
            return notes.filter(
                (notes, index) => {
                    return index !== id;
                }
            )
        })
    }

    return (
        <div>
            <AppTitle />
            
            <Input 
                changeFunction={handleInput}
                clickFunction={addNote}
                values={eachNote}
            />
            <div className="mainArea">
                {notes.map((element, index) => (
                    <ShowNotes 
                        key={index}
                        id={index}
                        object={element}
                        deleteFunction={deleteItem}
                    />
                ))}
            </div>

            <CopyRight />
        </div>
    )
}

export default App;
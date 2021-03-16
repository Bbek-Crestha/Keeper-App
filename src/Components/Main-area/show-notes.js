import React from "react";

function ShowNotes(props) {
    return (
        <div className="noteCard">
            <h2>{props.object.title}</h2>
            <p>{props.object.content}</p>

            <button className="deleteBtn" onClick={() => {
                props.deleteFunction(props.id)
            }}>Delete</button>
        </div>
    )
}

export default ShowNotes;
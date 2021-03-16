import React from "react";

function Input(props) {
    return (
        <div className="form">
            <input 
                name="title"
                onChange={props.changeFunction} 
                type="text" 
                placeholder="Title" 
                value={props.values.title}
            />
            <textarea 
                name="content" 
                onChange={props.changeFunction} 
                rows="3"
                placeholder="Take a Note..."
                value={props.values.content}
            />
            <button className="btn" onClick={props.clickFunction}>
                <span>Add</span>
            </button>
        </div>
    )
}

export default Input;
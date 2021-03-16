import React from "react";

function CopyRight() {
    var date = new Date();
    
    return (
        <div className="copyRight">
            <p>Copyright {date.getFullYear()}</p>
        </div>
    )
}

export default CopyRight;
import React from "react";
import Heading from "./Header"
import Content from "./Content"
import Footer from "./Footer"

function App() {
    return(
        <div>
            <Heading />
            <div className="mainArea">
                <Content />
            </div>
            <Footer />
        </div>
    );
}

export default App;
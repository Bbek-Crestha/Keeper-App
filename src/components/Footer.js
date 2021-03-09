import React from "react";

function Footer() {
    const date = new Date();
    return (
        <footer>
            <p className="copyRight">Copyright ©️ {date.getFullYear()}</p>
        </footer>
    )
}

export default Footer;
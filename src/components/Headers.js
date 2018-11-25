import React from "react";


const Headers = ({total}) => {
    return (
        <header>
            <h1>LISTE DES MEMBRES</h1>
            <h1 className="total">{total}</h1>
        </header>

    )
};
export default Headers


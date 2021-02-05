import React from "react"

const MyH2 = props => {
    return (
    <h2 style={{ 
        color: "#2b4d97",
        marginBottom: "1.25rem", 
        }}>
        {props.children}
    </h2>
    )
}

const MyH3 = props => {
    return (
    <h3 style={{ 
        color: "#2b4d97",
        marginBottom: "1.25rem",  
        }}>
        {props.children}
    </h3>
    )
}

export { MyH2, MyH3}
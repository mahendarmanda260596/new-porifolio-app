import React from "react"

// Body Component 
const Body = () => {
    return (
        <div className="body-container">
            <div className="ui-card">
                <h1 className="ui-name">Ui & UX Designer</h1>
                <h1 className="ui-person">Hello My Name Is Name is Modyln Torft</h1>
                <p className="ui-description">Short Text with deals about you carrer. you can add more information on this page</p>
                <div className="ui-button">
                    <button className="normal-button">Projects</button>
                    <button className="ouline-button">Linked In</button>

                </div>

            </div>

            <div className="show-image">
                <img src="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034135.jpg"
                    alt="show"
                    className="show-image" />

            </div>
        </div>
    )
}

export default Body
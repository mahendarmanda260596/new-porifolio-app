import React from "react"
// AddProject component 
const AddProject = () => {


    return (
        <div className='Add-project-container'>
            <div className='Add-project'>
                <h1 className='add-heading'>Add Project</h1>
                <div className='input-item'>
                    <div className='input-box'>
                        <p className='para'>Project Name :-</p>

                        <input type="text" className='add-text' />
                    </div>

                    <div className='input-box'>
                        <p className='para'>Project Link :-</p>

                        <input type="text" className='add-text' />
                    </div>

                    <div className='input-box'>
                        <p className='para'>Project Description :-</p>

                        <input className="textArea" type="textarea" id=" w3review" rows="10" cols="50" />
                    </div>
                    <button className="normal-button">Add</button>
                </div>

            </div>
        </div>
    )
}

export default AddProject
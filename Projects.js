import React from "react"

const Projects = () => {

    return (
        <div>
            <h1 className="add-heading">Projects
            </h1>
            <div className='project-container'>

                <div class="project-card-container">
                    <div className='card'>
                        <div className='card-data'>
                            <h1 className='Project-name'>Project Name</h1>
                            <p className='project-text'>I Created this personal project in order to show how to create an interface Figma using a portfolio as an example

                            </p>
                            <button className='project-button'>View Project</button>

                        </div>
                        <div >
                            <img className='image' src="https://img.freepik.com/premium-photo/cartoon-character-is-sitting-mat-room-with-red-cat-wall_901003-38465.jpg" alt="img" />

                        </div>

                    </div>

                    <div className='card'>
                        <div >
                            <img className='image' src="https://img.freepik.com/premium-photo/glasses-near-smartphone-generative-ai_881377-2996.jpg" alt="logo" />
                        </div>
                        <div className='card-data'>
                            <h1 className='Project-name'>Project Name</h1>
                            <p className='project-text'>I Created this personal project in order to show how to create an interface Figma using a portfolio as an example

                            </p>
                            <button className='project-button'>View Project</button>

                        </div>


                    </div>



                    <div className='card'>
                        <div className='card-data'>
                            <h1 className='Project-name'>Project Name</h1>
                            <p className='project-text'>I Created this personal project in order to show how to create an interface Figma using a portfolio as an example

                            </p>
                            <button className='project-button'>View Project</button>

                        </div>
                        <div >
                            <img className='image' src="https://img.freepik.com/free-photo/3d-rendering-pen-with-notebook_23-2150851396.jpg" alt="img" />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Projects
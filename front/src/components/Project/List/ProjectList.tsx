function ProjectList() {
    return (
        <div className="container-fluid">
            <div className="row row-cols-1">
                <div
                    className=" col bg-white border border-dark d-flex flex-row align-items-center justify-content-between align-content-center p-1 p-md-2 p-lg-4 my-2">
                    <div className="container-fluid">
                        <div className="row row-cols-3 d-flex justify-content-between mt-2">
                            <div className="col d-flex flex-column  mb-4">
                                <h1 className="project-title align-self-start m-0">
                                    <b>Project</b>
                                </h1>
                                <a className="font-link align-self-start link-dark">project data name</a>
                            </div>
                            <div className="col d-flex flex-column  mb-4">
                                <a className="font-link align-self-center">Github</a>
                            </div>
                            <div className="col d-flex flex-column  mb-4">
                                <h1 className="project-title align-self-center m-0">
                                    <b>Last PR</b>
                                </h1>
                                <p className="font-text align-self-end m-0">
                                    Last pr name
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectList;
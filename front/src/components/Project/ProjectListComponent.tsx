import styles from "./ProjectCard.module.scss";
import {ProjectType} from "./ProjectListComponentTypes";

interface ProjectListComponentProps {
    projects: ProjectType[];
}

function ProjectListComponent({projects}: ProjectListComponentProps) {
    return (
        <>
            {projects.map((Project: ProjectType) => (
                <div key={Project.id} className="col">
                    <div className={`card h-100 ${styles.card}`}>
                        <div
                            className={`card-body d-flex flex-column justify-content-between ${styles["card-body"]}`}
                        >
                            <h5
                                className={`card-title text-white ${styles["card-title"]}`}
                            >
                                {Project.name}
                            </h5>
                            <h6
                                className={`card-subtitle mb-2 text-white ${styles["card-subtitle"]}`}
                            >
                                Last PR:{" "}
                                {Project.lastPR
                                    ? Project.lastPR
                                    : "Pas de PR pour ce projet."}
                            </h6>
                            <a
                                href="#"
                                className={`btn btn-primary ${styles.btn}`}
                            >
                                Project Detail
                            </a>
                            <a
                                href={Project.githubLink}
                                target={"_blank"}
                                className={`btn btn-primary ${styles.btn}`}
                            >
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ProjectListComponent;

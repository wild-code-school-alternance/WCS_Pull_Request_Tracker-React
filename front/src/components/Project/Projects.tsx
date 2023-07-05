import { useState, useEffect } from 'react';
import styles from './ProjectCard.module.scss';
import {ProjectType} from './ProjectTypes';

function Projects() {
    const [projects, setProjects] = useState<ProjectType[]>([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await fetch('http://localhost:8000/project');
            if (!response.ok) {
                throw new Error('OOPS something wrong!')
            }
            const data: ProjectType[] = await response.json();
            setProjects(data);
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <div className={`${styles['main-container-fluid']} container-fluid`}>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {projects.map((Project: ProjectType) => (
                    <div key={Project.id} className="col">
                        <div className={`card h-100 ${styles.card}`}>
                            <div className={`card-body d-flex flex-column justify-content-between ${styles['card-body']}`}>
                                <h5 className={`card-title text-white ${styles['card-title']}`}>{Project.name}</h5>
                                <h6 className={`card-subtitle mb-2 text-white ${styles['card-subtitle']}`}>Last PR: {Project.lastPR ? Project.lastPR : 'Pas de PR pour ce projet.'}</h6>
                                <a href="#" className={`btn btn-primary ${styles.btn}`}>Project Detail </a>
                                <a href={Project.githubLink} target={'_blank'} className={`btn btn-primary ${styles.btn}`}> Github</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;

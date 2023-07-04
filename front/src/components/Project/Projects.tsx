import { useState, useEffect } from 'react';
import styles from './ProjectCard.module.scss';

interface Project {
    id: number;
    name: string;
    githubLink: string;
    lastPR: string;
}

function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await fetch('http://localhost:8000/project');
            if (!response.ok) {
                throw new Error('OOPS something wrong!')
            }
            const data: Project[] = await response.json();
            setProjects(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={`${styles['main-container-fluid']} container-fluid`}>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {projects.map((project) => (
                    <div key={project.id} className="col">
                        <div className={`card h-100 ${styles.card}`}>
                            <div className={`card-body d-flex flex-column justify-content-between ${styles['card-body']}`}>
                                <h5 className={`card-title text-white ${styles['card-title']}`}>{project.name}</h5>
                                <h6 className={`card-subtitle mb-2 text-white ${styles['card-subtitle']}`}>Last PR: {project.lastPR ? project.lastPR : 'Pas de PR pour ce projet.'}</h6>
                                <a href="#" className={`btn btn-primary ${styles.btn}`}>Project Detail </a>
                                <a href={project.githubLink} target={'_blank'} className={`btn btn-primary ${styles.btn}`}> Github</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;

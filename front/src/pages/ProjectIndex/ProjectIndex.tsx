import {useState, useEffect} from "react";
import ProjectListComponent from "../../components/Project/ProjectListComponent";
import {ProjectType} from "../../components/Project/ProjectListComponentTypes";

function ProjectIndex() {
    const [projects, setProjects] = useState<ProjectType[]>([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await fetch('http://localhost:8000/project');
            if (!response.ok) {
                throw new Error('OOPS something wrong!');
            }
            const data: ProjectType[] = await response.json();
            setProjects(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={`container-fluid`}>
            <div className="row row-cols-1 row-cols-lg-2">
                <ProjectListComponent projects={projects}/>
            </div>
        </div>
    );
}

export default ProjectIndex;

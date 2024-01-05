import './index.css'

const ProjectItem = props => {
  const {projectDetails} = props
  const {
    projectName,
    projectLink,
    projectDescription,
    imageUrl,
  } = projectDetails

  return (
    <li className="list-item">
      <div>
        <h2>{projectName}</h2>
        <p className="description">{projectDescription}</p>
        <button type="button" className="project-btn">
          <a href={projectLink} target="_blank" rel="noreferrer">
            View Project
          </a>
        </button>
      </div>
      <div>
        <img src={imageUrl} alt="logo" className="project-image" />
      </div>
    </li>
  )
}

export default ProjectItem

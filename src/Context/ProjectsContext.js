import {createContext} from 'react'

const ProjectsContext = createContext({
  projectList: [],
  AddProject: () => {},
})

export default ProjectsContext

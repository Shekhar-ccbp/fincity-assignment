import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Contact from '../Contact'
import ProjectItem from '../ProjectItem'
import './index.css'

const initialProjectsList = []

class Projects extends Component {
  state = {
    projectName: '',
    projectLink: '',
    projectDescription: '',
    projectList: [
      {
        id: '1',
        imageUrl:
          'https://res.cloudinary.com/djbs4yqbz/image/upload/v1704416083/NxtTrends_Image_fxww6f.png',
        projectName: 'NxtTrends',
        projectLink: 'https://shekarnxttrendz.ccbp.tech/products',
        projectDescription:
          'Implemented Nxt Trendz application which is a clone for ECommerce applications ' +
          'like Amazon, Flipkart where users can login and can see a list of products with ' +
          'search, filters, sort by, etc..',
      },
      {
        id: '2',
        imageUrl:
          'https://res.cloudinary.com/dzt6qmhmq/image/upload/v1704439300/Screenshot_2024-01-05_124957_pk7pdh.png',
        projectName: 'Todo Application',
        projectLink: 'https://shekhartodoapp.ccbp.tech/',
        projectDescription:
          'Developed persistent todo application with CRUD operations to the tracklist of tasks',
      },
      {
        id: '3',
        imageUrl:
          'https://res.cloudinary.com/dzt6qmhmq/image/upload/v1704439471/Screenshot_2024-01-05_125311_r68x8a.png',
        projectName: 'Food Munch',
        projectLink: 'https://shekharfoodapp.ccbp.tech/',
        projectDescription:
          'Developed a responsive website for Food Store where users can see a list of food items, detailed information about a food item, offers',
      },
    ],
  }

  onChangeName = event => {
    this.setState({projectName: event.target.value})
  }

  onChangeUrl = event => {
    this.setState({projectLink: event.target.value})
  }

  onChangeDescription = event => {
    this.setState({projectDescription: event.target.value})
  }

  onAddProject = event => {
    event.preventDefault()

    const {projectName, projectLink, projectDescription} = this.state

    const newProject = {
      id: uuidv4(),
      projectName,
      projectLink,
      projectDescription,
      imageUrl:
        'https://res.cloudinary.com/djbs4yqbz/image/upload/v1704420554/projects_image_zvixpf.jpg',
    }

    this.setState(prevState => ({
      projectList: [...prevState.projectList, newProject],
      projectName: '',
      projectLink: '',
      projectDescription: '',
    }))
  }

  render() {
    const {
      projectName,
      projectLink,
      projectDescription,
      projectList,
    } = this.state
    return (
      <div className="add-project-container">
        <h1 className="add-project-heading">Add Project</h1>
        <hr className="hr-line" />
        <form className="form-container" onSubmit={this.onAddProject}>
          <div>
            <label htmlFor="projectName" className="input-label">
              Project Name
            </label>
            <br />
            <input
              type="text"
              value={projectName}
              id="projectName"
              className="input-field"
              onChange={this.onChangeName}
            />
          </div>
          <div>
            <label htmlFor="projectLink" className="input-label">
              Project Link
            </label>
            <br />
            <input
              type="url"
              value={projectLink}
              id="projectLink"
              className="input-field"
              onChange={this.onChangeUrl}
            />
          </div>
          <div>
            <label htmlFor="description" className="input-label">
              Description
            </label>
            <br />
            <textarea
              id="description"
              value={projectDescription}
              className="description-field"
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="add-btn">
            <button type="submit" className="btn">
              Add
            </button>
          </div>
        </form>
        <div className="vector-image">
          <img
            src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1704413921/assignment_vector_hudkqt.png"
            alt="assignment"
            className="vector-logo"
          />
        </div>
        <div>
          <div className="projects-container">
            <h1>Projects</h1>
            <hr className="projects-line" />
            <div>
              <ul className="sampleList-ul">
                {initialProjectsList.map(each => (
                  <ProjectItem projectDetails={each} key={each.id} />
                ))}
              </ul>
            </div>
            <div>
              <ul className="sampleList-ul">
                {projectList.map(each => (
                  <ProjectItem projectDetails={each} key={each.id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    )
  }
}

export default Projects

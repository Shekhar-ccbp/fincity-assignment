import {Link} from 'react-router-dom'

const About = () => (
  <div className="bg-container">
    <div className="about-card">
      <p>UI/UX Designer</p>
      <h1>Hello, my name is Madelyn Torff</h1>
      <p>
        Short text with details about you, what you do or your professional
        career. You can add more information on the about page.
      </p>
      <div className="about-btn-container">
        <Link to="/Projects">
          <button type="button">Projects</button>
        </Link>
        <button type="button">LinkedIn</button>
      </div>
    </div>

    <div>
      <img
        src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1704377278/image_cl7kdh.png"
        alt="about-img"
        className="about-img"
      />
    </div>
  </div>
)

export default About

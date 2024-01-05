import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectsContext from './Context/ProjectsContext'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <ProjectsContext.Provider>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/not-found" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </ProjectsContext.Provider>
)

export default App

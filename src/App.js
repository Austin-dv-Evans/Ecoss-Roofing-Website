import '../src/Sass/App.scss'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'
import HomePage from './screens/Homepage'
import AboutPage from './screens/AboutPage'
import Projects from './screens/Projects'
import QuotePage from './screens/QuotePage'

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
            <Footer />
          </Route>
          <Route path="/services" exact>
            <AboutPage />
            <Footer2 />
          </Route>
          <Route path="/projects" exact>
            <Projects />
            <Footer2 />
          </Route>
          <Route path="/quote" exact>
            <QuotePage />
            <Footer2 />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;

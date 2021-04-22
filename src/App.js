import '../src/Sass/App.scss'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'
import HomePage from './screens/Homepage'
import AboutPage from './screens/AboutPage'
import QuotePage from './screens/QuotePage'

import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import SwipeSlide from './components/SwipeSlide'


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
            <SwipeSlide />
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

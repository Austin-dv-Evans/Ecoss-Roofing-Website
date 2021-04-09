import '../src/Sass/App.scss'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './screens/Homepage'
import AboutPage from './screens/AboutPage'
import Projects from './screens/Projects'
import QuotePage from './screens/QuotePage'


function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <HomePage/>
          </Route>
          <Route path='/services' exact>
            <AboutPage/>
          </Route>
          <Route path='/projects' exact>
            <Projects/>
          </Route>
          <Route path='/quote' exact>
            <QuotePage/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

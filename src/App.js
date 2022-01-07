import './App.css';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home/Home';
import AllCourses from './components/Home/OnlineCourse/AllCourses/AllCourses';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navigation from './components/Shared/Navigation/Navigation';
import CourseDetails from './components/CourseDetails/CourseDetails';
import EventDetails from './components/Home/Event/EventDetails/EventDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/courses'>
            <AllCourses />
          </Route>
          <Route path='/course/:id'>
            <CourseDetails />
          </Route>
          <Route path='/event/:id'>
            <EventDetails />
          </Route>
          <Route path='/blogs'>
            <Blogs />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

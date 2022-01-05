import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home/Home';
import AllCourses from './components/Home/OnlineCourse/AllCourses/AllCourses';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navigation from './components/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/courses'>
            <AllCourses/>
          </Route>
          <Route path='/blogs'>
            <Blogs/>
          </Route>
          <Route path='/about'>
           <About/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

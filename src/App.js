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
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/courses' component={AllCourses} />
            <Route path='/blogs' component={Blogs} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <PrivateRoute path='/course/:id' component={CourseDetails} />
            <PrivateRoute path='/event/:id' component={EventDetails} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <PrivateRoute path='/login' component={Login} />
            <PrivateRoute path='/signup' component={Signup} />
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

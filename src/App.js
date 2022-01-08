import './App.css';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import CourseDetails from './components/CourseDetails/CourseDetails';
import EventDetails from './components/Home/Event/EventDetails/EventDetails';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCourses } from './Redux/slices/courseSlice';
import Reviews from './components/Reviews/Reviews';
import AllCoursesSingle from './components/AllCoursesSingle/AllCoursesSingle';

function App() {

  // redux disptach hook here 
  const dispatch = useDispatch();

  // calling redux thunk to get data here 
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch])

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/courses' component={AllCoursesSingle} />
            <Route path='/blogs' component={Blogs} />
            <Route path='/reviews' component={Reviews} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <PrivateRoute path='/course/:id'> <CourseDetails /> </PrivateRoute>
            <PrivateRoute path='/event/:id'> <EventDetails /> </PrivateRoute>
            <PrivateRoute path='/dashboard'> <Dashboard /> </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

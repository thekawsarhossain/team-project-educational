
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

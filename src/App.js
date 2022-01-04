
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route  path='/'>
          <Home/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;

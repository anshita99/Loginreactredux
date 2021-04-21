
import { Route, Switch } from 'react-router';
import './App.css';
import Form from './components/Form';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Dashboard';

function App() {
  return (
    <div className="App">




      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/dashboard" component={Welcome} />




      </Switch>
    </div>
  );
}

export default App;

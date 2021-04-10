import './App.css';
import Login from './Components/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard'
import { Switch,Route } from 'react-router';
function App() {
  return (
  <>
  <Switch>
      <Route exact path="/" component={Login}   />
      <Route exact path="/Dashboard" component={Dashboard}   />
    </Switch>

  </>
  );
}

export default App;

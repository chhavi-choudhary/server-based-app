import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from './Component/Users';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path='/' component={Users}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;

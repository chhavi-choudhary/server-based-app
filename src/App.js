import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from './Component/Users';
import New from './Component/New';
import Edit from './Component/Edit';
import Navbar from './Component/Navbar';
import AddUser from './Component/AddUser';
import { GlobalProvider } from "./context/GlobalState";
import NewUserlist from './Component/NewUserlist';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Users} />
            <Route path='/new' component={New} />
            <Route path='/edit' component={Edit} />
            <Route path='/add' component={AddUser} />
            <Route path='/newuser' component={NewUserlist} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;

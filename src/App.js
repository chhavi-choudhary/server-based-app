import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from './Component/Users';
import New from './Component/New';
import Edit from './Component/Edit';
import Navbar from './Component/Navbar';
import AddUser from './Component/AddUser';

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Switch>
         <Route exact path='/' component={Users}/>
         <Route path='/new' component={New}/>
         <Route path='/edit' component={Edit}/>
         <Route path='/add' component={AddUser}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;

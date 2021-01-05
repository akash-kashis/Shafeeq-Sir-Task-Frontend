import './App.css';
import { Route,BrowserRouter,Switch } from "react-router-dom";
import Headers from '../src/components/Header/Headers'
import Map from '../src/components/Maps/Map'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Switch>
          <Route exact path="/headers" component={Headers}/>
          <Route exact path="/" component={Map}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
